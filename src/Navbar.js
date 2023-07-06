import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import MenuToggle from "./MenuToggle";

const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

export default function Navbar() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [section, setSection] = useState("home");
    const [isOpen, setIsOpen] = useState(false);

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
        return <Homebar 
                    mobile={screenSize.width <= 600} 
                    isOpen={isOpen} 
                    setIsOpen={setIsOpen} 
                />
    }
}

function Homebar({ mobile, isOpen, setIsOpen }) {
    if (mobile) {
        return (
            <motion.div className="navbar" 
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                <Leftbar elem={<Contact pos="left"/> } />
                <Midbar elem={
                    <>
                    <Socials pos="left" />
                    <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
                    </>
                } />
                <Rightbar elem={
                    <Sections pos="right" mobile={mobile} isOpen={isOpen} />
                } />
            </motion.div>
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
        <div id="navbar-leftbar">
            {elem }
        </div>
    )
}

function Midbar({ elem,  }) {
    return (
        <div id="navbar-midbar">
            {elem}
        </div>
    )
}

function Rightbar({ elem }) {
    return (
        <motion.div id="navbar-rightbar">
            {elem}
        </motion.div>
    )
}

function Contact({ pos }) {
    return (
        <div id="navbar-contact" className={pos}>
            <div className="contact">samuel9eun@gmail.com</div>
            <div className="contact">Los Angeles • CA</div>
            <div className="contact">San Diego • CA</div>
        </div>
    )
}

function Socials({ pos }) {
    return (
        <motion.div id="navbar-icons" className={pos}>
            <div className="icon-border">
                <FontAwesomeIcon className="icons" icon={faGithub} />
            </div>
            <div className="icon-border">
                <FontAwesomeIcon className="icons" icon={faLinkedin} />
            </div>
            <div className="icon-border">
                <FontAwesomeIcon className="icons" icon={faEnvelope} />
            </div>
        </motion.div>
    )
}

function Sections({ pos, mobile, isOpen }) {
    if (mobile) {
        return (
            <motion.div id="navbar-sections"
                variants={{
                    open: {
                    clipPath: "inset(0% 0% 0% 0% round 0px 0px 10px 10px)",
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.6,
                        delayChildren: 0.2,
                        staggerChildren: 0.05
                    }
                    },
                    closed: {
                    clipPath: "inset(0% 0% 100% 0% round 0px 0px 10px 10px)",
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3
                    }
                    }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                <motion.div className="section" variants={itemVariants}>
                    Home
                </motion.div>
                <motion.div className="section" variants={itemVariants}>
                    About Me
                </motion.div>
                <motion.div className="section" variants={itemVariants}>
                    Projects
                </motion.div>
            </motion.div>
        )
    }

    return (
        <div id="navbar-sections" className={pos}>
            <div className="section">Home</div>
            <div className="section">About Me</div>
            <div className="section">Projects</div>
        </div>
    )
}