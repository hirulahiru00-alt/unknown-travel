/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Currency, Destination, Tour, PhotoItem } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DestinationsSection } from './components/DestinationsSection';
import { ToursSection } from './components/ToursSection';
import { TripPlannerSection } from './components/TripPlannerSection';
import { PhotographySection } from './components/PhotographySection';
import { WhyUsSection } from './components/WhyUsSection';
import { TimelineSection } from './components/TimelineSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

import { DestinationModal } from './components/DestinationModal';
import { TourDetailModal } from './components/TourDetailModal';
import { BookingModal } from './components/BookingModal';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';
import { AboutModal } from './components/AboutModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [currency, setCurrency] = useState<Currency>('USD');

  // Modals state
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingTour, setBookingTour] = useState<Tour | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'tours') {
      scrollToSection('popular-tours');
    } else if (tab === 'destinations') {
      scrollToSection('destinations');
    } else if (tab === 'photography') {
      scrollToSection('photography');
    } else if (tab === 'about-us') {
      setAboutModalOpen(true);
    } else if (tab === 'contact') {
      scrollToSection('contact');
    }
  };

  const handleOpenBooking = (tour?: Tour) => {
    setBookingTour(tour || null);
    setBookingModalOpen(true);
  };

  const handleOpenWhatsApp = (customMsg?: string) => {
    const defaultMsg = encodeURIComponent(
      'Hello Unknown Traveler concierge! I would like to inquire about planning a private luxury tour in Sri Lanka.'
    );
    const msg = customMsg ? encodeURIComponent(customMsg) : defaultMsg;
    window.open(`https://wa.me/94000000000?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-[#101419] text-[#e0e2ea] min-h-screen selection:bg-[#d4af37] selection:text-[#3c2f00] relative font-sans">
      {/* Top Fixed Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-[#101419]">
        {/* 1. Hero Section */}
        <HeroSection
          onPlanTrip={() => scrollToSection('trip-planner')}
          onExploreTours={() => scrollToSection('popular-tours')}
          onExploreDestinations={() => scrollToSection('destinations')}
        />

        {/* 2. Curated Destinations Section */}
        <DestinationsSection
          onSelectDestination={(dest) => setSelectedDestination(dest)}
          onPlanTripTo={(destName) => {
            scrollToSection('trip-planner');
          }}
        />

        {/* 3. Popular Handcrafted Private Tours */}
        <ToursSection
          currency={currency}
          onSelectTour={(tour) => setSelectedTour(tour)}
          onBookTour={(tour) => handleOpenBooking(tour)}
        />

        {/* 4. Interactive Bespoke Trip Planner */}
        <TripPlannerSection
          currency={currency}
          onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)}
        />

        {/* 5. Unknown Studio Photography & Cinematography */}
        <PhotographySection
          currency={currency}
          onOpenPhoto={(photo) => setSelectedPhoto(photo)}
          onSelectPackage={(pkgTitle) => {
            handleOpenBooking();
          }}
        />

        {/* 6. Why Travel With Us Pillars */}
        <WhyUsSection />

        {/* 7. Four Steps Journey Architecture */}
        <TimelineSection />

        {/* 8. Testimonials / Guest Memoirs */}
        <ReviewsSection />

        {/* 9. Final Call to Action */}
        <FinalCTASection
          onPlanTrip={() => scrollToSection('trip-planner')}
          onOpenWhatsApp={() => handleOpenWhatsApp()}
        />

        {/* 10. Contact & Expedition Inquiry Form */}
        <ContactSection onOpenWhatsApp={() => handleOpenWhatsApp()} />
      </main>

      {/* Floating Concierge WhatsApp Widget */}
      <WhatsAppFloat onClick={() => handleOpenWhatsApp()} />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Interactive Modals */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onPlanTripTo={(destName) => {
          scrollToSection('trip-planner');
        }}
      />

      <TourDetailModal
        tour={selectedTour}
        currency={currency}
        onClose={() => setSelectedTour(null)}
        onBookNow={(tour) => handleOpenBooking(tour)}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        currency={currency}
        initialTour={bookingTour}
      />

      <PhotoLightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onPlanTrip={() => {
          scrollToSection('trip-planner');
        }}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
