import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="bg-black sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a
            href="/"
            className="navbar-brand"
            style={{ fontSize: 25, fontWeight: "bolder" }}
          >
            <span className="my-name">
              <i>Shahin Mia</i>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ml-5">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  exact
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item ml-5">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  exact
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item ml-5">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  exact
                  to="/projects"
                >
                  PROJECTS
                </NavLink>
              </li>
              <li className="nav-item ml-5">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  exact
                  to="/blog"
                >
                  BLOG
                </NavLink>
              </li>
              <li className="nav-item ml-5">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  exact
                  to="/Contact"
                >
                  CONTACTS
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
