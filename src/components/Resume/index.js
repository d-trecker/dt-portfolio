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
            <div className= "resume-container">
            <p>
            <br/>
            • Web Development: React, Node.js, Apollo, GraphQL, Express.js, Bootstrap, Handlebars, Webpack, Sass, Redux <br></br>  <br></br>
            • Languages: Java, JavaScript, HTML, CSS, SQL, Bash <br/>  <br/>
            • Databases: Relational (SQL), Non-relational (MongoDB) <br/>  <br/>
            • Concepts: OOP, ORM, RESTful APIs, CRUD Operations, MVC frameworks <br/>  <br/>
            • Testing Frameworks: Jest <br/>  <br/>
            • Software: Git, Visual Studio Code, jGRASP, Insomnia, MySQL Workbench <br/>  <br/>
            • Deployment: GitHub and Heroku <br/>  <br/>
            
            </p>
            
            <div className= "iframe-container">
            <iframe src="https://drive.google.com/file/d/1bYrLd9e6c1xKRJ2aEfXhvfxqxlQVWHMz/preview" width="640" height="480" allow="autoplay" title="dt-resume"></iframe>
            
            </div>
            <a className= "resumeBtn" href= "https://drive.google.com/file/d/1cdW35PZXhjQFGlKB68ZBJwlzBnznUFew/view?usp=sharing" target= "blank" rel="noopener noreferrer">Download Resume</a>
           
            </div>
            

        </motion.div>
    );
}

export default Resume;