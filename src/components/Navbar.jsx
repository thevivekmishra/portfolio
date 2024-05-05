import React, { useState ,useRef } from "react";
import logo from '../assets/vlogo1.png'
import underline from '../assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0";
    }
    const closeMenu = () => {
        menuRef.current.style.right="-350px";
    }

    return (
        <div className="navbar flex justify-between items-center mt-[20px]  w-[1250px] m-auto sticky top-0 bg-[#161513] z-[100] t-2 ">
            
            <img className=" logo h-[60px] mt-2" src={logo} alt="Logo" ></img>
            <img src ={menu_open} onClick={openMenu} className="nav-mob-open"/>
           
            <ul ref={menuRef} className="nav-menu flex justify-center items-center gap-10 text-[20px] cursor-pointer">
                
                <img src ={menu_close} onClick={closeMenu} className="nav-mob-close"/>
                
                <li className="li hover:scale-110 transition-transform  hover:text-yellow-300 duration-[0.3s] ease-in-out"><AnchorLink className="anchor-link" offset={50} href="#home"> <p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} /> : <></>}</li>
                <li className="li hover:scale-110 transition-transform  hover:text-yellow-300 duration-[0.3s] ease-in-out"><AnchorLink className="anchor-link" offset={50} href="#about"> <p onClick={() => setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <img src={underline} /> : <></>}</li>
                <li className="li hover:scale-110 transition-transform  hover:text-yellow-300 duration-[0.3s] ease-in-out"><AnchorLink className="anchor-link" offset={50} href="#services"> <p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} /> : <></>}</li>
                <li className="li hover:scale-110 transition-transform  hover:text-yellow-300 duration-[0.3s] ease-in-out"><AnchorLink className="anchor-link" offset={50} href="#projects"> <p onClick={() => setMenu("projects")}>My Projects</p></AnchorLink>{menu === "projects" ? <img src={underline} /> : <></>}</li>
                <li className="li hover:scale-110 transition-transform  hover:text-yellow-300 duration-[0.3s] ease-in-out"><AnchorLink className="anchor-link" offset={50} href="#certificates"> <p onClick={() => setMenu("certificates")}>Certificates</p></AnchorLink>{menu === "certificates" ? <img src={underline} /> : <></>}</li>
                <li className="li hover:scale-110 transition-transform  hover:text-yellow-300 duration-[0.3s] ease-in-out"><AnchorLink className="anchor-link" offset={50} href="#contact"> <p onClick={() => setMenu("contact")}>Contact Us</p></AnchorLink>{menu === "contact" ? <img src={underline} /> : <></>}</li>
            </ul>

            <div className="nav-connect p-2 text-[23px] rounded-full cursor-pointer bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-[0.3s] ease-in-out "><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Navbar