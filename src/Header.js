import React, { useCallback, useState, useEffect } from "react";
import Particles from "react-particles";

import fullSizePart from "./particle_options/body_particles.json";
import smallSizePart from "./particle_options/small_body_particles.json";

import { Socials } from "./components/Bars";
import { loadFull } from "tsparticles";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";

export default function Header() {
    return (
        <Element id="header" className="section" name="header">
            <section id="header-intro">
                <ResponsiveParticle />
                    <header id="header-title">
                    {/* <Parallax speed={ 50 }> */}
                    <Parallax translateY={[200, -250]}>
                        <div id="header-name">Samuel Eun</div>
                        <div id="header-sub">
                            Aspiring Full Stack Software Engineer and Second Year at UC San Diego
                        </div>
                        <Socials />
                    </Parallax>
                    </header>
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