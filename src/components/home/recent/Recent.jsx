import React from "react";
import { useTranslation } from "react-i18next";  // Importing useTranslation hook
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  const { t } = useTranslation();  // Destructuring t function from useTranslation

  return (
    <>
      <section className='recent padding'>
        <div className=''>
          {/* Apply translations using t() */}
         
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
