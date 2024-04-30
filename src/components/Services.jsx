import React from "react";
import theme_patten from '../assets/theme_pattern.svg';
import Services_Data from '../assets/services_data';
import arrow_icon from '../assets/arrow_icon.svg';

const Services = () => {
    return (
        <div id="services" className="services flex flex-col items-center justify-center gap-[80px] mt-[80px] mb-[170px]">

            <div className="services-title relative">
                <h1 className="text-[60px] font-semibold">My Services</h1>
                <img className="absolute bottom-0 top-[20px] rigth-0 left-[110px] z-[-1]" src={theme_patten} />
            </div>

            <div className="service-container grid grid-cols-3 gap-6 w-[1280px]">

                {Services_Data.map((services, index) => {
                    return (
                        <div key={index} className="services-format flex flex-col p-8 justify-center gap-5 rounded-xl cursor-pointer  border-2 border-white  transition-all duration-300 hover:scale-105 ">

                            <h3 className="text-[30px] font-semibold ">{services.s_no}</h3>
                            <h2 className="font-semibold text-[28px] bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500">{services.s_name}</h2>
                            <p className="text-[20px] max-w-[300px]">{services.s_desc}</p>

                        </div>
                    );
                })}
            </div>

        </div>
    )
}

export default Services