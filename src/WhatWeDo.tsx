import React from 'react';

export const WhatWeDo: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Раскроем истинную цель",
      desc: "Найдем настоящий драйвер вашего бизнеса, скрытый за ежедневной рутиной."
    },
    {
      number: "02",
      title: "Сформулируем ориентир",
      desc: "Создадим формулировку цели, за которой вы действительно захотите пойти."
    },
    {
      number: "03",
      title: "Опишем шаги",
      desc: "Конкретизируем результаты и действия, чтобы не было повода «забросить»."
    },
    {
      number: "04",
      title: "Составим карту ресурсов",
      desc: "Поймем, как преодолеть препятствия и где взять силы для рывка."
    }
  ];

  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Ваша цель как двигатель роста</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            За один день мы пройдем путь от размытых желаний до четкого механизма реализации.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -top-6 -left-6 text-6xl font-bold text-white/5 select-none group-hover:text-white/10 transition-colors">
                {step.number}
              </div>
              <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-brand-gold/50 transition-colors h-full backdrop-blur-sm">
                <h3 className="text-xl font-bold text-brand-gold mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};