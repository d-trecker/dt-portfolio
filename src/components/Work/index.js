import React from "react";
import quizTime from "../../assets/images/Quiz Time.png";
import dtScheduler from "../../assets/images/Scheduler.png";
import weatherReport from "../../assets/images/weather-report.png";
import poh from "../../assets/images/poh.png";
import justNoise from "../../assets/images/just-noise.png";
import comingSoon from "../../assets/images/dyl-soon.jpg";

function Work() {
  return (
    <div className="b-w-c">
    <div id="my-work" className="my-work">
        <h2>Work</h2>
        <a href="https://d-trecker.github.io/quiz-time/" target="blank" rel="noopener noreferrer">
            <img src={quizTime} alt="a timed Javascript quiz website" className="quiz-time"></img>
        </a>
        <h3>Quiz Time</h3>
        <a href="https://d-trecker.github.io/dtreck-scheduler/" target="blank" rel="noopener noreferrer">
            <img src={dtScheduler} alt="A work day scheduler" className="dtreck-scheduler"></img>
        </a>
        <h3>D-Treck's Scheduler</h3>
        <a href="https://d-trecker.github.io/dtreck-weather-report/" target="blank" rel="noopener noreferrer">
            <img src={weatherReport} alt="A weather app" className="dtreck-weather"></img>
        </a>
        <h3>D-Treck's Weather Report</h3>
        <a href="https://d-trecker.github.io/pursuit-of-hoppiness/" target="blank" rel="noopener noreferrer">
            <img src= {poh} alt="A local brewery weather app" className="tpoh"></img>
        </a>
        <h3>The Pursuit of Hoppiness</h3>
        <a href="https://just-noise.herokuapp.com/" target="blank" rel="noopener noreferrer">
            <img src={justNoise} alt="A social media music app" className="tpoh"></img>
        </a>
        <h3>Just-Noise</h3>
        <img src= {comingSoon} alt="80's retro ram head saying coming soon"
            className="coming-soon"></img>
      
    </div>
    </div>

  );
}

export default Work;
