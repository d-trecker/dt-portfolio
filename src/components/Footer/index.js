import React from "react";
import footer from "../../assets/images/dyl-header.jpg";



function Footer() {
  return (
    <div className="footer" >
      <img src={footer}alt="retro 80 sunset"></img>
      <div className = "link-wrapper">
      <p>Email: <a href="mailto: dylan.j.trecker@gmail.com" target="blank"
                    rel="noopener noreferrer">dylan.j.trecker@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/dylan-trecker-791698169" target="blank"
                    rel="noopener noreferrer">Dylan Trecker</a></p>
            <p>Github: <a href="https://github.com/d-trecker" target="blank" rel="noopener noreferrer">d-trecker</a></p>
            </div>
    </div>
  );
}

export default Footer;
