import Link from 'next/link';
import CopyButton from '@/components/copy-button';

const aiMarkdown = `# Music Embed Proxy API
Base URL: \`https://YOUR_DOMAIN.com\` 

## Endpoints (Điểm cuối)

### 1. Resolve URL (Phân giải link nhạc)
\`POST /api/embed/resolve\`
- **Body JSON:** \`{ "url": "https://open.spotify.com/track/..." }\`
- **Response JSON:** \`{ "success": true, "platform": "spotify", "type": "track", "id": "...", "title": "...", "artist": "...", "thumbnail": "...", "embedUrl": "..." }\`

### 2. Lấy oEmbed
\`GET /api/oembed?url={encodeURIComponent(url)}\`
- **Response:** Standard oEmbed JSON

### 3. Lấy HTML Iframe
\`GET /api/embed?url={encodeURIComponent(url)}\`
- **Response:** Chuỗi HTML chứa thẻ iframe trực tiếp

### 4. Lấy Open Graph Metadata
\`GET /api/og?url={encodeURIComponent(url)}\`
- **Response:** JSON Open Graph metadata

### Các nền tảng được hỗ trợ
Spotify, Apple Music, SoundCloud, Deezer, YouTube, Amazon Music, TikTok
`;

export default function DocsPageVi() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-auto relative p-8 font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-pink-900 opacity-10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-8 text-left relative z-10 pt-10 pb-20">
        <Link href="/vi" className="text-white/50 hover:text-white transition-colors text-sm inline-block items-center flex gap-2">
          &larr; Trở về Trang chủ
        </Link>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Tài liệu API</h1>
            <p className="text-white/50">Hướng dẫn chi tiết và cách gọi các endpoint</p>
          </div>
          <CopyButton content={aiMarkdown} label="Copy Markdown cho AI" />
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl space-y-8 text-white/80">
           <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">Endpoints (Điểm gọi)</h2>
           
           <div className="space-y-3">
             <h3 className="text-lg font-medium text-emerald-400 font-mono">POST /api/embed/resolve</h3>
             <p className="text-sm text-white/60">Đầu vào là đường dẫn nhạc và đầu ra là chuỗi JSON chuẩn hóa chứa metadata và đường dẫn nhúng iframe cuối cùng.</p>
             <pre className="p-4 bg-black/40 rounded-xl text-xs font-mono overflow-x-auto text-blue-300 border border-white/5">
{`{
  "url": "https://open.spotify.com/track/..."
}`}
             </pre>
           </div>
           
           <div className="space-y-3 pt-4 border-t border-white/5">
             <h3 className="text-lg font-medium text-emerald-400 font-mono">GET /api/oembed?url=...</h3>
             <p className="text-sm text-white/60">Trả về chuẩn oEmbed JSON, vô cùng hữu dụng khi làm API cho Discord, Notion hay hệ sinh thái CMS.</p>
           </div>
           
           <div className="space-y-3 pt-4 border-t border-white/5">
             <h3 className="text-lg font-medium text-emerald-400 font-mono">GET /api/embed?url=...</h3>
             <p className="text-sm text-white/60">Trả về mã HTML chứa thẻ iframe đã được tính toán tỉ lệ siêu ưu việt. Bạn cứ nhúng thẳng vào web là xong.</p>
           </div>
           
           <div className="space-y-3 pt-4 border-t border-white/5">
             <h3 className="text-lg font-medium text-emerald-400 font-mono">GET /api/og?url=...</h3>
             <p className="text-sm text-white/60">Trả về đối tượng JSON chứa các trường Open Graph metadata (tiêu đề, ảnh, mô tả).</p>
           </div>
        </div>
      </div>
    </main>
  );
}
