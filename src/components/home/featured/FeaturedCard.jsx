import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { featured } from "../../data/Data";
import { FaBullhorn } from "react-icons/fa";

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
    <div className="mx-3">
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
              <h3 style={{ margin: 0, fontSize: "1.6rem", fontWeight: 600, color: "#333", fontFamily: "poppins" }}>
                {t("featured_card.notice_board_title")}
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "#555" }}>
              <p
                style={{ margin: 0, fontSize: "1.1rem" }}
                dangerouslySetInnerHTML={{ __html: t("featured_card.notice_1") }}
              />
              <p
                style={{ margin: 0, fontSize: "1.1rem" }}
                dangerouslySetInnerHTML={{ __html: t("featured_card.notice_2") }}
              />
              <p
                style={{ margin: 0, fontSize: "1.1rem" }}
                dangerouslySetInnerHTML={{ __html: t("featured_card.notice_3") }}
              />
              <p
                style={{ margin: 0, fontSize: "1.1rem" }}
                dangerouslySetInnerHTML={{ __html: t("featured_card.notice_4") }}
              />
              <p
                style={{ margin: 0, fontSize: "1.1rem" }}
                dangerouslySetInnerHTML={{ __html: t("featured_card.notice_5") }}
              />
              <p
                style={{ margin: 0, fontSize: "1.1rem" }}
                dangerouslySetInnerHTML={{ __html: t("featured_card.notice_6") }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
