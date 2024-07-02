import React, { useState, useEffect } from "react";
import myProfile from '../assets/myProfile.png';
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from '../assets/resume.pdf';

const Hero = () => {
    const [typingText, setTypingText] = useState("");
    const [isFullStack, setIsFullStack] = useState(true); // Initial state
    const [index, setIndex] = useState(0);
    const [isAdding, setIsAdding] = useState(true);

    const fullStackText = "Full Stack Developer";
    const mernText = "MERN Developer";

    useEffect(() => {
        const currentText = isFullStack ? fullStackText : mernText;

        const type = () => {
            if (isAdding) {
                if (index < currentText.length) {
                    setTypingText(currentText.substring(0, index + 1));
                    setIndex(index + 1);
                } else {
                    setTimeout(() => setIsAdding(false), 1000); // Pause before deleting
                }
            } else {
                if (index > 0) {
                    setTypingText(currentText.substring(0, index - 1));
                    setIndex(index - 1);
                } else {
                    setIsFullStack(!isFullStack);
                    setIsAdding(true);
                }
            }
        };

        const typingInterval = setInterval(type, 100);

        return () => clearInterval(typingInterval);
    }, [isFullStack, index, isAdding]);

    return (
        <div id="home" className="hero flex items-center flex-col gap-[35px] w-[1200px] m-auto">
            <div className="hero-image">
                <img className="image mt-[50px] h-[300px]" src={myProfile} alt="Profile" />
            </div>
            <h1 className="text-center text-6xl font-semibold text-yellow-400">I'm Vivek Kumar Mishra</h1>
            <h2 className="text-center text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500">
                {typingText}
            </h2>
            <p className="text-center text-4xl">Welcome to my portfolio..</p>
            <div className="hero-action flex items-center mb-[50px] text-[24px] gap-[25px]">
                <div className="hero-connect px-4 py-2 w-[250px] text-center p-1 rounded-full border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black transition-all duration-[0.6s] ease-in-out cursor-pointer">
                    <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
                </div>
                <a href={resume} target="_blank" rel="noopener noreferrer" className="hero-resume border border-white px-4 py-2 rounded-full hover:text-white hover:bg-gray-700 transition-all duration-[0.6s] ease-in-out shadow-md cursor-pointer">View My Resume</a>
            </div>
        </div>
    );
}

export default Hero;
