import React from "react";
import theme_pattern from '../assets/theme_pattern.svg';
import Services_Data from '../assets/services_data';

const Services = () => {
    return (
        <div id="services" className="services flex flex-col items-center justify-center w-[1200px] m-auto">

            <div className="services-title relative mb-[60px]">
                <h1 className="pt-[30px] pb-[10px] text-[60px] font-semibold">My Services</h1>
                <img className="absolute bottom-0 right-0 z-[-1]" src={theme_pattern} alt="Pattern" />
            </div>

            <div className="service-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {Services_Data.map((service, index) => (
                    <div key={index} className="services-format flex flex-col p-8 justify-center gap-5 rounded-xl border-2 border-gray-500 transition-all duration-300 hover:bg-gradient-to-b from-gray-800">
                        <h3 className="text-[30px] font-semibold">{service.s_no}</h3>
                        <h2 className="font-semibold text-[28px] bg-clip-text text-transparent bg-yellow-400">{service.s_name}</h2>
                        <p className="text-[20px] max-w-[300px]">{service.s_desc}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Services;
