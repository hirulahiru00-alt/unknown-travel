import React, { useState } from 'react';
import { Currency } from '../types';
import { formatPrice } from '../utils/formatters';
import { Sparkles, Check, Send, MessageCircle, Calendar, Users, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface TripPlannerSectionProps {
  currency: Currency;
  onOpenWhatsApp: (message: string) => void;
}

export const TripPlannerSection: React.FC<TripPlannerSectionProps> = ({
  currency,
  onOpenWhatsApp
}) => {
  const [duration, setDuration] = useState<string>('7 Days');
  const [style, setStyle] = useState<string>('Ultra-Luxury');
  const [guests, setGuests] = useState<number>(2);
  const [travelDate, setTravelDate] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const [selectedHighlights, setSelectedHighlights] = useState<string[]>([
    'Beaches & Galle',
    'Wildlife Safaris',
    'Heritage & Culture',
    'Ceylon Gastronomy',
    'Unknown Studio Media'
  ]);

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [referenceCode, setReferenceCode] = useState<string>('');

  const highlightOptions = [
    'Beaches & Galle',
    'Wildlife Safaris',
    'Mountain Treks',
    'Heritage & Culture',
    'Adventure & Hiking',
    'Ceylon Gastronomy',
    'Unknown Studio Media',
    'Hidden Gems'
  ];

  const toggleHighlight = (item: string) => {
    if (selectedHighlights.includes(item)) {
      setSelectedHighlights(selectedHighlights.filter(h => h !== item));
    } else {
      setSelectedHighlights([...selectedHighlights, item]);
    }
  };

  // Estimate price dynamically
  const calculateEstimate = () => {
    let basePerDay = 180;
    if (style === 'Ultra-Luxury') basePerDay = 280;
    if (style === 'Boutique Comfort') basePerDay = 210;
    if (style === 'Curated Explorer') basePerDay = 160;

    const daysCount = parseInt(duration) || 7;
    let baseTotal = basePerDay * daysCount;

    if (selectedHighlights.includes('Unknown Studio Media')) {
      baseTotal += 350;
    }
    if (selectedHighlights.includes('Wildlife Safaris')) {
      baseTotal += 120;
    }

    return baseTotal;
  };

  const estimatedUSD = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `UT-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(generatedRef);
    setSubmitted(true);
  };

  const constructWhatsAppMessage = () => {
    const text = `Hello Unknown Traveler Concierge! I just created a custom itinerary request (Ref: ${referenceCode || 'NEW'}):
- Duration: ${duration}
- Style: ${style}
- Travelers: ${guests}
- Desired Highlights: ${selectedHighlights.join(', ')}
- Name: ${fullName}
- Travel Date: ${travelDate || 'Flexible'}
- Estimated Budget: ${formatPrice(estimatedUSD, currency)} / guest.
Looking forward to your private itinerary proposal!`;
    return encodeURIComponent(text);
  };

  return (
    <section id="trip-planner" className="w-full py-20 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
      <div className="relative bg-[#181c21]/90 backdrop-blur-2xl border border-[#d4af37]/30 rounded-3xl p-6 sm:p-10 md:p-14 overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)]">
        {/* Ambient Glow Orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#f2ca50]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#e7c35a]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center mb-10">
          <span className="font-label-caps text-xs uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#f2ca50]" /> Bespoke Travel Curation <span className="w-6 h-px bg-[#f2ca50]" />
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#e0e2ea] mt-2 font-serif">
            “YOUR TRIP. YOUR WAY.”
          </h2>
          <p className="font-body-md text-[#d0c5af] mt-2">
            Select your travel rhythm and desires. Our senior concierge crafts a personalized proposal within 3 hours.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="relative z-10 max-w-4xl mx-auto flex flex-col gap-8">
            {/* 1. Duration Selector */}
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-xs text-[#e0e2ea] uppercase tracking-wider">
                1. Expedition Duration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {['3 Days', '5 Days', '7 Days', '10 Days', '14+ Days'].map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`p-3 rounded-xl text-center border font-meta-numeric text-xs sm:text-sm transition-all cursor-pointer ${
                      duration === d
                        ? 'border-[#f2ca50] bg-[#f2ca50]/15 text-[#f2ca50] font-bold shadow-xs'
                        : 'bg-[#1c2025] border-[#d4af37]/20 text-[#e0e2ea] hover:border-[#d4af37]/60'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Travel Style */}
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-xs text-[#e0e2ea] uppercase tracking-wider">
                2. Hospitality &amp; Experience Style
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'Ultra-Luxury',
                    title: 'Ultra-Luxury',
                    desc: '5-star historic villas, tea bungalows, private chauffeur-concierge'
                  },
                  {
                    id: 'Boutique Comfort',
                    title: 'Boutique Comfort',
                    desc: 'Intimate design hotels, eco-lodges, curated regional authenticity'
                  },
                  {
                    id: 'Curated Explorer',
                    title: 'Curated Explorer',
                    desc: 'High flexibility, scenic trekking, photography-focused routing'
                  }
                ].map((st) => (
                  <button
                    type="button"
                    key={st.id}
                    onClick={() => setStyle(st.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col gap-1 cursor-pointer ${
                      style === st.id
                        ? 'border-[#f2ca50] bg-[#f2ca50]/15 shadow-md'
                        : 'bg-[#1c2025] border-[#d4af37]/20 hover:border-[#d4af37]/50'
                    }`}
                  >
                    <span className={`font-headline-sm text-lg font-serif ${style === st.id ? 'text-[#f2ca50]' : 'text-[#e0e2ea]'}`}>
                      {st.title}
                    </span>
                    <span className="font-body-sm text-xs text-[#d0c5af] leading-relaxed">
                      {st.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Desired Highlights & Inclusions */}
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-xs text-[#e0e2ea] uppercase tracking-wider">
                3. Desired Highlights &amp; Inclusions
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {highlightOptions.map((opt) => {
                  const isChecked = selectedHighlights.includes(opt);
                  return (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => toggleHighlight(opt)}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isChecked
                          ? 'border-[#f2ca50] bg-[#f2ca50]/15 text-[#f2ca50]'
                          : 'bg-[#1c2025] border-[#d4af37]/15 text-[#e0e2ea] hover:border-[#d4af37]/40'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${isChecked ? 'bg-[#f2ca50] border-[#f2ca50] text-[#3c2f00]' : 'border-[#99907c]'}`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="font-body-sm text-xs font-medium">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Travelers & Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="font-label-caps text-xs text-[#e0e2ea] uppercase tracking-wider block mb-1">
                  Travelers
                </label>
                <div className="flex items-center bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-3 py-2 text-[#e0e2ea]">
                  <Users className="w-4 h-4 text-[#f2ca50] mr-2" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="bg-transparent text-sm w-full focus:outline-none"
                  >
                    <option value={1} className="bg-[#1c2025]">1 Guest (Solo)</option>
                    <option value={2} className="bg-[#1c2025]">2 Guests (Couple)</option>
                    <option value={3} className="bg-[#1c2025]">3-4 Guests (Small Group)</option>
                    <option value={6} className="bg-[#1c2025]">5+ Guests (Family / Entourage)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-label-caps text-xs text-[#e0e2ea] uppercase tracking-wider block mb-1">
                  Approx. Date
                </label>
                <div className="flex items-center bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-3 py-2 text-[#e0e2ea]">
                  <Calendar className="w-4 h-4 text-[#f2ca50] mr-2" />
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm w-full focus:outline-none text-[#e0e2ea]"
                  />
                </div>
              </div>

              <div>
                <label className="font-label-caps text-xs text-[#e0e2ea] uppercase tracking-wider block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Mr / Ms / Dr..."
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="font-label-caps text-xs text-[#e0e2ea] uppercase tracking-wider block mb-1">
                  WhatsApp / Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+44 7000..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Live Pricing Estimation Bar */}
            <div className="bg-[#101419] border border-[#d4af37]/30 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-label-caps text-[11px] text-[#f2ca50] uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Dynamic Live Estimate ({duration} • {style})
                </span>
                <span className="text-xs text-[#d0c5af] mt-0.5">
                  Includes private vehicle, luxury stays, chauffeur-guide, entrance permits &amp; chosen inclusions
                </span>
              </div>
              <div className="text-right">
                <span className="font-headline-sm text-2xl sm:text-3xl text-[#ffe088] font-serif font-bold">
                  {formatPrice(estimatedUSD, currency)}
                </span>
                <span className="font-body-sm text-xs text-[#d0c5af] block">
                  per traveler (approx.)
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] font-label-caps text-xs tracking-widest uppercase font-bold shadow-[0_12px_32px_rgba(212,175,55,0.35)] hover:shadow-[0_16px_40px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get My Custom Itinerary</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        ) : (
          /* Confirmation State */
          <div className="p-8 sm:p-12 rounded-2xl bg-[#1c2025] text-center flex flex-col items-center gap-4 border border-[#f2ca50]/40 max-w-2xl mx-auto animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#d4af37]/20 text-[#ffe088] font-meta-numeric text-xs tracking-wider">
              Booking Request ID: {referenceCode}
            </div>
            <h3 className="font-headline-md text-2xl sm:text-3xl text-[#e0e2ea] font-serif">
              Your Request Is With Our Senior Concierge
            </h3>
            <p className="font-body-md text-sm sm:text-base text-[#d0c5af] max-w-lg leading-relaxed">
              Ayubowan <strong className="text-[#ffe088]">{fullName || 'Traveler'}</strong>! Our senior travel designer is now preparing your bespoke {duration} {style} journey featuring {selectedHighlights.slice(0, 3).join(', ')}.
            </p>

            <div className="w-full bg-[#101419] p-4 rounded-xl border border-[#d4af37]/20 text-left text-xs text-[#d0c5af] space-y-1.5">
              <div className="flex justify-between">
                <span>Duration &amp; Hospitality:</span>
                <strong className="text-[#e0e2ea]">{duration} • {style}</strong>
              </div>
              <div className="flex justify-between">
                <span>Travelers:</span>
                <strong className="text-[#e0e2ea]">{guests} Guests</strong>
              </div>
              <div className="flex justify-between">
                <span>Approximate Estimate:</span>
                <strong className="text-[#f2ca50]">{formatPrice(estimatedUSD, currency)} / guest</strong>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full justify-center">
              <a
                href={`https://wa.me/94000000000?text=${constructWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-[#0a0e13] font-label-caps text-xs uppercase font-bold tracking-wider hover:opacity-90 transition-opacity shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Fast-Track on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#262a30] text-[#e0e2ea] hover:text-[#f2ca50] border border-[#d4af37]/30 font-label-caps text-xs uppercase tracking-wider"
              >
                Create Another Itinerary
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
