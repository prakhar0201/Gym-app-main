import React from "react";
import "./footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo-2.jfif";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a
            href="https://www.instagram.com/prakhar_2105/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="" />
          </a>
          <a
            href="https://github.com/prakhar0201"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/prakhar-saxena-89a296144"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur f-blur-1"></div>
      <div className="blur f-blur-2"></div>
    </div>
  );
};

export default Footer;
