import React from "react";
import { motion } from "framer-motion";
import meImage from "../../assets/images/me.png";
import Icons from "../Icons";
import "./style.css";
function About() {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100vw",
    },
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      className="bio"
    >
      <img className="myPic" src={meImage} alt="me"></img>
      <div className="bits">
        <h2>A Little Bit About Me...</h2>
        <Icons></Icons>
        <p>
          Hi! My name is Dylan! Here is a little bit about myself and my journey
          into the world of Web Development. After 13 years in my Asset
          Protection career I decided pursue a career change. I began with some
          private tutoring sessions learning the fundamentals of Java and
          enjoyed it a lot!
          <br></br>
          <br></br>I went on to graduate from a Full Stack Coding Bootcamp
          through UC Berkeley Extension, where I learned how to create
          relational + non-relational Databases and Full Stack Web Applications
          utilizing the MERN stack.
          <br></br>
          <br></br>I am eager to learning new technologies to see where this new
          path takes me. Thank you for stopping by and taking a look! 
        </p>
      </div>
    </motion.div>
  );
}

export default About;
