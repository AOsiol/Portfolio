import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navSet">
        <a className="nav-link" href="/about">
          About
        </a>

        <a className="nav-link" href="/resume">
          Resume
        </a>

        <a className="nav-link" href="/portfolio">
          Portfolio
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
