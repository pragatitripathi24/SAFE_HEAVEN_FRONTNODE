// About.js
import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <>
      <section className="about">
        {/* Background image with title */}
        <Back name={t("about.aboutUs")} title={t("about.aboutUsTitle")} cover={img} />

        {/* Main Content Section */}
        <div className="container flex mtop">
          <div className="left row">
            {/* Heading Section */}
            <Heading title={t("about.missionTitle")} subtitle={t("about.missionSubtitle")} />

            {/* Paragraphs with Mission Information */}
            <p>{t("about.missionDescription1")}</p>
            <p>{t("about.missionDescription2")}</p>

            {/* Call to Action Button */}
            <button className="btn2" style={{width:"auto"}}>{t("about.learnMoreButton")}</button>
          </div>

          {/* Image Section */}
          <div className="right row">
            <img src={img} alt="About CWC" />
          </div>
        </div>

        <div className="container flex mtop">
          {/* Image Section */}
          <div className="right row">
            <img src={img} alt="About CWC" />
          </div>
          <div className="left row ms-2">
            {/* Heading Section */}
            <Heading title={t("about.missionTitle")} subtitle={t("about.missionSubtitle")} />

            {/* Paragraphs with Mission Information */}
            <p>{t("about.missionDescription1")}</p>
            <p>{t("about.missionDescription2")}</p>

            {/* Call to Action Button */}
            <button className="btn2" style={{width:"auto"}}>{t("about.learnMoreButton")}</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
