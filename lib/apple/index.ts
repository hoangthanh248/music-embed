import { ResolveResponse } from "@/types";

export function isAppleMusic(url: string) {
  return /^(https?:\/\/)?music\.apple\.com/.test(url);
}

export async function parseAppleMusic(url: string, rawUrl: URL): Promise<ResolveResponse> {
  const match = rawUrl.pathname.match(/\/([a-zA-Z]{2})\/(album|playlist|artist|song|music-video)\/(.+)\/([0-9]+)/) ||
                rawUrl.pathname.match(/\/([a-zA-Z]{2})\/(album|playlist|artist|song|music-video)\/([0-9]+)/);
                
  if (!match) {
    throw new Error("Invalid Apple Music URL format");
  }

  const type = match[2];
  const stringIdOrNumber = match[3];
  
  // Apple Music embed url is simply changing music.apple.com to embed.music.apple.com
  const embedUrl = url.replace("music.apple.com", "embed.music.apple.com");
  
  let title, thumbnail;

  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'bot' } });
    if (res.ok) {
        const text = await res.text();
        const ogTitleMatch = text.match(/<meta property="og:title" content="([^"]+)">/i);
        const ogImageMatch = text.match(/<meta property="og:image" content="([^"]+)">/i);
        
        if (ogTitleMatch) title = ogTitleMatch[1];
        if (ogImageMatch) thumbnail = ogImageMatch[1];
    }
  } catch (e) {
    // ignore
  }

  return {
    success: true,
    platform: 'apple',
    type,
    id: rawUrl.searchParams.get('i') || stringIdOrNumber,
    title,
    thumbnail,
    embedUrl
  };
}
