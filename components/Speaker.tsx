import React from 'react';
import { Trophy, Globe, Users, TrendingUp } from 'lucide-react';

export const Speaker: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden" id="speaker">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-brand-gold/20 transform translate-x-4 translate-y-4 rounded-2xl"></div>
            <img 
              src="https://picsum.photos/id/1077/800/900" 
              alt="Олег Гурари" 
              className="relative rounded-2xl shadow-xl w-full object-cover h-[500px] grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-brand-dark">Олег Гурари</h3>
              <p className="text-brand-gold font-medium">Предприниматель с 1988 года</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-serif mb-8">
              Кто ведёт практикум?
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-50 p-3 rounded-lg h-fit">
                  <Trophy className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Международный опыт</h4>
                  <p className="text-gray-600">Строил 3 бизнеса с оборотом 41 млн...</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-50 p-3 rounded-lg h-fit">
                  <Globe className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Успех в Израиле</h4>
                  <p className="text-gray-600">В 50 лет переехал в Израиль и создал бизнес с оборотом 800 000 ₪/год.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-50 p-3 rounded-lg h-fit">
                  <Users className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Масштабирование команд</h4>
                  <p className="text-gray-600">Основал 18 отделов продаж, обучил более 2 500 продавцов.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-50 p-3 rounded-lg h-fit">
                  <TrendingUp className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Системный подход</h4>
                  <p className="text-gray-600">С 2016 года помогает компаниям строить маркетинг и продажи через цифры и структуру.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
