export class MusicEmbed {
  private static getBaseUrl() {
    // Determine base URL depending on window if in browser, or via env
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    return process.env.APP_URL || 'http://localhost:3000';
  }

  static async resolve(url: string) {
    const res = await fetch(`${this.getBaseUrl()}/api/embed/resolve`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });
    return res.json();
  }

  static async oembed(url: string) {
    const res = await fetch(`${this.getBaseUrl()}/api/oembed?url=${encodeURIComponent(url)}`);
    return res.json();
  }

  static async html(url: string) {
    const res = await fetch(`${this.getBaseUrl()}/api/embed?url=${encodeURIComponent(url)}`);
    return res.text();
  }

  static async og(url: string) {
    const res = await fetch(`${this.getBaseUrl()}/api/og?url=${encodeURIComponent(url)}`);
    return res.json();
  }
}
