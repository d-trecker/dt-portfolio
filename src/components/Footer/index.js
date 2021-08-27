import React from "react";
import footer from "../../assets/images/dyl-header.jpg";
import './style.css';
function Footer() {
  return (
    <div className="footer">
      <div className="link-wrapper" >
        <a
          href="mailto: dylan.j.trecker@gmail.com"
          target="blank"
          rel="noopener noreferrer"
          className="contactBtn"
          
        >
          <i  className="far fa-envelope fa-3x"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/dylan-trecker-791698169"
          target="blank"
          rel="noopener noreferrer"
          className="contactBtn"
        >
          <i className="fab fa-linkedin fa-3x"></i>
        </a>

        <a
          href="https://github.com/d-trecker"
          target="blank"
          rel="noopener noreferrer"
          className="contactBtn"
        >
          <i className="fab fa-github fa-3x "></i>
        </a>
      </div>
      <img src={footer} alt="retro 80 sunset"></img>
    </div>
  );
}

export default Footer;
