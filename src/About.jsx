import React from "react";
import aboutImg from "../src/Images/about.jpg";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common h1="Welcome to About page" btn="Contact Now" image={aboutImg} />
        </>
    );
}

export default About;