// Location.js
import React from "react";
import { useTranslation } from "react-i18next";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "./style.css";

const Location = () => {
  const { t } = useTranslation(); // useTranslation hook

  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title={t("location.title")}
            subtitle={t("location.subtitle")}
          />

          <div className="content grid3 mtop">
            {location.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.cover} alt={t(item.name)} />
                <div className="overlay">
                  <h5>{t(item.name)}</h5> {/* Translate location name */}
                  <p>
                    <label>{t(item.villasKey, { count: item.villasCount })}</label>
                    <label>{t(item.officesKey, { count: item.officesCount })}</label>
                    <label>{t(item.apartmentsKey, { count: item.apartmentsCount })}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
