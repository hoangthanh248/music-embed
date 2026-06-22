import { NextRequest, NextResponse } from "next/server";
import { resolveUrl } from "@/lib/parsers";

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  const customTitle = req.nextUrl.searchParams.get("title");
  const customDesc = req.nextUrl.searchParams.get("description");
  const customImage = req.nextUrl.searchParams.get("image");

  if (!url) {
    return NextResponse.json({ success: false, message: "Missing url parameter" }, { status: 400 });
  }

  try {
    const data = await resolveUrl(url);
    
    const platformNames: Record<string, string> = {
      spotify: "Spotify",
      apple: "Apple Music",
      soundcloud: "SoundCloud",
      deezer: "Deezer",
      youtube: "YouTube",
      "youtube-music": "YouTube Music",
      amazon: "Amazon Music",
      tiktok: "TikTok"
    };

    const title = customTitle || data.title || "Music Track";
    const description = customDesc || (data.artist ? `By ${data.artist}` : "Listen on " + (data.platform ? platformNames[data.platform] : "Music Platform"));
    const image = customImage || data.thumbnail || "";
    const platform = data.platform || "";
    let ogType = "music.song";
    if (data.type === 'album') ogType = 'music.album';
    if (data.type === 'playlist') ogType = 'music.playlist';
    if (data.type === 'video') ogType = 'video.other';

    const redirectUrl = data.embedUrl || url; // Where to go when clicked

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${ogType}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">
    <meta property="og:url" content="${url}">
    <meta property="og:site_name" content="${platformNames[platform] || 'Music Embed Proxy'}">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">
    
    <style>
      body {
        font-family: system-ui, -apple-system, sans-serif;
        background-color: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        flex-direction: column;
        text-align: center;
      }
      .card {
        background: #111;
        padding: 2rem;
        border-radius: 12px;
        max-width: 600px;
        border: 1px solid #333;
      }
      img {
        max-width: 100%;
        border-radius: 8px;
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.75rem 1.5rem;
        background: #fff;
        color: #000;
        text-decoration: none;
        border-radius: 9999px;
        font-weight: 500;
      }
    </style>
</head>
<body>
    <div class="card">
        ${image ? `<img src="${image}" alt="${title}">` : ''}
        <h1>${title}</h1>
        <p>${description}</p>
        <a href="${redirectUrl}">Listen Now</a>
    </div>
    <script>
        // Redirect after a short delay or let user click
        setTimeout(() => {
            window.location.href = "${redirectUrl}";
        }, 3000);
    </script>
</body>
</html>`;

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400'
      }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message || "Internal Error" }, { status: 400 });
  }
}

export async function OPTIONS() {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  return new NextResponse(null, { status: 204, headers });
}
