import React from 'react';
import { REVIEWS } from '../data/photographyData';
import { Star, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#0a0e13] border-y border-[#d4af37]/15">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-label-caps text-xs uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#f2ca50]" /> Guest Memoirs <span className="w-6 h-px bg-[#f2ca50]" />
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#e0e2ea] font-serif mt-2">
            Words From Our Private Voyagers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-[#181c21] border border-[#d4af37]/20 hover:border-[#d4af37]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-4 transition-all shadow-md"
            >
              <div className="flex flex-col gap-2">
                <div className="flex text-[#f2ca50] items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#f2ca50]" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#d4af37]/30 my-1" />
                <p className="font-body-md text-sm text-[#e0e2ea] italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#d4af37]/15">
                <h5 className="font-headline-sm text-lg text-[#e0e2ea] font-serif">
                  {rev.author}
                </h5>
                <span className="font-meta-numeric text-xs text-[#f2ca50] block mt-0.5">
                  {rev.origin} • {rev.tour}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
