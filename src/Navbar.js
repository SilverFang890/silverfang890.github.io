import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";

import { Title, Contact, Sections, MenuToggle } from "./components/Bars";


export default function Navbar() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [isHome, setIsHome] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 50
    })
    const background = useTransform(scrollYProgress, [0, 1], ["#3388ff", "#00FF99"])

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || 0;
            setIsHome(scrollY <= window.innerHeight/1.5);
        }
        document.addEventListener("scroll", handleScroll);

        return(() => {
            document.removeEventListener("scroll", handleScroll);
        })
    }, [])

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
                    <AnimatePresence>
                        {isOpen &&
                            <motion.div id="navbar-rightbar"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={{
                                    open: {
                                        clipPath: "circle(115% at calc(97vw - (max(6.4vw, 4vh))/2) -5vh)",
                                        transition: {
                                            type: "spring",
                                            bounce: 0,
                                            duration: 0.8,
                                            delayChildren: 0.3,
                                            staggerChildren: 0.05
                                        }
                                    },
                                    closed: {
                                        clipPath: "circle(6% at calc(97vw - (max(6.4vw, 4vh))/2) -5vh)",
                                        transition: {
                                            type: "spring",
                                            bounce: 0,
                                            duration: 0.6
                                        }
                                    }
                                }}
                            >
                                <Sections 
                                    pos="right" 
                                    isMobile={isMobile}
                                    toggleOpen={toggleOpen}
                                />
                            </motion.div>
                        }
                    </AnimatePresence>
                    <motion.div id="navbar-progress"
                        style={{
                            scaleX,
                            background
                        }}
                    >
                    </motion.div>
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
            <motion.div id="navbar-progress" 
                style={{
                    scaleX,
                    background
                }}
            />
        </nav>
    )
}