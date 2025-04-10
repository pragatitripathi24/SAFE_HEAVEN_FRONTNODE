import React from "react";
import { useTranslation } from "react-i18next";
import { successStories } from "../../data/Data";
import Marquee from "react-fast-marquee";

const RecentCard = () => {
  const { t } = useTranslation();

  const marqueeContainerStyle = {
    overflow: "hidden",
    padding: "20px",
  };

  const cardStyle = {
    height: "350px",
    width: "300px",
    margin: "10px",
    borderRadius: "10px",
    padding: "15px",
    background: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const textStyle = {
    textAlign: "left",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    backgroundColor: "#962145",
    padding: "10px 0",
    borderRadius: "5px",
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
    borderRadius: "50px",
  };

  const categorySpanStyle = {
    background: "#25b5791a",
    color: "#25b579",
    marginBottom: "8px",
    padding: "4px 8px",
    borderRadius: "4px",
  };

  return (
    <div style={marqueeContainerStyle}>
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {successStories.map((val, index) => {
          const { cover, title, location, description } = val;
          return (
            <div style={cardStyle} key={index}>
              <div style={textStyle}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span style={categorySpanStyle}>{t('recent.category')}</span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{title}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
                <p>{description}</p>
              </div>
              <div style={buttonContainerStyle}>
                <button style={buttonStyle}>{t('recent.readMore')}</button>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default RecentCard;
