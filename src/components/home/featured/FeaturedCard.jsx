import React from "react";
import { useTranslation } from "react-i18next";
import { featured } from "../../data/Data";  // Your featured data

const FeaturedCard = () => {
  const { t } = useTranslation();  // Destructuring t function from useTranslation

  return (
    <div className="content grid5 mtop">
      {featured.map((items, index) => (
        <div className="box" style={{ backgroundColor: "#96214505" }} key={index}>
          <img src={items.cover} alt="" />
          <h4>{t(items.name)}</h4>  {/* Use translation key for name */}
          <label>{t(items.total)}</label>  {/* Use translation key for total */}
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;
