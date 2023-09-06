import React, { useRef } from "react";
import { Element } from "react-scroll";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import Header from "./components/Header";

export default function Home() {
    return (
        <Element id="home" className="section" name="home">
            <div id="home-container">
                <Story />
                <Header />
                <section id="home-transition" className="down">
                    <div id="transition-statement">
                        Welcome to my <br /> Technical Analysis and Creative Overview
                    </div>
                </section>
            </div>
        </Element>
    )
}

function Story() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end 50vh", "end 42.5vh"]
    });
    const x1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

    return (
        <section id="home-story" className="down" ref={ref}>
            <motion.div 
                style={{
                    translateX: useSpring(x1, {stiffness: 800, damping: 50})
                }}
            >
                <Story1 />
            </motion.div>
            <motion.div
                style={{
                    translateX: useSpring(x2, {stiffness: 800, damping: 50})
                }}
            >
                <Story2 />
            </motion.div>
            <motion.div
                style={{
                    translateX: useSpring(x1, {stiffness: 800, damping: 50})
                }}
            >
                <Story3 />
            </motion.div>
        </section>
    )
}

function Transition() {

}

function Story1() {
    return (
        <span id="story-1" className="story-paragraph">
            It is a warm summer night in Los Angeles. On the sidewalk – a lone 
            taco stand, lit gently by the streetlights. Hungry customers – 
            coming from bars, clubs, and families out for dinner – gathering 
            around. They watch as the homemade corn tortillas are hand-pressed 
            and the pastor flies off the skewer grill. This streamlined design 
            effortlessly delivers the tacos into their hands.
        </span>
    )
}

const words = {
    anim: {
        transition: {
            delayChildren: 16,
            staggerChildren: 0.42
        }
    }
}

const itemWords = {
    anim: {
        y: ["0vh", "0.5vh", "0vh", "0vh"],
        scale: [1, 1.1, 1, 1],
        rotate: [0, -10, 5, 0]
    }
}

function Word({ word }) {
    return(
        <span> <motion.span
                style={{
                    display: "inline-block"
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 4
                }}
                variants={itemWords}
            > {word} </motion.span> </span>
    )
}

function Story2() {
    return (
        <span id="story-2" className="story-paragraph">
                Making sense of the world is our very nature. People are most 
                confident in what they understand. This is why I strive to use
                the data around us to 
                make connections that 
                <motion.span
                    animate="anim"
                    variants={words}
                > 
                    <Word word={" just "} />
                    <Word word={" make "} />
                    <Word word={" sense."} />
                </motion.span>
        </span>
    )
}

function Story3() {
    return (
        <span id="story-3" className="story-paragraph">
            Using the intersection of data science and design, I aim to create 
            solutions that not only provide valuable insight but allow your 
            customers to appreciate the product itself.
        </span>
    )
}