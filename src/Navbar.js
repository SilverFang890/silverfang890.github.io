import { useState } from "react";

export default function Navbar() {
    const [section, setSection] = useState("home");

    if (section == "home") {
        return <Homebar />
    }
}

function Homebar() {
    function Contact() {
        return (
            <div className="navbar-contact">
                
            </div>
        )
    }

    return (
        <div className="navbar">
            <Leftbar elem={<Contact />}/>
            <Midbar />
            <Rightbar />
        </div>
    )
}

function Leftbar({ elem }) {
    return (
        <div className="navbar-leftbar">
            {elem}
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