import React, { useCallback, useState, useEffect, useRef } from "react";
import Particles from "react-particles";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import fullSizePart from "./particle_options/body_particles.json";
import smallSizePart from "./particle_options/small_body_particles.json";

import { Socials } from "./components/Bars";
import { loadFull } from "tsparticles";
import { Element } from "react-scroll";

export default function Header() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 35%", "end start"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, -400]);

    return (
        <Element id="header" className="section" name="header">
            <section id="header-intro">
                <ResponsiveParticle />
                    <motion.header id="header-title" ref={ref}
                        style={{
                            translateX: useSpring(x, {stiffness: 800, damping: 50})
                        }}
                    >
                            <div id="header-name">Samuel Eun</div>
                            <div id="header-sub">
                                Aspiring Full Stack Software Engineer and
                                Second Year at UC San Diego
                            </div>
                            <Socials />
                    </motion.header>
            </section>
            <section id="header-article">
                <div id="header-caption">

                </div>
            </section>
        </Element>
    )
}

function ResponsiveParticle() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

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

    if (screenSize.width <= 850) {
        return <Particles id="header-particles" init={particlesInit} options={smallSizePart}/>
    } else {
        return <Particles id="header-particles" init={particlesInit} options={fullSizePart}/>
    }
}