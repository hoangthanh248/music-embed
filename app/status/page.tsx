'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

const PLATFORMS = [
  { id: 'spotify', name: 'Spotify', testUrl: 'https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT' },
  { id: 'apple', name: 'Apple Music', testUrl: 'https://music.apple.com/us/album/hello/1051400977?i=1051400980' },
  { id: 'soundcloud', name: 'SoundCloud', testUrl: 'https://soundcloud.com/postmalone/rockstar-feat-21-savage' },
  { id: 'deezer', name: 'Deezer', testUrl: 'https://www.deezer.com/track/3135556' },
  { id: 'youtube', name: 'YouTube', testUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { id: 'youtubemusic', name: 'YouTube Music', testUrl: 'https://music.youtube.com/watch?v=dQw4w9WgXcQ' },
  { id: 'amazon', name: 'Amazon Music', testUrl: 'https://music.amazon.com/albums/B08HJ294D2?trackAsin=B08HJ2P1V5' },
  { id: 'tiktok', name: 'TikTok', testUrl: 'https://www.tiktok.com/@scout2015/video/6718335390845095173' },
];

export default function StatusPage() {
  const [statuses, setStatuses] = useState<Record<string, 'loading' | 'up' | 'down'>>({});
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const checkStatus = async () => {
    setIsChecking(true);
    const newStatuses: Record<string, 'loading' | 'up' | 'down'> = {};
    PLATFORMS.forEach(p => newStatuses[p.id] = 'loading');
    setStatuses(newStatuses);

    await Promise.all(PLATFORMS.map(async (platform) => {
      try {
        const res = await fetch(`/api/embed/resolve?url=${encodeURIComponent(platform.testUrl)}`);
        const data = await res.json();
        setStatuses(prev => ({
          ...prev,
          [platform.id]: (res.ok && data.success) ? 'up' : 'down'
        }));
      } catch (err) {
        setStatuses(prev => ({
          ...prev,
          [platform.id]: 'down'
        }));
      }
    }));
    
    setLastUpdated(new Date());
    setIsChecking(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    checkStatus();
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white/30 font-sans p-6 md:p-12 lg:p-24 relative overflow-hidden flex flex-col items-center">
      {/* Background elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <Link href="/" className="group flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white/70 group-hover:text-white group-hover:-translate-x-1 transition-all"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
          </Link>
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">System Status</h1>
            <p className="text-white/60 text-sm max-w-sm">Real-time uptime check for media resolvers and proxy endpoints.</p>
          </div>
        </div>

        {/* Global Status Banner */}
        <div className="w-full mb-12 p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="relative flex h-4 w-4">
              {isChecking ? (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              ) : Object.values(statuses).some(s => s === 'down') ? (
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              ) : (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              )}
              <span className={`relative inline-flex rounded-full h-4 w-4 ${isChecking ? 'bg-amber-500' : Object.values(statuses).some(s => s === 'down') ? 'bg-red-600' : 'bg-emerald-500'}`}></span>
            </div>
            <div>
              <h2 className="text-xl font-bold">
                {isChecking ? 'Running Checks...' : Object.values(statuses).some(s => s === 'down') ? 'Partial Outage' : 'All Systems Operational'}
              </h2>
              <p className="text-white/50 text-xs mt-1">
                Last updated: {lastUpdated ? lastUpdated.toLocaleTimeString() : 'Checking...'}
              </p>
            </div>
          </div>
          <button 
            onClick={checkStatus} 
            disabled={isChecking}
            className="px-6 py-2.5 bg-white/10 hover:bg-white/20 disabled:opacity-50 border border-white/10 rounded-full text-sm font-semibold transition-all backdrop-blur-md flex items-center gap-2"
          >
            {isChecking ? (
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
            )}
            Refresh
          </button>
        </div>

        {/* Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
          {PLATFORMS.map((platform, idx) => {
            const status = statuses[platform.id] || 'loading';
            return (
              <motion.div 
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 p-2">
                     <img src={`https://cdn.simpleicons.org/${platform.id === 'youtubemusic' ? 'youtubemusic' : platform.id === 'amazon' ? 'amazon' : platform.id === 'apple' ? 'applemusic' : platform.id}/white`} alt={platform.name} className="w-full h-full object-contain opacity-70" />
                  </div>
                  <h3 className="font-semibold">{platform.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  {status === 'loading' && (
                    <span className="text-xs font-mono text-white/50 bg-white/10 px-3 py-1 rounded-full animate-pulse">CHECKING</span>
                  )}
                  {status === 'up' && (
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                      OPERATIONAL
                    </span>
                  )}
                  {status === 'down' && (
                    <span className="text-xs font-mono text-red-400 bg-red-400/10 border border-red-400/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                      OUTAGE
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </main>
  );
}
