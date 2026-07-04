import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info, Calculator, Sparkles, Smartphone, ArrowRight } from 'lucide-react';
import { Package } from '../types';

interface ProductsProps {
  packages: Package[];
  onSelectPackage: (packageId: string) => void;
  onOpenBookingWithDetails: (packageId: string, quantity: number, duration: number) => void;
}

export default function Products({ packages, onSelectPackage, onOpenBookingWithDetails }: ProductsProps) {
  // Calculator state
  const [calcPackage, setCalcPackage] = useState(packages[0]?.id || 'eo-kecil');
  const [calcQty, setCalcQty] = useState(10);
  const [calcDays, setCalcDays] = useState(1);

  const selectedPkg = packages.find(p => p.id === calcPackage) || packages[0];

  // Calculate pricing & discount
  const basePricePerUnit = selectedPkg.price;
  
  // All new packages are simple "per HT per Day"
  const multiplier = calcDays;
  const rawTotal = basePricePerUnit * calcQty * multiplier;

  // Bulk quantity discounts
  let discountPercentage = 0;
  if (calcQty >= 50) {
    discountPercentage = 15; // 15% off for 50+ units
  } else if (calcQty >= 20) {
    discountPercentage = 10; // 10% off for 20+ units
  } else if (calcQty >= 10) {
    discountPercentage = 5; // 5% off for 10+ units
  }

  // Duration discounts (additional)
  let durationDiscount = 0;
  if (calcDays >= 14) {
    durationDiscount = 5; // Extra 5% off for 2+ weeks
  }

  const totalDiscountPercentage = Math.min(discountPercentage + durationDiscount, 25);
  const discountAmount = rawTotal * (totalDiscountPercentage / 100);
  const finalTotal = rawTotal - discountAmount;

  const handleBookFromCalculator = () => {
    onOpenBookingWithDetails(selectedPkg.id, calcQty, calcDays);
  };

  return (
    <section id="products" className="py-24 bg-navy text-white relative overflow-hidden">
      
      {/* Visual backgrounds */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-electric rounded-full filter blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-accent-yellow uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full border border-yellow-400/15">
            OPSI PAKET RENTAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white leading-tight" id="products-title">
            Pilihan Paket Sewa Terbaik <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-accent-cyan to-accent-yellow bubble-text">
              Hemat, Praktis & Tanpa Deposit
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-medium max-w-2xl mx-auto">
            Kami menawarkan beberapa skema harga rental HT yang sangat ramah anggaran. Pilih paket yang paling cocok dengan timeline event Anda.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20" id="products-grid">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative bg-navy-light/40 border rounded-[2.25rem] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                pkg.isPopular 
                  ? 'border-electric shadow-xl shadow-electric/15 ring-2 ring-electric/30 lg:scale-105 z-10 bg-navy-light/80' 
                  : 'border-white/10 hover:border-white/20 hover:bg-navy-light/60'
              }`}
              id={`package-card-${pkg.id}`}
            >
              {/* Popular Ribbon/Badge */}
              {pkg.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-electric to-accent-cyan text-white text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-accent-yellow animate-spin" style={{ animationDuration: '4s' }} />
                  Rekomendasi Utama
                </span>
              )}

              {/* Package Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{pkg.name}</span>
                  {pkg.badge && (
                    <span className="bg-yellow-400/10 text-accent-yellow border border-yellow-400/20 text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      maximumFractionDigits: 0
                    }).format(pkg.price)}
                  </span>
                  <span className="text-xs text-gray-300 font-semibold">/{pkg.unit}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed min-h-[40px]">
                  {pkg.description}
                </p>

                <hr className="border-white/10 my-4" />

                {/* Features List */}
                <ul className="space-y-3">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                      <div className="p-0.5 rounded-full bg-electric/20 text-electric border border-electric/30 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button & No-Deposit Badge */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  id={`select-package-${pkg.id}`}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-electric hover:bg-electric-hover text-white shadow-lg shadow-electric/25 hover:shadow-electric/40 active:scale-98'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white hover:text-white active:scale-98'
                  }`}
                >
                  Pilih Paket {pkg.name.split(' ')[1] || ''}
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* No-Deposit Badge under each card */}
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Bebas Deposit Uang (cukup KTM/KTP)
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Cost Calculator Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-navy-dark via-navy-light/60 to-navy-dark border border-white/10 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative"
          id="calculator-widget"
        >
          {/* Badge decorative */}
          <div className="absolute -top-4 right-10 bg-gradient-to-r from-accent-cyan to-electric text-white font-extrabold text-[10px] sm:text-xs px-4 py-1.5 rounded-full tracking-widest uppercase flex items-center gap-1.5 shadow-md">
            <Calculator className="w-4 h-4" /> Estimator Biaya Instan
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Calculator Controls (Left) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-accent-cyan" /> Kalkulator Sewa Kustom
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  Rencanakan kebutuhan kepanitiaan Anda. Masukkan jumlah unit HT dan durasi sewa untuk melihat rincian biaya transparan beserta diskon volume sewa.
                </p>
              </div>

              {/* Select Package for calc */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setCalcPackage(pkg.id)}
                    className={`px-4 py-3 rounded-xl font-bold text-xs border text-center transition-all ${
                      calcPackage === pkg.id
                        ? 'bg-electric/15 text-white border-electric ring-1 ring-electric/30'
                        : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white'
                    }`}
                    id={`calc-select-${pkg.id}`}
                  >
                    {pkg.name}
                  </button>
                ))}
              </div>

              {/* Sliders */}
              <div className="space-y-4">
                {/* Quantity Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                    <span className="text-gray-300">Jumlah Unit HT Baofeng:</span>
                    <span className="text-accent-cyan font-bold bg-accent-cyan/10 px-3 py-1 rounded-lg border border-accent-cyan/20">
                      {calcQty} Unit
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="1"
                    value={calcQty}
                    onChange={(e) => setCalcQty(parseInt(e.target.value))}
                    className="w-full accent-electric h-2 bg-white/10 rounded-lg cursor-pointer"
                    id="calc-qty-slider"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                    <span>Min: 5 Unit</span>
                    <span>Diskon Bulk: 10+ (5%), 20+ (10%), 50+ (15%)</span>
                    <span>100 Unit</span>
                  </div>
                </div>

                {/* Duration Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                    <span className="text-gray-300">Durasi Pemakaian:</span>
                    <span className="text-accent-yellow font-bold bg-accent-yellow/10 px-3 py-1 rounded-lg border border-accent-yellow/20">
                      {calcDays} Hari
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={calcDays}
                    onChange={(e) => setCalcDays(parseInt(e.target.value))}
                    className="w-full accent-electric h-2 bg-white/10 rounded-lg cursor-pointer"
                    id="calc-days-slider"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                    <span>1 Hari</span>
                    <span>Diskon Durasi: 14+ Hari (Ekstra 5%)</span>
                    <span>30 Hari</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Result Box (Right) */}
            <div className="lg:col-span-5 bg-navy-dark border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-center lg:text-left h-full">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Rincian Estimasi Biaya</span>
                
                {/* Math detail lines */}
                <div className="space-y-2 text-xs sm:text-sm font-semibold text-gray-300 border-b border-white/5 pb-4">
                  <div className="flex justify-between">
                    <span>Tarif Paket ({selectedPkg.name}):</span>
                    <span className="text-white">Rp {basePricePerUnit.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Unit & Pengali:</span>
                    <span className="text-white">{calcQty} HT × {calcDays} Hari</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Harga Kotor:</span>
                    <span>Rp {rawTotal.toLocaleString('id-ID')}</span>
                  </div>
                  {totalDiscountPercentage > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span className="flex items-center gap-1"><Info className="w-3.5 h-3.5" /> Diskon Spesial ({totalDiscountPercentage}%):</span>
                      <span>- Rp {discountAmount.toLocaleString('id-ID')}</span>
                    </div>
                  )}
                </div>

                {/* Big Final Price */}
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Total Biaya Akhir</span>
                  <div className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                    Rp {finalTotal.toLocaleString('id-ID')}
                  </div>
                  <span className="text-[10px] text-gray-400 block font-medium mt-1">Sudah termasuk set standard & earpiece steril!</span>
                </div>
              </div>

              {/* CTA Booking Button */}
              <button
                onClick={handleBookFromCalculator}
                id="calc-book-btn"
                className="w-full mt-6 bg-gradient-to-r from-electric to-accent-cyan hover:from-electric-hover hover:to-electric text-white py-3.5 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-electric/25 hover:scale-[1.01] transition-all cursor-pointer text-sm"
              >
                Pesan Hasil Kustom Ini
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
