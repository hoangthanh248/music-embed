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
    const cacheKey = `stream:${url}`;
    const cached = await getCache<string>(cacheKey);
    if (cached) {
      return new NextResponse(cached, { headers: { "Content-Type": "text/html", "Access-Control-Allow-Origin": "*" } });
    }

    const data = await resolveUrl(url);
    
    // Custom HTML wrapper with no-referrer for privacy
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="referrer" content="no-referrer">
  <title>${data.title || 'Media Player'}</title>
  <style>
    body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: transparent; }
    iframe { width: 100%; height: 100%; border: none; }
  </style>
</head>
<body>
  <iframe src="${data.embedUrl}" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
</body>
</html>`;

    await setCache(cacheKey, html, 86400);

    return new NextResponse(html, { headers: { "Content-Type": "text/html", "Access-Control-Allow-Origin": "*" } });
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
