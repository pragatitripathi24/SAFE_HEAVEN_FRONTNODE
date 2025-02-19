import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";  // Importing useTranslation hook
import Heading from "../../common/Heading";
import "./hero.css";
import im1 from "../../../images/LandingPage/im2.jpg";
import im2 from "../../../images/LandingPage/im1.jpg";
import im3 from "../../../images/LandingPage/im3.jpg";

const Hero = () => {
  const { t } = useTranslation();  // Destructuring t function from useTranslation

  useEffect(() => {
    // Re-initialize the carousel after component renders
    if (typeof window !== "undefined") {
      const carousel = document.getElementById("heroCarousel");
      const bootstrapCarousel = new window.bootstrap.Carousel(carousel);
      bootstrapCarousel.cycle(); // Optional: starts the automatic cycling
    }
  }, [t]); // Re-run this effect whenever the translation changes

  return (
    <section className='hero'>
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ backgroundImage: `url(${im1})` }}>
            <div className='container'>
              <Heading
                title={t('hero.title1')}  // Translation key for "Caring Today for a Brighter Tomorrow"
                subtitle={t('hero.subtitle1')}  // Translation key for subtitle
              />
            </div>
          </div>
          <div className="carousel-item" style={{ backgroundImage: `url(${im2})` }}>
            <div className='container'>
              <Heading
                title={t('hero.title2')}  // Translation key for "Building Hope, One Child at a Time"
                subtitle={t('hero.subtitle2')}  // Translation key for subtitle
              />
            </div>
          </div>
          <div className="carousel-item" style={{ backgroundImage: `url(${im3})` }}>
            <div className='container'>
              <Heading
                title={t('hero.title3')}  // Translation key for "Every Child, Every Chance"
                subtitle={t('hero.subtitle3')}  // Translation key for subtitle
              />
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
