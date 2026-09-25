import React, { useState } from 'react';
import { TOURS } from '../data/toursData';
import { Tour, Currency } from '../types';
import { formatPrice } from '../utils/formatters';
import { CheckCircle2, ShieldCheck, Car, Eye, ArrowRight, DollarSign } from 'lucide-react';

interface ToursSectionProps {
  currency: Currency;
  onSelectTour: (tour: Tour) => void;
  onBookTour: (tour: Tour) => void;
}

export const ToursSection: React.FC<ToursSectionProps> = ({
  currency,
  onSelectTour,
  onBookTour
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Signature Journeys' },
    { id: 'day-trip', label: '1-Day Intensive' },
    { id: 'highland', label: 'Highland & Tea Mist' },
    { id: 'wildlife', label: 'Safari & Wilds' },
    { id: 'grand', label: 'Grand Expeditions (7+ Days)' }
  ];

  const filteredTours = activeFilter === 'all'
    ? TOURS
    : TOURS.filter(t => t.category === activeFilter);

  return (
    <section id="popular-tours" className="w-full py-20 bg-[#0a0e13] border-y border-[#d4af37]/15">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header with Currency Notice */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="font-label-caps text-xs uppercase text-[#f2ca50] tracking-[0.2em] flex items-center gap-2">
              <span className="w-6 h-px bg-[#f2ca50]" /> Signature Experiences
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#e0e2ea] font-serif mt-2">
              Handcrafted Private Journeys
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-[#181c21] px-4 py-2 rounded-full border border-[#d4af37]/20">
            <DollarSign className="w-4 h-4 text-[#f2ca50]" />
            <span className="font-meta-numeric text-xs text-[#d0c5af]">
              Live in <strong className="text-[#ffe088]">{currency}</strong> • All tours fully customizable for private groups
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-4 py-1.5 rounded-full font-label-caps text-xs whitespace-nowrap uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === opt.id
                  ? 'bg-[#d4af37] text-[#3c2f00] font-bold shadow-md'
                  : 'bg-[#181c21] text-[#d0c5af] hover:text-[#e0e2ea] border border-[#d4af37]/20 hover:border-[#d4af37]/50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Tours Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-[#181c21]/80 backdrop-blur-xl border border-[#d4af37]/25 hover:border-[#f2ca50]/60 rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
            >
              <div className="flex flex-col gap-4">
                {/* Visual Banner with Tags */}
                <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#0a0e13]/85 backdrop-blur-md border border-[#f2ca50]/30 text-[#f2ca50] font-label-caps text-[10px]">
                      {tour.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#0a0e13]/85 backdrop-blur-md border border-[#d4af37]/20 text-[#e0e2ea] font-label-caps text-[10px]">
                      PRIVATE CHAUFFEUR
                    </span>
                  </div>
                </div>

                {/* Tour Info */}
                <div>
                  {/* Route Breadcrumb */}
                  <div className="flex flex-wrap items-center gap-1 font-meta-numeric text-xs text-[#f2ca50] mb-2 font-medium">
                    {tour.route.map((stop, idx) => (
                      <React.Fragment key={idx}>
                        <span>{stop}</span>
                        {idx < tour.route.length - 1 && (
                          <span className="text-[#99907c] mx-0.5">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <h3 className="font-headline-md text-2xl text-[#e0e2ea] font-serif group-hover:text-[#ffe088] transition-colors leading-snug">
                    {tour.title}
                  </h3>

                  <p className="font-body-md text-sm text-[#d0c5af] mt-2 line-clamp-3 leading-relaxed">
                    {tour.overview}
                  </p>
                </div>

                {/* Inclusions Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#d4af37]/15">
                  <div className="flex items-center gap-2 text-[#d0c5af] font-body-sm text-xs">
                    <ShieldCheck className="w-4 h-4 text-[#f2ca50] shrink-0" />
                    <span>All VIP access &amp; entrance passes</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#d0c5af] font-body-sm text-xs">
                    <Car className="w-4 h-4 text-[#f2ca50] shrink-0" />
                    <span className="truncate">{tour.vehicleType}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Price & Action Row */}
              <div className="pt-5 mt-5 border-t border-[#d4af37]/20 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-label-caps text-[10px] text-[#99907c] uppercase block">
                    Starting From
                  </span>
                  <span className="font-headline-sm text-2xl text-[#f2ca50] font-serif font-bold">
                    {formatPrice(tour.startingPriceUSD, currency)}{' '}
                    <span className="font-body-sm text-xs text-[#d0c5af] font-normal font-sans">
                      / guest
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectTour(tour)}
                    className="px-4 py-2 rounded-full bg-[#262a30] border border-[#d4af37]/30 hover:border-[#f2ca50] text-[#e0e2ea] hover:text-[#f2ca50] font-label-caps text-xs uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Itinerary</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookTour(tour)}
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] font-label-caps text-xs uppercase font-bold shadow-[0_4px_16px_rgba(212,175,55,0.3)] hover:scale-102 transition-transform flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Book Tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
