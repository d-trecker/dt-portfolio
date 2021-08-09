import React from "react";

function Nav(props) {
  const { navOpt = [], setCurrentNavOpt, currentNavOpt } = props;
  return (
    <header>
      <h1>
        <a href="/">Dylan Trecker</a>
      </h1>
      <nav>
        <ul>
          {navOpt.map((navOpt) => (
            <li className={currentNavOpt.name === navOpt.name ? "navActive" : undefined} key={navOpt.org}>
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
