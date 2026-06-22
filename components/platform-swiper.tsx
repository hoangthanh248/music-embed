'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';

const PLATFORMS = [
  { id: 'spotify', name: 'Spotify', icon: 'spotify/white', brandColor: '#1DB954' },
  { id: 'apple', name: 'Apple Music', icon: 'applemusic/white', brandColor: '#FA243C' },
  { id: 'soundcloud', name: 'SoundCloud', icon: 'soundcloud/white', brandColor: '#FF3300' },
  { id: 'deezer', name: 'Deezer', icon: 'deezer/white', brandColor: '#FEAA2D' },
  { id: 'youtube', name: 'YouTube', icon: 'youtube/white', brandColor: '#FF0000' },
  { id: 'amazon', name: 'Amazon Music', icon: 'amazonmusic/white', brandColor: '#00A8E1', customSvg: (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" fill="currentColor">
      <path d="M36,5H14c-4.971,0-9,4.029-9,9v22c0,4.971,4.029,9,9,9h22c4.971,0,9-4.029,9-9V14C45,9.029,40.971,5,36,5z M38.19,21.254	c0.65-0.279,1.42-0.317,2.07-0.121c0.27,0.084,0.51,0.196,0.74,0.335v1.23c-0.72-0.494-1.55-0.634-2.19-0.289	c-0.68,0.373-1.08,1.155-1.06,1.975c-0.01,0.904,0.29,1.742,0.92,2.133c0.56,0.382,1.44,0.382,2.33,0.242v1.025	c-0.35,0.112-0.72,0.177-1.1,0.214c-0.63,0.047-1.33-0.047-1.95-0.382c-0.63-0.326-1.09-0.894-1.35-1.463	c-0.25-0.587-0.34-1.183-0.35-1.752C36.22,23.191,36.87,21.831,38.19,21.254z M34,18.01c0.552,0,1,0.448,1,1s-0.448,1-1,1	s-1-0.448-1-1S33.448,18.01,34,18.01z M34.75,21.01v7h-1.5v-7H34.75z M27,26.175c0.64,0.261,1.42,0.532,2.03,0.59	c0.61,0.068,1.28-0.01,1.67-0.223c0.19-0.116,0.23-0.278,0.23-0.458s-0.036-0.282-0.123-0.417c-0.159-0.246-0.597-0.432-1.287-0.597	c-0.34-0.097-0.71-0.194-1.12-0.416c-0.41-0.184-1.243-0.852-1.081-1.991c0.087-0.609,0.718-1.205,1.601-1.483	c1.029-0.325,2.15-0.164,3.08,0.281V22.7c-0.83-0.426-1.82-0.641-2.66-0.361c-0.25,0.077-0.58,0.251-0.58,0.564	c0,0.751,0.87,0.893,1.2,1c0.34,0.106,0.71,0.203,1.11,0.406c0.4,0.194,1.202,0.678,1.202,1.783c0,1.058-0.522,1.447-0.952,1.621	c-0.89,0.387-1.68,0.319-2.45,0.213c-0.65-0.116-1.28-0.31-1.87-0.677C27,27.249,27,26.175,27,26.175z M20.25,21.012l1.5-0.002	l0.003,2.42c0.014,0.79,0.012,1.651,0.003,2.383c-0.035,0.391,0.402,0.847,0.976,0.917c0.306,0.034,0.534,0.009,0.886-0.14	c0.208-0.082,0.42-0.152,0.632-0.225V21.01l1.5,0.001v6.818h-1.5v-0.236c-0.041,0.022-0.08,0.046-0.12,0.067	c-0.381,0.228-0.992,0.386-1.514,0.343c-0.542-0.035-1.088-0.225-1.533-0.586c-0.442-0.356-0.776-0.915-0.819-1.529	c-0.027-0.88-0.02-1.634-0.011-2.457L20.25,21.012z M9.25,21.01h1.5v0.688c0.37-0.134,0.737-0.274,1.109-0.401	c0.535-0.19,1.206-0.152,1.733,0.141c0.218,0.117,0.409,0.282,0.577,0.469c0.562-0.208,1.123-0.417,1.689-0.611	c0.535-0.19,1.206-0.152,1.733,0.141c0.532,0.286,0.946,0.809,1.093,1.418c0.039,0.152,0.056,0.306,0.065,0.461l0.004,0.317	l0.006,0.625l-0.006,1.25l-0.003,2.5h-1.5l-0.006-4.844c-0.042-0.425-0.519-0.797-1.019-0.661c-0.51,0.135-1.024,0.255-1.537,0.379	c0.034,0.143,0.052,0.287,0.061,0.433l0.004,0.317l0.006,0.625l-0.006,1.25l-0.003,2.5h-1.5l-0.006-4.844	c-0.042-0.426-0.519-0.797-1.019-0.661c-0.489,0.13-0.983,0.245-1.475,0.364v5.14h-1.5C9.25,28.006,9.25,21.01,9.25,21.01z M38.768,33.932c-2.214,1.57-4.688,2.605-7.285,3.277c-2.595,0.663-5.297,0.914-7.986,0.729c-2.688-0.18-5.313-0.836-7.787-1.794	c-2.466-0.99-4.797-2.263-6.857-3.931c-0.107-0.087-0.124-0.245-0.037-0.352c0.077-0.095,0.209-0.119,0.313-0.063l0.014,0.008	c2.249,1.217,4.653,2.149,7.067,2.889c2.433,0.692,4.909,1.187,7.4,1.288c2.485,0.087,4.997-0.107,7.449-0.617	c2.442-0.504,4.905-1.236,7.17-2.279l0.039-0.018c0.251-0.115,0.547-0.006,0.663,0.245C39.035,33.537,38.961,33.796,38.768,33.932z M39.882,36.892c-0.278,0.21-0.556,0.14-0.417-0.21c0.417-1.12,1.32-3.501,0.903-4.061c-0.486-0.63-2.987-0.28-4.098-0.14	c-0.347,0-0.347-0.28-0.069-0.49c0.972-0.7,2.292-0.98,3.404-0.98c1.111,0,2.084,0.21,2.292,0.56	C42.243,31.99,41.757,35.281,39.882,36.892z"></path>
    </svg>
  ) },
  { id: 'tiktok', name: 'TikTok', icon: 'tiktok/white', brandColor: '#FF0050' },
  { id: 'youtubemusic', name: 'YouTube Music', icon: 'youtubemusic/white', brandColor: '#FF0000' },
];

export default function PlatformSwiper() {
  const [cards, setCards] = useState(PLATFORMS);
  const [leaveX, setLeaveX] = useState(0);

  const moveToEnd = (id: string, dir: number) => {
    setLeaveX(dir * 300);
    setTimeout(() => {
      setCards((prev) => {
        const idx = prev.findIndex((c) => c.id === id);
        if (idx === -1) return prev;
        const newCards = [...prev];
        const card = newCards.splice(idx, 1)[0];
        newCards.push(card);
        return newCards;
      });
      setLeaveX(0); // Reset for next
    }, 200); // Allow exit animation to finish
  };

  return (
    <div className="relative w-64 h-80 flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        {cards.map((platform, index) => {
          const isTop = index === 0;
          return (
            <Card
              key={platform.id}
              platform={platform}
              isTop={isTop}
              index={index}
              leaveX={isTop ? leaveX : 0}
              onSwipe={(dir: number) => moveToEnd(platform.id, dir)}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}

function Card({ platform, isTop, index, onSwipe, leaveX }: { platform: any, isTop: boolean, index: number, onSwipe: (dir: number) => void, leaveX: number }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (e: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      onSwipe(1);
    } else if (info.offset.x < -swipeThreshold) {
      onSwipe(-1);
    } else {
      // snap back handled by framer-motion drag constraints
    }
  };

  // Stack styling calculation
  const yOffset = index * 8; // pushes cards down
  const scale = 1 - index * 0.05;
  const zIndex = 100 - index;
  const blur = index > 1 ? 'blur(4px)' : 'blur(0px)';
  const opacityBg = Math.max(1 - index * 0.2, 0);

  return (
    <motion.div
      className="absolute w-full h-full rounded-3xl p-6 flex flex-col items-center justify-center gap-6 cursor-grab active:cursor-grabbing border-2 backdrop-blur-3xl shadow-2xl overflow-hidden group"
      style={{
        zIndex,
        ...(isTop ? { x, rotate } : {}),
        backgroundColor: `rgba(20, 20, 20, ${opacityBg})`,
        borderColor: platform.brandColor ? `${platform.brandColor}50` : 'rgba(255,255,255,0.1)',
        backdropFilter: blur,
        boxShadow: `0 20px 40px -10px ${platform.brandColor}30`,
      }}
      animate={{
        y: yOffset,
        scale: scale,
        x: leaveX !== 0 ? leaveX : 0, 
        opacity: leaveX !== 0 ? 0 : 1,
        rotate: leaveX !== 0 ? (leaveX > 0 ? 15 : -15) : 0,
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      exit={{ x: leaveX, opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={handleDragEnd}
    >
      {/* Background glow using brand color */}
      <div 
        className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300" 
        style={{ 
          background: `radial-gradient(circle at 50% 50%, ${platform.brandColor}, transparent)` 
        }} 
      />
      
      <div className="w-24 h-24 rounded-full flex items-center justify-center relative z-10 p-4 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${platform.brandColor}20`, border: `1px solid ${platform.brandColor}50` }}>
         {/* Using simpleicons or custom SVG */}
         {platform.customSvg ? (
           <div className="w-full h-full text-white pointer-events-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
             {platform.customSvg}
           </div>
         ) : (
           <>
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src={`https://cdn.simpleicons.org/${platform.icon}`} alt={platform.name} className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
           </>
         )}
      </div>
      
      <div className="text-center relative z-10 w-full space-y-2 pointer-events-none">
        <h3 className="text-2xl font-bold text-white tracking-widest uppercase">{platform.name}</h3>
        <p className="text-xs text-white/50 tracking-widest uppercase">Swipe to explore →</p>
      </div>
    </motion.div>
  );
}
