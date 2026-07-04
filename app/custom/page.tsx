'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CustomStudioPage() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Customization state
  const [width, setWidth] = useState('100%');
  const [height, setHeight] = useState(''); // empty means auto based on platform
  const [theme, setTheme] = useState<'default' | '0' | '1'>('default'); // 0 = light, 1 = dark for some platforms
  const [borderRadius, setBorderRadius] = useState('12px');
  
  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'react'>('preview');

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

  const getDefaultHeight = (platform: string) => {
    if (platform === 'tiktok') return 705;
    if (platform === 'youtube') return 315;
    if (platform === 'soundcloud') return 166;
    if (platform === 'apple') return 150;
    if (platform === 'amazon') return 150;
    return 152;
  };

  const finalHeight = height ? height : (result ? getDefaultHeight(result.platform) : 152);
  
  // Construct final URL with custom params
  let finalEmbedUrl = result?.embedUrl || '';
  if (finalEmbedUrl && theme !== 'default') {
    const embedUrlObj = new URL(finalEmbedUrl);
    embedUrlObj.searchParams.set('theme', theme);
    finalEmbedUrl = embedUrlObj.toString();
  }

  const htmlCode = `<iframe 
  src="${finalEmbedUrl}" 
  width="${width}" 
  height="${finalHeight}" 
  frameBorder="0" 
  allowFullScreen 
  style="border-radius: ${borderRadius};"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
></iframe>`;

  const reactCode = `export default function MusicEmbed() {
  return (
    <iframe 
      src="${finalEmbedUrl}" 
      width="${width}" 
      height={${finalHeight}} 
      style={{ border: 0, borderRadius: '${borderRadius}' }}
      allowFullScreen 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
}`;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 font-sans p-6 sm:p-12 md:p-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <Link href="/" className="inline-flex items-center text-sm text-white/50 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">Custom Studio</h1>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            Generate and customize embed codes for Spotify, Apple Music, YouTube, and more. 
            Adjust dimensions, themes, and styles to fit your design perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl">
              <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold mb-6">Source URL</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input 
                  type="url" 
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste music URL here..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-white/40 transition-all shadow-inner"
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-white hover:bg-neutral-200 text-black px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-lg disabled:opacity-50 disabled:hover:bg-white w-full"
                >
                  {loading ? "Resolving..." : "Load Embed"}
                </button>
              </form>
              
              {error && (
                <div className="text-red-400 text-sm mt-4 bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                  {error}
                </div>
              )}
            </div>

            {result && (
              <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold mb-4">Customization</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-white/60 mb-1.5 block">Width</label>
                    <input 
                      type="text" 
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="e.g. 100% or 400px"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-white/40 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs text-white/60 mb-1.5 block">Height <span className="opacity-50">(empty for auto)</span></label>
                    <input 
                      type="text" 
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder={`Auto (${getDefaultHeight(result.platform)}px)`}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-white/40 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs text-white/60 mb-1.5 block">Border Radius</label>
                    <input 
                      type="text" 
                      value={borderRadius}
                      onChange={(e) => setBorderRadius(e.target.value)}
                      placeholder="e.g. 12px"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-white/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-white/60 mb-1.5 block">Theme (Spotify only)</label>
                    <select 
                      value={theme}
                      onChange={(e) => setTheme(e.target.value as any)}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-white/40 transition-all appearance-none"
                    >
                      <option value="default">Default</option>
                      <option value="0">Light</option>
                      <option value="1">Dark</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Preview Panel */}
          <div className="lg:col-span-7">
            {result ? (
              <div className="bg-white/5 border border-white/10 p-2 rounded-[2.5rem] backdrop-blur-xl shadow-2xl h-full flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="flex gap-2 p-4 pb-2 overflow-x-auto custom-scrollbar">
                  <button onClick={() => setActiveTab('preview')} className={`text-xs px-4 py-2 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === 'preview' ? 'bg-white text-black' : 'text-white/50 hover:text-white bg-white/5 hover:bg-white/10'}`}>Preview</button>
                  <button onClick={() => setActiveTab('html')} className={`text-xs px-4 py-2 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === 'html' ? 'bg-white text-black' : 'text-white/50 hover:text-white bg-white/5 hover:bg-white/10'}`}>HTML</button>
                  <button onClick={() => setActiveTab('react')} className={`text-xs px-4 py-2 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === 'react' ? 'bg-white text-black' : 'text-white/50 hover:text-white bg-white/5 hover:bg-white/10'}`}>React</button>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  {activeTab === 'preview' && (
                    <div className="bg-[url('https://transparenttextures.com/patterns/cubes.png')] bg-neutral-900 rounded-[1.5rem] border border-white/10 w-full flex-1 min-h-[300px] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden shadow-inner">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent"></div>
                      <div className="relative w-full flex justify-center">
                        <div style={{ width: width === '100%' ? '100%' : width, maxWidth: '100%' }}>
                          <iframe 
                            src={finalEmbedUrl}
                            width="100%" 
                            height={finalHeight} 
                            style={{ borderRadius }}
                            frameBorder="0" 
                            allowFullScreen 
                            className="block shadow-2xl bg-black/50"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                          </iframe>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'html' && (
                    <div className="bg-black/50 p-6 rounded-[1.5rem] border border-white/10 flex-1 overflow-x-auto text-xs text-white/80 font-mono shadow-inner relative group">
                      <button onClick={() => navigator.clipboard.writeText(htmlCode)} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">Copy</button>
                      <pre className="whitespace-pre-wrap">{htmlCode}</pre>
                    </div>
                  )}

                  {activeTab === 'react' && (
                    <div className="bg-black/50 p-6 rounded-[1.5rem] border border-white/10 flex-1 overflow-x-auto text-xs text-white/80 font-mono shadow-inner relative group">
                      <button onClick={() => navigator.clipboard.writeText(reactCode)} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">Copy</button>
                      <pre className="whitespace-pre-wrap">{reactCode}</pre>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] h-[400px] lg:h-full min-h-[400px] flex flex-col items-center justify-center text-white/30 border-dashed backdrop-blur-xl">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                </div>
                <p>Enter a URL to preview your embed</p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
