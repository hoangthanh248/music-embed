import { z } from "zod";

const allowedDomains = [
  "spotify.com",
  "open.spotify.com",
  "music.apple.com",
  "soundcloud.com",
  "deezer.com",
  "www.deezer.com",
  "youtube.com",
  "www.youtube.com",
  "youtu.be",
  "music.youtube.com",
  "amazon.com",
  "music.amazon.com",
  "tiktok.com",
  "www.tiktok.com",
  "vm.tiktok.com",
  "vt.tiktok.com",
  "qq.com",
  "y.qq.com",
  "c.y.qq.com"
];

const blockedIPs = [
  "127.0.0.1",
  "0.0.0.0",
  "localhost",
  "169.254.",
  "10.",
  "172.16.",
  "192.168."
];

export const urlSchema = z.string().url();

export function validateUrlOrThrow(url: string) {
  const parsed = new URL(urlSchema.parse(url));

  if (!allowedDomains.includes(parsed.hostname)) {
    throw new Error(`Domain ${parsed.hostname} is not allowed`);
  }

  // Very basic SSRF protection to prevent obvious local IPs in URL
  if (blockedIPs.some(ip => parsed.hostname.startsWith(ip) || parsed.hostname === ip)) {
    throw new Error("Blocked IP or hostname");
  }

  return parsed;
}
