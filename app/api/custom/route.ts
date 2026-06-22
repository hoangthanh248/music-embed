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
  const size = req.nextUrl.searchParams.get("size") || "auto";
  const style = req.nextUrl.searchParams.get("style") || "default";

  if (!url) {
    return new NextResponse("Missing url parameter", { status: 400 });
  }

  try {
    const cacheKey = `custom:${url}:${size}:${style}`;
    const cached = await getCache<string>(cacheKey);
    if (cached) {
      return new NextResponse(cached, { headers: { "Content-Type": "text/html", "Access-Control-Allow-Origin": "*" } });
    }

    const data = await resolveUrl(url);
    
    let borderRadius = "0px";
    if (style === "rounded") borderRadius = "16px";
    if (style === "circle") borderRadius = "50%";
    if (style === "pill") borderRadius = "9999px";

    const width = size === "auto" ? "100%" : `${size}px`;
    const height = size === "auto" ? "100%" : `${size}px`;

    const customCss = `
      body, html { 
        margin: 0; padding: 0; 
        width: 100%; height: 100%; 
        overflow: hidden; 
        background: transparent; 
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .embed-container {
        width: ${width}; 
        height: ${height}; 
        border-radius: ${borderRadius};
        overflow: hidden;
        position: relative;
        background: transparent;
      }
      iframe { 
        width: 100%; 
        height: 100%; 
        border: none; 
      }
    `;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="referrer" content="no-referrer">
  <title>${data.title || 'Custom Media Player'}</title>
  <style>${customCss}</style>
</head>
<body>
  <div class="embed-container">
    <iframe src="${data.embedUrl}" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
  </div>
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
