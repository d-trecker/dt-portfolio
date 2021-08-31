import React from "react";
import './style.css';
import quizTime from "../../assets/images/quiz-time.png";
import dtScheduler from "../../assets/images/Scheduler.png";
import weatherReport from "../../assets/images/weather-report.png";
import poh from "../../assets/images/poh.png";
import justNoise from "../../assets/images/just-noise.png";
import coolNotes from "../../assets/images/cool-notes.png";
import kissAnime from "../../assets/images/kiss-anime.png"
// import comingSoon from "../../assets/images/dyl-soon.jpg";

function Work() {
  return (
    
    <div className="my-work">
        <h2>Projects</h2>
        <section className= "projects">
        <div className= "project">
        <h3>Kiss Anime <br></br>(From the Ashes Reborn)<a
          href="https://github.com/theoneandonlyzako/kiss-anime"
          target="blank"
          rel="noopener noreferrer"
          ><i className="fab fa-github fa-1x "></i></a></h3>
        <a href="https://my-kiss-anime.herokuapp.com/" target="blank" rel="noopener noreferrer">
            <img src={kissAnime} alt="A cool note app" className="project-images"></img>
        </a>
        </div>
        <div className= "project">
        <h3>Just-Noise<a
          href="https://github.com/d-trecker/just-noise.git"
          target="blank"
          rel="noopener noreferrer"
          ><i className="fab fa-github fa-1x "></i></a></h3>
        <a href="https://just-noise.herokuapp.com/" target="blank" rel="noopener noreferrer">
            <img src={justNoise} alt="A social media music app" className="project-images"></img>
        </a>
        </div>
        <div className= "project">
        <h3>Cool Notes<a
          href="https://github.com/d-trecker/cool-notes.git"
          target="blank"
          rel="noopener noreferrer"
          ><i className="fab fa-github fa-1x "></i></a></h3>
        <a href="http://dt-cool-notes.herokuapp.com/" target="blank" rel="noopener noreferrer">
            <img src={coolNotes} alt="A cool note app" className="project-images"></img>
        </a>
        </div>
        <div className= "project">
        <h3>The Pursuit of Hoppiness<a
          href="https://github.com/d-trecker/pursuit-of-hoppiness.git"
          target="blank"
          rel="noopener noreferrer"
          ><i className="fab fa-github fa-1x "></i></a></h3>
        <a href="https://d-trecker.github.io/pursuit-of-hoppiness/" target="blank" rel="noopener noreferrer">
            <img src= {poh} alt="A local brewery weather app" className="project-images"></img>
        </a>
        </div>
        <div className= "project">
        <h3>D-Treck's Scheduler<a
          href="https://github.com/d-trecker/dtreck-scheduler.git"
          target="blank"
          rel="noopener noreferrer"
          ><i className="fab fa-github fa-1x "></i></a></h3>
        <a href="https://d-trecker.github.io/dtreck-scheduler/" target="blank" rel="noopener noreferrer">
            <img src={dtScheduler} alt="A work day scheduler" className="project-images"></img>
        </a>
        </div>
        <div className= "project">
        <h3>D-Treck's Weather Report<a
          href="https://github.com/d-trecker/dtreck-weather-report.git"
          target="blank"
          rel="noopener noreferrer"
          ><i className="fab fa-github fa-1x "></i></a></h3>
        <a href="https://d-trecker.github.io/dtreck-weather-report/" target="blank" rel="noopener noreferrer">
            <img src={weatherReport} alt="A weather app" className="project-images"></img>
        </a>
        </div>
        <div className= "project">
        <h3>Quiz Time <a
          href="https://github.com/d-trecker/quiz-time.git"
          target="blank"
          rel="noopener noreferrer"
          ><i className="fab fa-github fa-1x "></i></a></h3>
        <a href="https://d-trecker.github.io/quiz-time/" target="blank" rel="noopener noreferrer">
            <img src={quizTime} alt="a timed Javascript quiz website" className="project-images"></img>
        </a>
        </div>

        {/* <img src= {comingSoon} alt="80's retro ram head saying coming soon"
            className="projects"></img> */}    
        </section>
    </div>


  );
}

export default Work;
