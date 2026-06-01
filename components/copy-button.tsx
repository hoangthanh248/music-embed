'use client';

import { useState } from 'react';

export default function CopyButton({ content, label = "Copy Markdown for AI" }: { content: string, label?: string }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <button onClick={handleCopy} className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-sm font-semibold transition-all backdrop-blur-md text-white whitespace-nowrap">
      {copied ? "Copied!" : label}
    </button>
  );
}
