import React, { useState } from 'react';
import { Currency } from '../types';
import { Menu, X, User, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  currency,
  onCurrencyChange,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'tours', label: 'Tours' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'photography', label: 'Photography' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e13]/90 backdrop-blur-md border-b border-[#d4af37]/20 transition-all">
      <div className="h-20 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4 md:gap-6">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <img
            src="https://lh3.googleusercontent.com/aida/AEtjO1UYKuS9k6YkCdutI3XJn2M3DsqwXx6FF0a3IVDwgBSZ7H9jdDUiOPxMd1sEY98p4esdyfwMWtcWBy0g40Hh2BsV5YDeC3gBNTf7WnvNed0UN4QyTsRGsPgfMEYtZiNLs7VL7OFZAq8H6hel2LF43sfS28yRYKtaK5zrypb-Gu_GgVxg1aB916GhPQtJ66V2x5lcFGBdzuNZ1HLZP2bx8IQWyrIe4sh1_TXAjYai1xhqxb367lmSigE5mHE"
            alt="UNKNOWN TRAVELER Luxury Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-headline-sm text-lg md:text-xl tracking-wider text-[#e0e2ea] uppercase font-serif">
            Unknown Traveler
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-label-md text-xs tracking-widest uppercase py-1 transition-all border-b ${
                  isActive
                    ? 'text-[#f2ca50] border-[#f2ca50]'
                    : 'text-[#d0c5af] border-transparent hover:text-[#f2ca50]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Utility Bar */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Currency Toggle USD / LKR */}
          <div className="flex items-center bg-[#181c21] border border-[#d4af37]/20 rounded-full p-0.5">
            <button
              type="button"
              onClick={() => onCurrencyChange('USD')}
              className={`px-2.5 py-1 rounded-full font-label-caps text-[10px] md:text-xs transition-all ${
                currency === 'USD'
                  ? 'bg-[#d4af37] text-[#3c2f00] font-bold shadow-xs'
                  : 'text-[#d0c5af] hover:text-[#e0e2ea]'
              }`}
            >
              USD $
            </button>
            <button
              type="button"
              onClick={() => onCurrencyChange('LKR')}
              className={`px-2.5 py-1 rounded-full font-label-caps text-[10px] md:text-xs transition-all ${
                currency === 'LKR'
                  ? 'bg-[#d4af37] text-[#3c2f00] font-bold shadow-xs'
                  : 'text-[#d0c5af] hover:text-[#e0e2ea]'
              }`}
            >
              LKR Rs.
            </button>
          </div>

          {/* Book Now Action Button */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-br from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] font-label-caps text-xs tracking-widest uppercase font-bold shadow-[0_6px_20px_-4px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(212,175,55,0.5)] transition-all"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* User Icon Circle */}
          <div
            title="Private Member Desk"
            className="w-8 h-8 rounded-full bg-[#f2ca50] flex items-center justify-center shrink-0 text-[#3c2f00] shadow-xs cursor-pointer hover:scale-105 transition-transform"
            onClick={onOpenBooking}
          >
            <User className="w-4 h-4" />
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#e0e2ea] hover:text-[#f2ca50] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#101419]/98 border-b border-[#d4af37]/30 px-6 py-5 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 px-3 rounded-lg font-label-md text-sm uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#1c2025] text-[#f2ca50] font-bold border-l-2 border-[#f2ca50]'
                      : 'text-[#d0c5af] hover:text-[#e0e2ea] hover:bg-[#181c21]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-[#d4af37]/20 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#e7c35a] to-[#d4af37] text-[#3c2f00] font-label-caps text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2"
            >
              <span>Book Your Private Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
