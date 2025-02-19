import React from "react";
import { useTranslation } from "react-i18next"; // Importing useTranslation hook
import "bootstrap/dist/css/bootstrap.min.css";
import "./Donation.css";
import im1 from "../../../images/LandingPage/im2.jpg";

const DonationSection = () => {
  const { t } = useTranslation(); // Destructuring t function from useTranslation

  return (
    <div className="donation-section" style={{ backgroundColor: "black" }} >
      <div className="image-container" style={{ backgroundImage: `url(${im1})` }}></div>
      <div className="color-overlay"></div>
      <div className="content-overlay">
        {/* Translate Heading */}
        <h2 className="mb-4 fw-bold" style={{ fontSize: "2.6rem" }}>
          {t('donation.heading')}
        </h2>
        {/* Translate Description */}
        <p className="mb-4 text-black" style={{ fontSize: "1.1rem" }}>
          {t('donation.description')}
        </p>
        {/* Translate Button */}
        <a href="/payment" className="btn btn-light fs-3">
          {t('donation.button')}
        </a>
      </div>
    </div>
  );
};

export default DonationSection;
