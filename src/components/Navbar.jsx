import React, { useState } from "react";
import logo from '../assets/vlogo1.png'
import underline from '../assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";


const Navbar = () => {
    const [menu, setMenu] = useState("home");
    
    return (
        <div id="home" className="navbar flex justify-between items-center m-[20px] mx-40 ">
            
            <img className="h-[60px] mt-2" src={logo} alt="Logo" ></img>
            
            <ul className="nav-menu flex justify-center items-center gap-10 text-[20px] cursor-pointer">
                
                <li className="li hover:scale-110 transition-transform  hover:text-yellow-300 duration-[0.3s] ease-in-out"><AnchorLink className="anchor-link" offset={50} href="#home"> <p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} /> : <></>}</li>
                <li className="li hover:scale-110 transition-transform  hover:text-yellow-300 duration-[0.3s] ease-in-out"><AnchorLink className="anchor-link" offset={50} href="#about"> <p onClick={() => setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <img src={underline} /> : <></>}</li>
                <li className="li hover:scale-110 transition-transform  hover:text-yellow-300 duration-[0.3s] ease-in-out"><AnchorLink className="anchor-link" offset={50} href="#services"> <p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} /> : <></>}</li>
                <li className="li hover:scale-110 transition-transform  hover:text-yellow-300 duration-[0.3s] ease-in-out"><AnchorLink className="anchor-link" offset={50} href="#projects"> <p onClick={() => setMenu("projects")}>My Projects</p></AnchorLink>{menu === "projects" ? <img src={underline} /> : <></>}</li>
                <li className="li hover:scale-110 transition-transform  hover:text-yellow-300 duration-[0.3s] ease-in-out"><AnchorLink className="anchor-link" offset={50} href="#certificates"> <p onClick={() => setMenu("certificates")}>Certificates</p></AnchorLink>{menu === "certificates" ? <img src={underline} /> : <></>}</li>
                <li className="li hover:scale-110 transition-transform  hover:text-yellow-300 duration-[0.3s] ease-in-out"><AnchorLink className="anchor-link" offset={50} href="#contact"> <p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} /> : <></>}</li>
            </ul>

            <div className="nav-connect p-2 text-[23px] rounded-full cursor-pointer bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-[0.3s] ease-in-out "><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Navbar