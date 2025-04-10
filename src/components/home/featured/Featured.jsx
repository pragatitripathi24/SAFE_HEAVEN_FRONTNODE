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
        <div className=''>
          {/* Apply translations using t() */}
          
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Featured;
