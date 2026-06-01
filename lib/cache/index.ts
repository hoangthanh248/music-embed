import { Redis } from '@upstash/redis';

// Use environment variables or in-memory fallback if not available
// This ensures edge compatibility even if Upstash is not configured.
let redisClient: Redis | null = null;
const memoryCache = new Map<string, { data: string, expiry: number }>();

try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    redisClient = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
  }
} catch (error) {
  console.warn("Failed to initialize Upstash Redis, falling back to memory cache", error);
}

export async function getCache<T>(key: string): Promise<T | null> {
  if (redisClient) {
    try {
      return await redisClient.get<T>(key);
    } catch {
      return null;
    }
  }
  
  const hit = memoryCache.get(key);
  if (hit) {
    if (Date.now() > hit.expiry) {
      memoryCache.delete(key);
      return null;
    }
    return JSON.parse(hit.data) as T;
  }
  return null;
}

export async function setCache(key: string, value: any, ttlSeconds: number = 86400): Promise<void> {
  if (redisClient) {
    try {
      await redisClient.set(key, value, { ex: ttlSeconds });
      return;
    } catch {
      // ignore
    }
  }

  memoryCache.set(key, { data: JSON.stringify(value), expiry: Date.now() + ttlSeconds * 1000 });
}
