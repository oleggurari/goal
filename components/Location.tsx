import React from 'react';
import { MapPin, Calendar, Clock, Car } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="location">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-serif mb-4">Где и когда</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            {/* Info */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-light p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Дата</h4>
                    <p className="text-gray-600">23 ноября 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-light p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Время</h4>
                    <p className="text-gray-600">10:00 — 19:00</p>
                    <p className="text-sm text-gray-500 mt-1">(Сбор гостей с 09:45)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-light p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Адрес</h4>
                    <p className="text-gray-600">Тель-Авив, Яффо</p>
                    <p className="text-brand-blue font-medium">Kibbutz Galuyot 23</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-light p-3 rounded-lg">
                    <Car className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Парковка</h4>
                    <p className="text-gray-600">Множество вариантов рядом</p>
                    <p className="text-sm text-gray-500">~30 ₪/день</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 md:h-auto bg-gray-200 relative min-h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.466367179907!2d34.76014937630437!3d32.05729462042656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c83e8f678d7%3A0x6817873219914788!2sKibbutz%20Galuyot%20Rd%2023%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1716384920000!5m2!1sen!2sil" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                  title="Map Location"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};