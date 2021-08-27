import React from "react";
import { Link } from "react-router-dom";
import './style.css';
function Nav(props) {
  return (
    <header>
      <h1>
        <a href="/">Dylan Trecker</a>
      </h1>
      <nav>
        <ul>

          <Link to ="/about" className="coolbtn">About</Link>
          <Link to ="/work" className="coolbtn">Work</Link>
          <Link to ="/contact" className="coolbtn">Contact</Link>
          <Link to ="/resume" className="coolbtn">Resume</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
