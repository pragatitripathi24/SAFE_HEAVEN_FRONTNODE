import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

const ITEMS_PER_PAGE = 10;

const LostChildren = () => {
  const { t } = useTranslation();

  // Manual data for children using translation for string fields
  const childrenData = [
    {
      id: 1,
      location: t("lostChildren.children.child1.location"),
      name: t("lostChildren.children.child1.name"),
      age: 7,
      gender: t("lostChildren.children.child1.gender"),
      foundBy: t("lostChildren.children.child1.foundBy"),
      hisPhoneNumber: "1234567890",
      status: t("lostChildren.children.child1.status"),
    },
    {
      id: 2,
      location: t("lostChildren.children.child2.location"),
      name: t("lostChildren.children.child2.name"),
      age: 8,
      gender: t("lostChildren.children.child2.gender"),
      foundBy: t("lostChildren.children.child2.foundBy"),
      hisPhoneNumber: "9876543210",
      status: t("lostChildren.children.child2.status"),
    },
    {
      id: 3,
      location: t("lostChildren.children.child3.location"),
      name: t("lostChildren.children.child3.name"),
      age: 10,
      gender: t("lostChildren.children.child3.gender"),
      foundBy: t("lostChildren.children.child3.foundBy"),
      hisPhoneNumber: "5556667777",
      status: t("lostChildren.children.child3.status"),
    },
    {
      id: 4,
      location: t("lostChildren.children.child4.location"),
      name: t("lostChildren.children.child4.name"),
      age: 9,
      gender: t("lostChildren.children.child4.gender"),
      foundBy: t("lostChildren.children.child4.foundBy"),
      hisPhoneNumber: "4443332222",
      status: t("lostChildren.children.child4.status"),
    },
    {
      id: 5,
      location: t("lostChildren.children.child5.location"),
      name: t("lostChildren.children.child5.name"),
      age: 6,
      gender: t("lostChildren.children.child5.gender"),
      foundBy: t("lostChildren.children.child5.foundBy"),
      hisPhoneNumber: "1112223333",
      status: t("lostChildren.children.child5.status"),
    },
    // You can add more entries similarly
  ];

  const [children] = useState(childrenData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredChildren, setFilteredChildren] = useState(children);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const applyFilter = () => {
    const filtered = children.filter((child) =>
      child.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredChildren(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredChildren.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedChildren = filteredChildren.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="container mt-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item fs-6">
            <a href="/">{t("lostChildren.breadcrumbHome")}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/lostchildren" style={{ textDecoration: "none", color: "red" }}>
              {t("lostChildren.breadcrumbPage")}
            </Link>
          </li>
        </ol>
      </nav>

      <h2 className="text-center">{t("lostChildren.title")}</h2>

      {/* Search Filter */}
      <div className="filter-section mb-3 d-flex justify-content-center">
        <div className="input-group" style={{ width: "50%" }}>
          <input
            type="text"
            className="form-control"
            placeholder={t("lostChildren.searchPlaceholder")}
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
            <span className="ml-1">{t("lostChildren.applyFilter")}</span>
          </button>
        </div>
      </div>

      {/* Children Table */}
      <table className="table table-bordered mt-3">
        <thead style={{ backgroundColor: "#2b3d9f73", color: "black" }}>
          <tr>
            <th>{t("lostChildren.sNo")}</th>
            <th>{t("lostChildren.location")}</th>
            <th>{t("lostChildren.name")}</th>
            <th>{t("lostChildren.age")}</th>
            <th>{t("lostChildren.gender")}</th>
            <th>{t("lostChildren.foundBy")}</th>
            <th>{t("lostChildren.founderPhone")}</th>
            <th>{t("lostChildren.status")}</th>
            <th>{t("lostChildren.detail")}</th>
            <th>{t("lostChildren.edit")}</th>
          </tr>
        </thead>
        <tbody>
          {selectedChildren.map((child, index) => (
            <tr key={child.id}>
              <td>{startIndex + index + 1}</td>
              <td>{child.location}</td>
              <td>{child.name}</td>
              <td>{child.age}</td>
              <td>{child.gender}</td>
              <td>{child.foundBy}</td>
              <td>{child.hisPhoneNumber}</td>
              <td>{child.status}</td>
              <td>
                <Link className="btn btn-dark mx-2" to={`/viewchilddetail/${child.id}`}>
                  {t("lostChildren.detail")}
                </Link>
              </td>
              <td>
                <Link className="btn btn-primary mx-2" to={`/editchildren/${child.id}`}>
                  {t("lostChildren.edit")}
                </Link>
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

export default LostChildren;
