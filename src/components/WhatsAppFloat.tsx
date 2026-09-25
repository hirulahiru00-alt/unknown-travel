import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatProps {
  onClick: () => void;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ onClick }) => {
  return (
    <aside className="fixed bottom-6 right-6 z-40 flex items-center">
      <button
        type="button"
        onClick={onClick}
        className="group flex items-center gap-3 bg-[#262a30]/90 hover:bg-[#31353b]/95 border border-[#d4af37]/40 hover:border-[#f2ca50] backdrop-blur-xl px-4 py-2.5 rounded-full shadow-[0_12px_32px_-8px_rgba(212,175,55,0.3)] transition-all cursor-pointer focus:outline-none"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f2ca50] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f2ca50]" />
        </span>
        <div className="flex flex-col text-left">
          <span className="font-label-caps text-[10px] text-[#f2ca50] uppercase tracking-wider font-semibold">
            Chat with Us
          </span>
          <span className="font-meta-numeric text-xs text-[#e0e2ea]">
            +94 XX XXX XXXX
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#3c2f00] flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
          <MessageCircle className="w-4 h-4 fill-current" />
        </div>
      </button>
    </aside>
  );
};
