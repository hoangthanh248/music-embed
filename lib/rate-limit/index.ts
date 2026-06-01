import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let ratelimit: Ratelimit | null = null;
const memoryHits = new Map<string, { count: number, resetTime: number }>();

try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    ratelimit = new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(100, "1 h"),
      analytics: true,
      prefix: "@upstash/ratelimit",
    });
  }
} catch (error) {
  console.warn("Ratelimit init failed, using fallback");
}

export async function checkRateLimit(ip: string): Promise<{ success: boolean; message?: string }> {
  if (ratelimit) {
    const res = await ratelimit.limit(ip);
    if (!res.success) {
      return { success: false, message: "Rate limit exceeded" };
    }
    return { success: true };
  }

  // Memory fallback
  const now = Date.now();
  let record = memoryHits.get(ip);
  if (!record || now > record.resetTime) {
    record = { count: 0, resetTime: now + 3600 * 1000 };
  }
  
  if (record.count >= 100) {
    return { success: false, message: "Rate limit exceeded" };
  }
  
  record.count++;
  memoryHits.set(ip, record);
  return { success: true };
}
