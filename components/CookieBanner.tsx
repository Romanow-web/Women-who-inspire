import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';

const CookieBanner: React.FC = () => {
  const { content } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-[60] px-4 pointer-events-none">
      <div className="w-full max-w-2xl bg-gray-900/60 backdrop-blur-xl border border-white/10 text-white px-6 py-4 rounded-full shadow-2xl animate-fade-in pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium text-gray-200 text-center sm:text-left pl-2">
          {content.cookie.text}
        </p>
        <button
          onClick={handleAccept}
          className="bg-accent text-secondary px-6 py-2 rounded-full text-sm font-bold hover:bg-white transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
        >
          {content.cookie.accept}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;