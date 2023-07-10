import React, { useCallback, useState } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./construction_particles.json";
import Portfolio from '../Portfolio';

function App() {
    const [demo, setDemo] = useState(false);

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    if (demo === false) {
        return (
            <div className="App">
                <Particles options={particlesOptions} init={particlesInit}/>
                <header className="App-header">
                    <div className='name'>Samuel Eun</div>
                    <div className='desc'>Portfolio Under Construction (Summer 23)</div>
                    <div className='redirect'
                        >Meanwhile, please visit my high school 
                        portfolio <a className='link' href='https://samuelsilver.me/highschool-portfolio'>here</a>
                    </div>
                    <div className='redirect'
                        >Or, see my progress <a className='link' onClick={() => setDemo(true)}>here</a>
                    </div>
                </header>
            </div>
        )
    } else {
        return <Portfolio />
    }
}

export default App;
