'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';

const PLATFORMS = [
  { id: 'spotify', name: 'Spotify', icon: 'spotify/white', brandColor: '#1DB954' },
  { id: 'apple', name: 'Apple Music', icon: 'applemusic/white', brandColor: '#FA243C' },
  { id: 'soundcloud', name: 'SoundCloud', icon: 'soundcloud/white', brandColor: '#FF3300' },
  { id: 'deezer', name: 'Deezer', icon: 'deezer/white', brandColor: '#FEAA2D' },
  { id: 'youtube', name: 'YouTube', icon: 'youtube/white', brandColor: '#FF0000' },
  { id: 'amazon', name: 'Amazon Music', icon: 'amazon/white', brandColor: '#00A8E1' },
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
         {/* Using simpleicons */}
         <img src={`https://cdn.simpleicons.org/${platform.icon}`} alt={platform.name} className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
      </div>
      
      <div className="text-center relative z-10 w-full space-y-2 pointer-events-none">
        <h3 className="text-2xl font-bold text-white tracking-widest uppercase">{platform.name}</h3>
        <p className="text-xs text-white/50 tracking-widest uppercase">Swipe to explore →</p>
      </div>
    </motion.div>
  );
}
