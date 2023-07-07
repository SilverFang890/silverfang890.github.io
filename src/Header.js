import React, { useCallback, useState, useEffect } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import fullSizePart from "./body_particles.json";
import smallSizePart from "./small_body_particles.json";
import { Element } from "react-scroll";

export default function Header() {
    return (
        <Element id="header" name="header">
            <ResponsiveParticle />
            <header className="header-title">
                <div className="name">Samuel Eun</div>
                <div className="desc">Aspiring Full Stack Software Engineer and Second Year at UC San Diego</div>
            </header>
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