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
    <div className="rounded-xl fixed bottom-0 left-0 dark:bg-zinc-900 bg-gray-100 m-8 p-8 flex justify-center items-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
      <p className="m-0 mr-7 text-xs sm:text-sm">
        We use cookies to enhance your browsing experience and provide personalized content. By clicking “Agree”, you acknowledge and consent to our use of cookies in accordance with our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
      <button onClick={handleConsent} className="btn-primary">
        Agree
      </button>
    </div>
  );
};

export default CookieConsent;
