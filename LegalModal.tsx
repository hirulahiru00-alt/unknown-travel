import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#181c21] border border-[#d4af37]/30 rounded-3xl shadow-2xl p-6 sm:p-8 no-scrollbar">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0a0e13]/80 border border-[#d4af37]/40 text-[#e0e2ea] hover:text-[#f2ca50] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50]">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-headline-md text-2xl text-[#e0e2ea] font-serif">
            {isPrivacy ? 'Privacy & Data Discretion Policy' : 'Terms of Private Expedition'}
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                At <strong>Unknown Traveler</strong>, your privacy and personal security are paramount. We treat all client identities, itinerary routes, hotel bookings, and media records with strict confidentiality.
              </p>
              <p>
                • <strong>Data Protection:</strong> Information provided for itinerary design (names, WhatsApp contact, dietary preferences, passport verification for VIP airport clearance) is stored on encrypted servers and never shared with third-party marketers.
              </p>
              <p>
                • <strong>Media Discretion:</strong> All aerial drone and fine-art photography captured during your tour belongs exclusively to you. Unknown Studio will never publish your personal images or likeness without explicit prior written consent.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>Unknown Traveler Sri Lanka</strong>. All bespoke itineraries and private chauffeur services are subject to the following principles:
              </p>
              <p>
                • <strong>Custom Itinerary Flexibility:</strong> While itineraries are pre-planned to ensure 5-star hotel availability and reserve first-class train seats, daily routes remain flexible to your preferences and weather conditions.
              </p>
              <p>
                • <strong>Vehicles &amp; Safety:</strong> All vehicles (Mercedes-Benz, Toyota Prado, Land Cruiser) carry comprehensive commercial passenger insurance and are operated by certified, English-fluent government-licensed chauffeur guides.
              </p>
              <p>
                • <strong>Reservations &amp; Cancellation:</strong> Bookings can be modified up to 14 days prior to arrival with full credit transfer to alternate dates.
              </p>
            </>
          )}
        </div>

        <div className="pt-6 border-t border-[#d4af37]/20 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#262a30] text-[#e0e2ea] hover:text-[#f2ca50] font-label-caps text-xs uppercase"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
