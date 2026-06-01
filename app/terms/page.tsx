import Link from 'next/link';

export default function TermsPage() {
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
           <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Terms of Service & Disclaimer</h1>
           <p className="text-white/50 text-sm italic">Last updated: Today</p>

           <h2 className="text-xl font-medium text-white pt-4">1. Completely Free Service</h2>
           <p className="text-sm">Music Embed Proxy is an entirely free-to-use API service built to facilitate embedding music tracks across various platforms. There are no paid tiers, hidden subscriptions, or premium gates. We want developers to build without friction.</p>
           
           <h2 className="text-xl font-medium text-white pt-4">2. Disclaimer of Liability (Miễn trừ trách nhiệm)</h2>
           <p className="text-sm">This service is provided <strong>"AS IS"</strong> and without warranties of any kind, whether express or implied. The maintainers of this API shall not be held liable for any damages, downtime, service interruptions, or losses resulting from the use of this proxy. We make no guarantees about the uptime, latency, or sustained availability of this API.</p>

           <h2 className="text-xl font-medium text-white pt-4">3. Platform Independence</h2>
           <p className="text-sm">Music Embed Proxy is not affiliated with, endorsed by, or sponsored by Spotify, Apple, YouTube, SoundCloud, or Deezer. All platform logos, names, and trademarks are the property of their respective owners. We simply provide a stateless redirect and metadata resolution tool utilizing publicly available generic patterns.</p>
           
           <h2 className="text-xl font-medium text-white pt-4">4. Rate Limits & Fair Use</h2>
           <p className="text-sm">To ensure availability for everyone, the service enforces a rate limit (currently 100 requests per IP per hour). We reserve the right to temporarily or permanently block IPs that attempt to abuse, scrape aggressively, or DDoS the infrastructure.</p>
        </div>
      </div>
    </main>
  );
}
