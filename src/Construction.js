import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <header className="App-header">
                <div className='name'>Samuel Eun</div>
                <div className='desc'>Portfolio Under Construction (Summer 23)</div>
                <div className='redirect'
                    >Meanwhile, please visit my high school 
                    portfolio <a className='link' href='https://samuelsilver.me'>here</a>
                </div>
            </header>
        </div>
    );
}

export default App;
