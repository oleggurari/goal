import React, { useState } from 'react';
import { Button } from './ui/Button';

export const RegistrationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 p-8 rounded-xl text-center border border-green-200">
        <h3 className="text-2xl font-bold text-green-800 mb-2">Спасибо за заявку!</h3>
        <p className="text-green-700">Мы свяжемся с вами в ближайшее время для подтверждения участия.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold text-center mb-4 text-brand-dark">Забронировать место</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
        <input 
          type="text" 
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
          placeholder="Ваше имя"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
        <input 
          type="tel" 
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
          placeholder="05x-xxx-xxxx"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input 
          type="email" 
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
          placeholder="example@mail.com"
        />
      </div>
      <Button type="submit" fullWidth className="mt-4">
        Отправить заявку
      </Button>
      <p className="text-xs text-gray-400 text-center mt-2">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
};