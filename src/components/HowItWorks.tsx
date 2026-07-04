import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, CheckCircle, Radio, ArrowRight, Instagram, FileText } from 'lucide-react';
import { Step } from '../types';

export default function HowItWorks() {
  const steps: Step[] = [
    {
      stepNumber: '01',
      title: 'DM Instagram Detail Acara',
      description: 'Kirim DM ke Instagram kami dengan detail: tanggal acara, jumlah unit HT, dan lokasi venue.',
      badge: 'Instagram DM'
    },
    {
      stepNumber: '02',
      title: 'Konfirmasi Paket & Serah Terima',
      description: 'Konfirmasi ketersediaan unit dan serah terima paket sewa. Cukup tunjukkan KTM/KTP, tanpa deposit uang sama sekali!',
      badge: 'Bebas Deposit'
    },
    {
      stepNumber: '03',
      title: 'Koordinasi Real-Time 24/7',
      description: 'Unit HT siap digunakan dengan performa prima. Tim teknis kami standby penuh jika ada kendala frekuensi atau perangkat selama acara.',
      badge: 'Standby Bantuan'
    }
  ];

  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Instagram className="w-6 h-6 text-pink-500 animate-pulse" />;
      case '02':
        return <FileText className="w-6 h-6 text-accent-cyan" />;
      case '03':
        return <Radio className="w-6 h-6 text-accent-yellow" />;
      default:
        return <Radio className="w-6 h-6 text-electric" />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-white text-navy relative overflow-hidden">
      
      {/* Grid Pattern Decors */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-grid-pattern" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold text-electric uppercase tracking-widest bg-electric/10 px-4 py-1.5 rounded-full">
            ALUR KERJA
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-navy-dark leading-tight" id="how-it-works-title">
            3 Langkah Mudah Memulai <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-accent-cyan font-semibold">
              Sewa HT Bebas Ribet
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-medium max-w-2xl mx-auto">
            Proses penyewaan HT di The HubTalk sangat ringkas, cepat, dan tanpa birokrasi berbelit-belit khusus untuk kesuksesan event Anda.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative" id="steps-container">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-1 bg-gradient-to-r from-electric/30 via-accent-cyan/30 to-accent-yellow/30 -translate-y-12 -z-10 rounded-full" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 rounded-[2.25rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                id={`step-card-${step.stepNumber}`}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  {/* Step Large Number */}
                  <span className="text-5xl sm:text-6xl font-extrabold font-display text-electric/10 group-hover:text-electric/20 transition-colors leading-none">
                    {step.stepNumber}
                  </span>
                  
                  {/* Icon badge */}
                  <div className="p-3 bg-white rounded-2xl border border-gray-150 shadow-sm group-hover:scale-110 transition-transform">
                    {getStepIcon(step.stepNumber)}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-electric/10 text-electric text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-navy-dark">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Footer Arrow indicators for steps */}
                {idx < 2 && (
                  <div className="lg:hidden flex justify-center mt-6 text-electric/40 animate-bounce">
                    <ArrowRight className="w-5 h-5 transform rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
