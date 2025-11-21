import React from 'react';
import { Check, X, Coffee, BookOpen, Users, HelpCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface PricingProps {
  onRegister: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onRegister }) => {
  return (
    <section className="py-20 bg-brand-dark relative text-white" id="pricing">
      {/* Decoration background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/10 skew-x-12"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Details */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Инвестиция в себя</h2>
            <p className="text-xl text-gray-300 mb-10">
              Стоимость участия несоизмерима с ценностью системы, которую вы построите за этот день.
            </p>
            
            <div className="space-y-6 mb-10">
               <div className="flex items-center gap-4">
                 <div className="bg-brand-gold/20 p-3 rounded-full">
                    <BookOpen className="text-brand-gold w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg">Рабочие материалы</h4>
                   <p className="text-sm text-gray-400">Все необходимые шаблоны и тетради</p>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="bg-brand-gold/20 p-3 rounded-full">
                    <Coffee className="text-brand-gold w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg">Кофе-брейки</h4>
                   <p className="text-sm text-gray-400">Чай, кофе, легкие закуски включены</p>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="bg-brand-gold/20 p-3 rounded-full">
                    <HelpCircle className="text-brand-gold w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg">Поддержка</h4>
                   <p className="text-sm text-gray-400">Помощь тренера в ходе практических занятий</p>
                 </div>
               </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg flex items-start gap-3">
               <X className="text-red-400 w-5 h-5 mt-0.5 flex-shrink-0" />
               <p className="text-sm text-gray-300">
                 <span className="text-white font-bold">Важно:</span> Обед не включен. Вы можете принести еду с собой или посетить кафе в 5 минутах ходьбы.
               </p>
            </div>
          </div>

          {/* Price Card */}
          <div className="bg-white text-brand-dark p-8 md:p-10 rounded-2xl shadow-2xl border-t-8 border-brand-gold">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Мастер-практикум</h3>
              <div className="text-5xl font-bold text-brand-blue mb-2">700 ₪</div>
              <p className="text-gray-500 text-sm uppercase tracking-wide">+ МААМ (НДС)</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="text-green-500 w-5 h-5" />
                <span>Участие в полном дне практикума</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-500 w-5 h-5" />
                <span>Раздаточные материалы</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-500 w-5 h-5" />
                <span>Нетворкинг с участниками</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-500 w-5 h-5" />
                <span>Кофе-брейки</span>
              </li>
            </ul>

            <Button fullWidth onClick={onRegister}>
              Принять участие
            </Button>
            <p className="text-center text-xs text-gray-400 mt-4">
              Количество мест ограничено форматом практикума
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};