import React from 'react';



function Nav(props) {
    const {
    
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
                    <a href="#about-me" class="coolbtn" onClick={() => setContactSelected(false)}>About Me</a>
                </li>
                <li>
                    <a href="#my-work" class="coolbtn" onClick={() => setContactSelected(false)}>My Work</a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span class="coolbtn" id = "contact-me" onClick={() => setContactSelected(true)}>Contact Info</span>
                </li>
        
            </ul>
        </nav>
        
    </header>
    );
}

export default Nav;