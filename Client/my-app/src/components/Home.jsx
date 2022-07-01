import React from "react";
import minimalistDev from './assets/images/minimalistDev.png'

const Home = () => {
    return(
        <div className="home_container">
            <div className="home_welcome">
                {/* <h1>Hola</h1> */}
                <div>
                    <h1>Hola, soy</h1><h2>Mateo Monsalve</h2>
                </div>
                <h1>Full Stack Developer</h1>
                <button className="home_btn">Conocer mas</button>
            </div>
            <img className="home_img" src={minimalistDev} alt="img"/>
        </div>
    )
}

export default Home