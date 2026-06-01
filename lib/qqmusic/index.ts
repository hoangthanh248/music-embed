import { ResolveResponse } from "@/types";

export function isQQMusic(url: string) {
  return /^(https?:\/\/)?(y\.qq\.com|c\.y\.qq\.com)/.test(url);
}

export async function parseQQMusic(url: string, rawUrl: URL): Promise<ResolveResponse> {
  let id = "";
  let type = "song";
  
  const matchSong = rawUrl.pathname.match(/\/songDetail\/([a-zA-Z0-9]+)/);
  if (matchSong) {
    id = matchSong[1];
  } else {
    // try url params
    id = rawUrl.searchParams.get("songmid") || rawUrl.searchParams.get("id") || "";
  }
  
  if (!id) {
     const matchOther = rawUrl.pathname.match(/\/([a-zA-Z0-9]+)$/);
     if (matchOther) {
       id = matchOther[1];
     }
  }

  // Fallback to the url as the embedUrl or try to create a standard player url if we have an ID
  const embedUrl = id ? `https://y.qq.com/n/ryqq/player?songmid=${id}` : url;

  return {
    success: true,
    platform: 'qq',
    type,
    id: id || undefined,
    embedUrl
  };
}
