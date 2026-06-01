import { ResolveResponse } from "@/types";

export function isSoundCloud(url: string) {
  return /^(https?:\/\/)?(www\.)?soundcloud\.com/.test(url);
}

export async function parseSoundCloud(url: string): Promise<ResolveResponse> {
  const oembedUrl = `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(url)}`;
  
  try {
    const res = await fetch(oembedUrl);
    if (!res.ok) throw new Error("Failed to fetch SoundCloud oembed");
    const data = await res.json();
    
    // Extract embed URL from html
    const srcMatch = data.html.match(/src="([^"]+)"/);
    const embedUrl = srcMatch ? srcMatch[1] : undefined;

    return {
      success: true,
      platform: 'soundcloud',
      type: 'track', // SC doesn't return type in oembed clearly without regex, defaulting to track
      title: data.title,
      artist: data.author_name,
      thumbnail: data.thumbnail_url,
      embedUrl
    };
  } catch (e) {
    throw new Error("Invalid SoundCloud URL or track not found");
  }
}
