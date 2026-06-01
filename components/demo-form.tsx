'use client';

import { useState } from 'react';

export default function DemoForm({ 
  title = "Live Demo", 
  placeholder = "Paste Spotify, Apple Music, YouTube url...", 
  buttonText = "Resolve", 
  loadingText = "Resolving..." 
}: {
  title?: string;
  placeholder?: string;
  buttonText?: string;
  loadingText?: string;
}) {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await fetch('/api/embed/resolve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to resolve URL');
      }
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 bg-black/40 border border-white/10 p-6 rounded-2xl backdrop-blur-md shadow-inner text-left">
      <h2 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-4">{title}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-4">
        <input 
          type="url" 
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-white/30 focus:bg-white/10 transition-all"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm disabled:opacity-50"
        >
          {loading ? loadingText : buttonText}
        </button>
      </form>

      {error && (
        <div className="text-red-400 text-sm mb-4 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
          {error}
        </div>
      )}

      {result && result.embedUrl && (
        <div className="mt-6 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-black/60 rounded-xl overflow-hidden border border-white/10 w-full relative">
            <iframe 
               src={result.embedUrl}
               width="100%" 
               height={result.platform === 'youtube' ? 315 : (result.platform === 'soundcloud' ? 166 : 152)} 
               frameBorder="0" 
               allowFullScreen 
               className="block"
               allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
          </div>
          <div className="bg-black/40 p-4 rounded-xl border border-white/10 overflow-x-auto text-xs text-white/70 font-mono">
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
