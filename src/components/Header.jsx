import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-2 fw-bolder ">
          Social Media App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link px-3 py-2 rounded ${
                    isActive
                      ? "bg-light text-primary fw-bold shadow-sm"
                      : "text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/create-post"
                className={({ isActive }) =>
                  `nav-link px-3 py-2 rounded ${
                    isActive
                      ? "bg-light text-primary fw-bold shadow-sm"
                      : "text-white"
                  }`
                }
              >
                Create Post
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
