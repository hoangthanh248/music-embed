'use client';

import { useState } from 'react';

export default function DemoForm({ 
  title = "Live Demo", 
  placeholder = "Paste Spotify, Apple Music, TikTok, YouTube, QQ Music url...", 
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
  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'react' | 'json'>('preview');
  
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
    <div className="bg-white/5 border border-white/20 p-8 rounded-[3rem] backdrop-blur-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-saturate-150 text-left w-full max-w-4xl mx-auto backdrop-brightness-110">
      <h2 className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mb-6 ml-2">{title}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
        <input 
          type="url" 
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white placeholder-white/40 outline-none focus:border-white/40 focus:bg-black/30 transition-all shadow-inner backdrop-blur-md"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-white hover:bg-neutral-200 text-black px-8 py-4 rounded-2xl text-sm font-bold transition-all shadow-lg disabled:opacity-50 disabled:hover:bg-white"
        >
          {loading ? loadingText : buttonText}
        </button>
      </form>

      {error && (
        <div className="text-red-400 text-sm mt-4 bg-red-400/10 p-4 rounded-2xl border border-red-400/20 backdrop-blur-md">
          {error}
        </div>
      )}

      {result && result.embedUrl && (
        <div className="mt-8 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-500">
          <div className="flex gap-2 border-b border-white/10 pb-2 overflow-x-auto custom-scrollbar">
            <button onClick={() => setActiveTab('preview')} className={`text-xs px-4 py-2 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === 'preview' ? 'bg-white text-black' : 'text-white/50 hover:text-white bg-white/5 hover:bg-white/10'}`}>Preview</button>
            <button onClick={() => setActiveTab('html')} className={`text-xs px-4 py-2 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === 'html' ? 'bg-white text-black' : 'text-white/50 hover:text-white bg-white/5 hover:bg-white/10'}`}>HTML Embed</button>
            <button onClick={() => setActiveTab('react')} className={`text-xs px-4 py-2 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === 'react' ? 'bg-white text-black' : 'text-white/50 hover:text-white bg-white/5 hover:bg-white/10'}`}>React Component</button>
            <button onClick={() => setActiveTab('json')} className={`text-xs px-4 py-2 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === 'json' ? 'bg-white text-black' : 'text-white/50 hover:text-white bg-white/5 hover:bg-white/10'}`}>Raw JSON</button>
          </div>

          {activeTab === 'preview' && (
            <div className="bg-black/40 rounded-[2rem] overflow-hidden border border-white/10 w-full relative shadow-2xl backdrop-blur-lg">
              <iframe 
                src={result.embedUrl}
                width="100%" 
                height={result.platform === 'tiktok' ? 705 : (result.platform === 'youtube' ? 315 : (result.platform === 'soundcloud' ? 166 : 152))} 
                frameBorder="0" 
                allowFullScreen 
                className="block"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
              </iframe>
            </div>
          )}

          {activeTab === 'html' && (
            <div className="bg-black/30 p-6 rounded-[2rem] border border-white/10 overflow-x-auto text-xs text-white/70 font-mono backdrop-blur-md shadow-inner custom-scrollbar relative group">
              <button onClick={() => navigator.clipboard.writeText(`<iframe src="${result.embedUrl}" width="100%" height="${result.platform === 'tiktok' ? 705 : (result.platform === 'youtube' ? 315 : (result.platform === 'soundcloud' ? 166 : 152))}" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`)} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">Copy</button>
              <pre className="whitespace-pre-wrap word-break">{`<iframe 
  src="${result.embedUrl}" 
  width="100%" 
  height="${result.platform === 'tiktok' ? 705 : (result.platform === 'youtube' ? 315 : (result.platform === 'soundcloud' ? 166 : 152))}" 
  frameBorder="0" 
  allowFullScreen 
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
></iframe>`}</pre>
            </div>
          )}

          {activeTab === 'react' && (
            <div className="bg-black/30 p-6 rounded-[2rem] border border-white/10 overflow-x-auto text-xs text-white/70 font-mono backdrop-blur-md shadow-inner custom-scrollbar relative group">
              <button onClick={() => navigator.clipboard.writeText(`export default function MusicEmbed() {\n  return (\n    <iframe\n      src="${result.embedUrl}"\n      width="100%"\n      height={${result.platform === 'tiktok' ? 705 : (result.platform === 'youtube' ? 315 : (result.platform === 'soundcloud' ? 166 : 152))}}\n      style={{ border: 0 }}\n      allowFullScreen\n      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"\n    />\n  );\n}`)} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">Copy</button>
              <pre className="whitespace-pre-wrap word-break">{`export default function MusicEmbed() {
  return (
    <iframe 
      src="${result.embedUrl}" 
      width="100%" 
      height={${result.platform === 'tiktok' ? 705 : (result.platform === 'youtube' ? 315 : (result.platform === 'soundcloud' ? 166 : 152))}} 
      style={{ border: 0 }}
      allowFullScreen 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
}`}</pre>
            </div>
          )}

          {activeTab === 'json' && (
            <div className="bg-black/30 p-6 rounded-[2rem] border border-white/10 overflow-x-auto text-xs text-white/70 font-mono backdrop-blur-md shadow-inner custom-scrollbar relative group">
              <button onClick={() => navigator.clipboard.writeText(JSON.stringify(result, null, 2))} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">Copy</button>
              <pre className="whitespace-pre-wrap word-break">{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
