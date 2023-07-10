import { motion } from "framer-motion";

import { Leftbar, Midbar, Rightbar, Name, Socials, Sections } from "./Bars";
import MenuToggle from "./MenuToggle";

export default function Bodybar({ mobile, isOpen, setIsOpen }) {
    if (mobile) {
        return (
            <motion.nav className="navbar" 
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                <Leftbar elem={<Name pos="left" mobile={mobile} /> } />
                <Midbar elem={
                    <>
                    <Socials pos="left" />
                    <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
                    </>
                } />
                <Rightbar elem={
                    <Sections pos="right" mobile={mobile} isOpen={isOpen} />
                } />
            </motion.nav>
        )
    }
    
    return (
        <nav className="navbar">
            <Leftbar elem={<Name pos="left"/> } />
            <Midbar elem={<Socials pos="mid" />} />
            <Rightbar elem={<Sections pos="right" />} />
        </nav>
    )
}