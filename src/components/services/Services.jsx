// Services.js
import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import img from "../images/services.jpg";
import Back from "../common/Back";
import "../home/featured/Featured.css";
import FeaturedCard from "../home/featured/FeaturedCard";

const Services = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <>
      <section className='services mb'>
        {/* Background image with title */}
        <Back name={t("services.services")} title={t("services.servicesAll")} cover={img} />

        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Services;
