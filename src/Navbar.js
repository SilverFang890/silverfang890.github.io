import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [section, setSection] = useState("home");

    if (section == "home") {
        return <Homebar />
    }
}

function Homebar() {
    return (
        <div className="navbar">
            <Leftbar elem={<Contact pos="left"/> } />
            <Midbar elem={<Socials pos="mid"/>} />
            <Rightbar elem={<Sections pos="right"/>} />
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