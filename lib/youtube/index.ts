import { ResolveResponse } from "@/types";

export function isYouTube(url: string) {
  return /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)/.test(url);
}

export async function parseYouTube(url: string, rawUrl: URL): Promise<ResolveResponse> {
  let videoId: string | null = null;

  if (rawUrl.hostname === 'youtu.be') {
    videoId = rawUrl.pathname.slice(1);
  } else if (rawUrl.pathname.startsWith('/embed/')) {
    videoId = rawUrl.pathname.split('/')[2];
  } else if (rawUrl.pathname === '/watch') {
    videoId = rawUrl.searchParams.get('v');
  }

  if (!videoId) {
    throw new Error("Invalid YouTube URL format or missing video ID");
  }

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
  
  let title = "YouTube Video";
  let artist = "YouTube";
  let thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  try {
    const oembedRes = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
    if (oembedRes.ok) {
      const data = await oembedRes.json();
      title = data.title || title;
      artist = data.author_name || artist;
      thumbnail = data.thumbnail_url || thumbnail;
    }
  } catch (e) {
    // Ignore fetch error, fallback to basic response
  }

  return {
    success: true,
    platform: 'youtube',
    type: 'video',
    id: videoId,
    title,
    artist,
    thumbnail,
    embedUrl
  };
}
