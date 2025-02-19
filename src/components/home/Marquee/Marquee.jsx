import React from 'react';
import './Marquee.css';  // Import the CSS for styling
import { useTranslation } from 'react-i18next'; // Importing i18next hook

const Marquee = () => {
  const { t } = useTranslation(); // Use i18next for translations

  return (
    <div className="marquee-container">
      <div className="marquee text-white">
        <p>{t('MARQUEE_TEXT')}</p> {/* This will now use the correct language text */}
      </div>
    </div>
  );
};

export default Marquee;
