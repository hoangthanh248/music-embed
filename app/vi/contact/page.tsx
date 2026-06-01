import Link from 'next/link';

export default function ContactPageVi() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-auto relative p-8 font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-pink-900 opacity-10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-8 text-center relative z-10 pt-10 pb-20">
        <div className="text-left">
          <Link href="/vi" className="text-white/50 hover:text-white transition-colors text-sm inline-block items-center flex gap-2 w-max">
            &larr; Trở về Trang chủ
          </Link>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-md shadow-2xl space-y-8 text-white/80 leading-relaxed text-center">
           <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">Liên hệ</h1>
           <p className="text-white/60 text-lg max-w-lg mx-auto">
             Bạn có câu hỏi, góp ý hay cần hỗ trợ kết nối API? Hãy thoải mái liên hệ qua các kênh dưới đây nhé.
           </p>

           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
             <a href="mailto:thazh@duck.com" className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col items-center gap-3 group">
               <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                 <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"></path></svg>
               </div>
               <span className="text-white font-medium">Email</span>
             </a>
             
             <a href="https://t.me/h0angth4nh" target="_blank" rel="noopener noreferrer" className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col items-center gap-3 group">
               <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
                 <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.96 1.25-5.54 3.67-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.41-1.41-.87.03-.23.36-.48 1-.74 3.91-1.7 6.53-2.84 7.84-3.39 3.73-1.56 4.51-1.84 5.02-1.85.11 0 .36.03.49.14.11.09.14.22.15.34-.01.12.01.27 0 .33z"></path></svg>
               </div>
               <span className="text-white font-medium">Telegram</span>
             </a>

             <a href="https://tiktok.com/@tha.zh" target="_blank" rel="noopener noreferrer" className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col items-center gap-3 group">
               <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                 <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.52.2-5.14 1.77-7.14 1.54-1.92 3.86-3.04 6.27-3.23l.03 4.13c-1.35.04-2.61.64-3.43 1.72-.82 1.08-1.15 2.52-.77 3.83.33 1.18 1.11 2.2 2.15 2.72.93.47 2.05.54 3.05.28 1.34-.34 2.37-1.36 2.74-2.67.14-.49.19-1 .18-1.51l-.03-15.6z"></path></svg>
               </div>
               <span className="text-white font-medium">TikTok</span>
             </a>
           </div>
        </div>
      </div>
    </main>
  );
}
