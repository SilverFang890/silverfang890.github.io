import Navbar from "./Navbar";
import Header from "./Header";
import About_me from "./About_me";
import { ParallaxProvider } from "react-scroll-parallax";

function Portfolio() {
    return (
        <ParallaxProvider>
            <Navbar />
            <Header />
            <About_me />
        </ParallaxProvider>
    )
}

export default Portfolio;
