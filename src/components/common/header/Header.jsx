import React, { useState } from "react";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import "./header.css"; // Custom styles
import Nav1 from "./Nav1";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const { t, i18n } = useTranslation(); // ✅ Ensure i18n is used properly

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // ✅ No need for the extra check
  };

  return (
    <>
      <Nav1 />
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/" style={{ maxWidth: '170px' }}>
            <img src='./images/Logo/logo1.png' alt='Logo' style={{ width: '100%', objectFit: 'contain' }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setNavList(!navList)}
            aria-controls="navbarNav"
            aria-expanded={navList}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${navList ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto fs-6 fw-bold text-nowrap">
              {nav.map((list, index) => (
                <li className="nav-item me-2" key={index}>
                  <Link className="nav-link" to={list.path}>
                    {t(list.text)} {/* Use the translation function here */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
