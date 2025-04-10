import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { featured } from "../../data/Data";
import { FaBullhorn, FaCalendarAlt, FaHandsHelping, FaPhoneAlt, FaAppleAlt } from "react-icons/fa";
const FeaturedCard = () => {
  const { t } = useTranslation();
  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState(0);

  useEffect(() => {
    if (leftRef.current) {
      setLeftHeight(leftRef.current.offsetHeight);
    }
  }, [featured]);

  return (
    <div className="  mx-3">
      <div className="row">
        {/* Left Side */}
        <div className="col-md-8">
          <div ref={leftRef}>
            <div className="grid5">
              {featured.map((items, index) => (
                <div className="box" style={{ backgroundColor: "white" }} key={index}>
                  <img src={items.cover} alt="" />
                  <h4>{t(items.name)}</h4>
                  <label>{t(items.total)}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="col-md-4">
  <div
    className="right-box"
    style={{
      height: `${leftHeight}px`,
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
      padding: "24px",
      overflowY: "auto",
      border: "1px solid #eee",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
      <FaBullhorn size={26} style={{ marginRight: "12px", color: "#d9534f" }} />
      <h3 style={{ margin: 0, fontSize: "1.6rem", fontWeight: 600, color: "#333" , fontFamily:"poppins"}}>Public Notice Board</h3>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "#555" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        
        <p style={{ margin: 0 , fontSize: "1.1rem", }}>
          <strong>Child Safety Week</strong><br/> will be observed from April 10–16. Awareness activities to be conducted in schools.
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
       
        <p style={{ margin: 0 , fontSize: "1.1rem",}}>
          <strong>Protection Training</strong><br/> for staff scheduled on April 12. Ensure registration before April 10.
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
   
        <p style={{ margin: 0 , fontSize: "1.1rem",}}>
          <strong>24/7 Helpline 1098</strong> <br/>is available for child emergency support. Display in all institutions.
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
       
        <p style={{ margin: 0 , fontSize: "1.1rem",}}>
          <strong>Nutrition Camp</strong><br/> for underprivileged children on April 15 at Community Hall, Sector 4.
        </p>
      </div>
   
    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
   
    <p style={{ margin: 0 , fontSize: "1.1rem", }}>
      <strong>Children’s Day Celebration</strong> will take place on April 20 with fun activities and a talent show for kids.
    </p>
  </div>

  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
   
    <p style={{ margin: 0  , fontSize: "1.1rem",}}>
      <strong>Volunteer Sign-Up</strong> open for the upcoming community outreach drive. Deadline: April 18.
    </p>
  </div>
  </div>
</div>
</div>
      </div>
    </div>
  );
};

export default FeaturedCard;
