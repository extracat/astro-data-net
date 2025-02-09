import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 flex gap-x-8 gap-y-6 justify-center items-center
              md:rounded-2xl md:my-4 sm:flex-row flex-col
              bg-adn-color-fill-bg-lighter
              max-w-[54rem] -ml-8 px-12 sm:px-16 py-8  
              shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
      <p className="flex-col p-0 m-0 text-xs sm:text-sm">
        We use cookies to enhance your browsing experience and provide personalized content. By clicking “Agree”, you acknowledge and consent to our use of cookies in accordance with our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
      <button onClick={handleConsent} className="btn-primary min-w-full sm:min-w-max">
        Agree
      </button>
    </div>
  );
};

export default CookieConsent;
