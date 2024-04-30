import React from "react";
import theme_pattern from '../assets/theme_pattern.svg';
import myFullProfile from '../assets/myFullProfile.png';


const About = () => {
    return (
        <div id="about" className="about flex flex-col items-center justify-center gap-[80px] mt-[70px] mx-[130px]">
            <div className="about-title relative">
                <h1 className="pt-[0px] pb-[10px] text-[60px] font-semibold">About Me</h1>
                <img className="absolute bottom-0 right-0 z-[-1]" src={theme_pattern} />
            </div>

            <div className="about-section flex gap-[80px] ">
                <div className="about-left ">
                    <img className="h-[65%] w-full mt-[105px]" src={myFullProfile} />
                </div>
                <div className="about-right flex flex-col gap-[80px]">
                    <div className="about-para flex flex-col gap-[24px] text-[24px] text-justify ">
                        <p>Hello! I'm Vivek Kumar Mishra, a passionate 3rd-year BTech Computer Science Engineering student at MIET Greater Noida, affiliated with Dr. APJ Abdul Kalam Technical University, Lucknow.</p>
                        <p>With a fervent love for coding and problem-solving, I find immense joy in crafting innovative web projects. My journey in the realm of technology has been driven by a relentless curiosity and a thirst for knowledge. I believe in the power of technology to transform ideas into reality and am always eager to explore new horizons in the ever-evolving world of computer science.  </p>
                        <p>Beyond the lines of code,I enjoy delving into diverse interests, constantly seeking inspiration from the world around me. Join me as I embark on this exhilarating journey of creativity, learning, and exploration. Let's code the future together!</p>
                    </div>
                    <div className="about-skills flex flex-col  gap-4 justify-center ">

                        <div class="about-skill flex items-center gap-2 hover:scale-110 transition-all duration-500 ease-in-out">
                            <p class="text-2xl font-semibold mr-[120px]">HTML</p>
                            <hr class="border-none w-[80%] h-2 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500"></hr>
                        </div>

                        <div class="about-skill flex items-center gap-2 hover:scale-110 transition-all duration-500 ease-in-out">
                            <p class="text-2xl font-semibold mr-[145px]">CSS</p>
                            <hr class="border-none w-[70%] h-2 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500"></hr>
                        </div>

                        <div class="about-skill flex items-center gap-2 hover:scale-110 transition-all duration-500 ease-in-out">
                            <p class="text-2xl font-semibold  mr-[76px]">TAILWIND</p>
                            <hr class="border-none w-[55%] h-2 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500"></hr>
                        </div>

                        <div class="about-skill flex items-center gap-2 hover:scale-110 transition-all duration-500 ease-in-out">
                            <p class="text-2xl font-semibold  mr-[45px]">JAVA SCRIPT</p>
                            <hr class="border-none w-[60%] h-2 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500"></hr>
                        </div>

                        <div class="about-skill flex items-center gap-2 hover:scale-110 transition-all duration-500 ease-in-out">
                            <p class="text-2xl font-semibold  mr-[85px]">REACT JS</p>
                            <hr class="border-none w-[70%] h-2 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500"></hr>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements flex w-full justify-around mb-[80px] ">
                <div className="about-achievement flex flex-col items-center gap-2 hover:scale-110 transition-all duration-500 ease-in-out">
                    <h1 className="text-[50px] text-yellow-400" >2+</h1>
                    <p className="text-[20px] font-bold  text-pink-400">YEARS OF EXPERIENCE</p>
                </div>
                <div class="border-l border-gray-400"></div>
                <div className="about-achievement flex flex-col items-center gap-2 hover:scale-110 transition-all duration-500 ease-in-out">
                    <h1 className="text-[50px]  text-yellow-400">10+</h1>
                    <p className="text-[20px] font-bold text-pink-400" >PROJECTS COMPLETED</p>
                </div>
                <div class="border-l border-gray-400"></div>
                <div className="about-achievement flex flex-col items-center gap-2 hover:scale-110 transition-all duration-500 ease-in-out">
                    <h1 className="text-[50px]  text-yellow-400" >5+</h1>
                    <p className="text-[20px] font-bold  text-pink-400" >HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About