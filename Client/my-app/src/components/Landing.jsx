import React from "react";

import NavBar from './Navbar.jsx'
import Home from './Home'
import AboutMe from './AboutMe'
import Tech from './Tech'
import Projects from './Projects'
import Cv from './Cv'

const Landing = () => {

    return (
        <div className="landing_container">
            <NavBar />
            <div id='home'>
                <Home/>
            </div>
            <div id='aboutme'>
                <AboutMe/>
            </div>
            <div id='tech'>
                <Tech/>
            </div>
            <div id='projects'>
                <Projects/>
            </div>
            <div id='cv'>
                <Cv/>
            </div>
        </div>
    )
}

export default Landing