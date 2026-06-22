import { NextRequest, NextResponse } from "next/server";
import { resolveUrl } from "@/lib/parsers";
import { getCache, setCache } from "@/lib/cache";
import { checkRateLimit } from "@/lib/rate-limit";
import { z } from "zod";



const bodySchema = z.object({
  url: z.string().url()
});

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";
  
  const rateLimitRes = await checkRateLimit(ip);
  if (!rateLimitRes.success) {
    return NextResponse.json({ success: false, message: rateLimitRes.message }, { status: 429 });
  }

  try {
    const body = await req.json();
    const { url } = bodySchema.parse(body);

    const cacheKey = `resolve:${url}`;
    const cached = await getCache<any>(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    const data = await resolveUrl(url);
    await setCache(cacheKey, data, 86400);

    // Apply CORS Headers
    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");
    
    return NextResponse.json(data, { headers });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message || "Internal Error" }, { status: 400 });
  }
}

export async function OPTIONS(req: NextRequest) {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  return new NextResponse(null, { status: 204, headers });
}
