import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Instagram, HelpCircle, ChevronDown, Radio, Send, CheckCircle2 } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface ContactCTAProps {
  onOpenBooking: () => void;
}

export default function ContactCTA({ onOpenBooking }: ContactCTAProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Apakah ada syarat jaminan untuk sewa HT?',
      answer: 'Sangat mudah! Kami menerapkan kebijakan BEBAS DEPOSIT UANG. Anda cukup menyerahkan jaminan identitas asli penanggung jawab seperti KTM (Kartu Tanda Mahasiswa) untuk panitia kampus, atau KTP aktif untuk umum/EO.'
    },
    {
      id: 'faq-2',
      question: 'Bagaimana jika unit HT rusak atau bermasalah saat acara?',
      answer: 'Setiap unit kami melalui 100% Quality Control ketat sebelum dikirim. Namun jika ada kendala teknis, tim kami standby 24/7 dan siap mengirimkan unit backup siaga secara instan ke venue Anda.'
    },
    {
      id: 'faq-3',
      question: 'Apakah earphone / earpiece yang dipinjamkan steril?',
      answer: 'Pasti! Kebersihan dan higienitas adalah prioritas kami. Semua earpiece dicuci steril, diberi cairan disinfektan khusus, dan dikemas satu-per-satu sebelum diserahkan.'
    },
    {
      id: 'faq-4',
      question: 'Apakah melayani pengiriman di luar Jabodetabek?',
      answer: 'Saat ini layanan rental HT kami eksklusif melayani area JABODETABEK & DEPOK demi menjaga kecepatan respons dan koordinasi di lapangan. Kami belum melayani pengiriman luar kota.'
    }
  ];

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section id="contact" className="py-24 bg-navy-dark text-white relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-electric rounded-full filter blur-[180px]" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent-cyan rounded-full filter blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20">
                INFO SEPUTAR RENTAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight leading-tight">
                Pertanyaan yang Sering Diajukan (FAQ)
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">
                Temukan jawaban cepat seputar syarat sewa, regulasi tanpa deposit uang, kebersihan alat, dan cakupan layanan rental kami.
              </p>
            </div>

            {/* Accordion Wrapper */}
            <div className="space-y-3 pt-4">
              {faqs.map((faq) => {
                const isSelected = activeFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border border-white/5 bg-navy-light/20 rounded-2xl overflow-hidden transition-all duration-300"
                    id={`faq-item-${faq.id}`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base hover:bg-white/5 transition-colors"
                      id={`faq-btn-${faq.id}`}
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className={`w-5 h-5 flex-shrink-0 ${isSelected ? 'text-accent-cyan' : 'text-gray-500'}`} />
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isSelected ? 'transform rotate-180 text-accent-cyan' : ''}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="p-5 pt-0 text-xs sm:text-sm text-gray-300 border-t border-white/5 bg-white/[0.01] font-medium leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Simulated Form Pemesanan directing to Instagram */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-lg bg-gradient-to-br from-navy-light to-navy border-2 border-electric/30 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between"
              id="contact-cta-card"
            >
              {/* Instagram Branding Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-15 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-bl-full pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-tr from-pink-500 to-rose-500 p-3 rounded-2xl text-white shadow-lg">
                    <Instagram className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest block leading-none">Formulir Booking</span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">Sewa HT Siap Pakai</h3>
                  </div>
                </div>

                {/* Simulated Form Fields for visual identity of "form pemesanan" */}
                <div className="space-y-3.5 bg-black/20 p-5 rounded-2xl border border-white/5">
                  <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest block mb-2">Informasi Pemesanan yang Diperlukan:</span>
                  
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                    <span>Tanggal & Waktu Acara</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                    <span>Jumlah Kebutuhan Unit HT</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                    <span>Lokasi / Venue Acara</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                    <span>Pilihan Jaminan (KTM / KTP)</span>
                  </div>
                </div>

                {/* Instruction Area */}
                <div className="space-y-1 bg-white/5 p-4 rounded-xl border border-white/5 text-center sm:text-left">
                  <p className="text-xs sm:text-sm font-bold text-accent-yellow">Langkah Booking:</p>
                  <p className="text-xs text-gray-300 font-medium leading-relaxed">
                    Klik tombol di bawah, lalu kirim DM ke Instagram kami dengan detail: tanggal acara, jumlah unit HT, dan lokasi venue.
                  </p>
                </div>
              </div>

              {/* Action Button & Main Contacts */}
              <div className="mt-8 relative z-10 space-y-4">
                <a
                  href="https://www.instagram.com/thehubtalk.id/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:to-rose-600 text-white font-extrabold py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 shadow-xl shadow-pink-500/20 hover:scale-[1.01] transition-all text-sm cursor-pointer"
                  id="ig-booking-btn"
                >
                  <Instagram className="w-5 h-5" />
                  Chat & Booking via DM Instagram
                </a>

                {/* Secondary Contact Info */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-[11px] sm:text-xs font-semibold text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white">Instagram:</span>
                    <a href="https://www.instagram.com/thehubtalk.id/" target="_blank" rel="noreferrer" className="text-accent-cyan hover:underline">@thehubtalk.id</a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white">TikTok:</span>
                    <a href="https://www.tiktok.com/@thehubtalk.id" target="_blank" rel="noreferrer" className="text-accent-cyan hover:underline">@thehubtalk.id</a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white">WA Sekunder:</span>
                    <a href="https://wa.me/628871667972" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">08871667972</a>
                  </div>
                </div>
              </div>

              {/* Booking Trigger Link with customized behavior */}
              <button
                onClick={onOpenBooking}
                id="contact-booking-trigger"
                className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/15 text-white rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Gunakan Asisten Booking Digital (Draf Otomatis)
              </button>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}
