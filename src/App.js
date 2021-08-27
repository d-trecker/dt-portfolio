import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  return (
    <Router>
    <div>
      <Nav></Nav>
      <main>
      <Route exact path="/dt-portfolio" component={About} /> 
      <Route exact path="/about" component={About} /> 
      <Route exact path="/work" component={Work} />  
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />     
      </main>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
