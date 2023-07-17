import { motion } from "framer-motion";
import Scroll from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ScrollLink = Scroll.Link;

export function Title({ pos }) {
    return (
        <div id="navbar-title" className={pos}>
            <div id="navbar-name">Samuel Eun</div>
            <div id="navbar-sub">Data Science / Design and Interaction @ UCSD</div>
        </div>
    )
}

export function Contact({ pos }) {
    return (
        <div id="navbar-contact" className={pos}>
            <div className="contact">Los Angeles • CA</div>
            <div className="contact">San Diego • CA</div>
            <div className="contact">@samm_silver</div>
        </div>
    )
}

const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export function Sections({ pos, isMobile, isOpen, toggleOpen }) {
    if (isMobile) {
        return (
            <motion.div id="navbar-sections"
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 0px 0px 10px 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 1,
                            delayChildren: 0.2,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(0% 0% 100% 0% round 0px 0px 10px 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.5
                        }
                    }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                <motion.div className="nav-section" 
                    variants={itemVariants}

                >
                    <ScrollLink 
                        activeClass="active" 
                        smooth spy to="header" 
                        onClick={toggleOpen}
                    >
                        Home
                    </ScrollLink>
                </motion.div>
                <motion.div className="nav-section" 
                    variants={itemVariants}
                >
                    <ScrollLink 
                        activeClass="active" 
                        smooth spy to="about-me" 
                        onClick={toggleOpen}
                    >
                        About Me
                    </ScrollLink>
                </motion.div>
                <motion.div 
                    className="nav-section" 
                    variants={itemVariants}
                    onClick={toggleOpen}
                >
                    Projects
                </motion.div>
            </motion.div>
        )
    }

    return (
        <div id="navbar-sections" className={pos}>
            <ScrollLink activeClass="active" smooth spy to="header">
                <div className="nav-section">Home</div>
            </ScrollLink>
            <ScrollLink activeClass="active" smooth spy to="about-me">
                <div className="nav-section">About Me</div>
            </ScrollLink>
            <div className="nav-section">Projects</div>
        </div>
    )
}

export function Socials() {
    return (
        <motion.div className="socials">
            <a className="icon-border" href="https://github.com/SilverFang890" target="_blank">
                <FontAwesomeIcon className="icons" icon={faGithub} />
            </a>
            <a className="icon-border" href="https://www.linkedin.com/in/samsilver890/" target="_blank">
                <FontAwesomeIcon className="icons" icon={faLinkedin} />
            </a>
            <a className="icon-border">
                <FontAwesomeIcon className="icons" icon={faEnvelope} />
            </a>
        </motion.div>
    )
}