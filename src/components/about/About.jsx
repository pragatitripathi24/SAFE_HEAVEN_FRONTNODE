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
          <p>
            Our team works hand-in-hand with local authorities, NGOs, and
            volunteers to ensure every child's voice is heard and needs are met.
            From legal aid to psychological support, our services cover a wide spectrum
            of child welfare.
          </p>

          <p>
            <strong>Our approach includes:</strong>
          </p>
          <ul className="ps-3">
            <li>🛡️ Ensuring child safety and rights across all districts</li>
            <li>🎓 Promoting inclusive education opportunities</li>
            <li>💬 Multilingual support to bridge communication gaps</li>
            <li>🤝 Reuniting families and empowering foster care</li>
            <li>📊 Data-driven tracking and reporting of active cases</li>
          </ul>

          <p className="mt-3">
            We envision a society where children are protected, nurtured,
            and given every opportunity to grow with dignity.
          </p>

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
