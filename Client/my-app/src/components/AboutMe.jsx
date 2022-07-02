import React from "react";

import { SiJavascript, SiRedux, SiPostgresql, SiSequelize } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { GrReactjs } from 'react-icons/gr'
import { FaSass, FaNodeJs, FaNode } from 'react-icons/fa'

const AboutMe = () =>{
    return(
        <div className="aboutme_container">
            <h1>Sobre mi</h1>
            <div className="abotme_row">
                <div className="aboutme_imgTxt">
                    <img src={"data:image/png;base64,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"} alr="img"/> 
                    <p>Soy Mateo Monsalve de Colombia. <br></br>
                    Full Stack Developer con preferencias por el Front End. Con gran pasión por la creación de experiencia de usuario intuitiva y dinamica, con deseos de aprender nuevas tecnologias y perfeccionar lo aprendido.</p>
                </div>
                <div className="aboutme_tecnologies">
                    <h3>Tecnologias</h3>
                    <div className="aboutme_Front">
                        <div className="aboutme_cards">
                            <SiJavascript size={40} style={{ color: "rgb(209, 209, 209)" }} />
                            <p>Javascript</p>
                        </div>
                        <div className="aboutme_cards">
                            <AiFillHtml5 size={40} style={{ color: "rgb(209, 209, 209)" }} />
                            <p>HTML</p>
                        </div>
                        <div className="aboutme_cards">
                            <DiCss3 size={40} style={{ color: "rgb(209, 209, 209)" }} />
                            <p>CSS</p>
                        </div>
                        <div className="aboutme_cards">
                            <GrReactjs size={40} style={{ color: "rgb(209, 209, 209)" }} />
                            <p>React</p>
                        </div>
                        <div className="aboutme_cards">
                            <SiRedux size={40} style={{ color: "rgb(209, 209, 209)" }} />
                            <p>Redux</p>
                        </div>
                        <div className="aboutme_cards">
                            <FaSass size={40} style={{ color: "rgb(209, 209, 209)" }} />
                            <p>SASS</p>
                        </div>
                    </div>
                    <div className="aboutme_Front">
                        <div className="aboutme_cards">
                            <FaNodeJs size={40} style={{ color: "rgb(209, 209, 209)" }} />
                            <p>NodeJS</p>
                        </div>
                        <div className="aboutme_cards">
                            <FaNode size={40} style={{ color: "rgb(209, 209, 209)" }} />
                            <p>Express</p>
                        </div>
                        <div className="aboutme_cards">
                            <SiPostgresql size={40} style={{ color: "rgb(209, 209, 209)" }} />
                            <p>PostgreSQL</p>
                        </div>
                        <div className="aboutme_cards">
                            <SiSequelize size={40} style={{ color: "rgb(209, 209, 209)" }} />
                            <p>Sequelize</p>
                        </div>
                        <div className="aboutme_cards">
                            <FaNodeJs size={40} style={{ color: "rgb(209, 209, 209)" }} />
                            <p>NodeJS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>hola</div>
        </div>
    )
}

export default AboutMe