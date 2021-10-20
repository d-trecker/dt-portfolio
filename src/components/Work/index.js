import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import quizTime from "../../assets/images/quiz-time.png";
import dtScheduler from "../../assets/images/Scheduler.png";
// import weatherReport from "../../assets/images/weather-report.png";
import poh from "../../assets/images/poh.png";
import justNoise from "../../assets/images/just-noise.png";
import coolNotes from "../../assets/images/cool-notes.png";
import kissAnime from "../../assets/images/kiss-anime.png";
import cryptoGrid from "../../assets/images/crypto-grid.png";
// import comingSoon from "../../assets/images/dyl-soon.jpg";

function Work() {
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
      className="my-work"
    >
      <h2>Projects</h2>
      <section className="projects">
        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-front">
              <h3>
                Kiss Anime <br></br>(From the Ashes Reborn)
              </h3>
              <img
                src={kissAnime}
                alt="An anime app"
                className="project-images"
              ></img>
            </div>
            <div className="project-back">
              <h3>
                Project Details{" "}
                <a
                  href="https://github.com/theoneandonlyzako/kiss-anime"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-1x "></i>
                </a>
              </h3>
              <h4>
                <a
                  href="https://my-kiss-anime.herokuapp.com/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  https://my-kiss-anime.herokuapp.com
                </a>
              </h4>
              <br />
              <p>
                A full stack MERN application that allows users to track animes
                they are watching / want to watch, create posts, reply to other
                posts, and connect with avid anime enthusiasts.{" "}
              </p>
              <br />
              <p>Front end: React, Apollo Client</p>
              <p>Back end: Mongo DB, Mongoose, Express, Node</p>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-front">
              <h3>Crypto Grid</h3>
              <img
                src={cryptoGrid}
                alt="A cryptocurrency app"
                className="project-images"
              ></img>
            </div>
            <div className="project-back">
              <h3>
                Project Details{" "}
                <a
                  href="https://github.com/d-trecker/crypto-grid"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-1x "></i>
                </a>
              </h3>
              <h4>
                <a
                  href="https://d-trecker.github.io/crypto-grid"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  https://d-trecker.github.io/crypto-grid
                </a>
              </h4>
              <br />
              <p>
                A Cryptocurrency application created with React and Redux
                Toolkit that keeps visitors up to date with all cryptocurrency
                news and details.
                <br/> <br/> Data is pulled from Rapid API (Coinranking /
                Bing News). Ant Design used for styled components.
              </p>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-front">
              <h3>Just-Noise</h3>
              <img
                src={justNoise}
                alt="A social media music app"
                className="project-images"
              ></img>
            </div>
            <div className="project-back">
              <h3>
                Project Details{" "}
                <a
                  href="https://github.com/d-trecker/just-noise.git"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-1x "></i>
                </a>
              </h3>
              <h4>
                <a
                  href="https://just-noise.herokuapp.com/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  https://just-noise.herokuapp.com
                </a>
              </h4>
              <br />
              <p>
                A full stack music blog application that incorperates a MVC
                format. Created for a community of users who love to share their
                latest music finds and leverage other fans’ finds to identify
                the latest and greatest music of today.
              </p>
              <br />
              <p>Front end: Handlebars</p>
              <p>Back end: MySQL, Express, Node</p>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-front">
              <h3>Cool Notes</h3>
              <img
                src={coolNotes}
                alt="A cool note app"
                className="project-images"
              ></img>
            </div>
            <div className="project-back">
              <h3>
                Project Details{" "}
                <a
                  href="https://github.com/d-trecker/cool-notes.git"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-1x "></i>
                </a>
              </h3>
              <h4>
                <a
                  href="http://dt-cool-notes.herokuapp.com/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  http://dt-cool-notes.herokuapp.com
                </a>
              </h4>
              <br />
              <p>Node + Express.js</p>
              <br />
              <p>
                An application used to write and save notes using an Express.js
                back end. Application saves and retrieves notes from a JSON
                file.
                <br /> The front end was styled using Bootstrap.
              </p>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-front">
              <h3>The Pursuit of Hoppiness</h3>
              <img
                src={poh}
                alt="A local brewery weather app"
                className="project-images"
              ></img>
            </div>
            <div className="project-back">
              <h3>
                Project Details{" "}
                <a
                  href="https://github.com/d-trecker/pursuit-of-hoppiness.git"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-1x "></i>
                </a>
              </h3>
              <h4>
                <a
                  href="https://d-trecker.github.io/pursuit-of-hoppiness/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  https://d-trecker.github.io/pursuit-of-hoppiness/
                </a>
              </h4>
              <br />
              <p>
                An application that allows the user to search for any city and
                retrieve the forcasted temerature, for the location as well as a
                list of all Breweries in the area.
              </p>
              <br />
              <p>
                This app was created with HTML, JavaScript, and CSS. The app
                utilizes two APIs to get local weather and breweries data.
              </p>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-front">
              <h3>D-Treck's Scheduler</h3>
              <img
                src={dtScheduler}
                alt="A work day scheduler"
                className="project-images"
              ></img>
            </div>
            <div className="project-back">
              <h3>
                Project Details{" "}
                <a
                  href="https://github.com/d-trecker/dtreck-scheduler.git"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-1x "></i>
                </a>
              </h3>
              <h4>
                <a
                  href="https://d-trecker.github.io/dtreck-scheduler/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  https://d-trecker.github.io/dtreck-scheduler
                </a>
              </h4>
              <br />
              <p>
                A simple calendar application that allows a user to save events
                for each hour of the day.
              </p>
              <br />
              <p>
                The applicaiton utilizes moment.js and features dynamically
                updated HTML and CSS powered by jQuery.
              </p>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-front">
              <h3>Quiz Time</h3>
              <img
                src={quizTime}
                alt="a timed Javascript quiz website"
                className="project-images"
              ></img>
            </div>
            <div className="project-back">
              <h3>
                Project Details{" "}
                <a
                  href="https://github.com/d-trecker/quiz-time.git"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-1x "></i>
                </a>
              </h3>
              <h4>
                <a
                  href="https://d-trecker.github.io/quiz-time/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  https://d-trecker.github.io/quiz-time
                </a>
              </h4>
              <br />
              <p>
                A timed coding quiz with multiple-choice questions. This
                application is dynamically updated HTML and CSS powered by
                JavaScript. Local Storage is used to save users scores.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="project">
          <h3>
            Quiz Time{" "}
            <a
              href="https://github.com/d-trecker/quiz-time.git"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-1x "></i>
            </a>
          </h3>
          <a
            href="https://d-trecker.github.io/quiz-time/"
            target="blank"
            rel="noopener noreferrer"
          >
            <img
              src={quizTime}
              alt="a timed Javascript quiz website"
              className="project-images"
            ></img>
          </a>
        </div> */}

        {/* <img src= {comingSoon} alt="80's retro ram head saying coming soon"
            className="projects"></img> */}
      </section>
    </motion.div>
  );
}

export default Work;
