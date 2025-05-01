import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Schemes = () => {
  const { t } = useTranslation();

  return (
    <div className="container mt-3 mb-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item fs-6">
            <a href="/">{t("documents.home")}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/schemes/programs" style={{ textDecoration: "none", color: "red" }}>
              {t("documents.Schemeprograms")}
            </Link>
          </li>
        </ol>
      </nav>

      <p className="text-center text-black fs-2" style={{ letterSpacing: "2px", textTransform: "capitalize" }}>
        <strong>{t("documents.Schemeprograms")} <br /></strong>
      </p>

      <section className="service-style-four mx-5 mt-5 mb-5">
        <div className="auto-container">
          <h4 className="pb-3 color_blue pmay-heading-margin">{t("schemes.heading")}</h4>
          <p className="text-black">{t("schemes.intro")}</p>

          <div className="table-responsive mt-3">
            <table className="table table-bordered">
              <thead className="text-center">
                <tr>
                  <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>{t("schemes.table.srNo")}</th>
                  <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>{t("schemes.table.scheme")}</th>
                  <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>{t("schemes.table.description")}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Bal Shakti</td><td>{t("schemes.table.balShakti")}</td></tr>
                <tr><td>2</td><td>Sneha Aahar</td><td>{t("schemes.table.snehaAahar")}</td></tr>
                <tr><td>3</td><td>Shiksha Setu</td><td>{t("schemes.table.shikshaSetu")}</td></tr>
                <tr><td>4</td><td>Bal Suraksha</td><td>{t("schemes.table.balSuraksha")}</td></tr>
              </tbody>
            </table>
          </div>

          <h5 className="color_blue">{t("schemes.implementationHeading")}</h5>
          <ul className="pt-3 pmay-list">
            {t("schemes.implementationList", { returnObjects: true }).map((item, index) => (
              <li key={index}><b>{item}</b></li>
            ))}
          </ul>

          <h5 className="pt-2 color_blue">{t("schemes.progressHeading")}</h5>
          <ul className="pt-3 pmay-list">
            {t("schemes.progressList", { returnObjects: true }).map((item, index) => (
              <li key={index}><b>{item}</b></li>
            ))}
          </ul>

          <h5 className="color_blue">{t("schemes.componentHeading")}</h5>
          <div className="mt-3">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="text-center">
                  <tr>
                    <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>{t("schemes.componentTable.component")}</th>
                    <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>{t("schemes.componentTable.beneficiaries")}</th>
                    <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>{t("schemes.componentTable.budget")}</th>
                    <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>{t("schemes.componentTable.status")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Bal Shakti</td><td>1800</td><td>850</td><td>{t("schemes.componentTable.balShaktiStatus")}</td></tr>
                  <tr><td>Sneha Aahar</td><td>2400</td><td>720</td><td>{t("schemes.componentTable.snehaAaharStatus")}</td></tr>
                  <tr><td>Shiksha Setu</td><td>1450</td><td>430</td><td>{t("schemes.componentTable.shikshaSetuStatus")}</td></tr>
                  <tr><td>Bal Suraksha</td><td>900</td><td>650</td><td>{t("schemes.componentTable.balSurakshaStatus")}</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <h5 className="color_blue">{t("schemes.overviewHeading")}</h5>
        </div>
      </section>
    </div>
  );
};

export default Schemes;
