import React from "react";
import { useTranslation } from "react-i18next";  // Importing useTranslation hook
import Heading from "../../common/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const { t } = useTranslation();  // Destructuring t function from useTranslation

  return (
    <>
      <section className='featured background'>
        <div className='container'>
          {/* Apply translations using t() */}
          <Heading
            title={t('featured.title')}  // Translation key for "Child Welfare Committee"
            subtitle={t('featured.subtitle')}  // Translation key for "Our Initiatives and Support"
          />
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Featured;
