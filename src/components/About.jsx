import React from "react";
import theme_pattern from '../assets/theme_pattern.svg';
import myFullProfile from '../assets/myFullProfile.png';


const About = () => {
    return (
        <div id="about" className="about flex flex-col items-center justify-center gap-[80px] mt-[70px] w-[1200px] m-auto ">
            <div className="about-title relative">
                <h1 className="pt-[0px] pb-[10px] text-[60px] font-semibold">About Me</h1>
                <img className="absolute bottom-0 right-0 z-[-1]" src={theme_pattern} />
            </div>

            <div className="about-section flex  ">
               
                <div className="about-left ">
                    <img className="h-[100%] w-full mt-[9px]" src={myFullProfile} />
                </div>
                <div className="about-right flex flex-col gap-[80px]">
                    <div className="about-para flex flex-col ml-[50px] text-[24px] text-justify ">
                        <p>Hello! I'm Vivek Kumar Mishra, a passionate 4th-year B.Tech Computer Science Engineering student at MIET Greater Noida, affiliated with Dr. APJ Abdul Kalam Technical University, Lucknow.</p>
                        <p>With a fervent love for coding and problem-solving, I find immense joy in crafting innovative web projects. My journey in the realm of technology has been driven by a relentless curiosity and a thirst for knowledge. I believe in the power of technology to transform ideas into reality and am always eager to explore new horizons in the ever-evolving world of computer science.  </p>
                        <p>Beyond the lines of code,I enjoy delving into diverse interests, constantly seeking inspiration from the world around me. Join me as I embark on this exhilarating journey of creativity, learning, and exploration. Let's code the future together!</p>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default About