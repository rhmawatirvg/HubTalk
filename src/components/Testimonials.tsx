import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 'testi-1',
      name: 'Rian Prasetya',
      role: 'Project Director',
      company: 'Vibrant Wedding Organizer',
      rating: 5,
      avatarUrl: 'RP',
      text: 'HT Baofeng dari The HubTalk beneran mantap! Baterainya awet banget dipakai dari persiapan pagi hari H-1 sampai acara kelar malam tanpa perlu ngecas sama sekali. Earphone handsfree-nya juga steril, empuk di telinga, dan suaranya jernih.'
    },
    {
      id: 'testi-2',
      name: 'Sarah Amalia',
      role: 'Event Coordinator',
      company: 'Sonic Wave Music Festival',
      rating: 5,
      avatarUrl: 'SA',
      text: 'Sinyalnya luar biasa! Tembus dari area basement parkir sampai backstage panggung utama lantai 4, padahal sekat beton gedungnya tebal sekali. Adminnya komunikatif banget, frekuensi disettingkan steril bebas interferensi.'
    },
    {
      id: 'testi-3',
      name: 'Reza Mahendra',
      role: 'Ketua Pelaksana Makrab',
      company: 'FISIP UI',
      rating: 5,
      avatarUrl: 'RM',
      text: 'Sangat terbantu dengan Paket Panitia untuk acara makrab kampus kami kemarin. Unitnya prima, suaranya jernih tembus hutan perkemahan, dan yang paling juara: BEBAS DEPOSIT! Kami yang mahasiswa gak perlu pusing mikirin biaya deposit tambahan. Sukses terus The HubTalk!'
    }
  ];

  // Helper to generate a colorful gradient background for avatars based on initials
  const getAvatarBg = (initials: string) => {
    switch (initials) {
      case 'RP':
        return 'bg-gradient-to-tr from-blue-500 to-indigo-600';
      case 'SA':
        return 'bg-gradient-to-tr from-pink-500 to-rose-600';
      case 'RM':
        return 'bg-gradient-to-tr from-yellow-500 to-amber-600';
      default:
        return 'bg-gradient-to-tr from-electric to-accent-cyan';
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 text-navy relative overflow-hidden">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-electric/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-electric uppercase tracking-widest bg-electric/10 px-4 py-1.5 rounded-full">
            BUKTI NYATA
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-navy-dark leading-tight" id="testimonials-title">
            Dipercaya Ratusan Penyelenggara <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-accent-cyan font-semibold">
              Event & Proyek Lapangan
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-medium max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah pendapat mereka yang telah menggunakan jasa sewa HT Baofeng dari The HubTalk.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-gray-100 rounded-[2.25rem] p-8 shadow-lg hover:shadow-xl hover:border-gray-200 transition-all duration-300 relative flex flex-col justify-between"
              id={`testimonial-card-${testi.id}`}
            >
              {/* Quote Decorative Icon */}
              <div className="absolute top-8 right-8 text-gray-100">
                <Quote className="w-12 h-12 transform rotate-180" />
              </div>

              {/* Stars & Text */}
              <div className="space-y-4 relative z-10">
                {/* Stars Row */}
                <div className="flex gap-1">
                  {[...Array(testi.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-accent-yellow text-accent-yellow" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed italic">
                  "{testi.text}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="flex items-center gap-3.5 mt-8 border-t border-gray-100 pt-6">
                {/* Initials Avatar */}
                <div className={`w-12 h-12 rounded-xl text-white font-bold text-sm flex items-center justify-center shadow-md ${getAvatarBg(testi.avatarUrl)}`}>
                  {testi.avatarUrl}
                </div>

                {/* Name & Role */}
                <div>
                  <h4 className="text-sm font-bold text-navy-dark leading-tight flex items-center gap-1">
                    {testi.name}
                    <ShieldCheck className="w-4 h-4 text-electric flex-shrink-0" />
                  </h4>
                  <p className="text-[11px] text-gray-400 font-semibold mt-0.5">
                    {testi.role} at <span className="text-gray-500">{testi.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Trust Seal */}
        <div className="mt-12 text-center text-xs sm:text-sm text-gray-400 font-semibold flex items-center justify-center gap-2">
          <span>Tingkat Kepuasan Pelanggan:</span>
          <span className="text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md flex items-center gap-1 font-bold">
            <Star className="w-3.5 h-3.5 fill-emerald-600" /> 4.9 / 5.0 (Skala Nasional)
          </span>
        </div>

      </div>
    </section>
  );
}
