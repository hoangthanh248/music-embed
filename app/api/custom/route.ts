import { NextRequest, NextResponse } from "next/server";
import { resolveUrl } from "@/lib/parsers";
import { getCache, setCache } from "@/lib/cache";
import { checkRateLimit } from "@/lib/rate-limit";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";
  
  const rateLimitRes = await checkRateLimit(ip);
  if (!rateLimitRes.success) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  const width = req.nextUrl.searchParams.get("width") || req.nextUrl.searchParams.get("size") || "100%";
  const heightParams = req.nextUrl.searchParams.get("height");
  const borderRadius = req.nextUrl.searchParams.get("borderRadius") || req.nextUrl.searchParams.get("style") || "12px";
  const theme = req.nextUrl.searchParams.get("theme") || "default";

  try {
    const cacheKey = `custom_html_json:${url}:${width}:${heightParams}:${borderRadius}:${theme}`;
    const cached = await getCache<any>(cacheKey);
    if (cached) {
      return NextResponse.json(cached, { headers: { "Access-Control-Allow-Origin": "*" } });
    }

    const data = await resolveUrl(url);
    
    let height = heightParams;
    if (!height) {
      if (data.platform === 'apple') { height = "150"; }
      else if (data.platform === 'soundcloud') { height = "166"; }
      else if (data.platform === 'youtube') { height = "315"; }
      else if (data.platform === 'tiktok') { height = "705"; }
      else if (data.platform === 'amazon') { height = "150"; }
      else { height = "152"; }
    }
    
    let finalEmbedUrl = data.embedUrl || '';
    if (finalEmbedUrl && theme !== 'default') {
      const embedUrlObj = new URL(finalEmbedUrl);
      embedUrlObj.searchParams.set('theme', theme);
      finalEmbedUrl = embedUrlObj.toString();
    }

    const html = `<iframe src="${finalEmbedUrl}" width="${width}" height="${height}" style="border-radius: ${borderRadius};" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    
    const react = `export default function MusicEmbed() {
  return (
    <iframe 
      src="${finalEmbedUrl}" 
      width="${width}" 
      height="${height}" 
      style={{ border: 0, borderRadius: '${borderRadius}' }}
      allowFullScreen 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
}`;

    const responseData = {
      success: true,
      url: finalEmbedUrl,
      html,
      react,
      platform: data.platform
    };

    await setCache(cacheKey, responseData, 86400);

    return NextResponse.json(responseData, { headers: { "Access-Control-Allow-Origin": "*" } });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Error" }, { status: 400 });
  }
}

export async function OPTIONS(req: NextRequest) {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  return new NextResponse(null, { status: 204, headers });
}
