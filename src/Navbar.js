import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [section, setSection] = useState("home");

    function getCurrentDimension() {
        return {
            width: window.innerWidth
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        }
        window.addEventListener('resize', updateDimension);

        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])


    if (section == "home") {
        if (screenSize.width <= 600) {
            return <Homebar mobile={true} />
        }
        
        return <Homebar />
    }
}

function Homebar({ mobile=false }) {
    if (mobile) {
        return (
            <div className="navbar">
            <Leftbar elem={<Contact pos="left"/> } />
            <Midbar elem={<FontAwesomeIcon id="dropdown" icon={faBars} />} />
            <Rightbar elem={
                <>
                <Socials pos="left" />
                <Sections pos="right" />
                </>
            } />
        </div>
        )
    }
    
    return (
        <div className="navbar">
            <Leftbar elem={<Contact pos="left"/> } />
            <Midbar elem={<Socials pos="mid" />} />
            <Rightbar elem={<Sections pos="right" />} />
        </div>
    )
}

function Leftbar({ elem }) {
    return (
        <div className="navbar-leftbar">
            {elem }
        </div>
    )
}

function Midbar({ elem }) {
    return (
        <div className="navbar-midbar">
            {elem}
        </div>
    )
}

function Rightbar({ elem }) {
    return (
        <div className="navbar-rightbar">
            {elem}
        </div>
    )
}

function Contact({ pos }) {
    return (
        <div className="navbar-contact" id={pos}>
            <div className="contact">samuel9eun@gmail.com</div>
            <div className="contact">Los Angeles • CA</div>
            <div className="contact">San Diego • CA</div>
        </div>
    )
}

function Socials({ pos }) {
    return (
        <div className="navbar-icons" id={pos}>
            <FontAwesomeIcon className="icons" icon={faGithub} />
            <FontAwesomeIcon className="icons" icon={faLinkedin} />
            <FontAwesomeIcon className="icons" icon={faEnvelope} />
        </div>
    )
}

function Sections({ pos }) {
    return (
        <div className="navbar-sections" id={pos}>
            <div className="section">Home</div>
            <div className="section">About Me</div>
            <div className="section">Projects</div>
        </div>
    )
}