import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Suggestive = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="position-relative">
      <Row className="justify-content-center align-items-stretch position-relative">
        {/* Left Side */}
        <Col md={5} className="d-flex align-items-center px-3" style={{ minHeight: "500px" }}>
          <div className="bg-light text-dark p-4 text-center text-md-start w-100 d-flex flex-column justify-content-center h-100">
            <img src="/images/Suggestive/sug1.png" className="w-100 img-fluid" alt="Product" />
            <h2 className="display-5 text-dark fw-bold fs-1" style={{ fontFamily: "Crimson Pro", letterSpacing: "2.9px", textTransform: "uppercase" }}>
              <strong className="text-danger">{t("suggestive.make_a_donation")}</strong>
            </h2>
            <p className="text-black">{t('suggestive.donation_description')}</p>
            <button className="btn btn-danger w-50 w-md-50 text-uppercase fw-bold px-4 py-2 border-0 rounded-0 shadow-sm">
              {t("suggestive.donate_now")}
            </button>
          </div>
        </Col>

        {/* Right Side */}
        <Col md={7} className="d-flex flex-column gap-3 px-3 mt-3 mt-md-0" style={{ minHeight: "500px" }}>
          <Row className="gap-3">
            <Col xs={12} className="bg-light p-4 d-flex flex-column" style={{ minHeight: "200px" }}>
              <h2
                className="display-5 text-dark fw-bold fs-1"
                style={{ fontFamily: "Crimson Pro", letterSpacing: "2.9px", textTransform: "uppercase" }}
              >
                <strong className="text-danger">{t('suggestive.latest_news')}</strong>
              </h2>
              <p className="text-black">{t('suggestive.latest_news_description')}</p>
              <marquee behavior="scroll" direction="left" scrollamount="6" className="text-danger fw-bold fs-5">
                {t('suggestive.news_marquee_1')}
              </marquee>

              <marquee behavior="scroll" direction="left" scrollamount="6" className="text-danger fw-bold fs-5">
                {t('suggestive.news_marquee_2')}
              </marquee>
            </Col>
          </Row>

          <Row className="g-3">
            {/* Left Column */}
            <Col xs={12} md={6} className="bg-light border-end text-white p-4 d-flex flex-column" style={{ minHeight: "300px" }}>
              <div className="w-100" style={{ height: "350px" }}>
                <img 
                  src="/images/Suggestive/sug2.png"
                  className="w-100 h-100 img-fluid" 
                  alt="Product" 
                  style={{ objectFit: "cover" }} 
                />
              </div>
              <h2 className="display-5 text-dark fw-bold fs-1" style={{ fontFamily: "Crimson Pro", letterSpacing: "2.9px", textTransform: "uppercase" }}>
                <strong className="text-danger">{t('suggestive.schemes_for_children')}</strong>
              </h2>
              <p className="text-black">{t('suggestive.schemes_description')}</p>
              <button className="btn bg-danger d-flex justify-content-center btn-warning w-75 w-md-50 text-white text-uppercase fw-bold px-4 py-2 border-0 rounded-0 shadow-sm">
                {t('suggestive.check_now')}
              </button>
            </Col>

            {/* Right Column (Fixed Height Image) */}
            <Col xs={12} md={6} className="bg-light border-start text-white p-4 d-flex flex-column">
              <div className="w-100" style={{ height: "350px" }}>
                <img 
                  src="/images/Suggestive/sug3.png"
                  className="w-100 h-100 img-fluid" 
                  alt="Product" 
                  style={{ objectFit: "cover" }} 
                />
              </div>
              <h2 className="display-5 text-dark fw-bold fs-1" style={{ fontFamily: "Crimson Pro", letterSpacing: "2.9px", textTransform: "uppercase" }}>
                <strong className="text-danger">{t('suggestive.adoption_for_children')}</strong>
              </h2>
              <p className="text-black">{t('suggestive.adoption_description')}</p>
              <button className="btn bg-danger d-flex justify-content-center btn-danger w-75 w-md-50 text-uppercase fw-bold px-4 py-2 border-0 rounded-0 shadow-sm">
                {t('suggestive.adopt_now')}
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Suggestive;
