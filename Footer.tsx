import React from 'react';
import { Phone, Mail, Camera, Play, Globe, Youtube, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms
}) => {
  return (
    <footer className="w-full bg-[#0a0e13] border-t border-[#d4af37]/20 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#d4af37]/15">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1UYKuS9k6YkCdutI3XJn2M3DsqwXx6FF0a3IVDwgBSZ7H9jdDUiOPxMd1sEY98p4esdyfwMWtcWBy0g40Hh2BsV5YDeC3gBNTf7WnvNed0UN4QyTsRGsPgfMEYtZiNLs7VL7OFZAq8H6hel2LF43sfS28yRYKtaK5zrypb-Gu_GgVxg1aB916GhPQtJ66V2x5lcFGBdzuNZ1HLZP2bx8IQWyrIe4sh1_TXAjYai1xhqxb367lmSigE5mHE"
                alt="UNKNOWN TRAVELER Luxury Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-headline-sm text-lg uppercase tracking-wider text-[#e0e2ea] font-serif">
                Unknown Traveler
              </span>
            </div>
            <p className="font-body-md text-sm text-[#d0c5af] max-w-sm leading-relaxed">
              Sri Lanka Private Tours &amp; Travel Experiences. Bespoke expeditions curated for discerning travelers seeking discreet island luxury.
            </p>
            <p className="font-headline-sm text-base italic text-[#f2ca50] font-serif">
              Discover Sri Lanka Your Way
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-label-caps text-xs uppercase text-[#f2ca50] tracking-widest font-semibold">
              Quick Links
            </span>
            <nav className="flex flex-col gap-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'tours', label: 'Tours' },
                { id: 'destinations', label: 'Destinations' },
                { id: 'photography', label: 'Photography' },
                { id: 'about-us', label: 'About Us' },
                { id: 'contact', label: 'Contact & Concierge' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left font-body-md text-sm text-[#d0c5af] hover:text-[#f2ca50] transition-colors py-0.5 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Concierge Desk Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-label-caps text-xs uppercase text-[#f2ca50] tracking-widest font-semibold">
              Private Concierge &amp; Enquiries
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body-sm text-xs text-[#d0c5af]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>WhatsApp: +94 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>info@unknowntraveler.lk</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>@unknowntraveler</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>Unknown Traveler Cine</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="font-label-caps text-[11px] uppercase text-[#d0c5af] block mb-2">
                Expedition Social Ledgers
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#181c21] border border-[#d4af37]/20 flex items-center justify-center text-[#d0c5af] hover:text-[#f2ca50] hover:border-[#d4af37] transition-all"
                  aria-label="Instagram"
                >
                  <Camera className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#181c21] border border-[#d4af37]/20 flex items-center justify-center text-[#d0c5af] hover:text-[#f2ca50] hover:border-[#d4af37] transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#181c21] border border-[#d4af37]/20 flex items-center justify-center text-[#d0c5af] hover:text-[#f2ca50] hover:border-[#d4af37] transition-all"
                  aria-label="Global"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-body-sm text-xs text-[#99907c]">
            © {new Date().getFullYear()} Unknown Traveler. All Rights Reserved. Private Tours &amp; Bespoke Journeys Sri Lanka.
          </p>
          <div className="flex items-center gap-4 font-body-sm text-xs text-[#99907c]">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#f2ca50] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-[#d4af37]/40">•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#f2ca50] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
