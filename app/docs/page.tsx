import Link from 'next/link';
import CopyButton from '@/components/copy-button';

const aiMarkdown = `# Music Embed Proxy API
Base URL: \`https://YOUR_DOMAIN.com\` 

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

### 4. Get Open Graph Data
\`GET /api/og?url={encodeURIComponent(url)}\`
- **Response:** Standard JSON Open Graph metadata

### Platforms Supported
Spotify, Apple Music, SoundCloud, Deezer, YouTube
`;

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-auto relative p-8 font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-pink-900 opacity-10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-8 text-left relative z-10 pt-10 pb-20">
        <Link href="/" className="text-white/50 hover:text-white transition-colors text-sm inline-block items-center flex gap-2">
          &larr; Back to Home
        </Link>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">API Documentation</h1>
            <p className="text-white/50">Comprehensive guides and endpoints</p>
          </div>
          <CopyButton content={aiMarkdown} />
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl space-y-8 text-white/80">
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
             <h3 className="text-lg font-medium text-emerald-400 font-mono">GET /api/og?url=...</h3>
             <p className="text-sm text-white/60">Returns a structured JSON object containing Open Graph tags.</p>
           </div>
        </div>
      </div>
    </main>
  );
}
