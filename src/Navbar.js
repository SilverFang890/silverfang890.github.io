import { useState, useEffect } from "react";
import Homebar from "./navbar_components/Homebar";
import Bodybar from "./navbar_components/Bodybar";


export default function Navbar() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [isHome, setIsHome] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

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


    if (isHome) {
        return  <Homebar 
                    mobile={screenSize.width <= 600} 
                    isOpen={isOpen} 
                    setIsOpen={setIsOpen} 
                />
    } 

    return (
        <Bodybar
            mobile={screenSize.width <= 600}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    )
}