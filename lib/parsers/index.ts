import { ResolveResponse } from "@/types";
import { isSpotify, parseSpotify } from "../spotify";
import { isAppleMusic, parseAppleMusic } from "../apple";
import { isSoundCloud, parseSoundCloud } from "../soundcloud";
import { isDeezer, parseDeezer } from "../deezer";
import { isYouTube, parseYouTube } from "../youtube";
import { validateUrlOrThrow } from "../security";

export async function resolveUrl(url: string): Promise<ResolveResponse> {
  const parsed = validateUrlOrThrow(url);

  if (isSpotify(url)) {
    return parseSpotify(url, parsed);
  }
  if (isAppleMusic(url)) {
    return parseAppleMusic(url, parsed);
  }
  if (isSoundCloud(url)) {
    return parseSoundCloud(url);
  }
  if (isDeezer(url)) {
    return parseDeezer(url, parsed);
  }
  if (isYouTube(url)) {
    return parseYouTube(url, parsed);
  }

  throw new Error("Unsupported platform");
}
