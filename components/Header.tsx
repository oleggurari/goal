import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

interface HeaderProps {
  onRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRegister }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className={`font-bold font-serif text-xl transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
          Олег Гурари
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['about', 'schedule', 'speaker', 'location'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-sm font-medium hover:text-brand-gold transition-colors uppercase tracking-wide ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}
            >
              {item === 'about' && 'О практикуме'}
              {item === 'schedule' && 'Программа'}
              {item === 'speaker' && 'Спикер'}
              {item === 'location' && 'Место'}
            </button>
          ))}
        </nav>

        <Button 
          variant={scrolled ? 'primary' : 'primary'} 
          onClick={onRegister}
          className="text-sm px-6 py-2"
        >
          Записаться
        </Button>
      </div>
    </header>
  );
};