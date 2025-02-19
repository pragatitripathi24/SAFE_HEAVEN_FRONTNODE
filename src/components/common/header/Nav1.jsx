import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Nav1.css";


const Nav1 = () => {
  const { t, i18n } = useTranslation(); // ✅ Ensure i18n is used properly

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // ✅ No need for the extra check
  };

  return (
    <div className="div1">
      <header className="header-container1">
        <div className="left-section1">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="marathi-text1">{t("NAV1.GOVT_OF_INDIA")}</div> 
          </Link>
          <div className="vertical-line1"></div>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="english-text1">{t("NAV1.BAL_KALYAN")}</div>
          </Link>
        </div>

        <div className="separator1"></div>

        <div className="right-section1">
          <div className="vertical-line1"></div>

          
          <a href="#home" className="nav-link text-white" title={t("NAV1.SKIP_TO_MAIN")}>
            {t("NAV1.SKIP_TO_MAIN")}
          </a>
          {/* <div className="vertical-line1"></div>
          <i className="fas fa-search" title="Search Icon"></i> */}
          <div className="vertical-line1"></div>
        
          {/* Language Toggle */}
          <div className="div1">
            <div className="header-container1">
              <div className="left-section1">
                <button
                  className={`nav-link language ${i18n.language === "en" ? "active" : ""}`}
                  onClick={() => changeLanguage("en")}
                >
                  {t("NAV1.LANGUAGE_ENGLISH")}
                </button>
                <div>/</div>
                <button
                  className={`nav-link language ${i18n.language === "hi" ? "active" : ""}`}
                  onClick={() => changeLanguage("hi")}
                >
                  {t("NAV1.LANGUAGE_HINDI")}
                </button>
              </div>
            </div>
          </div>

          <div className="vertical-line1"></div>
          <div className="d-flex align-items-center">
            <button className="btn text-white">
              <i className="fa fa-sign-out"></i> {t("NAV1.SIGN_IN")}
            </button>
          </div>

          <div className="vertical-line1"></div>
        </div>
      </header>
    </div>
  );
};

export default Nav1;
