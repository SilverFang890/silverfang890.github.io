import { Element } from "react-scroll";
import { motion } from "framer-motion";

import Header from "./components/Header";

export default function Home() {
    return (
        <Element id="home" className="section" name="home">
            <div id="home-container">
                <Story />
                <Header />
            </div>
        </Element>
    )
}

function Story() {
    return (
        <section id="story">
            <Story1 />
            <Story2 />
            <Story3 />
        </section>
    )
}

function Story1() {
    return (
        <span id="story-1">
            It was a warm night in Los Angeles, where the air is marinated 
            with the smell of street food. The sidewalk – painted with dots 
            of crowds of hungry customers. Patreons – chatting about their 
            night or taking a break between clubs and bars. Behind the stand, 
            you meet the tortilla pressor, who presses your shells and guides 
            you to the taco filler, who then loads your tacos and finally 
            passes you to the cashier. This streamlined design makes it easy 
            to focus on enjoying the food itself.
        </span>
    )
}

const words = {
    anim: {
        transition: {
            delayChildren: 1,
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
        <span id="story-2">
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
        <span id="story-3">
            Using the intersection of data science and design, I aim to create 
            solutions that not only provide valuable insight but allow your 
            customers to enjoy the product itself.
        </span>
    )
}