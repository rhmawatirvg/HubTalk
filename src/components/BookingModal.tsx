import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Hash, Clock, Radio, Instagram, Copy, Check } from 'lucide-react';
import { Package, BookingDetails } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackageId: string;
  packages: Package[];
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedPackageId,
  packages
}: BookingModalProps) {
  const [formData, setFormData] = useState<BookingDetails>({
    name: '',
    whatsapp: '',
    packageName: '',
    quantity: 10,
    durationDays: 1,
    eventDate: '',
    notes: ''
  });

  const [copied, setCopied] = useState(false);

  // Keep package selection in sync when modal opens
  useEffect(() => {
    if (isOpen) {
      const selectedPkg = packages.find(p => p.id === selectedPackageId);
      setFormData(prev => ({
        ...prev,
        packageName: selectedPkg ? selectedPkg.name : packages[0]?.name || ''
      }));
      setCopied(false);
    }
  }, [isOpen, selectedPackageId, packages]);

  const activePackage = packages.find(p => p.name === formData.packageName);
  const packagePrice = activePackage ? activePackage.price : 0;
  const totalPrice = packagePrice * formData.quantity * formData.durationDays;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' || name === 'durationDays' ? parseInt(value) || 0 : value
    }));
  };

  // Build the message template dynamically
  const templateMessage = `Halo @thehubtalk.id! 📻
Saya ingin membooking sewa HT siap pakai dengan detail berikut:
• Nama Lengkap: ${formData.name || '(Tulis Nama Anda)'}
• Pilihan Paket: ${formData.packageName}
• Jumlah HT: ${formData.quantity} unit
• Durasi Sewa: ${formData.durationDays} hari
• Tanggal Acara: ${formData.eventDate || '(Tulis Tanggal)'}
• Lokasi Venue: ${formData.notes || '(Tulis Lokasi Venue)'}

Bebas deposit uang cukup dengan KTM/KTP. Apakah slot unit masih tersedia? Terima kasih!`;

  const handleCopyAndRedirect = () => {
    navigator.clipboard.writeText(templateMessage);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      window.open('https://www.instagram.com/thehubtalk.id/', '_blank');
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-dark/85 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 z-10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-navy to-navy-light p-6 text-white relative border-b border-white/5">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-1 bg-white/10 rounded-full hover:bg-white/20"
                id="close-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-tr from-pink-500 to-rose-500 p-2.5 rounded-2xl text-white shadow-md">
                  <Instagram className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight">Booking via DM Instagram</h3>
                  <p className="text-xs text-blue-200">The HubTalk - Sewa HT Siap Pakai & Bebas Ribet</p>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
              
              {/* Top Service Warning */}
              <div className="p-3.5 bg-blue-50 border border-blue-150 rounded-2xl text-xs font-semibold text-blue-800 flex items-center gap-2">
                <Radio className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 animate-pulse" />
                <span>Melayani area Jabodetabek & Depok — belum tersedia pengiriman luar kota</span>
              </div>

              {/* Step Instruction Card */}
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-150 space-y-2">
                <span className="text-[10px] font-bold text-electric uppercase tracking-wider block">INSTRUKSI SEWA INSTAN</span>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  Isi estimasi kebutuhan Anda di bawah ini untuk menghasilkan draf pemesanan otomatis. Klik tombol di bawah untuk menyalin draf dan langsung mengirimkannya ke DM Instagram kami!
                </p>
              </div>

              {/* Dynamic Draft Form Controls */}
              <div className="space-y-3.5">
                {/* Nama Penanggung Jawab */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Nama Lengkap Anda
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Contoh: Sarah Amalia"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-xs sm:text-sm font-semibold text-navy"
                  />
                </div>

                {/* Pilih Paket */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Pilih Paket
                  </label>
                  <select
                    name="packageName"
                    value={formData.packageName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-xs sm:text-sm font-bold text-gray-700"
                  >
                    {packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.name}>
                        {pkg.name} ({new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(pkg.price)}/{pkg.unit})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Qty & Duration */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Hash className="w-3 h-3 text-gray-400" /> Jumlah HT (Unit)
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-xs sm:text-sm font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400" /> Durasi (Hari)
                    </label>
                    <input
                      type="number"
                      name="durationDays"
                      min="1"
                      value={formData.durationDays}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-xs sm:text-sm font-bold"
                    />
                  </div>
                </div>

                {/* Tanggal Event */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gray-400" /> Tanggal Event / Pemakaian
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-xs sm:text-sm font-bold text-gray-700"
                  />
                </div>

                {/* Lokasi Venue */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Lokasi / Venue Acara
                  </label>
                  <input
                    type="text"
                    name="notes"
                    placeholder="Contoh: Balairung UI, Depok"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-xs sm:text-sm font-semibold text-navy"
                  />
                </div>
              </div>

              {/* Live Message Draft Preview */}
              <div className="bg-navy-dark rounded-2xl p-4 border border-white/10 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-wider">Preview Draf DM</span>
                  <span className="text-[10px] font-bold text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">Auto-Generated</span>
                </div>
                <div className="font-mono text-[11px] text-gray-300 bg-black/30 p-3 rounded-xl border border-white/5 whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
                  {templateMessage}
                </div>
              </div>

              {/* Price Estimation */}
              <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider block mb-0.5">Estimasi Biaya Rental</span>
                  <span className="text-xs text-blue-600 block">
                    {formData.quantity} HT × {formData.durationDays} Hari
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-extrabold text-navy font-display block">
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      maximumFractionDigits: 0
                    }).format(totalPrice)}
                  </span>
                  <span className="text-[9px] text-gray-400 block font-semibold">Bebas Deposit Uang (Cukup KTM/KTP)</span>
                </div>
              </div>

            </div>

            {/* Footer with Big CTA Button */}
            <div className="p-6 bg-gray-50 border-t border-gray-150 flex flex-col items-center">
              <button
                onClick={handleCopyAndRedirect}
                id="submit-booking-btn"
                className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:to-rose-600 text-white py-3.5 px-6 rounded-2xl font-bold flex items-center justify-center gap-2.5 shadow-xl shadow-pink-500/20 active:scale-[0.98] transition-all cursor-pointer text-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-accent-yellow animate-bounce" />
                    <span>Teks Draf Disalin! Membuka Instagram...</span>
                  </>
                ) : (
                  <>
                    <Instagram className="w-5 h-5" />
                    <span>Chat & Booking via DM Instagram</span>
                  </>
                )}
              </button>

              <span className="text-center text-[10px] text-gray-400 mt-3.5 font-bold">
                *Klik tombol di atas untuk menyalin draf pesan otomatis dan membuka Instagram @thehubtalk.id
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
