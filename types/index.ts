export type Platform = 'spotify' | 'apple' | 'soundcloud' | 'deezer' | 'youtube' | 'amazon' | 'tiktok';

export interface ResolveResponse {
  success: boolean;
  platform?: Platform;
  type?: string;
  id?: string;
  title?: string;
  artist?: string;
  thumbnail?: string;
  embedUrl?: string;
  message?: string;
}

export interface OEmbedResponse {
  version: "1.0";
  type: "rich" | "video" | "photo" | "link";
  provider_name: string;
  provider_url: string;
  title: string;
  author_name: string;
  thumbnail_url?: string;
  html: string;
  width: number;
  height: number;
}

export interface OpenGraphResponse {
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
  type?: string;
}
