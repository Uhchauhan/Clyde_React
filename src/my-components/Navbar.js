
import React, {useState , useEffect} from "react"

import { FaBars , FaTimes } from 'react-icons/fa';

import "./Navbar.css";



const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);

    const [scrolled, setscrolled] = useState(false);



    const  toggleMenu = () => {

        setisOpen(!isOpen);
    };


    const handleScroll = () => {

        if(window.scrollY > 50) {
            setscrolled(true);
        }
        else
        {
            setscrolled(false);
        }
    };

    useEffect(()=> {

        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener("scroll",handleScroll);
        }
    }, []);
    


    return(

        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

            <div className="navbar-logo">CLYDE.</div>

            <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Skills">Skills</a>
                <a href="#Service">Service</a>
                <a href="#Project">Project</a>
                <a href="#Contact" className="contact-link" >Contact</a>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

        </nav>

    );

};

export default Navbar;

