// Footer.js
import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "./footer.css";

const Footer = () => {
  const { t } = useTranslation(); // useTranslation hook to access translations

  return (
    <>
      {/* Contact Section */}
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>{t("footer.contactTitle")}</h1> {/* Translated text */}
              <p>{t("footer.contactSubtitle")}</p> {/* Translated text */}
            </div>
            <button className="btn5 text-black">{t("footer.contactButton")}</button> {/* Translated button text */}
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer>
        <div className="container">
          <div className="box">
            {/* Logo and Subscription */}
            <div className="logo">
              <img src="./images/Logo/logo1.png" alt="CWC Logo" />
              <p>{t("footer.subscriptionDescription")}</p> {/* Translated description */}

              <div className="input flex">
                <input type="email" placeholder={t("footer.enterEmail")} /> {/* Translated placeholder */}
                <button>{t("footer.subscribeButton")}</button> {/* Translated subscribe button */}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="box">
            <h3>{t("footer.quickLinksTitle")}</h3> {/* Translated section title */}
            <ul>
              <li>
                <a href="#about" style={{ color: 'white' }}>
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: 'white' }}>
                  {t("footer.ourServices")}
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: 'white' }}>
                  {t("footer.contactUs")}
                </a>
              </li>
              <li>
                <a href="#support" style={{ color: 'white' }}>
                  {t("footer.support")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="box">
            <h3>{t("footer.followUs")}</h3> {/* Translated section title */}
            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/childwelfare"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <i className="fa-brands fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/childwelfare"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <i className="fa-brands fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/childwelfare"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <i className="fa-brands fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/childwelfare"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <i className="fa-brands fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Legal Section */}
      <div className="legal">
        <span>{t("footer.legalText")}</span> {/* Translated legal text */}
      </div>
    </>
  );
};

export default Footer;
