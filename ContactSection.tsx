import React, { useState } from 'react';
import { MessageCircle, Mail, Camera, ArrowRight, CheckCircle2, Navigation as HubIcon } from 'lucide-react';

interface ContactSectionProps {
  onOpenWhatsApp: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenWhatsApp }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '2 Guests (Couple)',
    interest: 'Full Island Highlights Grand Expedition (7-14 Days)',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-20 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Concierge Info & Stylized Map */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="font-label-caps text-xs uppercase text-[#f2ca50] tracking-[0.2em] flex items-center gap-2">
              <span className="w-6 h-px bg-[#f2ca50]" /> Private Concierge Desk
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl text-[#e0e2ea] font-serif mt-1">
              Let's Shape Your Itinerary
            </h2>
            <p className="font-body-md text-sm sm:text-base text-[#d0c5af] mt-2 leading-relaxed">
              Connect with our local expedition directors directly. We accommodate bespoke flight arrival transfers, VIP helicopter island transits, and private security upon request.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={onOpenWhatsApp}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[#181c21] border border-[#d4af37]/15 hover:border-[#d4af37]/50 transition-all text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#f2ca50]/10 flex items-center justify-center text-[#f2ca50] shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] uppercase text-[#99907c]">WhatsApp Direct</span>
                <span className="font-meta-numeric text-sm text-[#e0e2ea] font-semibold">+94 XX XXX XXXX (Instant Concierge)</span>
              </div>
            </button>

            <a
              href="mailto:info@unknowntraveler.lk"
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[#181c21] border border-[#d4af37]/15 hover:border-[#d4af37]/50 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-[#f2ca50]/10 flex items-center justify-center text-[#f2ca50] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] uppercase text-[#99907c]">Email Inquiry</span>
                <span className="font-meta-numeric text-sm text-[#e0e2ea] font-semibold">info@unknowntraveler.lk</span>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#181c21] border border-[#d4af37]/15">
              <div className="w-10 h-10 rounded-full bg-[#f2ca50]/10 flex items-center justify-center text-[#f2ca50] shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] uppercase text-[#99907c]">Instagram Concierge</span>
                <span className="font-meta-numeric text-sm text-[#e0e2ea] font-semibold">@unknowntraveler</span>
              </div>
            </div>
          </div>

          {/* Stylized Island Route Map Visual */}
          <div
            className="w-full h-56 rounded-2xl bg-[#1c2025] overflow-hidden relative border border-[#d4af37]/20 flex flex-col justify-end p-4 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDltDnMX3-OjMz09mUMbxUg5zvluTNErmzHNCbZkERfclhhpsQniDUuE1x0N5OxXoxpJKrW3C9-lhzGqsS0KsGJiy6keNsVyrSMxidj29BFBNmQqR0k8OvCMxYc2a8pQeD-4ATd_V5JUq8lTreCupGjBugwX_6nM38iT65QuknNXFmeWR4JX3rMRHAjPAbEnAiXmQAr-cXd9NnrKL6odGCylaCcd1ug1yOG6NCcKuNZPL7EGm0zFKDvNA')"
            }}
          >
            <div className="absolute inset-0 bg-[#101419]/80 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#f2ca50]">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f2ca50] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f2ca50]" />
                  </span>
                </div>
                <span className="font-label-caps text-xs text-[#e0e2ea] uppercase tracking-widest font-semibold">
                  Active Chauffeur Routes Across Sri Lanka
                </span>
                <span className="font-body-sm text-xs text-[#ffe088]">
                  Colombo • Sigiriya • Kandy • Nuwara Eliya • Ella • Yala • Galle
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7 bg-[#181c21] border border-[#d4af37]/25 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
          <h3 className="font-headline-sm text-2xl text-[#e0e2ea] font-serif mb-1">
            Direct Expedition Inquiry
          </h3>
          <p className="font-body-sm text-xs sm:text-sm text-[#d0c5af] mb-6">
            Fill out this quick dossier and we will prepare a tailored itinerary with confirmed hotel rates.
          </p>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-label-caps text-xs uppercase text-[#e0e2ea] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-label-caps text-xs uppercase text-[#e0e2ea] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="font-label-caps text-xs uppercase text-[#e0e2ea] block mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+Country Code"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-label-caps text-xs uppercase text-[#e0e2ea] block mb-1">
                    Approx. Travel Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-label-caps text-xs uppercase text-[#e0e2ea] block mb-1">
                    Total Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                  >
                    <option className="bg-[#1c2025]">1 Guest (Solo)</option>
                    <option className="bg-[#1c2025]">2 Guests (Couple)</option>
                    <option className="bg-[#1c2025]">3-4 Guests (Small Group)</option>
                    <option className="bg-[#1c2025]">5+ Guests (Family / Entourage)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-label-caps text-xs uppercase text-[#e0e2ea] block mb-1">
                  Primary Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                >
                  <option className="bg-[#1c2025]">Full Island Highlights Grand Expedition (7-14 Days)</option>
                  <option className="bg-[#1c2025]">Cultural Triangle &amp; Sigiriya Heritage Exploration</option>
                  <option className="bg-[#1c2025]">Highlands Tea Estates &amp; Scenic Rail Escape</option>
                  <option className="bg-[#1c2025]">Yala Safari &amp; South Coast Beach Retreat</option>
                  <option className="bg-[#1c2025]">Cinematic Photography &amp; Honeymoon Tour (Unknown Studio)</option>
                </select>
              </div>

              <div>
                <label className="font-label-caps text-xs uppercase text-[#e0e2ea] block mb-1">
                  Custom Notes / Special Desires
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us any specific requirements: dietary wishes, favorite boutique hotel brands, preferred pace..."
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] font-label-caps text-xs tracking-widest uppercase font-bold shadow-[0_12px_32px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
              >
                <span>Send Private Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="py-12 text-center flex flex-col items-center gap-4 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-headline-sm text-2xl text-[#e0e2ea] font-serif">
                Inquiry Successfully Dispatched
              </h4>
              <p className="font-body-md text-sm text-[#d0c5af] max-w-md">
                Thank you, <strong className="text-[#ffe088]">{formData.name}</strong>. A dedicated Unknown Traveler specialist is preparing your personalized dossier and will reply to {formData.email} and WhatsApp within 3 hours.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="mt-2 px-6 py-2.5 rounded-full bg-[#262a30] text-[#e0e2ea] hover:text-[#f2ca50] border border-[#d4af37]/30 text-xs font-label-caps uppercase"
              >
                Send Another Request
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
