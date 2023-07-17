import { useState, useEffect } from "react";
import Headroom from "react-headroom";
import { motion, AnimatePresence } from "framer-motion";

import { Title, Contact, Sections } from "./components/Bars";
import MenuToggle from "./components/MenuToggle";


export default function Navbar() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [isHome, setIsHome] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

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
            setIsHome(scrollY <= window.innerHeight/4);
        }
        document.addEventListener("scroll", handleScroll);

        return(() => {
            document.removeEventListener("scroll", handleScroll);
        })
    }, [])

    const isMobile = screenSize.width <= 600;

    if (isMobile) {
        return (
            <motion.nav className="navbar" 
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                >
                    <AnimatePresence>
                        {isHome &&
                            <motion.div id="navbar-leftbar"
                                initial={{ 
                                    opacity: 0,
                                    y: -50
                                }}
                                animate={{ 
                                    opacity: 1,
                                    y: "-50%"
                                }}
                                transition={{
                                    duration: 0.25
                                }}
                                exit={{ 
                                    transition: {
                                        duration: 0.1
                                    },
                                    opacity: 0,
                                    y: -50
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
                                    opacity: 0,
                                    y: "-25%",
                                    x: 10
                                }}
                                animate={{ 
                                    opacity: 1,
                                    y: "-50%",
                                    x: 0
                                }}
                                transition={{
                                    duration: 0.25
                                }}
                                exit={{ 
                                    transition: {
                                        duration: 0.1
                                    },
                                    opacity: 0,
                                    y: "-25%",
                                    x: 10
                                }}
                            >
                                <Title pos="left" />
                            </motion.div>
                        }
                    </AnimatePresence>
                    <div id="navbar-midbar">
                        <MenuToggle toggleOpen={toggleOpen} />
                    </div>
                    <div id="navbar-rightbar">
                        <Sections pos="right" isMobile={isMobile} isOpen={isOpen} toggleOpen={toggleOpen}/>
                    </div>
                </motion.nav>
        )
    }

    return (
        <nav className="navbar">
            <AnimatePresence>
                {isHome &&
                    <motion.div id="navbar-leftbar"
                        initial={{ 
                            opacity: 0,
                            y: -50
                        }}
                        animate={{ 
                            opacity: 1,
                            y: "-50%"
                        }}
                        transition={{
                            duration: 0.25
                        }}
                        exit={{ 
                            transition: {
                                duration: 0.1
                            },
                            opacity: 0,
                            y: -50
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
                            opacity: 0,
                            y: "-25%",
                            x: 10
                        }}
                        animate={{ 
                            opacity: 1,
                            y: "-50%",
                            x: 0
                        }}
                        transition={{
                            duration: 0.25
                        }}
                        exit={{ 
                            transition: {
                                duration: 0.1
                            },
                            opacity: 0,
                            y: "-25%",
                            x: 10
                        }}
                    >
                        <Title pos="left" />
                    </motion.div>
                }
            </AnimatePresence>
            <div id="navbar-midbar" />
            <div id="navbar-rightbar">
                <Sections pos="right" />
            </div>
        </nav>
    )
}