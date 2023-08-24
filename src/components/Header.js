import React, { useCallback, useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import fullSizePart from "../particle_options/body_particles.json";
import smallSizePart from "../particle_options/small_body_particles.json";


export default function Header() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 35%", "end start"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, -400]);

    return (
        <section id="home-header" className="down">
            <ResponsiveParticle />
            <motion.header className="header-title" ref={ref}
                style={{
                    translateX: useSpring(x, {stiffness: 800, damping: 50})
                }}
            >
                <HeaderTitleContent />
            </motion.header>
        </section>
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

    if (screenSize.width <= 625) {
        return <Particles id="header-particles" init={particlesInit} options={smallSizePart}/>
    } else {
        return <Particles id="header-particles" init={particlesInit} options={fullSizePart}/>
    }
}

function HeaderTitleContent() {
    return (
        <>
            <div className="header-name">Samuel Eun</div>
            <div className="header-sub">
                Aspiring Full Stack Software Engineer and
                Second Year at UC San Diego
            </div>
            <Socials />
        </>
    )
}

function Socials() {
    return (
        <motion.div className="socials">
            <a className="icon-border" href="https://github.com/SilverFang890" target="_blank">
                <FontAwesomeIcon className="icons" icon={faGithub} />
            </a>
            <a className="icon-border" href="https://www.linkedin.com/in/samsilver890/" target="_blank">
                <FontAwesomeIcon className="icons" icon={faLinkedin} />
            </a>
            <a className="icon-border">
                <FontAwesomeIcon className="icons" icon={faEnvelope} />
            </a>
        </motion.div>
    )
}