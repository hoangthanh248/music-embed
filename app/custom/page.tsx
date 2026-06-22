'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CustomStudioPage() {
  const [url, setUrl] = useState('https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT');
  const [size, setSize] = useState('300');
  const [styleMode, setStyleMode] = useState('rounded');
  const [baseUrl, setBaseUrl] = useState('https://embed.thazh.qzz.io');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBaseUrl(window.location.origin);
    }
  }, []);

  const generatedUrl = url ? `${baseUrl}/api/custom?url=${encodeURIComponent(url)}&size=${size}&style=${styleMode}` : '';
  const heightVal = size === 'auto' ? '152' : size;
  const widthVal = size === 'auto' ? '100%' : size;
  const iframeCode = url ? `<iframe src="${generatedUrl}" width="${widthVal}" height="${heightVal}" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>` : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(iframeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white/30 font-sans p-6 md:p-12 lg:p-24 relative overflow-hidden flex flex-col items-center">
      {/* Background elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="w-full max-w-5xl relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-12 gap-6 pb-6 border-b border-white/10">
          <Link href="/" className="group flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white/70 group-hover:text-white group-hover:-translate-x-1 transition-all"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
          </Link>
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">Custom Studio</h1>
            <p className="text-white/60 text-sm max-w-sm">Tùy chỉnh kích thước và hình dáng khi nhúng (Custom Embed).</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-12">
          {/* Controls */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="space-y-4">
              <label className="block text-sm font-semibold tracking-wide text-white/90">URL Nhạc/Video</label>
              <input 
                type="text" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Ví dụ: https://open.spotify.com/track/..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-semibold tracking-wide text-white/90">Kích thước (px hoặc auto)</label>
              <select 
                value={size} 
                onChange={(e) => setSize(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 hover:bg-white/10 transition-all appearance-none cursor-pointer"
              >
                <option value="auto" className="bg-neutral-900 text-white">Tự động (Auto)</option>
                <option value="128" className="bg-neutral-900 text-white">Nhỏ (128px)</option>
                <option value="200" className="bg-neutral-900 text-white">Vừa (200px)</option>
                <option value="300" className="bg-neutral-900 text-white">Lớn (300px)</option>
                <option value="400" className="bg-neutral-900 text-white">Rất Lớn (400px)</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-semibold tracking-wide text-white/90">Hình dáng (Style)</label>
              <div className="grid grid-cols-2 gap-3">
                {['default', 'rounded', 'circle', 'pill'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setStyleMode(s)}
                    className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all capitalize ${styleMode === s ? 'bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]' : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-4 pt-6 border-t border-white/10">
               <button 
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-6 rounded-2xl hover:bg-neutral-200 transition-all"
               >
                 {copied ? (
                   <>
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-emerald-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                     Đã sao chép!
                   </>
                 ) : (
                   <>
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                     Copy Embed Code
                   </>
                 )}
               </button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="flex-1 bg-black/20 border border-white/10 rounded-3xl backdrop-blur-3xl overflow-hidden p-6 flex flex-col items-center justify-center min-h-[400px]">
              <h3 className="w-full text-center text-xs uppercase tracking-[0.2em] font-bold text-white/30 mb-8">Live Preview</h3>
              
              {generatedUrl ? (
                <div 
                  className={`relative transition-all duration-500 ${size === 'auto' ? 'w-full max-w-sm h-[152px]' : ''}`}
                  style={size !== 'auto' ? { width: `${size}px`, height: `${size}px` } : {}}
                >
                  <iframe 
                    src={generatedUrl} 
                    className="w-full h-full border-none shadow-2xl transition-all duration-300 rounded-3xl"
                    style={
                      styleMode === 'rounded' ? { borderRadius: '16px' } :
                      styleMode === 'circle' ? { borderRadius: '50%' } :
                      styleMode === 'pill' ? { borderRadius: '9999px' } :
                      { borderRadius: '0px' }
                    }
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  />
                  
                  {/* Decorative glow behind preview */}
                  <div className="absolute inset-0 bg-white/5 blur-[30px] rounded-full -z-10 scale-110"></div>
                </div>
              ) : (
                <p className="text-white/40">Nhập URL để xem trước</p>
              )}
            </div>
            
            <div className="mt-6 p-4 bg-[#111] rounded-2xl border border-white/10 font-mono text-xs text-white/60 overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-inner">
               {iframeCode || 'Đang tạo mã...'}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
