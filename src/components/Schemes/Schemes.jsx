import React from "react";
import innerBanner from "../../images/LandingPage/im1.jpg";
import img1 from "../../images/LandingPage/im1.jpg";
import img2 from "../../images/LandingPage/im1.jpg";
import img3 from "../../images/LandingPage/im1.jpg";
import img4 from "../../images/LandingPage/im1.jpg";
import img5 from "../../images/LandingPage/im1.jpg";
import img6 from "../../images/LandingPage/im1.jpg";
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

      <p style={{ color: "black", letterSpacing: "2px", textTransform: "capitalize", textAlign: "center" }}>
        <strong className="fs-2">{t("documents.Schemeprograms")} <br /></strong>
      </p>
    
      

      <section className="service-style-four mx-5 mt-5 mb-5">
        <div className="auto-container">
          <h4 className="pb-3 color_blue pmay-heading-margin">Introduction</h4>
          <p className="text-black">
            The Child Welfare Community Schemes aim to uplift underprivileged children by providing access to education, healthcare, nutrition, and shelter. These schemes are designed to offer holistic support to ensure every child gets a fair chance at life and development in a safe and nurturing environment.
          </p>

          <div className="table-responsive mt-3">
            <table className="table table-bordered">
              <thead className="text-center">
                <tr>
                  <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>Sr. No</th>
                  <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>Scheme</th>
                  <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Bal Shakti</td>
                  <td>Rehabilitation and education support for children in vulnerable conditions.</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Sneha Aahar</td>
                  <td>Daily nutritious meals for children in under-resourced communities.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Shiksha Setu</td>
                  <td>Bridge schooling program to integrate drop-out children back into mainstream education.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Bal Suraksha</td>
                  <td>Protection services for children facing abuse, neglect, or exploitation.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className="color_blue">
            Implementation in Local Municipal Areas
          </h5>
          <ul className="pt-3 pmay-list">
            <li>
              <b>
                Bal Shakti and Shiksha Setu programs have been launched in 12 slum clusters benefiting over 4,000 children.
              </b>
            </li>
            <li>
              <b>Registration ID: CWC/PMU/CHW123456</b>
            </li>
            <li>
              <b>
                Facilities include mobile classrooms, child nutrition centers, counseling booths, and support desks for parents.
              </b>
            </li>
            <li>
              <b>Infrastructure work for three child shelters is currently underway.</b>
            </li>
          </ul>

          <h5 className="pt-2 color_blue">
            Summary of Progress as of 2024
          </h5>
          <ul className="pt-3 pmay-list">
            <li>
              <b>
                Over 8,500 children enrolled in various programs, with 1,200 re-integrated into formal schools.
              </b>
            </li>
            <li>
              <b>Healthcare screenings conducted for 3,400 children with follow-up care ensured.</b>
            </li>
          </ul>

          <h5 className="color_blue">
            Component-wise Details of Child Welfare Schemes
          </h5>
          <div className="mt-3">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="text-center">
                  <tr>
                    <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>Component</th>
                    <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>Beneficiaries</th>
                    <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>Budget (In Lakhs)</th>
                    <th style={{ backgroundColor: "#8b1f40", color: "#fff" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bal Shakti</td>
                    <td>1800</td>
                    <td>850</td>
                    <td>Running in 10 local wards</td>
                  </tr>
                  <tr>
                    <td>Sneha Aahar</td>
                    <td>2400</td>
                    <td>720</td>
                    <td>Operational in 15 nutrition centers</td>
                  </tr>
                  <tr>
                    <td>Shiksha Setu</td>
                    <td>1450</td>
                    <td>430</td>
                    <td>Expansion planned in 5 more locations</td>
                  </tr>
                  <tr>
                    <td>Bal Suraksha</td>
                    <td>900</td>
                    <td>650</td>
                    <td>Ongoing with 24/7 child helpline</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h5 className="color_blue">
            Project Overview: Integrated Child Welfare Development Mission
          </h5>

          <div className="row mt-3 pmay_img">
            {[img1, img2, img3, img4, img5, img6].map((img, i) => (
              <div className="col-md-4" key={i}>
                <img src={img} alt={`img${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schemes;
