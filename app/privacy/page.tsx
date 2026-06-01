import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-transparent text-white overflow-auto relative p-8 font-sans">
      
      
      <div className="max-w-4xl mx-auto space-y-8 text-left relative z-10 pt-10 pb-20">
        <Link href="/" className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-white/80 hover:text-white transition-all text-sm font-semibold flex items-center gap-2 inline-flex w-fit">
          &larr; Back to Home
        </Link>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl space-y-8 text-white/80 leading-relaxed">
           <header className="border-b border-white/10 pb-6">
             <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Privacy Policy</h1>
             <p className="text-white/50 text-sm italic">Effective Date: June 2026</p>
           </header>

           <div className="space-y-8 text-sm md:text-base">
             <p>At Music Embed Proxy, protecting your privacy and the privacy of your end-users&apos; is our primary architectural concern. This Privacy Policy details the data we handle (and explicitly do not handle) when you interact with our APIs.</p>

             <section>
               <h2 className="text-xl font-semibold text-white mb-3">1. Stateless Edge Architecture</h2>
               <p>Music Embed Proxy is designed to be fully stateless, scaling on highly distributed Edge runtimes. We do not maintain any persistent relational databases for user data routing. The API fundamentally acts as a rapid, transparent proxy that receives an input URL, computes the corresponding oEmbed metadata structure, and returns it immediately to the caller.</p>
               <p className="mt-3">Because we do not have user accounts, we do not ask for, collect, process, or store personal identifiers like names, email addresses, demographics, or payment information.</p>
             </section>
             
             <section>
               <h2 className="text-xl font-semibold text-white mb-3">2. Zero Analytics & Non-Tracking Commitment</h2>
               <p>We are explicitly anti-tracking. We aggressively refuse to inject third-party tracking scripts, advertising pixels, fingerprinting algorithms, or invasive behavioral analytics (such as Google Analytics or Meta Pixel) into our HTML iframe snippets or API network responses.</p>
               <p className="mt-3">This framework is built precisely to allow diligent developers to serve rich interactive media without involuntarily sacrificing their users&apos; privacy to unnecessary middleman aggregators or commercial ad networks.</p>
             </section>

             <section>
               <h2 className="text-xl font-semibold text-white mb-3">3. IP Addresses & Rate Limiting (Security protocol)</h2>
               <p>To keep the API free and stable across global regions, we must intercept excessive abusive behaviors (e.g., server DDoS attacks, aggressive botnet URL scraping). We achieve this by enforcing a strict firewall rate limit based strictly on incoming client IP addresses.</p>
               <ul className="list-disc pl-5 mt-3 space-y-1 text-white/60">
                 <li><strong>Temporary Node Storage:</strong> When a request hits our edge nodes, the requesting IP address is processed, hashed, and stored in an encrypted Upstash Redis cache purely to increment a count ledger.</li>
                 <li><strong>Automatic Expiration (TTL):</strong> This ledger data is held exclusively for short-term rate calculation and expires automatically. We do not aggregate historic IP datasets, sell IP lists, or use IP addresses to geolocate end-users beyond automated malicious behavior mitigation.</li>
               </ul>
             </section>
             
             <section>
               <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Embeds and Upstream Policies</h2>
               <p>When you seamlessly integrate the generated HTML iframe strings on your website, those visual iframes will subsequently load content directly from the respective source platforms (Spotify, Apple Music, YouTube, SoundCloud, Deezer, TikTok, or Amazon Music).</p>
               <p className="mt-3">At that specific phase, the robust network connection occurs directly between your end-user&apos;s internet browser and the media platform&apos;s multimedia servers. Any cookies, cache storage, or tracking mechanics implemented within the actual audio/video player are governed exclusively by that platform&apos;s distinct corporate Privacy Policy. Our proxy pipeline is entirely isolated and fully removed from that ongoing continuous interaction.</p>
             </section>

             <section>
               <h2 className="text-xl font-semibold text-white mb-3">5. Inquiries & Contact</h2>
               <p>If you have detailed questions regarding this privacy policy, architectural protocols, or our data handling practices, please navigate to our <Link href="/contact" className="text-blue-400 hover:underline">Contact page</Link> to connect directly with the system maintainers.</p>
             </section>
           </div>
        </div>
      </div>
    </main>
  );
}
