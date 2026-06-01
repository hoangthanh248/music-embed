import { NextRequest, NextResponse } from "next/server";
import { resolveUrl } from "@/lib/parsers";
import { getCache, setCache } from "@/lib/cache";
import { checkRateLimit } from "@/lib/rate-limit";
import { OEmbedResponse } from "@/types";



export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";
  
  const rateLimitRes = await checkRateLimit(ip);
  if (!rateLimitRes.success) {
    return NextResponse.json({ success: false, message: rateLimitRes.message }, { status: 429 });
  }

  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ success: false, message: "Missing url parameter" }, { status: 400 });
  }

  try {
    const cacheKey = `oembed:${url}`;
    const cached = await getCache<OEmbedResponse>(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    const data = await resolveUrl(url);

    const platformNames: Record<string, string> = {
      spotify: "Spotify",
      apple: "Apple Music",
      soundcloud: "SoundCloud",
      deezer: "Deezer",
      youtube: "YouTube",
      amazon: "Amazon Music",
      tiktok: "TikTok"
    };

    const providerName = data.platform ? platformNames[data.platform] : "Music";
    const providerUrl = data.platform === 'spotify' ? 'https://spotify.com' :
                        data.platform === 'apple' ? 'https://music.apple.com' :
                        data.platform === 'soundcloud' ? 'https://soundcloud.com' :
                        data.platform === 'deezer' ? 'https://deezer.com' :
                        data.platform === 'youtube' ? 'https://youtube.com' :
                        data.platform === 'amazon' ? 'https://music.amazon.com' :
                        data.platform === 'tiktok' ? 'https://tiktok.com' : 'https://example.com';

    let width = 100;
    let height = 152;
    if (data.platform === 'apple') { width = 100; height = 150; }
    if (data.platform === 'soundcloud') { width = 100; height = 166; }
    if (data.platform === 'deezer') { width = 100; height = 152; }
    if (data.platform === 'youtube') { width = 100; height = 315; }
    if (data.platform === 'tiktok') { width = 325; height = 705; }
    if (data.platform === 'amazon') { width = 100; height = 150; }

    const oembed: OEmbedResponse = {
      version: "1.0",
      type: "rich",
      provider_name: providerName,
      provider_url: providerUrl,
      title: data.title || "Music Track",
      author_name: data.artist || "Unknown Artist",
      thumbnail_url: data.thumbnail,
      html: `<iframe src="${data.embedUrl}" width="100%" height="${height}" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
      width,
      height
    };

    await setCache(cacheKey, oembed, 86400);

    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");
    return NextResponse.json(oembed, { headers });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message || "Internal Error" }, { status: 400 });
  }
}

export async function OPTIONS() {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  return new NextResponse(null, { status: 204, headers });
}
