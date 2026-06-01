import { ResolveResponse } from "@/types";

export function isDeezer(url: string) {
  return /^(https?:\/\/)?(www\.)?deezer\.com/.test(url);
}

export async function parseDeezer(url: string, rawUrl: URL): Promise<ResolveResponse> {
  const match = rawUrl.pathname.match(/(?:\/\w{2})?\/(track|album|playlist|artist)\/([0-9]+)/);
  if (!match) {
    throw new Error("Invalid Deezer URL format");
  }

  const type = match[1];
  const id = match[2];
  
  const embedUrl = `https://widget.deezer.com/widget/dark/${type}/${id}`;

  let title, artist, thumbnail;

  try {
    const apiRes = await fetch(`https://api.deezer.com/${type}/${id}`);
    if (apiRes.ok) {
      const data = await apiRes.json();
      if (!data.error) {
        title = data.title || data.name;
        artist = data.artist?.name || data.creator?.name;
        thumbnail = data.picture_xl || data.cover_xl || data.album?.cover_xl;
      }
    }
  } catch (e) {
    // ignore
  }

  return {
    success: true,
    platform: 'deezer',
    type,
    id,
    title,
    artist,
    thumbnail,
    embedUrl
  };
}
