import React from 'react';
import { Tour, Currency } from '../types';
import { formatPrice } from '../utils/formatters';
import { X, Calendar, Car, ShieldCheck, Check, ArrowRight, Utensils, Hotel } from 'lucide-react';

interface TourDetailModalProps {
  tour: Tour | null;
  currency: Currency;
  onClose: () => void;
  onBookNow: (tour: Tour) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  currency,
  onClose,
  onBookNow
}) => {
  if (!tour) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#181c21] border border-[#d4af37]/30 rounded-3xl shadow-2xl no-scrollbar">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0a0e13]/80 border border-[#d4af37]/40 text-[#e0e2ea] hover:text-[#f2ca50] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner */}
        <div className="relative w-full h-64 sm:h-72">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181c21] via-[#181c21]/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[#0a0e13]/85 border border-[#f2ca50]/30 text-[#f2ca50] font-label-caps text-[10px] uppercase">
                {tour.durationLabel}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#0a0e13]/85 border border-[#d4af37]/30 text-[#e0e2ea] font-label-caps text-[10px] uppercase">
                {tour.vehicleType}
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#e0e2ea] font-serif">
              {tour.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Route Overview */}
          <div className="p-4 rounded-2xl bg-[#1c2025] border border-[#d4af37]/20 flex flex-col gap-2">
            <span className="font-label-caps text-[10px] text-[#f2ca50] uppercase tracking-wider">
              Complete Route Journey
            </span>
            <div className="flex flex-wrap items-center gap-2 font-meta-numeric text-sm text-[#e0e2ea]">
              {tour.route.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-2.5 py-1 rounded bg-[#101419] border border-[#d4af37]/20">{step}</span>
                  {idx < tour.route.length - 1 && <span className="text-[#f2ca50]">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Overview text */}
          <p className="font-body-md text-sm sm:text-base text-[#d0c5af] leading-relaxed">
            {tour.overview}
          </p>

          {/* Daily Itinerary Ledger */}
          <div>
            <h4 className="font-headline-sm text-xl text-[#f2ca50] font-serif mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#f2ca50]" />
              <span>Day-By-Day Itinerary</span>
            </h4>

            <div className="space-y-4">
              {tour.itinerary.map((day) => (
                <div
                  key={day.day}
                  className="p-5 rounded-2xl bg-[#1c2025] border border-[#d4af37]/20 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-xs text-[#f2ca50] uppercase tracking-wider font-bold">
                      Day {day.day}
                    </span>
                    <h5 className="font-headline-sm text-base text-[#e0e2ea] font-serif font-semibold">
                      {day.title}
                    </h5>
                  </div>

                  <p className="font-body-sm text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
                    {day.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#d4af37]/10 text-xs text-[#d0c5af]">
                    <div className="flex items-center gap-2">
                      <Utensils className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                      <span>{day.meals}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Hotel className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                      <span>{day.stay}</span>
                    </div>
                  </div>

                  {day.highlights && day.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {day.highlights.map((h, i) => (
                        <span key={i} className="px-2 py-0.5 rounded text-[10px] bg-[#101419] text-[#ffe088]">
                          • {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions List */}
          <div>
            <h4 className="font-headline-sm text-xl text-[#e0e2ea] font-serif mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#f2ca50]" />
              <span>Private VIP Inclusions</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {tour.inclusions.map((inc, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#d0c5af]">
                  <Check className="w-4 h-4 text-[#f2ca50] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Booking Footer */}
          <div className="pt-6 border-t border-[#d4af37]/20 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-label-caps text-[10px] text-[#99907c] uppercase block">
                Starting Rate
              </span>
              <span className="font-headline-sm text-2xl sm:text-3xl text-[#f2ca50] font-serif font-bold">
                {formatPrice(tour.startingPriceUSD, currency)}{' '}
                <span className="text-xs text-[#d0c5af] font-sans font-normal">/ guest</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
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
                  onBookNow(tour);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] font-label-caps text-xs uppercase font-bold shadow-lg cursor-pointer hover:scale-102 transition-transform"
              >
                <span>Book This Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
