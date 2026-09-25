import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface FinalCTASectionProps {
  onPlanTrip: () => void;
  onOpenWhatsApp: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onPlanTrip,
  onOpenWhatsApp
}) => {
  return (
    <section className="w-full py-20 relative overflow-hidden bg-[#1c2025]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAanu-Nab3jvZw4J-IjO_Xfcd1rOi-s0hL9mGBlao_NHFt0UmpsLl9tp0kZUuTmbDoZkCGzY2JAxRfYLfYnvbpB8v4T8gv7gVOhj__IkQKXDkmXzPJx0xySGQJ-oW807gQffoZnpAuM5rhO7zDzFGuKwWiQ69_yaGjvYiB5--uD5YKdo3urDpZP0nxXUZtZqXpipq527Y6jV7OZ-c-dInX2pkOt39_HqdSVcYrbW2Z27INyzm-NaplZGA"
          alt="Ceylon Coastline Sunset"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101419] via-[#101419]/90 to-[#101419]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 text-center flex flex-col items-center">
        <span className="font-label-caps text-xs uppercase text-[#f2ca50] tracking-[0.2em] mb-2">
          Begin Your Journey
        </span>
        <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#e0e2ea] max-w-3xl font-serif">
          Ready To Discover Sri Lanka Your Way?
        </h2>
        <p className="font-body-xl text-base sm:text-lg text-[#d0c5af] max-w-2xl mt-3 mb-8 font-light leading-relaxed">
          Tell us what kind of experience you desire. We will craft your custom Sri Lankan voyage with discretion, luxury, and zero obligation.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onPlanTrip}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] font-label-caps text-xs tracking-widest uppercase font-bold shadow-[0_12px_32px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Plan My Trip</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onOpenWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#262a30] border border-[#d4af37]/40 text-[#e0e2ea] hover:text-[#f2ca50] font-label-caps text-xs tracking-widest uppercase transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#f2ca50]" />
            <span>WhatsApp Us (+94 XX XXX XXXX)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
