import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Kenapa Kami', href: '#features' },
    { name: 'Paket Rental', href: '#products' },
    { name: 'Cara Kerja', href: '#how-it-works' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Booking', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-md border-b border-white/5 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group" id="navbar-logo-link">
            <Logo iconOnly={true} className="w-11 h-11" />
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-white tracking-wide leading-tight group-hover:text-blue-200 transition-colors">
                The HubTalk
              </span>
              <span className="text-[10px] font-bold text-accent-cyan tracking-wider uppercase leading-none">
                Layanan Rental HT
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative py-1 group"
                id={`desktop-nav-${link.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:block">
            <button
              onClick={onOpenBooking}
              id="desktop-cta-btn"
              className="bg-electric hover:bg-electric-hover text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-electric/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              Sewa Sekarang
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none bg-white/5 rounded-xl transition-colors"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-dark border-b border-white/5" id="mobile-nav-container">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                id={`mobile-nav-${link.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                id="mobile-cta-btn"
                className="w-full bg-electric hover:bg-electric-hover text-white py-3 px-6 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-electric/20"
              >
                Sewa Sekarang
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
