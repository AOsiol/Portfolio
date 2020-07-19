import React from "react";
import "./style.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="header-contact">
        <div className="direct-contact">804.814.0932</div>
        <div className="icon">
          <a target="_blank" href={"https://github.com/AOsiol"}>
            <FaGithub />
          </a>
        </div>
        <span>AO</span>
        <div className="icon">
          <a
            target="_blank"
            href={"https://www.linkedin.com/in/anthony-osiol-pmp-643a206/"}
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="direct-contact">osiol.anthony@gmail.com</div>
      </div>
    </>
  );
}

export default Header;
