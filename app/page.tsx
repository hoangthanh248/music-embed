import Link from "next/link";
import DemoForm from "@/components/demo-form";

export default function Home() {
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
            A frictionless, edge-ready proxy to embed music/video from Spotify, Apple Music, SoundCloud, YouTube, TikTok, Amazon Music and Deezer without heavy third-party intermediate trackers.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/api/docs" 
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-semibold transition-all backdrop-blur-md"
          >
            View Swagger Docs
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-semibold transition-all backdrop-blur-md text-white/80 hover:text-white"
          >
            GitHub Repository
          </a>
        </div>

        <div className="mt-12 text-left bg-black/40 border border-white/10 p-6 rounded-2xl space-y-4 backdrop-blur-md shadow-inner">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-2">Supported Platforms</h2>
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
            <Link href="/platforms" className="text-xs text-white/40 hover:text-white transition-colors underline">View all supported formats &rarr;</Link>
          </div>
        </div>

        <DemoForm />

        <footer className="pt-8 mt-12 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-white/40">
          <Link href="/platforms" className="hover:text-white transition-colors">Platforms</Link>
          <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms & Disclaimer</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <a href="/api/docs" className="hover:text-white transition-colors">Swagger API</a>
        </footer>
      </div>
    </main>
  );
}
