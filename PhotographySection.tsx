import React, { useState } from 'react';
import { PHOTO_ITEMS, PHOTOGRAPHY_PACKAGES } from '../data/photographyData';
import { PhotoItem, Currency } from '../types';
import { formatPrice } from '../utils/formatters';
import { Video, Camera, Award, Sparkles, Check, ZoomIn } from 'lucide-react';

interface PhotographySectionProps {
  currency: Currency;
  onOpenPhoto: (photo: PhotoItem) => void;
  onSelectPackage: (pkgTitle: string) => void;
}

export const PhotographySection: React.FC<PhotographySectionProps> = ({
  currency,
  onOpenPhoto,
  onSelectPackage
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Aerial', 'Highlands', 'Wildlife', 'Coast', 'Heritage'];

  const filteredPhotos = selectedFilter === 'All'
    ? PHOTO_ITEMS
    : PHOTO_ITEMS.filter(p => p.category === selectedFilter);

  return (
    <section id="photography" className="w-full py-20 bg-[#0a0e13] border-y border-[#d4af37]/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Top Editorial & Hero Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Editorial Description */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#181c21] border border-[#d4af37]/30 w-fit">
              <Video className="w-4 h-4 text-[#f2ca50]" />
              <span className="font-label-caps text-xs uppercase text-[#f2ca50] tracking-widest font-semibold">
                Unknown Studio Partnership
              </span>
            </div>

            <h2 className="font-display-hero text-3xl sm:text-4xl md:text-5xl text-[#e0e2ea] tracking-tight font-serif leading-tight">
              “TRAVEL. CAPTURE. <br />
              <span className="italic text-[#f2ca50]">REMEMBER.”</span>
            </h2>

            <p className="font-body-xl text-base sm:text-lg text-[#d0c5af] font-light leading-relaxed">
              Turn your Sri Lankan expedition into cinematic memories that last generations. We pair you with professional fine-art photographers and certified drone cinematographers throughout your travels.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-col gap-2 pt-2">
              {[
                'Fine-art travel portraiture & private heirloom albums',
                'Cinematic 4K/8K aerial drone footage across Sigiriya & coastlines',
                'Social media reels, high-resolution stories & editorial short films',
                'Honeymoon, proposal & family documentary sessions'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#181c21]/70 border border-[#d4af37]/15 text-sm text-[#e0e2ea]">
                  <Check className="w-4 h-4 text-[#f2ca50] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Cine Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[#d0c5af] font-meta-numeric text-xs">
              <span className="px-3 py-1 rounded bg-[#1c2025] border border-[#d4af37]/20">SONY FX CINEMA LINE</span>
              <span className="px-3 py-1 rounded bg-[#1c2025] border border-[#d4af37]/20">DJI CINE PRO</span>
              <span className="px-3 py-1 rounded bg-[#1c2025] border border-[#d4af37]/20">LEICA GLASS</span>
              <span className="px-3 py-1 rounded bg-[#1c2025] border border-[#d4af37]/20">HASSELBLAD 100MP</span>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectPackage('Cinematic Drone & Reels')}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e7c35a] to-[#d4af37] text-[#3c2f00] font-label-caps text-xs uppercase tracking-widest font-bold shadow-[0_8px_24px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Camera className="w-4 h-4" />
                <span>Add Photography to My Tour</span>
              </button>
            </div>
          </div>

          {/* Right Visual Showcase Mosaic */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div
                onClick={() => onOpenPhoto(PHOTO_ITEMS[1])}
                className="relative rounded-2xl overflow-hidden shadow-2xl h-64 group cursor-pointer border border-[#d4af37]/20"
              >
                <img
                  src={PHOTO_ITEMS[1].image}
                  alt={PHOTO_ITEMS[1].title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#0a0e13]/80 text-[10px] font-label-caps text-[#f2ca50] uppercase flex items-center gap-1">
                  <ZoomIn className="w-3 h-3" />
                  <span>Nine Arches • 8K Cine</span>
                </div>
              </div>
              <div
                onClick={() => onOpenPhoto(PHOTO_ITEMS[2])}
                className="relative rounded-2xl overflow-hidden shadow-2xl h-44 group cursor-pointer border border-[#d4af37]/20"
              >
                <img
                  src={PHOTO_ITEMS[2].image}
                  alt={PHOTO_ITEMS[2].title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#0a0e13]/80 text-[10px] font-label-caps text-[#f2ca50] uppercase flex items-center gap-1">
                  <ZoomIn className="w-3 h-3" />
                  <span>Yala Wilds • 600mm Prime</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-8">
              <div
                onClick={() => onOpenPhoto(PHOTO_ITEMS[0])}
                className="relative rounded-2xl overflow-hidden shadow-2xl h-44 group cursor-pointer border border-[#d4af37]/20"
              >
                <img
                  src={PHOTO_ITEMS[0].image}
                  alt={PHOTO_ITEMS[0].title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#0a0e13]/80 text-[10px] font-label-caps text-[#f2ca50] uppercase flex items-center gap-1">
                  <ZoomIn className="w-3 h-3" />
                  <span>Sigiriya • Sunrise Flight</span>
                </div>
              </div>
              <div
                onClick={() => onOpenPhoto(PHOTO_ITEMS[3])}
                className="relative rounded-2xl overflow-hidden shadow-2xl h-64 group cursor-pointer border border-[#d4af37]/20"
              >
                <img
                  src={PHOTO_ITEMS[3].image}
                  alt={PHOTO_ITEMS[3].title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#0a0e13]/80 text-[10px] font-label-caps text-[#f2ca50] uppercase flex items-center gap-1">
                  <ZoomIn className="w-3 h-3" />
                  <span>South Coast • Golden Hour</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Photography Packages */}
        <div className="pt-10 border-t border-[#d4af37]/15">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-label-caps text-xs uppercase text-[#f2ca50] tracking-[0.2em]">
              Media Add-On Packages
            </span>
            <h3 className="font-headline-md text-2xl sm:text-3xl text-[#e0e2ea] font-serif mt-1">
              Select Your Studio Production Tier
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PHOTOGRAPHY_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all relative ${
                  pkg.popular
                    ? 'bg-[#1c2025] border-2 border-[#f2ca50] shadow-[0_12px_32px_rgba(212,175,55,0.25)]'
                    : 'bg-[#181c21] border border-[#d4af37]/20 hover:border-[#d4af37]/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#f2ca50] text-[#3c2f00] font-label-caps text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div>
                  <h4 className="font-headline-sm text-xl text-[#e0e2ea] font-serif mb-1">
                    {pkg.title}
                  </h4>
                  <div className="mb-4">
                    <span className="font-headline-md text-2xl text-[#f2ca50] font-bold">
                      {formatPrice(pkg.priceUSD, currency)}
                    </span>
                    <span className="text-xs text-[#d0c5af] ml-1">/ expedition session</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#d0c5af] mb-6">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#f2ca50] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg.title)}
                  className={`w-full py-2.5 rounded-full font-label-caps text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#e7c35a] to-[#d4af37] text-[#3c2f00] font-bold'
                      : 'bg-[#262a30] text-[#e0e2ea] hover:text-[#f2ca50] border border-[#d4af37]/30'
                  }`}
                >
                  Reserve This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
