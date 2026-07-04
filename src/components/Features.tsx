import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Radio, Headphones, Box, HeartHandshake } from 'lucide-react';
import { Feature } from '../types';

export default function Features() {
  const features: Feature[] = [
    {
      id: 'siap-tempur',
      title: 'Unit Siap Tempur',
      description: 'Antena high-gain untuk jangkauan luas, earpiece steril sudah termasuk, baterai tahan lama, dan charger bundled di setiap unit.',
      iconName: 'siap-tempur'
    },
    {
      id: 'qc-100',
      title: 'QC 100% Sebelum Kirim',
      description: 'Semua unit dan baterai dicek penuh dan diuji sebelum serah terima. Kami jamin baterai tidak drop atau bermasalah di tengah-tengah acara.',
      iconName: 'qc-100'
    },
    {
      id: 'hardcase',
      title: 'Hardcase Tahan Banting',
      description: 'Dilengkapi kotak penyimpanan kokoh (hardcase) yang melindungi unit HT agar tetap rapi, aman, dan mudah dimobilisasi selama persiapan acara.',
      iconName: 'hardcase'
    },
    {
      id: 'standby-247',
      title: 'Tim Standby 24/7',
      description: 'Tim support kami siap bersiaga 24 jam penuh untuk membantu koordinasi frekuensi, panduan penggunaan, atau penukaran unit darurat jika diperlukan.',
      iconName: 'standby-247'
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'siap-tempur':
        return <Radio className="w-8 h-8 text-accent-cyan" />;
      case 'qc-100':
        return <ShieldCheck className="w-8 h-8 text-emerald-400" />;
      case 'hardcase':
        return <Box className="w-8 h-8 text-accent-yellow" />;
      case 'standby-247':
        return <Headphones className="w-8 h-8 text-white" />;
      default:
        return <Radio className="w-8 h-8 text-electric" />;
    }
  };

  const getIconBg = (name: string) => {
    switch (name) {
      case 'siap-tempur':
        return 'bg-cyan-500/10 border-cyan-500/20';
      case 'qc-100':
        return 'bg-emerald-500/10 border-emerald-500/20';
      case 'hardcase':
        return 'bg-amber-500/10 border-amber-500/20';
      case 'standby-247':
        return 'bg-electric/20 border-electric/30';
      default:
        return 'bg-electric/15 border-electric/20';
    }
  };

  return (
    <section id="features" className="py-24 bg-gray-50 text-navy relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-electric/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-electric uppercase tracking-widest bg-electric/10 px-4 py-1.5 rounded-full">
            KEUNGGULAN UTAMA
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-navy-dark leading-tight" id="features-title">
            Mengapa Rental HT di The HubTalk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-accent-cyan font-semibold">
              Dijamin Prima & Bebas Ribet?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-medium max-w-2xl mx-auto">
            Kami paham kelancaran komunikasi adalah kunci suksesnya event Anda. Setiap unit dipersiapkan secara detail oleh tim teknis kami demi pengalaman terbaik Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="features-grid">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white hover:bg-navy-dark border border-gray-100 hover:border-white/5 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl hover:shadow-navy-dark/10 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start hover:-translate-y-1 cursor-default"
              id={`feature-card-${feature.id}`}
            >
              {/* Icon Frame */}
              <div className={`p-4 rounded-2xl border flex-shrink-0 group-hover:scale-110 transition-transform ${getIconBg(feature.iconName)}`}>
                {getIcon(feature.iconName)}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold font-display text-navy-dark group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 font-medium leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Highlight Banner */}
        <div className="mt-16 bg-navy rounded-[2.5rem] p-8 sm:p-12 text-white border border-white/5 shadow-2xl relative overflow-hidden" id="features-banner">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2E6FF2_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <h4 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center justify-center md:justify-start gap-2">
                <HeartHandshake className="w-6 h-6 text-accent-cyan" /> Bebas Deposit Uang!
              </h4>
              <p className="text-sm text-gray-300 max-w-xl font-medium leading-relaxed">
                Khusus mahasiswa & EO lokal, Anda tidak perlu mengeluarkan uang deposit jaminan sewa. Cukup tunjukkan KTM atau KTP aktif sebagai jaminan administrasi.
              </p>
            </div>
            <button
              onClick={() => {
                const target = document.getElementById('contact');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-shrink-0 bg-accent-yellow hover:bg-yellow-400 text-navy-dark font-extrabold px-6 py-3.5 rounded-2xl transition-all shadow-lg hover:shadow-yellow-400/20 active:scale-95 inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
              id="features-banner-wa-btn"
            >
              Mulai Konsultasi Sewa
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
