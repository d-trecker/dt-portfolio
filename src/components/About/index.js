import React from 'react';
import meImage from "../../assets/images/me.png";
function About() {
    return (
        <div className="bio">

                <img src={meImage}  alt="me"></img>
        <div className = "bits">
            <h2>A Little Bit About Me...</h2>
            <p>A whole bunch of stuff about me, much wow. A whole bunch of stuff about me, much wow. A whole bunch of
                stuff about me, much wow. A whole bunch of stuff about me, much wow. A whole bunch of stuff about me,
                much wow. A whole bunch of stuff about me, much wow. A whole bunch of stuff about me, much wow. A whole
                bunch of stuff about me, much wow. A whole bunch of stuff about me, much wow. A whole bunch of stuff
                about me, much wow. A whole bunch of stuff about me, much wow. A whole bunch of stuff about me, much
                wow. A whole bunch of stuff about me, much wow. A whole bunch of stuff about me, much wow. A whole bunch
                of stuff about me, much wow.

                </p>
        </div>

        </div>
    );
}

export default About;