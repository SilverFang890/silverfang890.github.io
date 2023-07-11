import { motion } from "framer-motion";
import Scroll from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ScrollLink = Scroll.Link;

export function Title({ pos, mobile }) {
    if (mobile) {
        return (
            <div id="navbar-title" className={pos}>
            <div id="navbar-name">Samuel Eun</div>
            <div id="navbar-sub">Data Science / Design and Interaction @ UCSD</div>
            <div id="navbar-title-spacing">ThisIsALongInvisibleWord</div>
        </div>
        )
    }

    return (
        <div id="navbar-title" className={pos}>
            <div id="navbar-name">Samuel Eun</div>
            <div id="navbar-sub">Data Science / Design and Interaction @ UCSD</div>
            <div id="navbar-title-spacing">ThisIsALongInvisibleWord</div>
        </div>
    )
}



export function Contact({ pos }) {
    return (
        <div id="navbar-contact" className={pos}>
            <div className="contact">samuel9eun@gmail.com</div>
            <div className="contact">Los Angeles • CA</div>
            <div className="contact">San Diego • CA</div>
        </div>
    )
}

export function Socials({ pos }) {
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

const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export function Sections({ pos, mobile, isOpen }) {
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
                <motion.div className="nav-section" variants={itemVariants}>
                    <ScrollLink activeClass="active" smooth spy to="header">
                        Home
                    </ScrollLink>
                </motion.div>
                <motion.div className="nav-section" variants={itemVariants}>
                    <ScrollLink activeClass="active" smooth spy to="about-me">
                        About Me
                    </ScrollLink>
                </motion.div>
                <motion.div className="nav-section" variants={itemVariants}>
                    Projects
                </motion.div>
            </motion.div>
        )
    }

    return (
        <div id="navbar-sections" className={pos}>
            <div className="nav-section">Home</div>
            <div className="nav-section">About Me</div>
            <div className="nav-section">Projects</div>
        </div>
    )
}