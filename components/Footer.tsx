import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="font-semibold text-white">Возрождение ЦЕЛИ</p>
          <p className="text-sm">© 2025 Олег Гурари. Все права защищены.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-brand-gold transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Контакты</a>
        </div>
      </div>
    </footer>
  );
};