import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SchemesProgram = () => {
  const { t } = useTranslation();

  // Define state for documents
  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDocs, setFilteredDocs] = useState([]);

  // Update documents titles when the language changes
  useEffect(() => {
    const updatedDocuments = [
      {
        title: t("documents.invitationDevelopmentInspection"),
        date: "17/09/2024",
        size: "555 KB",
      },
      {
        title: t("documents.proformaSpecialSchools"),
        date: "12/09/2024",
        size: "6 MB",
      },
      {
        title: t("documents.invitingProposalsWorkshops"),
        date: "12/09/2024",
        size: "2 MB",
      },
      {
        title: t("documents.maharashtraStateRights"),
        date: "05/09/2024",
        size: "845 KB",
      },
      {
        title: t("documents.cabinetDecisions"),
        date: "10/01/2024",
        size: "119 KB",
      },
      {
        title: t("documents.scheme6"),
        date: "10/01/2024",
        size: "200 KB",
      },
      {
        title: t("documents.scheme7"),
        date: "10/01/2024",
        size: "300 KB",
      },
      {
        title: t("documents.scheme8"),
        date: "10/01/2024",
        size: "400 KB",
      },
      {
        title: t("documents.scheme9"),
        date: "10/01/2024",
        size: "500 KB",
      },
      {
        title: t("documents.scheme10"),
        date: "10/01/2024",
        size: "600 KB",
      },
      {
        title: t("documents.scheme11"),
        date: "10/01/2024",
        size: "700 KB",
      },
      {
        title: t("documents.scheme12"),
        date: "10/01/2024",
        size: "800 KB",
      },
    ];

    setDocuments(updatedDocuments);
    setFilteredDocs(updatedDocuments); // Set the filtered documents initially as well
  }, [t]);

  // Pagination logic
  const rowsPerPage = currentPage === 1 ? 10 : 2;
  const totalPages =
    currentPage === 1
      ? Math.ceil(filteredDocs.length / 10)
      : Math.ceil((filteredDocs.length - 10) / 2) + 1;

  const indexOfLastDoc = currentPage === 1 ? rowsPerPage : 10 + (currentPage - 1) * rowsPerPage;
  const indexOfFirstDoc = currentPage === 1 ? 0 : 10 + (currentPage - 2) * rowsPerPage;

  const currentDocs = filteredDocs.slice(indexOfFirstDoc, indexOfLastDoc);

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Apply filter based on search term
  const applyFilter = () => {
    const filtered = documents.filter((doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDocs(filtered);
    setCurrentPage(1); // Reset to the first page when applying filters
  };

  return (
    <div className="container mt-3 mb-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item fs-6">
            <a href="/">{t("documents.home")}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/schemes/programs" style={{ textDecoration: "none", color: "red" }}>
              {t("documents.Schemeprograms")}
            </Link>
          </li>
        </ol>
      </nav>

      <p style={{ color: "black", letterSpacing: "2px", textTransform: "capitalize", textAlign: "center" }}>
        <strong className="fs-2">{t("documents.Schemeprograms")} <br /></strong>
      </p>

      {/* Search filter section */}
      <div className="filter-section mb-3 d-flex justify-content-center">
        <div className="input-group" style={{ width: "50%" }}>
          <input
            type="text"
            className="form-control"
            placeholder={t("documents.filterPlaceholder")}
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
            <span className="ml-1">{t("documents.applyFilter")}</span>
          </button>
        </div>
      </div>

      {/* Table displaying document list */}
      <div className="table-responsive mb-5">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark text-center">
            <tr>
              <th scope="col">{t("documents.title")}</th>
              <th scope="col">{t("documents.date")}</th>
              <th scope="col">{t("documents.viewDownload")}</th>
            </tr>
          </thead>
          <tbody>
            {currentDocs.map((doc, index) => (
              <tr key={index}>
                <td style={{ height: "60px", verticalAlign: "middle" }}>{doc.title}</td>
                <td className="text-center" style={{ height: "60px", verticalAlign: "middle" }}>
                  {doc.date}
                </td>
                <td style={{ height: "60px", verticalAlign: "middle" }}>
                  <Link to="#" className="text-danger ml-3">
                    {t("documents.view")} <i className="fas fa-file-pdf ml-1"></i>
                  </Link>{" "}
                  |{" "}
                  <Link to="#" className="text-success ml-3">
                    {t("documents.download")} <i className="fas fa-download ml-1"></i>
                  </Link>{" "}
                  ({doc.size})
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          {[...Array(totalPages)].map((_, i) => (
            <li key={i} className={`page-item ${i + 1 === currentPage ? "active" : ""}`}>
              <button
                style={{
                  backgroundColor: currentPage === i + 1 ? "#962145" : "#fff",
                  color: "black",
                  outline: "none",
                  boxShadow: "none",
                }}
                onClick={() => setCurrentPage(i + 1)}
                className="page-link"
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SchemesProgram;
