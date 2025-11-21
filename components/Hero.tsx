import React from 'react';
import { Button } from './ui/Button';
import { Calendar, MapPin } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/4/1920/1080" 
          alt="Business Workspace" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark/90"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center mt-16">
        <div className="inline-block px-4 py-1 border border-brand-gold/50 rounded-full mb-6 bg-brand-gold/10 backdrop-blur-sm animate-fade-in-up">
          <span className="text-brand-gold font-semibold tracking-wider uppercase text-sm">Практикум-день</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
          Возрождение <span className="text-brand-gold">ЦЕЛИ</span><br />
          Владельца Бизнеса
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
          Вы не просто поставите цель — вы создадите <span className="text-white font-semibold">механизм</span>, который не позволит остановиться в рутине.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 text-gray-200">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md">
            <Calendar className="text-brand-gold w-5 h-5" />
            <span>23 ноября 2025 | 10:00 — 19:00</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md">
            <MapPin className="text-brand-gold w-5 h-5" />
            <span>Тель-Авив, Kibbutz Galuyot 23</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onCtaClick}>
            Забронировать место
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-gray-400 uppercase tracking-widest">Минимум теории. Только практика.</p>
      </div>
    </section>
  );
};