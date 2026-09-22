import React, { useState } from 'react';
import { DESTINATIONS } from '../data/destinationsData';
import { Destination } from '../types';
import { ChevronRight, Mountain } from 'lucide-react';

interface DestinationsSectionProps {
  onSelectDestination: (dest: Destination) => void;
  onPlanTripTo: (destName: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
  onPlanTripTo
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Destinations' },
    { id: 'Cultural Triangle', label: 'Cultural Triangle' },
    { id: 'Highlands', label: 'Highlands' },
    { id: 'Royal Kingdom', label: 'Royal Kingdom' },
    { id: 'Tea Country', label: 'Tea Country' },
    { id: 'Safari Wilds', label: 'Safari Wilds' },
    { id: 'Coastal Haven', label: 'Coastal Haven' }
  ];

  const filteredDestinations = activeCategory === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.category === activeCategory);

  return (
    <section id="destinations" className="w-full py-20 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-xs uppercase text-[#f2ca50] tracking-[0.2em] flex items-center gap-2">
            <span className="w-6 h-px bg-[#f2ca50]" /> Iconic Landscapes
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#e0e2ea] font-serif leading-tight">
            Curated Destinations Across The <br className="hidden sm:inline" />
            <span className="italic text-[#f2ca50]">Pearl Of The Indian Ocean</span>
          </h2>
        </div>
        <p className="font-body-md text-[#d0c5af] max-w-md">
          From ancient sky-citadels to misty high-country tea estates and sun-drenched colonial shorelines.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-1.5 rounded-full font-label-caps text-xs whitespace-nowrap uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#d4af37] text-[#3c2f00] font-bold shadow-md'
                : 'bg-[#181c21] text-[#d0c5af] hover:text-[#e0e2ea] border border-[#d4af37]/20 hover:border-[#d4af37]/50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 6 Luxury Destination Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((dest) => (
          <div
            key={dest.id}
            className="group relative rounded-2xl overflow-hidden bg-[#181c21] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-500 flex flex-col justify-end min-h-[460px] shadow-[0_16px_36px_-8px_rgba(0,0,0,0.6)] cursor-pointer"
            onClick={() => onSelectDestination(dest)}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101419] via-[#101419]/60 to-transparent" />
            </div>

            {/* Card Content Overlay */}
            <div className="relative z-10 p-6 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-0.5 rounded-full bg-[#0a0e13]/80 border border-[#f2ca50]/30 text-[#f2ca50] font-label-caps text-[10px] uppercase">
                  {dest.category}
                </span>
                <span className="font-meta-numeric text-xs text-[#d0c5af]/80 flex items-center gap-1">
                  <Mountain className="w-3 h-3 text-[#d4af37]" />
                  {dest.elevation}
                </span>
              </div>

              <h3 className="font-headline-md text-2xl text-[#e0e2ea] tracking-wide font-serif group-hover:text-[#ffe088] transition-colors">
                {dest.name}
              </h3>

              <p className="font-body-sm text-sm text-[#d0c5af] line-clamp-2">
                {dest.shortDesc}
              </p>

              <div className="pt-3 flex items-center justify-between border-t border-[#d4af37]/20 mt-1">
                <span className="font-label-caps text-[10px] text-[#f2ca50] uppercase tracking-wider">
                  Private Guided Itinerary
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDestination(dest);
                  }}
                  className="inline-flex items-center gap-1 font-label-caps text-xs text-[#e0e2ea] group-hover:text-[#f2ca50] transition-colors uppercase font-semibold"
                >
                  <span>Explore</span>
                  <ChevronRight className="w-4 h-4 text-[#f2ca50] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
