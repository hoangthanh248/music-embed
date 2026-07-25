'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Settings2, 
  PlaySquare, 
  BookOpen, 
  Layers, 
  Mail,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Custom Studio', href: '/custom', icon: Settings2 },
  { name: 'Demo', href: '/demo', icon: PlaySquare },
  { name: 'Docs', href: '/docs', icon: BookOpen },
  { name: 'Platforms', href: '/platforms', icon: Layers },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl text-white"
        onClick={toggleMobile}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Container */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-40 w-64
        transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        transition-transform duration-300 ease-in-out
        bg-black/20 backdrop-blur-3xl border-r border-white/10
        flex flex-col
      `}>
        {/* Logo/Brand */}
        <div className="p-6 md:p-8">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:scale-105 transition-transform">
              T
            </div>
            <span className="font-bold tracking-widest uppercase text-sm">Thazh Embed</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium
                  ${isActive 
                    ? 'bg-white/10 text-white shadow-inner border border-white/5' 
                    : 'text-white/50 hover:text-white hover:bg-white/5'}
                `}
              >
                <Icon size={18} className={isActive ? 'text-white' : 'text-white/50'} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-6 border-t border-white/10">
          <a 
            href="https://github.com/hoangthanh248/music-embed"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium text-white/70 hover:text-white border border-white/5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleMobile}
        />
      )}
    </>
  );
}
