import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { getCache, setCache } from "@/lib/cache";
import * as cheerio from "cheerio";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";
  
  const rateLimitRes = await checkRateLimit(ip);
  if (!rateLimitRes.success) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  try {
    // Validate URL format
    new URL(url);
    
    const cacheKey = `metadata:${url}`;
    const cached = await getCache<any>(cacheKey);
    if (cached) {
      return NextResponse.json(cached, { headers: { "Access-Control-Allow-Origin": "*" } });
    }

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const getMetaTag = (name: string) => 
      $(`meta[name="${name}"]`).attr("content") ||
      $(`meta[property="${name}"]`).attr("content") || 
      $(`meta[name="twitter:${name}"]`).attr("content") ||
      $(`meta[property="twitter:${name}"]`).attr("content") ||
      $(`meta[name="og:${name}"]`).attr("content") ||
      $(`meta[property="og:${name}"]`).attr("content");

    const metadata = {
      title: getMetaTag("title") || $("title").text(),
      description: getMetaTag("description"),
      image: getMetaTag("image"),
      favicon: $('link[rel="icon"]').attr("href") || $('link[rel="shortcut icon"]').attr("href"),
      url: getMetaTag("url") || url,
      siteName: getMetaTag("site_name") || getMetaTag("site")
    };

    // Make favicon URL absolute if needed
    if (metadata.favicon && !metadata.favicon.startsWith("http")) {
      const baseUrl = new URL(url).origin;
      metadata.favicon = new URL(metadata.favicon, baseUrl).href;
    }
    
    // Make image URL absolute if needed
    if (metadata.image && !metadata.image.startsWith("http")) {
      const baseUrl = new URL(url).origin;
      metadata.image = new URL(metadata.image, baseUrl).href;
    }

    await setCache(cacheKey, metadata, 86400);

    return NextResponse.json(metadata, { headers: { "Access-Control-Allow-Origin": "*" } });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to extract metadata" }, { status: 400, headers: { "Access-Control-Allow-Origin": "*" } });
  }
}

export async function OPTIONS(req: NextRequest) {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  return new NextResponse(null, { status: 204, headers });
}
