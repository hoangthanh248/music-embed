import { NextRequest, NextResponse } from "next/server";
import { resolveUrl } from "@/lib/parsers";
import { getCache, setCache } from "@/lib/cache";
import { checkRateLimit } from "@/lib/rate-limit";
import { OpenGraphResponse } from "@/types";



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
    const cacheKey = `og:${url}`;
    const cached = await getCache<OpenGraphResponse>(cacheKey);
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

    const og: OpenGraphResponse = {
      title: data.title || "Music Track",
      description: data.artist ? `By ${data.artist}` : "Listen to this track on " + (data.platform ? platformNames[data.platform] : "Music Platform"),
      image: data.thumbnail,
      siteName: data.platform ? platformNames[data.platform] : "Music",
      type: "music.song" // Or music.album, music.playlist depending on the data type
    };

    if (data.type === 'album') og.type = 'music.album';
    if (data.type === 'playlist') og.type = 'music.playlist';
    if (data.type === 'video') og.type = 'video.other';

    await setCache(cacheKey, og, 86400);

    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");
    return NextResponse.json(og, { headers });
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
