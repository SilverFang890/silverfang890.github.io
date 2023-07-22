import { Element } from "react-scroll";

import Header from "./components/Header";

export default function Home() {
    return (
        <Element id="home" className="section" name="home">
            <Story />
            <Header />
        </Element>
    )
}

function Story() {
    return (
        <section className="story">
            <Story1 />
            <Story2 />
            <Story3 />
        </section>
    )
}

function Story1() {
    return (
        <div id="story-1">
            It was a warm night in Los Angeles, where the air is marinated 
            with the smell of street food. The sidewalk – painted with dots 
            of crowds of hungry customers. Patreons – chatting about their 
            night or taking a break between clubs and bars. Behind the stand, 
            you meet the tortilla pressor, who presses your shells and guides 
            you to the taco filler, who then loads your tacos and finally 
            passes you to the cashier. This streamlined design makes it easy 
            to focus on enjoying the food itself. 
        </div>
    )
}

function Story2() {
    return (
        <div id="story-2">
                Making sense of the world is our very nature. People are most 
                confident in what they understand. This is why I strive to use the data around us to 
                make connections that just make sense.
        </div>
    )
}

function Story3() {
    return (
        <div id="story-3">
            Using the intersection of data science and design, I aim to create 
            solutions that not only provide valuable insight but allow your 
            customers to enjoy the product itself.
        </div>
    )
}