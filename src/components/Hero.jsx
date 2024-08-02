import React from "react";
import myProfile from '../assets/myProfile.png';
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from '../assets/My Resume.pdf';
import TypingEffect from 'react-typing-effect';

const Hero = () => {
    return (
        <div id="home" className="hero flex items-center flex-col gap-[35px] w-[1200px] m-auto mt-12">
            <div className="hero-image">
                <img className="image mt-[50px] h-[300px]" src={myProfile} alt="Profile" />
            </div>
            <h1 className="text-center text-6xl font-semibold text-yellow-400">I'm Vivek Kumar Mishra</h1>
            <h2 className="text-center text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500">
                <TypingEffect
                    text={["Frontend Developer", "Backend Developer", "Full Stack Developer"]}
                    speed={100}
                    eraseSpeed={50}
                    typingDelay={500}
                    eraseDelay={1500}
                    cursorRenderer={cursor => <h2>{cursor}</h2>}
                    displayTextRenderer={(text, i) => {
                        return (
                            <h2>
                                {text.split('').map((char, i) => {
                                    const key = `${i}`;
                                    return (
                                        <span key={key}>{char}</span>
                                    );
                                })}
                            </h2>
                        );
                    }} 
                />
            </h2>
            <p className="text-center text-4xl">Welcome to my portfolio</p>
            <div className="h-2 w-40 bg-pink-500 rounded-full "></div>
            <div className="hero-action flex items-center mb-[50px] text-[24px] gap-[25px]">
                <div className="hero-connect px-4 py-2 w-[250px] text-center p-1 rounded-full border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black transition-all duration-[0.6s] ease-in-out cursor-pointer">
                    <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
                </div>
                <a href={resume} download target="_blank" rel="noopener noreferrer" className="hero-resume border border-white px-4 py-2 rounded-full hover:text-white hover:bg-gray-700 transition-all duration-[0.6s] ease-in-out shadow-md cursor-pointer">View My Resume</a>
            </div>
        </div>
    );
}

export default Hero;
