import React from 'react';
import { motion } from 'motion/react';
import { Radio, ShieldCheck, Zap, MessageCircle } from 'lucide-react';

const heroImage = '/src/assets/images/baofeng_hero_1783167675832.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-gradient-to-b from-navy-dark via-navy to-navy-dark text-white overflow-hidden flex items-center">
      
      {/* Decorative Grid Background & Floating Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-electric rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent-cyan rounded-full filter blur-[120px]" />
      </div>

      {/* Grid of Dots decoration */}
      <div className="absolute -top-10 -left-10 w-40 h-40 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" fill="currentColor">
          <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" className="text-electric" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Promo Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-accent-cyan font-bold uppercase tracking-wider"
              id="hero-promo-badge"
            >
              <Zap className="w-4 h-4 text-accent-yellow animate-bounce" />
              Layanan Rental HT Siap Pakai & Bebas Ribet
            </motion.div>

            {/* Area Layanan Notice Area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-500/10 border border-red-500/25 rounded-full text-[11px] sm:text-xs text-red-300 font-extrabold"
              id="hero-service-area-badge"
            >
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
              Melayani area Jabodetabek & Depok — belum tersedia pengiriman luar kota
            </motion.div>

            {/* Headline - Bubble Text Styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-tight" id="hero-main-title">
                Sewa HT Siap Pakai,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-accent-cyan to-accent-yellow bubble-text pr-2 drop-shadow-sm">
                  Unit Dijamin Prima,
                </span>
                <br />
                Bebas Ribet!
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-300 max-w-xl font-medium leading-relaxed"
              id="hero-subheadline"
            >
              The HubTalk adalah layanan rental HT dengan paket harian fleksibel untuk <span className="text-white font-bold">EO, konser, dan panitia kampus</span>. Unit selalu melalui QC penuh, baterai tahan lama, dan lengkap dengan earpiece steril siap tempur!
            </motion.p>

            {/* Micro value props list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-2 text-xs sm:text-sm text-gray-300 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4.5 h-4.5 text-accent-cyan" />
                <span>Bebas Deposit Uang (KTM/KTP)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Radio className="w-4.5 h-4.5 text-accent-yellow animate-pulse" />
                <span>Earpiece Steril Termasuk</span>
              </div>
            </motion.div>

            {/* Buttons / CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4"
              id="hero-cta-group"
            >
              <button
                onClick={onOpenBooking}
                id="hero-primary-cta"
                className="w-full sm:w-auto px-8 py-4 bg-electric hover:bg-electric-hover text-white rounded-full font-bold text-base shadow-xl shadow-electric/25 hover:shadow-electric/40 hover:scale-[1.02] transition-all cursor-pointer text-center"
              >
                Booking via DM Instagram
              </button>
              
              <a
                href="#products"
                id="hero-secondary-cta"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/20 text-white rounded-full font-bold text-base text-center hover:scale-[1.02] transition-all"
              >
                Lihat Paket Sewa
              </a>
            </motion.div>

          </div>

          {/* Right Column: Hero Image Frame */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: 'spring', duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Decorative Circle Behind Image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-electric to-accent-cyan rounded-3xl opacity-30 blur-2xl animate-pulse" style={{ animationDuration: '6s' }} />

              {/* Main Image Frame */}
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-navy-light/40 group">
                <img
                  src={heroImage}
                  alt="Baofeng Walkie Talkie"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  id="hero-baofeng-img"
                />

                {/* Floating Specs Badge inside Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-navy-dark/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-wider block">Unit Rental Terfavorit</span>
                    <h4 className="text-sm font-bold text-white font-display">Baofeng UV-5R Dual Band</h4>
                  </div>
                  <div className="bg-electric/20 px-3 py-1 rounded-lg border border-electric/30">
                    <span className="text-xs font-bold text-white">5 Watt Power</span>
                  </div>
                </div>
              </div>

              {/* Mini Interactive Badge 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-5 -left-5 bg-navy-light/90 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 hidden sm:flex"
              >
                <div className="bg-accent-yellow/20 p-2 rounded-xl text-accent-yellow">
                  <Radio className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-semibold leading-none">RANGE FREKUENSI</span>
                  <span className="text-xs font-bold text-white">VHF 136-174 / UHF 400-520</span>
                </div>
              </motion.div>

              {/* Mini Interactive Badge 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-5 -right-5 bg-navy-light/90 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 hidden sm:flex"
              >
                <div className="bg-green-500/20 p-2 rounded-xl text-green-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-semibold leading-none">GARANSI UNIT</span>
                  <span className="text-xs font-bold text-white">100% Siap Tempur</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}
