import React from "react";

function Nav(props) {
  const { navOpt = [], setCurrentNavOpt, currentNavOpt } = props;
  return (
    <header>
      <h1>
        <a href="/">Dylan Trecker's Portfolio</a>
      </h1>
      <nav>
        <ul>
          {navOpt.map((navOpt) => (
            <li className={currentNavOpt.name === navOpt.name && "navActive"}>
              <a
                href={`#${navOpt.org}`}
                className="coolbtn"
                onClick={() => setCurrentNavOpt(navOpt)}
              >
                {navOpt.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
