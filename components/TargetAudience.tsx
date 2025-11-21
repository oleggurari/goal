import React from 'react';
import { CheckCircle2, Target, TrendingUp, BatteryCharging } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const audience = [
    "Предприниматели Израиля",
    "Консультанты и эксперты",
    "Ремесленники",
    "Владельцы услуг и товаров"
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 font-serif">
              Для кого этот мастер-практикум?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Этот день для тех, кому важно не просто «быть», а <span className="font-bold text-brand-blue">двигаться</span>. 
              Если вы чувствуете, что потеряли фокус, мотивацию или хотите вернуть управляемость и вдохновение.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {audience.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-brand-light p-3 rounded-lg">
                  <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <Target className="w-10 h-10 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Фокус</h3>
              <p className="text-gray-600">Верните ясность и понимание, куда именно вы ведете свой бизнес.</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="w-10 h-10 text-brand-gold mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Рост</h3>
              <p className="text-gray-600">Создайте механизм, который обеспечит постоянное развитие.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
              <BatteryCharging className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Мотивация</h3>
              <p className="text-gray-600">Обретите вдохновение и энергию для преодоления рутины.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};