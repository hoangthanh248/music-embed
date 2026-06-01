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
    <main className="min-h-screen bg-transparent text-white overflow-auto relative p-8 font-sans">
      
      
      <div className="max-w-3xl mx-auto space-y-8 text-left relative z-10 pt-10 pb-20">
        <Link href="/vi" className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-white/80 hover:text-white transition-all text-sm font-semibold flex items-center gap-2 inline-flex w-fit">
          &larr; Trở về Trang chủ
        </Link>
        
        <div className="bg-black/20 border border-white/20 p-8 md:p-12 rounded-[3rem] backdrop-blur-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-saturate-150 relative overflow-hidden text-white/80 leading-relaxed space-y-8 text-white/80 leading-relaxed">
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
