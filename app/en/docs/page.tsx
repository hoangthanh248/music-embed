import Link from 'next/link';
import CopyButton from '@/components/copy-button';

const aiMarkdown = `# Thazh Embed API
Base URL: \`https://embed.thazh.qzz.io\` 

## Endpoints

### 1. Resolve URL
\`POST /api/embed/resolve\`
- **Body JSON:** \`{ "url": "https://open.spotify.com/track/..." }\`
- **Response JSON:** \`{ "success": true, "platform": "spotify", "type": "track", "id": "...", "title": "...", "artist": "...", "thumbnail": "...", "embedUrl": "..." }\`

### 2. Get oEmbed
\`GET /api/oembed?url={encodeURIComponent(url)}\`
- **Response:** Standard oEmbed JSON

### 3. Get HTML iframe
\`GET /api/embed?url={encodeURIComponent(url)}\`
- **Response:** Raw HTML string with iframe

### 4. Get React Component
\`GET /api/react?url={encodeURIComponent(url)}\`
- **Response:** Raw TSX/JSX React Component string

### 5. Get Open Graph Data
\`GET /api/og?url={encodeURIComponent(url)}\`
- **Response:** Standard JSON Open Graph metadata

### 6. Get Stream Card Page
\`GET /api/stream?url={encodeURIComponent(url)}\`
- **Response:** Raw HTML structure (a full webpage) rendering an active player taking 100% of the viewport width/height. Can be used directly as \\\`iframe src\\\`.

### Platforms Supported
Spotify, Apple Music, SoundCloud, Deezer, YouTube, Amazon Music, TikTok, QQ Music
`;

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-transparent text-white overflow-auto relative p-8 font-sans">
      
      
      <div className="max-w-3xl mx-auto space-y-8 text-left relative z-10 pt-10 pb-20">
        <Link href="/en" className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-white/80 hover:text-white transition-all text-sm font-semibold flex items-center gap-2 inline-flex w-fit">
          &larr; Back to Home
        </Link>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-black/20 border border-white/20 p-8 md:p-12 rounded-[3rem] backdrop-blur-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-saturate-150 relative overflow-hidden text-white/80 leading-relaxed">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">API Documentation</h1>
            <p className="text-white/50">Comprehensive guides and endpoints</p>
          </div>
          <CopyButton content={aiMarkdown} />
        </div>
        
        <div className="bg-black/20 border border-white/20 p-8 md:p-12 rounded-[3rem] backdrop-blur-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-saturate-150 relative overflow-hidden text-white/80 leading-relaxed space-y-8 text-white/80">
           <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">Endpoints</h2>
           
           <div className="space-y-3">
             <h3 className="text-lg font-medium text-emerald-400 font-mono">POST /api/embed/resolve</h3>
             <p className="text-sm text-white/60">Takes a music URL and returns a normalized JSON object containing metadata and the final embed URL.</p>
             <pre className="p-4 bg-black/40 rounded-xl text-xs font-mono overflow-x-auto text-blue-300 border border-white/5">
{`{
  "url": "https://open.spotify.com/track/..."
}`}
             </pre>
           </div>
           
           <div className="space-y-3 pt-4 border-t border-white/5">
             <h3 className="text-lg font-medium text-emerald-400 font-mono">GET /api/oembed?url=...</h3>
             <p className="text-sm text-white/60">Returns a standard oEmbed JSON response, useful for embedding in Discord, Notion, or other services.</p>
           </div>
           
           <div className="space-y-3 pt-4 border-t border-white/5">
             <h3 className="text-lg font-medium text-emerald-400 font-mono">GET /api/embed?url=...</h3>
             <p className="text-sm text-white/60">Returns a raw HTML string with an optimized iframe ready to render on a webpage.</p>
           </div>
           
           <div className="space-y-3 pt-4 border-t border-white/5">
             <h3 className="text-lg font-medium text-emerald-400 font-mono">GET /api/react?url=...</h3>
             <p className="text-sm text-white/60">Returns a pre-built React Component (TSX/JSX) structure ready to be embedded into any Next.js or React application.</p>
           </div>
           
           <div className="space-y-3 pt-4 border-t border-white/5">
             <h3 className="text-lg font-medium text-emerald-400 font-mono">GET /api/og?url=...</h3>
             <p className="text-sm text-white/60">Returns a structured JSON object containing Open Graph tags.</p>
           </div>

           <div className="space-y-3 pt-4 border-t border-white/5">
             <h3 className="text-lg font-medium text-emerald-400 font-mono">GET /api/stream?url=...</h3>
             <p className="text-sm text-white/60">Returns an active HTML card layout containing the media embed securely without middle-man referers. This URL can directly be used inside an iframe's <code className="text-pink-400">src</code> field.</p>
           </div>
        </div>
      </div>
    </main>
  );
}
