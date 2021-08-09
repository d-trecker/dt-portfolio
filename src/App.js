import React, { useState } from "react";
import Nav from "./components/Nav";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  const [navOpt] = useState([
    {
      name: "About",
      org: "about-me",
    },
    {
      name: "Work",
      org: "my-work",
    },
    {
      name: "Contact",
      org: "contact-me",
    },
    {
      name: "Resume",
      org: "resume",
    },
    
  ]);

  const [currentNavOpt, setCurrentNavOpt] = useState(navOpt[0]);

  function displayComp(navOpt) {
    switch (navOpt) {
      case "About":
        return <About></About>;
      case "Work":
        return <Work></Work>;
      case "Contact":
        return <Contact></Contact>;
      default:
        return <About></About>;
    }
  }

  return (
    <div>
      <Nav
        navOpt={navOpt}
        setCurrentNavOpt={setCurrentNavOpt}
        currentNavOpt={currentNavOpt}
      ></Nav>
      <main>{displayComp(currentNavOpt.name)}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
