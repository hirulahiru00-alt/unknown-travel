import React from 'react';
import { X, ShieldCheck, Car, HeartHandshake, Compass } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlanTrip: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onPlanTrip
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#181c21] border border-[#d4af37]/30 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 no-scrollbar">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0a0e13]/80 border border-[#d4af37]/40 text-[#e0e2ea] hover:text-[#f2ca50] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-6">
          <div>
            <span className="font-label-caps text-xs text-[#f2ca50] uppercase tracking-[0.2em] block">
              The Unknown Traveler Heritage
            </span>
            <h3 className="font-headline-lg text-3xl sm:text-4xl text-[#e0e2ea] font-serif mt-1">
              Private Luxury &amp; Ceylon Reverence
            </h3>
            <p className="font-body-md text-sm sm:text-base text-[#d0c5af] mt-2 leading-relaxed">
              Founded on the premise that true luxury is intimacy, unhurried time, and authentic human connection, Unknown Traveler curates private expeditions across Sri Lanka for travelers who value discretion and personalized craft.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#1c2025] border border-[#d4af37]/20 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#f2ca50]">
                <Car className="w-4 h-4" />
              </div>
              <h4 className="font-headline-sm text-base text-[#e0e2ea] font-serif font-semibold">
                Executive Chauffeur Fleet
              </h4>
              <p className="text-xs text-[#d0c5af] leading-relaxed">
                Pristine Mercedes-Benz sedans, Land Cruiser Prado 4x4s, and luxury executive vans maintained to international standards with chilled king coconut, Wi-Fi, and plush leather seating.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1c2025] border border-[#d4af37]/20 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#f2ca50]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-headline-sm text-base text-[#e0e2ea] font-serif font-semibold">
                Senior Chauffeur-Naturalists
              </h4>
              <p className="text-xs text-[#d0c5af] leading-relaxed">
                Licensed government tourist guides fluent in English with deep historical knowledge, wildlife tracking instincts, and warm Sri Lankan hospitality.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1c2025] border border-[#d4af37]/20 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#f2ca50]">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="font-headline-sm text-base text-[#e0e2ea] font-serif font-semibold">
                100% Tailor-Made Freedom
              </h4>
              <p className="text-xs text-[#d0c5af] leading-relaxed">
                No rigid itineraries or tour buses. If you wish to linger at a tea bungalow or stop by an artisan spice garden, your journey pivots to your heartbeat.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1c2025] border border-[#d4af37]/20 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#f2ca50]">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h4 className="font-headline-sm text-base text-[#e0e2ea] font-serif font-semibold">
                Regenerative Stewardship
              </h4>
              <p className="text-xs text-[#d0c5af] leading-relaxed">
                We work directly with local families, village tea growers, and coastal conservation projects, ensuring your journey enriches the island’s heritage.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#d4af37]/20 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#262a30] text-[#e0e2ea] text-xs font-label-caps uppercase"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onPlanTrip();
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] font-label-caps text-xs uppercase font-bold shadow-lg"
            >
              Start Planning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
