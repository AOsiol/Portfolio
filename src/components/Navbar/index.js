import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/about">
        Anthony
      </a>

      <a className="nav-link" href="/about">
        About
      </a>

      <a className="nav-link" href="/resume">
        Resume
      </a>

      <a className="nav-link" href="/portfolio">
        Portfolio
      </a>
    </nav>
  );
}

export default Navbar;

{
  /* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">
    Anthony
  </Link>
  <div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-link active"
              : "nav-link"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={
            window.location.pathname === "/portfolio"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={
            window.location.pathname === "/resume"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Resume
        </Link>
      </li>
    </ul>
  </div>
</nav>; */
}