import { ResolveResponse } from "@/types";

export function isSpotify(url: string) {
  return /^(https?:\/\/)?(open\.)?spotify\.com/.test(url);
}

export async function parseSpotify(url: string, rawUrl: URL): Promise<ResolveResponse> {
  const match = rawUrl.pathname.match(/\/(track|album|playlist|artist|episode|show)\/([a-zA-Z0-9]+)/);
  if (!match) {
    throw new Error("Invalid Spotify URL format");
  }

  const type = match[1];
  const id = match[2];
  const embedUrl = `https://open.spotify.com/embed/${type}/${id}`;

  try {
    const oembedRes = await fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`);
    if (oembedRes.ok) {
        const data = await oembedRes.json();
        return {
            success: true,
            platform: 'spotify',
            type,
            id,
            title: data.title,
            artist: data.author_name || undefined,
            thumbnail: data.thumbnail_url,
            embedUrl
        };
    }
  } catch (e) {
    // Ignore fetch error, fallback to basic response
  }

  return {
    success: true,
    platform: 'spotify',
    type,
    id,
    embedUrl
  };
}
