import React from "react";
import homeImg from "../src/Images/home.jpg";
import Common from "./Common";
const Home = () => {
    return (
        <>
            <Common h1="Grow your business with" btn="Get Started" image={homeImg} />
        </>
    );
}

export default Home;