import React from 'react';
import { motion } from "framer-motion";
import './style.css';

function Resume() {
    const pageTransition = {
        in: { 
          opacity:1,
          x:0
        },
        out: {
          opacity: 0,
          x:"-100vw"
        }
      };
    return (
        <motion.div 
        initial="out"
        animate="in"
        exit="out"
        variants= {pageTransition}
        className="resume">

            <h2>Technical Skills</h2>
            <p>
            <br></br>
            • Web Development: React, Node.js, Apollo, GraphQL, Express.js, Bootstrap, Handlebars, Webpack <br></br>  <br></br>
            • Languages: Java, JavaScript, HTML, CSS, SQL, Bash <br></br>  <br></br>
            • Databases: Relational (SQL), Non-relational (MongoDB) <br></br>  <br></br>
            • Concepts: OOP, ORM, RESTful APIs, CRUD Operations, MVC frameworks <br></br>  <br></br>
            • Testing Frameworks: Jest <br></br>  <br></br>
            • Software: Git, Visual Studio Code, jGRASP, Insomnia, MySQL Workbench <br></br>  <br></br>
            • Deployment: GitHub and Heroku <br></br>  <br></br>
            </p>
          
            <a className= "resumeBtn" href= "https://drive.google.com/file/d/1cdW35PZXhjQFGlKB68ZBJwlzBnznUFew/view?usp=sharing" target= "blank" rel="noopener noreferrer">Download Resume</a>


        </motion.div>
    );
}

export default Resume;