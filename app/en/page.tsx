import Link from "next/link";
import PlatformSwiper from "@/components/platform-swiper";

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
            href="/en/demo" 
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
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-full max-w-sm mx-auto space-y-6">
              <h2 className="text-sm uppercase tracking-[0.3em] text-white/50 font-bold flex items-center justify-center gap-4">
                 <span className="h-px bg-white/20 flex-1"></span>
                 Supported Platforms
                 <span className="h-px bg-white/20 flex-1"></span>
              </h2>
              <div className="w-full h-80 relative flex items-center justify-center perspective-1000">
                 <PlatformSwiper />
              </div>
            </div>
            
            <Link href="/en/platforms" className="mt-8 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold rounded-full transition-colors backdrop-blur-md">
              View Format Details
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 w-full max-w-3xl text-left space-y-6">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-2">What is Thazh Embed?</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                It's an edge-computed proxy service that helps embed media (music, videos) onto your website or application quickly and without heavy third-party intermediate trackers.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-2">Which platforms are supported?</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We currently support Spotify, Apple Music, SoundCloud, Deezer, YouTube, YouTube Music, Amazon Music, and TikTok.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-2">Is there a rate limit?</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                The free version may apply limits to prevent abuse. For embedding on high-traffic websites, consider cloning the repository and self-hosting on Deno Deploy or Vercel Edge.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full mt-24 pt-8 pb-8 border-t border-white/10 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium tracking-wide">
            <Link href="/en/platforms" className="text-white/60 hover:text-white transition-colors">Platforms</Link>
            <Link href="/en/docs" className="text-white/60 hover:text-white transition-colors">Docs</Link>
            <Link href="/en/terms" className="text-white/60 hover:text-white transition-colors">Terms</Link>
            <Link href="/en/privacy" className="text-white/60 hover:text-white transition-colors">Privacy</Link>
            <Link href="/en/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link>
            <a href="/api/docs" className="text-white/60 hover:text-white transition-colors">Swagger API</a>
          </div>
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Thazh Embed. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
