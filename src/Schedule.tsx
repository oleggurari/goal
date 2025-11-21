import React from 'react';
import { Clock } from 'lucide-react';
import { ScheduleItem } from '../types';

export const Schedule: React.FC = () => {
  const scheduleData: ScheduleItem[] = [
    {
      time: "09:45",
      title: "Сбор, знакомство",
      description: "Раздача материалов, нетворкинг, знакомство с программой."
    },
    {
      time: "10:00",
      title: "Теория + Практика: Целеполагание",
      description: "Что такое цель и ее составляющие. Описание целей владельца. Создание цели для бизнеса. Работа с препятствиями."
    },
    {
      time: "13:00",
      title: "Перерыв на обед",
      description: "Время вкусно поесть и набраться сил (обед не включен в стоимость)."
    },
    {
      time: "14:00",
      title: "Разработка пути",
      description: "Разбираем возможные пути достижения цели с минимальными препятствиями и ресурсами."
    },
    {
      time: "16:00",
      title: "Перекус / Отдых",
      description: "Кофе-брейк, снимаем напряжение, свободное общение."
    },
    {
      time: "16:30",
      title: "Карта ресурсов и действий",
      description: "Практические инструменты: сколько требуется ресурсов и где их взять. Конкретные шаги."
    },
    {
      time: "19:00",
      title: "Закрытие и Итоги",
      description: "Итоговый план действий, шаги на завтра. Вручение сертификатов (опционально)."
    }
  ];

  return (
    <section className="py-20 bg-brand-light" id="schedule">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-serif mb-4">Распорядок дня</h2>
          <p className="text-gray-600">Занятия распределены на академические часы по 45 минут.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-1/2"></div>

          {scheduleData.map((item, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row gap-8 mb-12 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Time Badge (Mobile Left, Desktop Center) */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-bold z-10 flex items-center gap-1 shadow-md w-24 justify-center">
                <Clock size={14} />
                {item.time}
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-[45%] bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
              
              {/* Empty space for opposite side on desktop */}
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};