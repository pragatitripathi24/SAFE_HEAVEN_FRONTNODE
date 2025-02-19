import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ITEMS_PER_PAGE = 10;

const Ngo = () => {
  const { t } = useTranslation();
  const ngos = t("ngo.ngos", { returnObjects: true }); // Fetch array from translation

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNgos, setFilteredNgos] = useState(ngos);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const applyFilter = () => {
    const filtered = ngos.filter((ngo) =>
      ngo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNgos(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredNgos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedNgos = filteredNgos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="container mt-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item fs-6">
            <a href="/">{t("ngo.breadcrumbHome")}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/schemes/programs" style={{ textDecoration: "none", color: "red" }}>
              {t("ngo.breadcrumbNgo")}
            </Link>
          </li>
        </ol>
      </nav>

      <h2 className="text-center">{t("ngo.title")}</h2>

      <div className="filter-section mb-3 d-flex justify-content-center">
        <div className="input-group" style={{ width: "50%" }}>
          <input
            type="text"
            className="form-control"
            placeholder={t("ngo.filterPlaceholder")}
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <button
            className="btn"
            type="button"
            onClick={applyFilter}
            style={{ color: "white", backgroundColor: "black" }}
          >
            <i className="fas fa-search"></i>
            <span className="ml-1">{t("ngo.applyFilter")}</span>
          </button>
        </div>
      </div>

      <table className="table table-bordered mt-3">
        <thead style={{ backgroundColor: "#2b3d9f73", color: "black" }}>
          <tr>
            <th>{t("ngo.sNo")}</th>
            <th>{t("ngo.name")}</th>
            <th>{t("ngo.mission")}</th>
            <th>{t("ngo.contact")}</th>
            <th>{t("ngo.website")}</th>
          </tr>
        </thead>
        <tbody>
          {selectedNgos.map((ngo, index) => (
            <tr key={index}>
              <td>{startIndex + index + 1}</td>
              <td>{ngo.name}</td>
              <td>{ngo.mission}</td>
              <td>{ngo.contact}</td>
              <td>
                <a href={ngo.website} target="_blank" rel="noopener noreferrer">
                  {ngo.website}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                <button
                  style={{
                    backgroundColor: currentPage === i + 1 ? "#962145" : "#fff",
                    color: "black",
                    outline: "none",
                    boxShadow: "none",
                  }}
                  className="page-link"
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Ngo;
