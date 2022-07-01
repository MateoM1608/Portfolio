import React, {useState, useEffect} from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {

    const [ isScrolled, setIsScrolled ] = useState(false)

    const navScroll = () => {
        if(window.scrollY >= 100){
            setIsScrolled(true)
        }else{
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", navScroll)

        return () => {
            window.removeEventListener("scroll", navScroll)
        }
    })

    return (
        <div className={!isScrolled ? "navbar_container" : "nav_container_scroll"}>
            <nav>
            <p>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={0}
                >
                Home
                </Link>
            </p>
            <p>
                <Link
                    activeClass="active"
                    to="aboutme"
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={5}
                >
                Sobre mi
                </Link>
            </p>
            <p>
                <Link
                    activeClass="active"
                    to="tech"
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={5}
                >
                Tecnologias
                </Link>
            </p>
            <p>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={5}
                >
                Portafolio
                </Link>
            </p>
            <p>
                <Link
                    activeClass="active"
                    to="cv"
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={5}
                >
                CV
                </Link>
            </p>
            </nav>
        </div>
    )
}

export default NavBar