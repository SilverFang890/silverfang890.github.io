import { motion } from "framer-motion";

const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="2.8"
      stroke="#FFF"
      strokeLinecap="round"
      {...props}
    />
);

export default function MenuToggle({ isOpen, setIsOpen }) {
    return (
        <motion.div onClick={() => setIsOpen(!isOpen)} id="dropdown">
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