import React from "react";
import github from '../assets/git.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitterx.png';
import linkedin from '../assets/linkedin.png'
import theme_pattern from '../assets/theme_pattern.svg';


const FollowAccounts = () => {
    return (
        <div className="followAccounts flex flex-col items-center justify-center gap-[80px]  mb-[150px] w-[1200px] m-auto ">
            <div className="follow-me-title relative ">
            <h1 className="pt-[0px] pb-[10px] text-[60px] font-semibold">Follow me</h1>
                <img className="absolute bottom-0 right-0 z-[-1]" src={theme_pattern} />
            </div>

            <div className="icon flex justify-around items-center mt-[80px] mb-[-80px] ">

                <div className="github h-[80px] w-[90px] ">
                    <a href="https://github.com/thevivekmishra/" target="_blank">
                        <img src={github} /> </a>
                </div>

                <div className="facebook h-[80px] w-[80px] mb-[-10px]">
                    <a href="https://www.facebook.com/VivekMishra2003/" target="_blank">
                        <img src={facebook} /> </a>
                </div>

                <div className="instagram h-[100px] w-[100px] mb-[-10px]">
                    <a href="https://www.instagram.com/v__4__vivek_/" target="_blank">
                        <img src={instagram} /> </a>
                </div>

                <div className="twitter h-[100px] w-[100px] mb-[-10px]">
                    <a href="https://www.x.com/thevivekmishra_" target="_blank">
                        <img src={twitter} /> </a>
                </div>

                <div className="linkedin h-[100px] w-[100px] mb-[-30px]">
                    <a href="https://www.linkedin.com/in/vivekmishra100" target="_blank">
                        <img src={linkedin} /> </a>
                </div>

            </div>
            <div className="socialLine h-1 w-[1200px] m-auto  rounded-lg"></div>
        </div>

    )
}

export default FollowAccounts