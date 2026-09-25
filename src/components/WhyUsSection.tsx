import React from 'react';
import { MapPin, Key, Camera, Headphones } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  return (
    <section id="about-us" className="w-full py-20 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="font-label-caps text-xs uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
          <span className="w-6 h-px bg-[#f2ca50]" /> The Unknown Traveler Standard <span className="w-6 h-px bg-[#f2ca50]" />
        </span>
        <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#e0e2ea] font-serif mt-2">
          Crafted For Discerning Travelers
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-[#181c21] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all flex flex-col gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-[#1c2025] flex items-center justify-center text-[#f2ca50] group-hover:bg-[#d4af37] group-hover:text-[#3c2f00] transition-colors">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-headline-sm text-xl text-[#e0e2ea] font-serif">Local Experience</h3>
          <p className="font-body-sm text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
            Discover authentic Sri Lanka far beyond ordinary tourist corridors. Enjoy private access to monastic ruins and secret Ceylon estates.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#181c21] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all flex flex-col gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-[#1c2025] flex items-center justify-center text-[#f2ca50] group-hover:bg-[#d4af37] group-hover:text-[#3c2f00] transition-colors">
            <Key className="w-6 h-6" />
          </div>
          <h3 className="font-headline-sm text-xl text-[#e0e2ea] font-serif">Private &amp; Flexible</h3>
          <p className="font-body-sm text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
            Your private vehicle and licensed English chauffeur-guide stay dedicated strictly to you. Stop whenever you wish with zero rush.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#181c21] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all flex flex-col gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-[#1c2025] flex items-center justify-center text-[#f2ca50] group-hover:bg-[#d4af37] group-hover:text-[#3c2f00] transition-colors">
            <Camera className="w-6 h-6" />
          </div>
          <h3 className="font-headline-sm text-xl text-[#e0e2ea] font-serif">Cinematic Memories</h3>
          <p className="font-body-sm text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
            Partnered directly with UNKNOWN STUDIO to document your voyage through high-end drone footage, editorial photography, and film.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#181c21] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all flex flex-col gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-[#1c2025] flex items-center justify-center text-[#f2ca50] group-hover:bg-[#d4af37] group-hover:text-[#3c2f00] transition-colors">
            <Headphones className="w-6 h-6" />
          </div>
          <h3 className="font-headline-sm text-xl text-[#e0e2ea] font-serif">Personal Service</h3>
          <p className="font-body-sm text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
            White-glove concierge coverage from your Bandaranaike VIP lounge arrival until your departure flight home.
          </p>
        </div>
      </div>
    </section>
  );
};
