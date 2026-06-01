'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isVi = pathname.startsWith('/vi');
  
  let toggleUrl = '/';
  if (isVi) {
    toggleUrl = pathname.replace(/^\/vi/, '') || '/';
  } else {
    toggleUrl = `/vi${pathname === '/' ? '' : pathname}`;
  }
  
  return (
    <div className="fixed top-6 right-6 z-50">
      <Link href={toggleUrl} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-semibold backdrop-blur-md transition-all shadow-xl">
        <span className={!isVi ? "text-white" : "text-white/40"}>EN</span>
        <span className="text-white/20">|</span>
        <span className={isVi ? "text-white" : "text-white/40"}>VI</span>
      </Link>
    </div>
  );
}
