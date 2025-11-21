import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TargetAudience } from './components/TargetAudience';
import { WhatWeDo } from './components/WhatWeDo';
import { Schedule } from './components/Schedule';
import { Speaker } from './components/Speaker';
import { Pricing } from './components/Pricing';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { RegistrationForm } from './components/RegistrationForm';
import { X } from 'lucide-react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      <Header onRegister={openModal} />
      
      <main className="flex-grow">
        <Hero onCtaClick={openModal} />
        <TargetAudience />
        <WhatWeDo />
        <Schedule />
        <Speaker />
        <Pricing onRegister={openModal} />
        <Location />
      </main>

      <Footer />

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl animate-scale-in">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="p-1">
              <RegistrationForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;