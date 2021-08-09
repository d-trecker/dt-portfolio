import React from "react";
import footer from "../../assets/images/dyl-header.jpg";



function Footer() {
  return (
    




    <div className="footer"  >
      <img src={footer}alt="retro 80 sunset"></img>
      <div className = "link-wrapper">

      <a href="mailto: dylan.j.trecker@gmail.com" target="blank"rel="noopener noreferrer">
        <i className="far fa-envelope fa-3x"></i>
      </a>

      <a href="https://www.linkedin.com/in/dylan-trecker-791698169" target="blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin fa-3x"></i>
      </a>

      <a href="https://github.com/d-trecker" target="blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x" ></i>
      </a>
            </div>
    </div>
  );
}

export default Footer;
