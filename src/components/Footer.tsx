import React from 'react';
import { Instagram, MessageSquare, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-gray-400 border-t border-white/5 py-16 relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo iconOnly={true} className="w-10 h-10" />
              <span className="font-display text-lg font-bold text-white tracking-wide">
                The HubTalk
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed max-w-sm">
              The HubTalk adalah layanan spesialis rental Handy Talky (HT) harian fleksibel berkualitas tinggi untuk menyukseskan kelancaran komunikasi event, konser, kepanitiaan kampus, dan koordinasi tim Anda.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
              <ShieldCheck className="w-4 h-4 text-accent-cyan" />
              <span>Mitra Resmi Komunikasi Lapangan Terpercaya — Jabodetabek & Depok</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">Tautan Navigasi</h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium">
              <a href="#features" className="hover:text-white transition-colors">Kenapa Kami</a>
              <a href="#products" className="hover:text-white transition-colors">Paket Rental</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">Cara Kerja</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Testimoni</a>
              <a href="#contact" className="hover:text-white transition-colors">Hubungi Kami</a>
              <a href="#" className="hover:text-white transition-colors">Kembali ke Atas</a>
            </div>
          </div>

          {/* Column 3: Contact & Medsos info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">Hubungi Kami</h4>
            <div className="space-y-3 text-xs sm:text-sm font-medium">
              <p className="text-gray-400 leading-relaxed">
                Jabodetabek & Depok, Indonesia <br />
                <span className="text-white block mt-1">Instagram: @thehubtalk.id</span>
                <span className="text-white block">TikTok: @thehubtalk.id</span>
                <span className="text-gray-400 block mt-1">WA Sekunder: 08871667972</span>
              </p>
              
              {/* Social media icons */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.instagram.com/thehubtalk.id/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 hover:bg-white/10 text-gray-300 hover:text-white transition-all flex items-center justify-center shadow-sm"
                  aria-label="Instagram"
                  id="footer-ig-link"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@thehubtalk.id"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 hover:bg-white/10 text-gray-300 hover:text-white transition-all flex items-center justify-center shadow-sm font-bold text-xs"
                  aria-label="TikTok"
                  id="footer-tiktok-link"
                >
                  TT
                </a>
                <a
                  href="https://wa.me/628871667972"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 hover:bg-white/10 text-gray-300 hover:text-white transition-all flex items-center justify-center shadow-sm"
                  aria-label="WhatsApp"
                  id="footer-wa-link"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        <hr className="border-white/5 my-10" />

        {/* Bottom copyright info */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] sm:text-xs font-semibold text-gray-500">
          <div>
            &copy; {currentYear} The HubTalk Indonesia. All Rights Reserved.
          </div>
          <div>
            Layanan Spesialis Rental HT Harian Terpercaya & Tanpa Deposit
          </div>
        </div>

      </div>
    </footer>
  );
}
