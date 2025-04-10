import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import spotlight1 from "../../../images/LandingPage/im2.jpg";
import spotlight2 from "../../../images/LandingPage/im1.jpg";

const ImageCarousel = () => (
  <Carousel controls={false} indicators={false} fade className="position-absolute w-100 h-100">
    <Carousel.Item>
      <div className="w-100 h-100" style={{ backgroundImage: `url("https://via.placeholder.com/1200x500")`, backgroundSize: "cover", backgroundPosition: "center" }} />
    </Carousel.Item>
    <Carousel.Item>
      <div className="w-100 h-100" style={{ backgroundImage: `url("https://via.placeholder.com/1200x500")`, backgroundSize: "cover", backgroundPosition: "center" }} />
    </Carousel.Item>
    <Carousel.Item>
      <div className="w-100 h-100" style={{ backgroundImage: `url("https://via.placeholder.com/1200x500")`, backgroundSize: "cover", backgroundPosition: "center" }} />
    </Carousel.Item>
  </Carousel>
);

const Suggestive = () => {
  return (
    <Container fluid className="position-relative  ">
      <Row className="justify-content-center align-items-stretch position-relative">
        {/* Left Side */}
        <Col md={5} className="d-flex align-items-center px-3" style={{ minHeight: "500px" }}>
          <div className="bg-light text-dark p-4 text-center text-md-start w-100 d-flex flex-column justify-content-center h-100">
            <img src="/images/Suggestive/sug1.png" className="w-100 img-fluid" alt="Product" />
            <h2 className="display-5 text-dark fw-bold fs-1" style={{ fontFamily: "Crimson Pro", letterSpacing: "2.9px", textTransform: "uppercase" }}>
              <strong className="text-danger">Make a</strong> <br />
              <span>Donation</span>
            </h2>
            <p className="text-black">Your generous donation will help us provide essential healthcare services, support programs, and resources for women and children in need.</p>
            <button className="btn btn-danger w-50 w-md-50 text-uppercase fw-bold px-4 py-2 border-0 rounded-0 shadow-sm">
              Donate Now →
            </button>
          </div>
        </Col>

        {/* Right Side */}
        <Col md={7} className="d-flex flex-column gap-3 px-3 mt-3 mt-md-0" style={{ minHeight: "500px" }}>
          <Row className="gap-3">
          <Col xs={12} className="bg-light p-4 d-flex flex-column" style={{ minHeight: "200px" }}>
  <h2
    className="display-5 text-dark fw-bold fs-1"
    style={{
      fontFamily: "Crimson Pro",
      letterSpacing: "2.9px",
      textTransform: "uppercase",
    }}
  >
    <strong className="text-danger">Latest News</strong>
  </h2>
  <p className="text-black">
    Stay informed with the most recent updates and announcements related to child welfare and development.
  </p>
  <marquee
  behavior="scroll"
  direction="left"
  scrollamount="6"
  className="text-danger fw-bold fs-5"
>
  📰 New: National Child Health Program Launched • 🧒 New: Revised Guidelines for Adoption Agencies • 🎓 New: Scholarships Now Open for Orphaned Children • 🏥 New: Pediatric Care Centers Opened in Rural Areas • 🏫 New: Free School Kits Distribution Drive Begins • 📢 New: Awareness Campaign on Child Rights Begins Nationwide
</marquee>

<marquee
  behavior="scroll"
  direction="left"
  scrollamount="6"
  className="text-danger fw-bold fs-5"
>
  📰 Update: 1,200 Missing Children Reunited in 2025 • 📊 Report: Drop in Child Labor Cases Announced • 💼 New: Vocational Training Program for Street Children • 📚 Launch: Bridge Education Program for Dropouts • 🧠 Initiative: Mental Health Support for Abused Children • 🏡 Project: 100 New Child Care Homes Inaugurated
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
                <strong className="text-danger">Schemes</strong> <br />
                <span>for children</span>
              </h2>
              <p className="text-black">
  Discover government and NGO-supported schemes focused on child welfare, education, healthcare, and overall development — all in one place.
</p>              <button className="btn bg-danger d-flex justify-content-center btn-warning w-75 w-md-50 text-white text-uppercase fw-bold px-4 py-2 border-0 rounded-0 shadow-sm">
                Check Now →
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
  <strong className="text-danger">Adoption</strong> <br />
  <span>for children</span>
</h2>
<p className="text-black">
  Learn about the legal process, eligibility, and support systems for adopting children and giving them a loving home.
</p>
<button className="btn bg-danger d-flex justify-content-center btn-danger w-75 w-md-50 text-uppercase fw-bold px-4 py-2 border-0 rounded-0 shadow-sm">
  Adopt Now →
</button>

            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Suggestive;
