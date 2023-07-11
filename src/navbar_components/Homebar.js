import { motion, AnimatePresence, delay } from "framer-motion";

import { Leftbar, Midbar, Rightbar, Title, Contact, Socials, Sections } from "./Bars";
import MenuToggle from "./MenuToggle";

export default function Homebar({ mobile, isOpen, setIsOpen, isHome }) {
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
            <Leftbar elem={<Contact pos="left"/> } />
            <Midbar elem={<Socials pos="mid" />} />
            <Rightbar elem={<Sections pos="right" />} />
        </nav>
    )
}