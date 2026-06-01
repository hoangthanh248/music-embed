# Thazh Embed

A highly optimized API Proxy to embed music from various platforms without middleman tracking services.

Built on Next.js 15 App Router, edge-compatible with Deno Deploy, protected from SSRF, and cached via Upstash Redis.

## Features

- **Stateless & Edge Compatible:** Runs blazingly fast on Deno Deploy or Vercel Edge.
- **Upstash Redis Cache (TTL: 86400s):** Fast metadata caching. (Falls back to memory if environment variables are not set)
- **Upstash Rate Limit:** Strict 100 requests / IP / hour.
- **Security Validations:** Zod schema checks, custom SSRF protection, strict URL allowing only whitelisted music domain.
- **Multiple Platforms Support:** Spotify, Apple Music, Deezer, and SoundCloud natively without scraping via headless browsers.
- **OpenAPI 3.1 & Swagger UI:** Cleanly mapped endpoints available at `/api/docs`.
- **Easy SDK:** Import `MusicEmbed` for effortless integration.

## Installation / Usage

Set the following environment variables (optional for memory fallback):

```text
UPSTASH_REDIS_REST_URL="your-upstash-url"
UPSTASH_REDIS_REST_TOKEN="your-upstash-token"
APP_URL="your-production-url"
```

## API Endpoints

- `POST /api/embed/resolve`
- `GET /api/oembed?url=...`
- `GET /api/embed?url=...` (Returns pure HTML iframe)
- `GET /api/og?url=...`

## SDK Guide

```typescript
import { MusicEmbed } from './sdk';

// Resolve URL
const data = await MusicEmbed.resolve('https://open.spotify.com/track/...');

// Generate Open Graph object
const og = await MusicEmbed.og('https://open.spotify.com/track/...');

// Get HTML string
const html = await MusicEmbed.html('https://open.spotify.com/track/...');
```

## Supported Services
* **Spotify** (track, album, playlist, artist, episode, show)
* **Apple Music**
* **SoundCloud**
* **Deezer** (track, album, playlist, artist)

Designed specifically for Edge computing - no node-only APIs, no databases, just pure HTTP APIs.
