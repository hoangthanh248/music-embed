import Link from 'next/link';

export default function PlatformsPageVi() {
  const platforms = [
    { id: 'spotify', name: 'Spotify', color: 'bg-emerald-400', types: 'bài hát, album, danh sách phát, nghệ sĩ, podcast' },
    { id: 'apple', name: 'Apple Music', color: 'bg-pink-400', types: 'bài hát, album, danh sách phát, nghệ sĩ, music-video' },
    { id: 'soundcloud', name: 'SoundCloud', color: 'bg-amber-400', types: 'bài hát (track), set đồ/danh sách phát' },
    { id: 'deezer', name: 'Deezer', color: 'bg-blue-400', types: 'bài hát, album, danh sách phát, nghệ sĩ' },
    { id: 'youtube', name: 'YouTube', color: 'bg-red-600', types: 'video, shorts (qua link tiêu chuẩn)' },
    { id: 'amazon', name: 'Amazon Music', color: 'bg-cyan-400', types: 'bài hát, album' },
    { id: 'tiktok', name: 'TikTok', color: 'bg-neutral-300', types: 'video' },
  ];

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
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl space-y-8 text-white/80 leading-relaxed">
           <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Các Nền Tảng Hỗ Trợ</h1>
           <p className="text-white/50 text-sm">Danh sách toàn bộ các mạng xã hội và kênh âm nhạc được tự động hỗ trợ khi nhúng.</p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
             {platforms.map(platform => (
               <div key={platform.id} className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-colors group">
                 <div className="flex items-center gap-3 mb-2">
                   <div className={`w-3 h-3 rounded-full ${platform.color} shadow-[0_0_10px_rgba(255,255,255,0.2)]`} />
                   <h2 className="text-xl font-semibold text-white">{platform.name}</h2>
                 </div>
                 <p className="text-xs text-white/40 uppercase tracking-wider font-mono">Loại URL hỗ trợ:</p>
                 <p className="text-sm text-white/70 mt-1">{platform.types}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </main>
  );
}
