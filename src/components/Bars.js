import { motion, AnimatePresence } from "framer-motion";
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
            <div className="contact">
                <a href="https://instagram.com/samm_silver" target="_blank">
                    @samm_silver
                </a>
            </div>
        </div>
    )
}

const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 25, transition: { duration: 0.2 } }
};

export function Sections({ pos, isMobile, toggleOpen }) {
    if (isMobile) {
        return (
            <motion.div id="navbar-sections">
                <div id="nav-section-content">
                    <motion.div className="nav-section" 
                        variants={itemVariants}
                    >
                        <ScrollLink 
                            activeClass="activeH" 
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
                            activeClass="activeA" 
                            smooth spy to="about-me" 
                            onClick={toggleOpen}
                        >
                            About Me
                        </ScrollLink>
                    </motion.div>
                    <motion.div 
                        className="nav-section" 
                        variants={itemVariants}
                    >
                        <ScrollLink
                            activeClass="activeP"
                            smooth spy to="projects"
                            onClick={toggleOpen}
                        >
                            Projects
                        </ScrollLink>
                    </motion.div>
                </div>
            </motion.div>
        )
    }

    return (
        <div id="navbar-sections" className={pos}>
            <ScrollLink className="nav-section"
                activeClass="activeH" 
                smooth spy to="home"
            >
                Home
            </ScrollLink>
            <ScrollLink className="nav-section"
                activeClass="activeA" 
                smooth spy to="about-me"
            >
                About Me
            </ScrollLink><ScrollLink className="nav-section"
                activeClass="activeP" 
                smooth spy to="projects"
            >
                Projects
            </ScrollLink>
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