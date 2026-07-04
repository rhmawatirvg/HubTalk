import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import EventGallery from './components/EventGallery';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Package } from './types';

// Central package definitions
const packages: Package[] = [
  {
    id: 'eo-kecil',
    name: 'Paket EO Kecil',
    price: 20000,
    unit: 'HT / Hari',
    description: 'Solusi taktis koordinasi event skala mikro/kecil dengan unit esensial. Praktis, jernih, dan siap pakai.',
    features: [
      'Unit HT Prima Siap Tempur',
      'Earpiece steril dalam kemasan',
      'Baterai full charged + charger bundled',
      'Antena High-Gain penembus hambatan',
      'Bebas setting frekuensi anti-bentrok'
    ],
    badge: 'Bebas Deposit (KTP/KTM)'
  },
  {
    id: 'konser-event',
    name: 'Paket Konser/Event',
    price: 30000,
    unit: 'HT / Hari',
    isPopular: true,
    description: 'Didesain khusus untuk event besar, konser, dan festival yang butuh unit dalam jumlah banyak dengan cakupan frekuensi luas.',
    features: [
      'Unit HT Premium High-Power',
      'Earpiece premium steril khusus',
      'Baterai cadangan + charger dock lengkap',
      'QC 100% sebelum serah terima',
      'Garansi backup unit langsung siaga',
      'Diskon volume sewa >20 unit'
    ],
    badge: 'Bebas Deposit (KTP/KTM)'
  },
  {
    id: 'panitia',
    name: 'Paket Panitia',
    price: 15000,
    unit: 'HT / Hari',
    description: 'Paket paling hemat & bersahabat khusus untuk program kerja organisasi kepanitiaan mahasiswa (kisaran Rp150.000 - Rp200.000 per paket acara).',
    features: [
      'Tarif khusus ramah budget mahasiswa',
      'Unit HT Tangguh Siap Tempur',
      'Earpiece steril & nyaman digunakan',
      'Baterai tahan lama seharian penuh',
      'Cukup jaminan KTM/KTP tanpa deposit uang',
      'Serah terima unit fleksibel di area kampus'
    ],
    badge: 'Paling Hemat Mahasiswa'
  }
];

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState('eo-kecil');

  const handleOpenBooking = () => {
    setSelectedPackageId('eo-kecil');
    setIsBookingOpen(true);
  };

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackageId(packageId);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithDetails = (packageId: string, quantity: number, duration: number) => {
    // Open the booking modal with predefined selections
    setSelectedPackageId(packageId);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-between" id="app-root-container">
      {/* 1. Header/Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section Banner */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Features Value Props Section */}
        <Features />

        {/* 4. Products, Packages & Interactive Pricing Calculator */}
        <Products 
          packages={packages} 
          onSelectPackage={handleSelectPackage}
          onOpenBookingWithDetails={handleOpenBookingWithDetails}
        />

        {/* 5. How It Works - Steps Section */}
        <HowItWorks />

        {/* 5b. Galeri Dokumentasi Kegiatan */}
        <EventGallery />

        {/* 6. Social Proof / Testimonials Section */}
        <Testimonials />

        {/* 7. Support & FAQs & Direct WhatsApp CTA Section */}
        <ContactCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* 8. Footer Block */}
      <Footer />

      {/* Interactive Booking Modal Dialog (Triggered on click) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedPackageId={selectedPackageId}
        packages={packages}
      />
    </div>
  );
}
