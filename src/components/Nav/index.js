import React from 'react';

function Nav(props) {
    const {
        categories = [],
        contactSelected,
        setContactSelected
      } = props;
    return (
        <header>
        <h1>
            <a href="/">Dylan Trecker's Portfolio</a>
        </h1>
        <nav>
            <ul>
                <li>
                    <a href="#about-me" class="coolbtn">About Me</a>
                </li>
                <li>
                    <a href="#my-work" class="coolbtn">My Work</a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <a href="#contact-info" class="coolbtn" id = "contact-me">Contact Info</a>
                    <span onClick={() => setContactSelected(true)}></span>
                </li>
            </ul>
        </nav>
        
    </header>
    );
}

export default Nav;