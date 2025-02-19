import React from "react";
import { useTranslation } from "react-i18next"; // Importing useTranslation hook
import Heading from "../../common/Heading";
import CountUp from "react-countup";
import "./awards.css";

// Data for statistics
const statistics = [
  { id: 1, name: "Active Cases", count: 1500 },
  { id: 2, name: "Children Found & Reunited", count: 1200 },
  { id: 3, name: "Monthly/Weekly Case Progress", count: 75 },
  { id: 4, name: "New Cases This Month/Week", count: 50 },
];

const Awards = () => {
  const { t } = useTranslation(); // Destructuring t function from useTranslation

  return (
    <>
      <section className='awards padding'>
        <div className='container'>
          {/* Translate Heading */}
          <Heading
            title={t('awards.title')}
            subtitle={t('awards.subtitle')}
          />

          <div className='content grid4 mtop'>
            {statistics.map((stat, index) => (
              <div className='box' key={index}>
                <div className='stat-box'>
                  <div className='icon'>
                    <span>🏆</span>
                  </div>
                  <h1>
                    <CountUp start={0} end={stat.count} duration={2.5} />
                  </h1>
                  {/* Translate Statistics */}
                  <p>{t(`awards.statistics.${stat.id}.name`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
