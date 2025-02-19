import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogsCard = ({ image, title, description }) => {
  return (
    <div style={{ color: "white", position: "relative" }}>
      <div style={{ overflow: "hidden", position: "relative", zIndex: 1 }}>
        <img
          src={image}
          alt="No image"
          style={{
            display: "block", // ensures the image displays as a block-level element
            margin: "0 auto",
            height: "420px",
            width: "100%",
            objectFit: "cover",
            transition: "transform 0.3s",
            backgroundColor: "#ccc", // fallback color if image fails to load
          }}
          className="blogs-card-img"
        />
      </div>
      <div
        style={{
          padding: "16px",
          marginLeft: "24px",
          backgroundColor: "white",
          color: "black",
          position: "relative",
          transform: "translateY(-64px)",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "600",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: "#6B7280",
            fontSize: "14px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "4",
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "16px",
            color: "#6B7280",
            transition: "color 0.3s, transform 0.3s",
          }}
          className="blogs-card-arrow"
        >
          <FaArrowRight />
        </div>
      </div>
      <style>
        {`
          .blogs-card-img:hover {
            transform: scale(1.05);
          }
          .blogs-card-arrow:hover {
            color: #04bcb4;
            transform: translateX(8px);
          }
        `}
      </style>
    </div>
  );
};

export default BlogsCard;
