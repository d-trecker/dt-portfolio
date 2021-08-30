import React from "react";
import meImage from "../../assets/images/me.png";
import "./style.css";
function About() {
  return (
    <div className="bio">
      <img src={meImage} alt="me"></img>
      <div className="bits">
        <h2>A Little Bit About Me...</h2>
        <p>
          Hi! My name is Dylan! Here is a little bit about myself and my journey
          into the world of Web Development. In 2020 after 13 years in my Asset
          Protection career I decided to begin my journey into a new career path
          to become a Full Stack Web Developer. I began with some private
          tutoring sessions learning the fundamentals of Java and enjoyed it a
          lot! I went on to graduate from a Full Stack Coding Bootcamp through UC
          Berkeley Extension which was quite the journey. 
          <br></br>
          <br></br>
          Throughout my time
          within the bootcamp I have found myself really resonating with the
          backend. The dopamine kick that comes a long when your
          databases, routes, mutations, resolvers, etc. begin to take hold a
          real thrill. This I found that odd though since I have a strong
          passion for creating art as a hobby and thought I would lean more towards
          the frontend… I do get lost in styling a page for hours though. : )
          <br></br>
          <br></br>
          I am eager to learning new
          technologies to see where this new path takes me! Thank you for
          stopping by and taking a look!
        </p>
      </div>
    </div>
  );
}

export default About;
