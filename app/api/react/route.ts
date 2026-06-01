import { NextRequest, NextResponse } from "next/server";
import { resolveUrl } from "@/lib/parsers";
import { getCache, setCache } from "@/lib/cache";
import { checkRateLimit } from "@/lib/rate-limit";



export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";
  
  const rateLimitRes = await checkRateLimit(ip);
  if (!rateLimitRes.success) {
    return new NextResponse("Rate limit exceeded", { status: 429 });
  }

  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return new NextResponse("Missing url parameter", { status: 400 });
  }

  try {
    const cacheKey = `embed_react:${url}`;
    const cached = await getCache<string>(cacheKey);
    if (cached) {
      return new NextResponse(cached, { headers: { "Content-Type": "text/plain", "Access-Control-Allow-Origin": "*" } });
    }

    const data = await resolveUrl(url);
    
    let height = 152;
    if (data.platform === 'apple') { height = 150; }
    if (data.platform === 'soundcloud') { height = 166; }
    if (data.platform === 'youtube') { height = 315; }
    if (data.platform === 'tiktok') { height = 705; }
    if (data.platform === 'amazon') { height = 150; }
    
    const componentCode = `export default function MusicEmbed() {
  return (
    <iframe 
      src="${data.embedUrl}" 
      width="100%" 
      height={${height}} 
      style={{ border: 0 }}
      allowFullScreen 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
}`;

    await setCache(cacheKey, componentCode, 86400);

    return new NextResponse(componentCode, { headers: { "Content-Type": "text/plain", "Access-Control-Allow-Origin": "*" } });
  } catch (error: any) {
    return new NextResponse(error.message || "Internal Error", { status: 400 });
  }
}

export async function OPTIONS() {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  return new NextResponse(null, { status: 204, headers });
}
