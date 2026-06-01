import { ResolveResponse } from "@/types";

export function isTikTok(url: string) {
  return /^(https?:\/\/)?(www\.|vm\.|vt\.)?tiktok\.com/.test(url);
}

export async function parseTikTok(url: string): Promise<ResolveResponse> {
  let videoId = "";
  const match = url.match(/video\/(\d+)/);
  if (match) {
    videoId = match[1];
  }

  try {
    const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`);
    if (res.ok) {
      const data = await res.json();
      
      const embedId = data.embed_product_id || videoId;
      const embedUrl = `https://www.tiktok.com/embed/v2/${embedId}`;

      return {
        success: true,
        platform: 'tiktok',
        type: 'video',
        id: embedId || undefined,
        title: data.title,
        artist: data.author_name,
        thumbnail: data.thumbnail_url,
        embedUrl
      };
    }
  } catch (e) {
  }
  
  if (!videoId) {
    // Return basic fallback if we can't extract videoId and fetch failed
    return {
       success: true,
       platform: 'tiktok',
       embedUrl: url
    }
  }
  
  return {
    success: true,
    platform: 'tiktok',
    type: 'video',
    id: videoId,
    embedUrl: `https://www.tiktok.com/embed/v2/${videoId}`
  };
}
