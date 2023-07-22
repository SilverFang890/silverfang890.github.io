import { motion } from "framer-motion";
import Scroll from "react-scroll";

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
                        // clipPath: "inset(0% 0% 0% 0% round 0px 0px 10px 10px)",
                        clipPath: "circle(121% at calc(97vw - (max(6.4vw, 4vh))/2) -5vh)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.8,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        // clipPath: "inset(0% 0% 100% 0% round 0px 0px 10px 10px)",
                        clipPath: "circle(6% at calc(97vw - (max(6.4vw, 4vh))/2) -5vh)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.6
                        }
                    }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                <div id="nav-section-content">
                    <motion.div className="nav-section" 
                        variants={itemVariants}

                    >
                        <ScrollLink 
                            activeClass="active" 
                            smooth spy to="home"
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
                </div>
            </motion.div>
        )
    }

    return (
        <div id="navbar-sections" className={pos}>
            <ScrollLink activeClass="active" smooth spy to="home">
                <div className="nav-section">Home</div>
            </ScrollLink>
            <ScrollLink activeClass="active" smooth spy to="about-me">
                <div className="nav-section">About Me</div>
            </ScrollLink>
            <div className="nav-section">Projects</div>
        </div>
    )
}

const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="2.8"
      stroke="var(--color)"
      strokeLinecap="round"
      {...props}
    />
);

export function MenuToggle({ toggleOpen }) {
    return (
        <motion.div onClick={toggleOpen} id="dropdown">
            <svg width="max(6.4vw, 4vh)" viewBox="0 0 21 18">
                <Path
                    variants={{
                        closed: { d: "M 2 1.75 L 19 1.75" },
                        open: { d: "M 3 16.25 L 18 1.75" }
                    }}
                />
                <Path
                    variants={{
                        closed: {
                            opacity: 1,
                            d: "M 2 9 L 19 9"
                        },
                        open: { 
                            opacity: 0,
                            d: "M 4 9 L 19 9"
                        }
                    }}
                    transition={{ duration: 0.11 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.25 L 19 16.25" },
                        open: { d: "M 3 1.75 L 18 16.25" }
                    }}
                />
            </svg>
        </motion.div>
    )    
}