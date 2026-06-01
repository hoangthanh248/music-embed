import type {Metadata} from 'next';
import './globals.css'; // Global styles
import LanguageSwitcher from '@/components/language-switcher';

export const metadata: Metadata = {
  title: 'Thazh Embed',
  description: 'A frictionless, edge-ready proxy to embed music and video without heavy third-party intermediate trackers.',
  openGraph: {
    title: 'Thazh Embed - Edge App',
    description: 'A frictionless, edge-ready proxy to embed music and video without heavy third-party intermediate trackers.',
    url: 'https://embed.thazh.qzz.io',
    siteName: 'Thazh Embed',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thazh Embed API',
    description: 'Edge-ready proxy to embed music without heavy third-party intermediate trackers.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased min-h-screen relative overflow-hidden" suppressHydrationWarning>
        {/* Liquid Glass Dynamic Background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-600/30 blur-[140px] rounded-full mix-blend-screen animate-blob"></div>
          <div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-600/30 blur-[130px] rounded-full mix-blend-screen animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[80vw] bg-pink-600/30 blur-[150px] rounded-full mix-blend-screen animate-blob animation-delay-4000"></div>
          
          {/* Glass Noise Overlay for Apple Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <LanguageSwitcher />
        
        {/* Scrollable Container with Glass Effect */}
        <div className="h-screen overflow-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
