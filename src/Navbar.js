import { useState, useEffect } from "react";
import Headroom from "react-headroom";
import { motion, AnimatePresence } from "framer-motion";

import { Title, Contact, Socials, Sections } from "./navbar_components/Bars";
import MenuToggle from "./navbar_components/MenuToggle";


export default function Navbar() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [isHome, setIsHome] = useState(true);
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

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || 0;
            setIsHome(scrollY <= window.innerHeight/7.5);
        }
        document.addEventListener("scroll", handleScroll);

        return(() => {
            document.removeEventListener("scroll", handleScroll);
        })
    }, [])

    const mobile = screenSize.width <= 600;

    if (mobile) {
        return (
            <motion.nav className="navbar" 
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                >
                    <AnimatePresence>
                        {isHome &&
                            <motion.div id="navbar-leftbar"
                                initial={{ 
                                    opacity: 0 
                                }}
                                animate={{ 
                                    opacity: 1 
                                }}
                                exit={{ 
                                    transition: {
                                        duration: 0
                                    }
                                }}
                            >
                                <Contact pos="left" />
                            </motion.div>
                        }
                    </AnimatePresence>
                    <AnimatePresence>
                        {!isHome &&
                            <motion.div id="navbar-leftbar"
                                initial={{ 
                                    opacity: 0 
                                }}
                                animate={{ 
                                    opacity: 1 
                                }}
                                exit={{ 
                                    transition: {
                                        duration: 0
                                    }
                                }}
                            >
                                <Title pos="left" />
                            </motion.div>
                        }
                    </AnimatePresence>
                    <div id="navbar-midbar">
                        <Socials pos="left" />
                        <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                    <div id="navbar-rightbar">
                        <Sections pos="right" mobile={mobile} isOpen={isOpen} />
                    </div>
                </motion.nav>
        )
    }

    return (
        <nav className="navbar">
            <div id="navbar-leftbar">
                <Contact pos="left" />
            </div>
            <div id="navbar-midbar">
                <Socials pos="mid" />
            </div>
            <div id="navbar-rightbar">
                <Sections pos="right" />
            </div>
        </nav>
    )
}