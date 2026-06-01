import Link from 'next/link';

export default function PrivacyPage() {
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
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl space-y-6 text-white/80 leading-relaxed">
           <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Privacy Policy</h1>
           <p className="text-white/50 text-sm italic">Last updated: Today</p>

           <h2 className="text-xl font-medium text-white pt-4">1. Stateless Architecture</h2>
           <p className="text-sm">Music Embed Proxy is designed to be fully stateless and edge-computed. We do not store, process, or sell any personal user data. The API simply acts as a fast, transparent proxy designed to fetch appropriate oEmbed metadata and deliver it to your clients.</p>
           
           <h2 className="text-xl font-medium text-white pt-4">2. Zero Analytics & Non-Tracking</h2>
           <p className="text-sm">We do not inject third-party tracking scripts, advertising pixels, or invasive behavioral analytics tools into the HTML iframe embeds or our API responses. This tool is built specifically to allow developers to serve music without sacrificing user privacy to middleman trackers.</p>

           <h2 className="text-xl font-medium text-white pt-4">3. Security and Rate Limiting</h2>
           <p className="text-sm">For the sole purpose of DDoS mitigation and enforcing fair-use rate limits, client IP addresses are temporarily processed via an encrypted Redis backend (Upstash). These IPs are stored with strict Time-To-Live (TTL) expiration rules and are never persistently logged or used to track users.</p>
           
           <h2 className="text-xl font-medium text-white pt-4">4. Third-Party Edge Services</h2>
           <p className="text-sm">When embedding music via our generated URLs, the final iframe rendered on your site communicates directly with the respective platform corresponding to the track (Spotify, Apple Music, YouTube, SoundCloud, or Deezer). Their primary privacy policies apply directly to the interactions inside that embedded iframe layer.</p>
        </div>
      </div>
    </main>
  );
}
