import React from "react";
import { useTranslation } from "react-i18next";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../../images/LandingPage/about.png";
import "./about.css";
import Recent from "../home/recent/Recent";
import Awards from "../home/awards/Awards";

const About = () => {
  const { t } = useTranslation();

  return (
  <>
    <section className="about">
      <div className="about-content d-flex flex-wrap justify-content-center align-items-start gap-4 px-4 py-5">
        {/* Left Content */}
        <div className="left" style={{ flex: "1 1 55%" }}>
          <Heading
            title={t("about.missionTitle")}
            subtitle={t("about.missionSubtitle")}
          />

          <p>{t("about.missionDescription1")}</p>
          <p>{t("about.missionDescription2")}</p>
          <p>{t("about.missionDescription3")}</p>

          {/* Additional content */}
          <p>{t("about.additionalParagraph")}</p>


          <p><strong>{t("about.approachTitle")}</strong></p>
<ul className="ps-3">
  <li>{t("about.approachPoints.point1")}</li>
  <li>{t("about.approachPoints.point2")}</li>
  <li>{t("about.approachPoints.point3")}</li>
  <li>{t("about.approachPoints.point4")}</li>
  <li>{t("about.approachPoints.point5")}</li>
</ul>

<p className="mt-3">{t("about.visionStatement")}</p>

          <button className="btn2 mt-4" style={{ width: "auto" }}>
            {t("about.learnMoreButton")}
          </button>
        </div>

        {/* Right Image Section */}
        <div className="right" style={{ flex: "1 1 35%" }}>
          <img src={img} alt="About CWC" className="img-fluid rounded shadow-sm" />
        </div>
      </div>
    </section>
    <Recent/>
    <Awards />
    </>
  );
};

export default About;
