import Link from 'next/link';
import CopyButton from '@/components/copy-button';

const aiMarkdown = `# Thazh Embed API
Base URL: \`https://embed.thazh.qzz.io\` 

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

### 4. Lấy component React
\`GET /api/react?url={encodeURIComponent(url)}\`
- **Response:** Chuỗi Component React (TSX/JSX)

### 5. Lấy Open Graph Metadata
\`GET /api/og?url={encodeURIComponent(url)}\`
- **Response:** JSON Open Graph metadata

### Các nền tảng được hỗ trợ
Spotify, Apple Music, SoundCloud, Deezer, YouTube, Amazon Music, TikTok
`;

export default function DocsPageVi() {
  return (
    <main className="min-h-screen bg-transparent text-white overflow-auto relative p-8 font-sans">
      
      
      <div className="max-w-3xl mx-auto space-y-8 text-left relative z-10 pt-10 pb-20">
        <Link href="/vi" className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-white/80 hover:text-white transition-all text-sm font-semibold flex items-center gap-2 inline-flex w-fit">
          &larr; Trở về Trang chủ
        </Link>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-black/20 border border-white/20 p-8 md:p-12 rounded-[3rem] backdrop-blur-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-saturate-150 relative overflow-hidden text-white/80 leading-relaxed">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Tài liệu API</h1>
            <p className="text-white/50">Hướng dẫn chi tiết và cách gọi các endpoint</p>
          </div>
          <CopyButton content={aiMarkdown} label="Copy Markdown cho AI" />
        </div>
        
        <div className="bg-black/20 border border-white/20 p-8 md:p-12 rounded-[3rem] backdrop-blur-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-saturate-150 relative overflow-hidden text-white/80 leading-relaxed space-y-8 text-white/80">
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
             <h3 className="text-lg font-medium text-emerald-400 font-mono">GET /api/react?url=...</h3>
             <p className="text-sm text-white/60">Trả về cấu trúc React Component (TSX/JSX) hoàn chỉnh, sẵn sàng để chèn vào bất kỳ ứng dụng Next.js hay React nào.</p>
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
