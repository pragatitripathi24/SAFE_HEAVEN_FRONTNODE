import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BlogCard from "./BlogsCard"; 
import "./blogs.css";

// BlogsData definition moved inside the component
const BlogsComp = () => {
  const { t } = useTranslation();

  const BlogsData = [
    {
      id: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Child_in_poverty%2C_Ethiopia.jpg/400px-Child_in_poverty%2C_Ethiopia.jpg",
      title: t("blogs.celebration1Title"),
      description: t("blogs.celebration1Description"),
      author: "Someone",
      date: "April 22, 2022",
    },
    {
      id: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Child_in_poverty%2C_Ethiopia.jpg/400px-Child_in_poverty%2C_Ethiopia.jpg",
      title: t("blogs.celebration2Title"),
      description: t("blogs.celebration2Description"),
      author: "Someone",
      date: "April 23, 2022",
    },
    {
      id: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Child_in_poverty%2C_Ethiopia.jpg/400px-Child_in_poverty%2C_Ethiopia.jpg",
      title: t("blogs.celebration3Title"),
      description: t("blogs.celebration3Description"),
      author: "Someone",
      date: "April 24, 2022",
    },
    {
      id: 4,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Child_in_poverty%2C_Ethiopia.jpg/400px-Child_in_poverty%2C_Ethiopia.jpg",
      title: t("blogs.celebration4Title"),
      description: t("blogs.celebration4Description"),
      author: "Someone",
      date: "April 25, 2022",
    },
    {
      id: 5,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Child_in_poverty%2C_Ethiopia.jpg/400px-Child_in_poverty%2C_Ethiopia.jpg",
      title: t("blogs.celebration5Title"),
      description: t("blogs.celebration5Description"),
      author: "Someone",
      date: "April 26, 2022",
    },
    {
      id: 6,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Child_in_poverty%2C_Ethiopia.jpg/400px-Child_in_poverty%2C_Ethiopia.jpg",
      title: t("blogs.celebration6Title"),
      description: t("blogs.celebration6Description"),
      author: "Someone",
      date: "April 27, 2022",
    },
    {
      id: 7,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Child_in_poverty%2C_Ethiopia.jpg/400px-Child_in_poverty%2C_Ethiopia.jpg",
      title: t("blogs.celebration7Title"),
      description: t("blogs.celebration7Description"),
      author: "Someone",
      date: "April 28, 2022",
    }
  ];

  return (
    <div className="blogs container mt-4">
      <nav aria-label="breadcrumb mb-2">
        <ol className="breadcrumb fs-6">
          <li className="breadcrumb-item fs-6">
            <a href="/">{t("blogs.breadcrumbHome")}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/lostchildren" style={{ textDecoration: "none", color: "red" }}>
              {t("blogs.breadcrumbPage")}
            </Link>
          </li>
        </ol>
      </nav>
      <div className="hiring-section" data-aos="flip-right">
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            color: "black",
            paddingTop: "20px",
          }}
        >
          {t("blogs.galleryTitle")}
        </h2>
      </div>
      <div
        style={{
          backgroundColor: "#F3F4F6",
          color: "white",
          padding: "12px 0 56px",
        }}
      >
        <section
          data-aos="flip-up"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            data-aos="flip-right"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div
            data-aos="flip-right"
            style={{
              textAlign: "center",
              marginTop: "0px",
            }}
          >
            <a href="/pg">
              <button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "4px solid rgb(146 213 230)",
                  borderRadius: "0px",
                  padding: "12px 24px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                {t("blogs.viewAllPosts")}
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogsComp;
