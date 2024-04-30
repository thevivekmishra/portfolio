import React from "react";
import theme_pattern from '../assets/theme_pattern.svg';
import mywork_data from '../assets/mywork_data';
import arrow_icon from '../assets/arrow_icon.svg';

const Mywork = () => {
    return (
        <div id="projects" className="mywork flex flex-col items-center justify-center gap-[80px] mt-8 mb-10">
            <div className="mywork-title relative">
                <h1 className="text-[60px] font-semibold px-8">My Projects</h1>
                <img className="absolute z-[-1] bottom-0 right-0 " src={theme_pattern} />
            </div>

            <div className="mywork-container grid grid-cols-3 gap-7 w-[1280px] ">
                {mywork_data.map((work, index) => {
                    return (
                        <div key={index} className="relative">
                            <img className="mywork-container-img h-[350px] w-[400px] hover:translate-y-[-10px] transition-all duration-[0.3s] ease-out shadow-light-100 object-full" src={work.w_img} />
                            <div className=" flex justify-center space-x-4 mb-4 mt-4">
                                <button onClick={() => window.open(work.codeLink, "_blank")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Code
                                </button>
                                <button onClick={() => window.open(work.liveLink, "_blank")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    Live
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mywork-showmore flex justify-center items-center border-2 w-[350px] border-yellow-400 rounded-full m-4 p-3 gap-3 mb-[80px] cursor-pointer hover:bg-yellow-400 transition-all duration-[0.6s] ease-in-out hover:text-black ">
                <button onClick={() => window.open("https://github.com/thevivekmishra?tab=repositories", "_blank")} className="text-[30px]">
                    GitHub Repo.
                </button>
                <img src={arrow_icon} />
            </div>
        </div>
    )
}

export default Mywork;
