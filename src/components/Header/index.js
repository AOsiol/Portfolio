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
          <FaGithub />
        </div>
        <span>AO</span>
        <div className="icon">
          <FaLinkedin />
        </div>
        <div className="direct-contact">osiol.anthony@gmail.com</div>
      </div>
    </>
  );
}

export default Header;
