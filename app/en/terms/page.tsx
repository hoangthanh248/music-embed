import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-transparent text-white overflow-auto relative p-8 font-sans">
      
      
      <div className="max-w-4xl mx-auto space-y-8 text-left relative z-10 pt-10 pb-20">
        <Link href="/en" className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-white/80 hover:text-white transition-all text-sm font-semibold flex items-center gap-2 inline-flex w-fit">
          &larr; Back to Home
        </Link>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl space-y-8 text-white/80 leading-relaxed">
           <header className="border-b border-white/10 pb-6">
             <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Terms of Service & Disclaimer</h1>
             <p className="text-white/50 text-sm italic">Effective Date: June 2026</p>
           </header>

           <div className="space-y-8 text-sm md:text-base">
             <section>
               <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
               <p>By accessing or using the Music Embed Proxy API (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using the Service.</p>
             </section>

             <section>
               <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
               <p>Music Embed Proxy is an entirely free-to-use API service built to facilitate embedding music and video tracks across various platforms (Spotify, Apple Music, YouTube, SoundCloud, Deezer, Amazon Music, TikTok). We provide endpoint tools that seamlessly translate platform URLs into standard oEmbed metadata and HTML iframe snippets.</p>
               <ul className="list-disc pl-5 mt-3 space-y-1 text-white/60">
                 <li>The service requires no user registration, authentication tokens, or paid subscriptions.</li>
                 <li>We do not actively host, store, stream, or distribute the underlying multimedia content. The API acts strictly as a metadata resolution tool.</li>
               </ul>
             </section>
             
             <section>
               <h2 className="text-xl font-semibold text-white mb-3">3. Disclaimer of Warranties (AS IS)</h2>
               <p>This service is provided on an <strong>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</strong> basis, without warranties of any kind, whether express or implied. The maintainers of this API hereby disclaim all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
               <p className="mt-3">We make no absolute guarantees regarding the uptime, latency, reliability, or continuous online availability of this API. Network errors, edge function timeouts, or upstream platform changes (such as layout modifications by target platforms) may cause the Service to break without prior notice.</p>
             </section>

             <section>
               <h2 className="text-xl font-semibold text-white mb-3">4. Limitation of Liability</h2>
               <p>In no event shall the developers, maintainers, contributors, or host providers of Music Embed Proxy be held liable for any direct, indirect, incidental, special, consequential, or exemplary damages. This includes, but is not limited to, damages for loss of profits, goodwill, functionality, data, or other intangible losses resulting from the use or inability to use the Service.</p>
             </section>

             <section>
               <h2 className="text-xl font-semibold text-white mb-3">5. Platform Independence & Intellectual Property</h2>
               <p>Music Embed Proxy is an independent, community-driven tool. We are <strong>not affiliated with, endorsed by, sponsored by, or connected to</strong> Spotify, Apple, YouTube, SoundCloud, Deezer, Amazon Music, or TikTok. All platform logos, names, and trademarks are the exclusive proprietary property of their respective owners.</p>
             </section>
             
             <section>
               <h2 className="text-xl font-semibold text-white mb-3">6. Rate Limits & Fair Use Policy</h2>
               <p>To ensure availability for everyone and mitigate infrastructural abuse, the service strictly enforces a server-level rate limit (currently set to 100 requests per IP address per hour). Users are expected to:</p>
               <ul className="list-disc pl-5 mt-3 space-y-1 text-white/60">
                 <li>Cache API responses on their own servers or CDNs whenever technically applicable.</li>
                 <li>Refrain from aggressive scraping campaigns, automated mass-probing, or participating in DDoS attacks.</li>
               </ul>
               <p className="mt-3">We automatically and permanently block IP addresses that exhibit malicious patterns or intentionally attempt to degrade the API infrastructure.</p>
             </section>
             
             <section>
               <h2 className="text-xl font-semibold text-white mb-3">7. Modifications to the Terms</h2>
               <p>We reserve the right to modify or replace these Terms at any given time without prior notice. Continued use of the Service following any such structural changes shall constitute your explicit consent to such modifications.</p>
             </section>
           </div>
        </div>
      </div>
    </main>
  );
}
