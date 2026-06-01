import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-6 md:p-12 font-sans w-full max-w-6xl mx-auto pt-24 pb-12">
      <div className="w-full space-y-12 text-center relative z-10 flex flex-col items-center">
        
        {/* Hero Section */}
        <div className="space-y-6 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] mb-4 text-xs font-semibold text-white tracking-widest backdrop-saturate-200">
            ✨ EDGE-COMPUTED MUSIC PROXY
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/30 drop-shadow-lg">
            Thazh Embed
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-normal max-w-2xl px-4">
            A frictionless, edge-ready proxy to embed music and video without heavy third-party intermediate trackers.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mt-2">
          <Link 
            href="/demo" 
            className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-neutral-200 text-black rounded-full text-xs uppercase tracking-wider font-bold transition-all shadow-[0_4px_20px_0_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try Demo
          </Link>
          <a
            href="https://github.com/hoangthanh248/music-embed"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-xs uppercase tracking-wider font-bold transition-all backdrop-blur-3xl shadow-[0_4px_20px_0_rgba(0,0,0,0.2)] text-white hover:border-white/40 flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        </div>

        {/* Liquid Glass Card */}
        <div className="mt-16 md:mt-24 p-8 md:p-12 text-left bg-black/10 border border-white/20 rounded-[3rem] backdrop-blur-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-saturate-150 w-full relative overflow-hidden group hover:border-white/30 transition-all duration-500">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start md:items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-sm uppercase tracking-[0.3em] text-white/50 font-bold flex items-center gap-4">
                 Supported Platforms
                 <span className="h-px bg-white/20 flex-1"></span>
              </h2>
              <ul className="grid grid-cols-2 md:grid-cols-2 gap-4 text-white text-sm font-semibold">
                <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all shadow-lg backdrop-blur-md">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"></div> Spotify
                </li>
                <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all shadow-lg backdrop-blur-md">
                  <div className="w-3 h-3 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(244,114,182,0.8)]"></div> Apple Music
                </li>
                <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all shadow-lg backdrop-blur-md">
                  <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]"></div> SoundCloud
                </li>
                <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all shadow-lg backdrop-blur-md">
                  <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]"></div> Deezer
                </li>
                <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all shadow-lg backdrop-blur-md">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"></div> YouTube
                </li>
                <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all shadow-lg backdrop-blur-md">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"></div> Amazon Music
                </li>
                <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all shadow-lg backdrop-blur-md">
                  <div className="w-3 h-3 rounded-full bg-[#ff0050] shadow-[0_0_12px_rgba(255,0,80,0.8)] relative after:content-[''] after:absolute after:inset-0 after:bg-[#00f2fe] after:mix-blend-lighten after:blur-[2px] after:rounded-full"></div> TikTok
                </li>
                <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all shadow-lg backdrop-blur-md">
                  <div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]"></div> YouTube Music
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/3 flex flex-col items-center justify-center text-center p-8 bg-black/20 rounded-[2rem] border border-white/10 backdrop-blur-2xl">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Detailed Format Specs</h3>
              <p className="text-white/60 text-sm mb-6">See exactly which URL patterns are supported for each platform type.</p>
              <Link href="/platforms" className="px-6 py-3 bg-white hover:bg-neutral-200 text-black text-sm font-bold rounded-full transition-colors w-full">View Details</Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-12 pb-6 flex flex-wrap justify-center gap-3 text-xs md:text-sm font-semibold tracking-wide w-full max-w-4xl">
          <Link href="/platforms" className="hover:bg-white/20 text-white/70 hover:text-white transition-all bg-black/20 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)]">Platforms</Link>
          <Link href="/docs" className="hover:bg-white/20 text-white/70 hover:text-white transition-all bg-black/20 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)]">Docs</Link>
          <Link href="/terms" className="hover:bg-white/20 text-white/70 hover:text-white transition-all bg-black/20 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)]">Terms</Link>
          <Link href="/privacy" className="hover:bg-white/20 text-white/70 hover:text-white transition-all bg-black/20 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)]">Privacy</Link>
          <Link href="/contact" className="hover:bg-white/20 text-white/70 hover:text-white transition-all bg-black/20 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)]">Contact</Link>
          <a href="/api/docs" className="hover:bg-white/20 text-white/70 hover:text-white transition-all bg-black/20 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)]">Swagger API</a>
        </footer>
      </div>
    </main>
  );
}
