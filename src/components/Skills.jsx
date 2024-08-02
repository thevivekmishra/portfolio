import React from "react";
import theme_pattern from '../assets/theme_pattern.svg';
import About_Skills from '../assets/about_skills';

const Skills = () => {
    return (
        <div id="skills" className="services flex flex-col items-center justify-center w-[1200px] m-auto">
            <div className="services-title relative mb-[60px]">
                <h1 className="pt-[30px] pb-[10px] text-[60px] font-semibold">Skills</h1>
                <img className="absolute bottom-0 right-0 z-[-1]" src={theme_pattern} alt="Pattern" />
            </div>

            <div className="service-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {About_Skills.map((skill, index) => (
                    <div key={index} className="services-format flex flex-col p-8 justify-center gap-5 rounded-xl border-2 border-gray-500 transition-all ">
                        <h3 className="text-[30px] font-semibold">{skill.s_no}</h3>
                        <h2 className="font-semibold text-[28px] bg-clip-text text-transparent bg-yellow-400">{skill.s_name}</h2>
                        <div className="w-full h-2 bg-gray-300 rounded-lg">
                            <div
                                className="h-2 bg-pink-500 transition-all rounded-lg duration-500"
                                style={{ width: skill.width }}
                            ></div>
                        </div>
                        <p className="text-[20px] max-w-[300px]">{skill.s_desc}</p>
                    </div>
                ))}
            </div>

            <div className="about-achievements flex w-[1200px] m-auto justify-around mb-[100px] mt-[150px]">
                <div className="about-achievement flex flex-col items-center gap-2 hover:scale-110 transition-all duration-500 ease-in-out">
                    <h1 className="text-[50px] text-yellow-400">3+</h1>
                    <p className="text-[20px] font-bold text-pink-400">YEARS OF EXPERIENCE</p>
                </div>
                <div className="border-l border-gray-400"></div>
                <div className="about-achievement flex flex-col items-center gap-2 hover:scale-110 transition-all duration-500 ease-in-out">
                    <h1 className="text-[50px] text-yellow-400">10+</h1>
                    <p className="text-[20px] font-bold text-pink-400">PROJECTS COMPLETED</p>
                </div>
                <div className="border-l border-gray-400"></div>
                <div className="about-achievement flex flex-col items-center gap-2 hover:scale-110 transition-all duration-500 ease-in-out">
                    <h1 className="text-[50px] text-yellow-400">5+</h1>
                    <p className="text-[20px] font-bold text-pink-400">HAPPY CLIENTS</p>

                </div>
            </div>
        </div>
    );
}

export default Skills;
