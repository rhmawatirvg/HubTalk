import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Radio, Heart, Calendar, MapPin, Tag, ZoomIn, Eye, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'event' | 'campus' | 'qc' | 'outdoor';
  categoryLabel: string;
  location: string;
  date: string;
  htModel: string;
  imageUrl: string;
  description: string;
  detailText: string;
}

export default function EventGallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'event' | 'campus' | 'qc' | 'outdoor'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gallery-1',
      title: 'Koordinasi Event & Live Concert',
      category: 'event',
      categoryLabel: 'Event & Konser',
      location: 'Stadium & Concert Hall Jakarta',
      date: 'Juni 2026',
      htModel: 'Motorola Professional Series',
      imageUrl: 'https://unsplash.com/id/foto/foto-konser-NcdG9mK3PBY',
      description: 'Dua unit Motorola andalan panitia di depan layar monitor utama pengontrol panggung, menjamin kelancaran rundown detik demi detik.',
      detailText: 'Digunakan oleh tim stage manager dan security team pada konser musik internasional di Jakarta. Sinyal stabil tanpa interferensi meski di area padat penonton.'
    },
    {
      id: 'gallery-2',
      title: 'Persiapan Rundown Panitia Kampus',
      category: 'campus',
      categoryLabel: 'Kepanitiaan Kampus',
      location: 'STT NF Kampus A, Depok',
      date: 'Mei 2026',
      htModel: 'Alinco DJ-CRX6 Series',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      description: 'Tiga unit Alinco siap tempur diserahkan lengkap di atas nampan perak bersama checklist rundown acara makrab mahasiswa.',
      detailText: 'Paket bersahabat tanpa deposit khusus mahasiswa. Unit Alinco dengan suara super jernih dan body ringkas, andalan panitia makrab STT NF.'
    },
    {
      id: 'gallery-3',
      title: 'QC & Pengujian Sinyal RSR1200',
      category: 'qc',
      categoryLabel: 'QC Perangkat',
      location: 'Hub Workshop The HubTalk',
      date: 'Setiap Sebelum Kirim',
      htModel: 'Diagnostic Hardcase QC Box',
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      description: 'Unit HT diletakkan di dalam test-case diagnostic RSR1200 untuk pengetesan modulasi frekuensi dan pengisian daya baterai.',
      detailText: 'Komitmen kami pada keandalan: semua unit diuji kelayakan transmitter, receiver, serta kesehatan baterainya sebelum diserahkan kepada penyewa.'
    },
    {
      id: 'gallery-4',
      title: 'Koordinasi Lapangan & Rundown Acara',
      category: 'outdoor',
      categoryLabel: 'Aktivitas Outdoor',
      location: 'Bumi Perkemahan, Cibubur',
      date: 'April 2026',
      htModel: 'Baofeng UV-5R Black',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      description: 'HT Baofeng diletakkan langsung di atas lembar rundown acara outdoor panitia, memandu kelancaran mobilitas pengisi acara.',
      detailText: 'Baofeng UV-5R dual-band andalan untuk acara outdoor dengan penataan frekuensi kustom agar tidak bentrok dengan frekuensi lokal.'
    },
    {
      id: 'gallery-5',
      title: 'Lomba Outdoor & Sport Event',
      category: 'outdoor',
      categoryLabel: 'Aktivitas Outdoor',
      location: 'Lapangan Olahraga & Festival',
      date: 'Maret 2026',
      htModel: 'Convey C1 Pro Active',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      description: 'HT Convey C1 Pro digenggam erat di lapangan terbuka, memantau pos-pos rintangan atlet lomba lari.',
      detailText: 'Desain ramping dengan baterai tangguh 24 jam penuh untuk koordinasi maraton, turnamen olahraga, dan festival outdoor skala besar.'
    },
    {
      id: 'gallery-6',
      title: 'Pemeriksaan Rundown di Ruang Seminar',
      category: 'campus',
      categoryLabel: 'Kepanitiaan Kampus',
      location: 'Auditorium Kampus Jakarta',
      date: 'Februari 2026',
      htModel: 'Baofeng Camouflage Edition',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      description: 'Edisi khusus loreng (camouflage) Baofeng digunakan oleh panitia seminar nasional untuk koordinasi lightning & sound system.',
      detailText: 'Menambah kesan tangguh dan profesional untuk panitia keamanan lapangan selama acara simposium atau sidang pleno kampus.'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-gray-50 text-navy relative overflow-hidden">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-electric/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-electric uppercase tracking-widest bg-electric/10 px-4 py-1.5 rounded-full">
            DOKUMENTASI LIVE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-navy-dark leading-tight" id="gallery-title">
            The HubTalk di Berbagai Event <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-accent-cyan font-semibold">
              Real-Life & Dokumentasi Unit
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-medium max-w-2xl mx-auto">
            Intip bagaimana unit HT kami (Motorola, Alinco, Baofeng, Convey) diandalkan langsung oleh EO, mahasiswa, dan kru lapangan di berbagai venue sesungguhnya.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Semua Dokumentasi' },
            { id: 'event', label: 'Event & Konser' },
            { id: 'campus', label: 'Kepanitiaan Kampus' },
            { id: 'qc', label: 'QC Bengkel Workshop' },
            { id: 'outdoor', label: 'Aktivitas Outdoor' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-navy-dark text-white border-navy-dark shadow-md'
                  : 'bg-white text-gray-500 border-gray-200 hover:text-navy-dark hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-grid">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedItem(item)}
              id={`gallery-card-${item.id}`}
            >
              {/* Image Box */}
              <div className="relative h-60 overflow-hidden bg-slate-900 flex-shrink-0">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4 bg-navy-dark/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5 text-[10px] font-bold text-accent-cyan uppercase tracking-wider">
                  <Tag className="w-3.5 h-3.5" />
                  {item.categoryLabel}
                </div>

                {/* HT Model overlay */}
                <div className="absolute bottom-4 left-4 bg-electric px-3 py-1 rounded-lg text-[10px] font-bold text-white shadow">
                  {item.htModel}
                </div>

                {/* View Overlay on hover */}
                <div className="absolute inset-0 bg-navy-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white text-navy flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Eye className="w-5 h-5 text-electric" />
                  </div>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] font-semibold text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {item.location}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {item.date}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold font-display text-navy-dark line-clamp-1 group-hover:text-electric transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-electric group-hover:text-electric-hover">
                  <span>Lihat Detail Dokumentasi</span>
                  <ZoomIn className="w-4 h-4 transition-transform group-hover:scale-110" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real-time trust stats banner */}
        <div className="mt-16 bg-gradient-to-tr from-navy-dark to-navy text-white rounded-[2rem] p-8 sm:p-10 border border-white/5 shadow-xl relative overflow-hidden text-center sm:text-left">
          <div className="absolute top-0 right-0 w-48 h-48 opacity-10 bg-gradient-to-tr from-electric to-accent-cyan rounded-full filter blur-xl pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-bold font-display text-white flex items-center justify-center sm:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-accent-yellow" /> Unit Lengkap & Selalu Steril!
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl font-medium leading-relaxed">
                Selain menjamin QC fisik, semua busa earpiece kami ganti baru atau disinfeksi penuh sebelum diserahkan ke Anda. Kenyamanan dan higienitas Anda terjamin 100%.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/20 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all"
            >
              Lihat Hubungi Kami
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox / Detail Popup Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2.5rem] overflow-hidden max-w-3xl w-full border border-gray-100 shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] md:max-h-none"
            >
              {/* Image Column */}
              <div className="md:w-1/2 relative h-60 md:h-auto bg-slate-900">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-navy-dark/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 text-[10px] font-bold text-accent-cyan uppercase tracking-wider">
                  {selectedItem.categoryLabel}
                </div>
              </div>

              {/* Details Column */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-4">
                  {/* Header metadata */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-semibold text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-electric" /> {selectedItem.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-electric" /> {selectedItem.date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-navy-dark leading-tight">
                    {selectedItem.title}
                  </h3>

                  {/* Tech specs bar */}
                  <div className="bg-gray-50 border border-gray-100 p-3.5 rounded-xl text-xs flex justify-between items-center font-bold">
                    <span className="text-gray-400 font-medium">Model Perangkat:</span>
                    <span className="text-electric">{selectedItem.htModel}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
                    {selectedItem.detailText}
                  </p>
                </div>

                {/* Footer and Close */}
                <div className="pt-6 border-t border-gray-100 mt-6 flex gap-3">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl font-bold text-xs transition-all cursor-pointer text-center"
                  >
                    Tutup Dokumentasi
                  </button>
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      const target = document.getElementById('contact');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 py-3 bg-electric hover:bg-electric-hover text-white rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer text-center"
                  >
                    Sewa Model Ini
                  </button>
                </div>
              </div>

              {/* Close Button on Top Right (Mobile/Tablet) */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-navy-dark/95 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-navy border border-white/10 shadow transition-all cursor-pointer"
                aria-label="Tutup"
              >
                &times;
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
