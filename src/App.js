import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  let location = useLocation();

  return (

      <div>
        <Nav></Nav>
          <AnimatePresence exitBeforeEnter>
            <Switch location= {location} key={location.pathname}>
              <Route exact path="/" component={About} />
              <Route exact path="/dt-portfolio" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Work} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/resume" component={Resume} />
            </Switch>
          </AnimatePresence>
        <Footer></Footer>
      </div>

  );
}

export default App;
