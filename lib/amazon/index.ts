import { ResolveResponse } from "@/types";

export function isAmazonMusic(url: string) {
  return /^(https?:\/\/)?(music\.)?amazon\.([a-z.]+)/.test(url);
}

export async function parseAmazonMusic(url: string, rawUrl: URL): Promise<ResolveResponse> {
  const match = rawUrl.pathname.match(/\/(albums|playlists|stations|podcasts)\/([a-zA-Z0-9]+)/);
  let embedUrl = url;
  let type = "music";
  let id = "";
  
  if (match) {
    type = match[1];
    id = match[2];
    embedUrl = `https://music.amazon.com/embed/${id}`;
  } else if (rawUrl.searchParams.has('trackAsin')) {
    id = rawUrl.searchParams.get('trackAsin')!;
    embedUrl = `https://music.amazon.com/embed/${id}`;
  }

  return {
    success: true,
    platform: 'amazon',
    type,
    id,
    embedUrl
  };
}
