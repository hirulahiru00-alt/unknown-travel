import React, { useState } from 'react';
import { Tour, Currency } from '../types';
import { TOURS } from '../data/toursData';
import { formatPrice } from '../utils/formatters';
import { X, CheckCircle2, MessageCircle, Calendar, Users, Camera, ShieldCheck, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  initialTour: Tour | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currency,
  initialTour
}) => {
  const [selectedTourId, setSelectedTourId] = useState<string>(initialTour?.id || TOURS[0].id);
  const [guests, setGuests] = useState<number>(2);
  const [travelDate, setTravelDate] = useState<string>('');
  const [hotelTier, setHotelTier] = useState<'ultra-luxury' | 'boutique' | 'curated'>('ultra-luxury');
  const [includePhotography, setIncludePhotography] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  if (!isOpen) return null;

  const currentTour = TOURS.find(t => t.id === selectedTourId) || initialTour || TOURS[0];

  // Dynamic price calculation
  let pricePerGuest = currentTour.startingPriceUSD;
  if (hotelTier === 'ultra-luxury') pricePerGuest *= 1.25;
  if (hotelTier === 'curated') pricePerGuest *= 0.85;

  let totalEstimateUSD = pricePerGuest * guests;
  if (includePhotography) {
    totalEstimateUSD += 450;
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `UT-BKG-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(code);
    setConfirmed(true);
  };

  const getWhatsAppBookingText = () => {
    const text = `Ayubowan Unknown Traveler!
I would like to confirm my private booking:
- Booking Reference: ${confirmationCode}
- Tour: ${currentTour.title}
- Travelers: ${guests}
- Travel Date: ${travelDate || 'Pending Discussion'}
- Hospitality Tier: ${hotelTier.toUpperCase()}
- Photography Package: ${includePhotography ? 'YES (Unknown Studio Included)' : 'NO'}
- Lead Guest: ${name}
- Email: ${email}
- Estimated Total: ${formatPrice(Math.round(totalEstimateUSD), currency)}
Looking forward to confirmation!`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#181c21] border border-[#d4af37]/30 rounded-3xl shadow-2xl p-6 sm:p-8 no-scrollbar">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0a0e13]/80 border border-[#d4af37]/40 text-[#e0e2ea] hover:text-[#f2ca50] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmed ? (
          <div>
            <div className="mb-6">
              <span className="font-label-caps text-xs text-[#f2ca50] uppercase tracking-[0.2em] block">
                Private Expedition Reservation
              </span>
              <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#e0e2ea] font-serif mt-1">
                Book Your Bespoke Journey
              </h3>
              <p className="font-body-sm text-xs text-[#d0c5af] mt-1">
                Complete your details for a guaranteed booking hold. Zero payment required until final itinerary sign-off.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="flex flex-col gap-4">
              {/* Tour Selector */}
              <div>
                <label className="font-label-caps text-xs text-[#e0e2ea] uppercase tracking-wider block mb-1">
                  Selected Expedition
                </label>
                <select
                  value={selectedTourId}
                  onChange={(e) => setSelectedTourId(e.target.value)}
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                >
                  {TOURS.map(t => (
                    <option key={t.id} value={t.id} className="bg-[#1c2025]">
                      {t.title} ({t.durationLabel})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-label-caps text-xs text-[#e0e2ea] uppercase tracking-wider block mb-1">
                    Approx. Start Date
                  </label>
                  <div className="flex items-center bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-3 py-2 text-[#e0e2ea]">
                    <Calendar className="w-4 h-4 text-[#f2ca50] mr-2" />
                    <input
                      type="date"
                      required
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="bg-transparent text-sm w-full focus:outline-none text-[#e0e2ea]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-label-caps text-xs text-[#e0e2ea] uppercase tracking-wider block mb-1">
                    Guests Count
                  </label>
                  <div className="flex items-center bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-3 py-2 text-[#e0e2ea]">
                    <Users className="w-4 h-4 text-[#f2ca50] mr-2" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="bg-transparent text-sm w-full focus:outline-none"
                    >
                      <option value={1} className="bg-[#1c2025]">1 Solo Explorer</option>
                      <option value={2} className="bg-[#1c2025]">2 Guests (Couple)</option>
                      <option value={3} className="bg-[#1c2025]">3 Guests</option>
                      <option value={4} className="bg-[#1c2025]">4 Guests</option>
                      <option value={6} className="bg-[#1c2025]">6+ Entourage / Family</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Hospitality Style Tier */}
              <div>
                <label className="font-label-caps text-xs text-[#e0e2ea] uppercase tracking-wider block mb-1.5">
                  Hospitality &amp; Property Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'ultra-luxury', label: 'Ultra-Luxury (5★)' },
                    { id: 'boutique', label: 'Boutique Comfort' },
                    { id: 'curated', label: 'Curated Explorer' }
                  ].map((tier) => (
                    <button
                      type="button"
                      key={tier.id}
                      onClick={() => setHotelTier(tier.id as any)}
                      className={`p-2.5 rounded-xl border text-center font-label-caps text-[10px] sm:text-xs uppercase tracking-wider transition-all cursor-pointer ${
                        hotelTier === tier.id
                          ? 'border-[#f2ca50] bg-[#f2ca50]/15 text-[#f2ca50] font-bold'
                          : 'bg-[#1c2025] border-[#d4af37]/20 text-[#d0c5af]'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Unknown Studio Photography Toggle */}
              <label className="flex items-center justify-between p-3 rounded-xl bg-[#1c2025] border border-[#d4af37]/20 cursor-pointer hover:border-[#d4af37]/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5 text-[#f2ca50]" />
                  <div>
                    <span className="font-label-caps text-xs text-[#e0e2ea] uppercase block">
                      Add Unknown Studio Drone &amp; Photography Pass
                    </span>
                    <span className="text-[11px] text-[#d0c5af]">
                      Retouched master frames &amp; 4K reels (+ {formatPrice(450, currency)})
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={includePhotography}
                  onChange={(e) => setIncludePhotography(e.target.checked)}
                  className="w-4 h-4 accent-[#f2ca50]"
                />
              </label>

              {/* Lead Guest Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-label-caps text-xs uppercase text-[#e0e2ea] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-label-caps text-xs uppercase text-[#e0e2ea] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-label-caps text-xs uppercase text-[#e0e2ea] block mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+Country code and number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-label-caps text-xs uppercase text-[#e0e2ea] block mb-1">
                  Special Requests / Dietary Wishes
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Vegetarian, Anniversary celebration, late night flight arrival..."
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none"
                />
              </div>

              {/* Real-time Summary Box */}
              <div className="bg-[#101419] p-4 rounded-2xl border border-[#d4af37]/20 flex items-center justify-between">
                <div>
                  <span className="font-label-caps text-[10px] uppercase text-[#99907c] block">
                    Estimated Total ({guests} Travelers)
                  </span>
                  <span className="text-xs text-[#d0c5af]">
                    Vehicle, chauffeur, boutique stays &amp; tickets
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-headline-sm text-2xl text-[#ffe088] font-serif font-bold">
                    {formatPrice(Math.round(totalEstimateUSD), currency)}
                  </span>
                  <span className="text-[10px] text-[#99907c] block uppercase font-label-caps">
                    Transparent Estimate
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] font-label-caps text-xs uppercase font-bold tracking-widest shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
              >
                <span>Confirm Reservation Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          /* Confirmed State */
          <div className="py-6 text-center flex flex-col items-center gap-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-block px-4 py-1 rounded-full bg-[#d4af37]/20 text-[#ffe088] font-meta-numeric text-xs">
              Reservation Voucher: {confirmationCode}
            </div>

            <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#e0e2ea] font-serif">
              Reservation Hold Placed!
            </h3>

            <p className="font-body-md text-sm text-[#d0c5af] max-w-md leading-relaxed">
              Ayubowan, <strong className="text-[#ffe088]">{name}</strong>. Your provisional reservation for <strong className="text-[#e0e2ea]">{currentTour.title}</strong> is secured.
            </p>

            <div className="w-full bg-[#101419] p-4 rounded-xl border border-[#d4af37]/20 text-left text-xs text-[#d0c5af] space-y-1.5">
              <div className="flex justify-between">
                <span>Expedition:</span>
                <strong className="text-[#e0e2ea]">{currentTour.title}</strong>
              </div>
              <div className="flex justify-between">
                <span>Travelers:</span>
                <strong className="text-[#e0e2ea]">{guests} Persons</strong>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <strong className="text-[#e0e2ea]">{travelDate || 'Pending Consultation'}</strong>
              </div>
              <div className="flex justify-between">
                <span>Estimated Total:</span>
                <strong className="text-[#f2ca50]">{formatPrice(Math.round(totalEstimateUSD), currency)}</strong>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 w-full justify-center">
              <a
                href={`https://wa.me/94000000000?text=${getWhatsAppBookingText()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-[#0a0e13] font-label-caps text-xs uppercase font-bold tracking-wider hover:opacity-90 transition-opacity shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#262a30] text-[#e0e2ea] hover:text-[#f2ca50] border border-[#d4af37]/30 text-xs font-label-caps uppercase"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
