import React from 'react';
import { Destination } from '../types';
import { X, Calendar, Mountain, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onPlanTripTo: (destName: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onPlanTripTo
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#181c21] border border-[#d4af37]/30 rounded-3xl shadow-2xl no-scrollbar">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0a0e13]/80 border border-[#d4af37]/40 text-[#e0e2ea] hover:text-[#f2ca50] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner */}
        <div className="relative w-full h-72 sm:h-80">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181c21] via-[#181c21]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-1">
            <span className="px-3 py-1 rounded-full bg-[#0a0e13]/80 border border-[#f2ca50]/30 text-[#f2ca50] font-label-caps text-[10px] uppercase w-fit">
              {destination.category}
            </span>
            <h3 className="font-headline-lg text-3xl sm:text-4xl text-[#e0e2ea] font-serif">
              {destination.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#1c2025] border border-[#d4af37]/20 text-xs">
            <div className="flex items-center gap-2">
              <Mountain className="w-4 h-4 text-[#f2ca50] shrink-0" />
              <div>
                <span className="text-[#99907c] block text-[10px] uppercase font-label-caps">Elevation</span>
                <span className="text-[#e0e2ea] font-semibold">{destination.elevation}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#f2ca50] shrink-0" />
              <div>
                <span className="text-[#99907c] block text-[10px] uppercase font-label-caps">Best Season</span>
                <span className="text-[#e0e2ea] font-semibold">{destination.bestSeason}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#f2ca50] shrink-0" />
              <div>
                <span className="text-[#99907c] block text-[10px] uppercase font-label-caps">Recommended Stay</span>
                <span className="text-[#e0e2ea] font-semibold">{destination.recommendedDays}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-headline-sm text-lg text-[#f2ca50] font-serif mb-2">
              About {destination.name}
            </h4>
            <p className="font-body-md text-sm text-[#d0c5af] leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Key Experiences */}
          <div>
            <h4 className="font-headline-sm text-lg text-[#e0e2ea] font-serif mb-3">
              Curated Private Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {destination.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#d0c5af]">
                  <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Attractions */}
          <div>
            <h4 className="font-headline-sm text-lg text-[#e0e2ea] font-serif mb-2">
              Notable Landmarks
            </h4>
            <div className="flex flex-wrap gap-2">
              {destination.attractions.map((att, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#101419] border border-[#d4af37]/20 text-xs text-[#e0e2ea]"
                >
                  {att}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-[#d4af37]/20 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#262a30] text-[#e0e2ea] text-xs uppercase font-label-caps"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onPlanTripTo(destination.name);
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] font-label-caps text-xs uppercase font-bold shadow-lg cursor-pointer"
            >
              <span>Build Tour to {destination.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
