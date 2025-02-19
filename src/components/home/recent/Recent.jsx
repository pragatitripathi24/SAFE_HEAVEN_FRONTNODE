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
        <div className='container'>
          {/* Apply translations using t() */}
          <Heading
            title={t('recent.titlemain')}  // Translation key for "Success Stories"
            subtitle={t('recent.subtitlemain')}  // Translation key for "Discover how we have made a difference in the lives of children and families."
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
