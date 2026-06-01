import Link from "next/link";
import DemoForm from "@/components/demo-form";

export default function HomeVi() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative flex flex-col items-center justify-center p-8 font-sans">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-pink-900 opacity-10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-2xl w-full space-y-8 text-center relative z-10 p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-3xl shadow-2xl">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.1] tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">Music Embed Proxy API</h1>
          <p className="text-lg text-white/50 leading-relaxed">
            Máy chủ trung gian cực nhẹ, tối ưu cho máy chủ Edge giúp nhúng nhạc/video từ Spotify, Apple Music, SoundCloud, YouTube, TikTok, Amazon Music và Deezer mà không bị các bên quảng cáo theo dõi.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/api/docs" 
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-semibold transition-all backdrop-blur-md"
          >
            Xem tài liệu Swagger
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-semibold transition-all backdrop-blur-md text-white/80 hover:text-white"
          >
            Mã nguồn GitHub
          </a>
        </div>

        <div className="mt-12 text-left bg-black/40 border border-white/10 p-6 rounded-2xl space-y-4 backdrop-blur-md shadow-inner">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-2">Các nền tảng hỗ trợ</h2>
          <ul className="grid grid-cols-2 gap-3 text-white/60 text-sm">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div> Spotify
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-400"></div> Apple Music
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400"></div> SoundCloud
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div> Deezer
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-600"></div> YouTube
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div> Amazon Music
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neutral-300"></div> TikTok
            </li>
          </ul>
          <div className="mt-4 text-center sm:text-left">
            <Link href="/vi/platforms" className="text-xs text-white/40 hover:text-white transition-colors underline">Xem toàn bộ định dạng được chi viện &rarr;</Link>
          </div>
        </div>

        <DemoForm 
          title="Dùng Thử Live Demo"
          placeholder="Dán link Spotify, Apple Music, TikTok..."
          buttonText="Phân giải"
          loadingText="Đang xử lý..."
        />

        <footer className="pt-8 mt-12 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-white/40">
          <Link href="/vi/platforms" className="hover:text-white transition-colors">Các Nền tảng</Link>
          <Link href="/vi/docs" className="hover:text-white transition-colors">Tài liệu API</Link>
          <Link href="/vi/terms" className="hover:text-white transition-colors">Điều khoản</Link>
          <Link href="/vi/privacy" className="hover:text-white transition-colors">Bảo mật</Link>
          <a href="/api/docs" className="hover:text-white transition-colors">Swagger Interface</a>
        </footer>
      </div>
    </main>
  );
}
