import React from "react";
import vlogo from '../assets/vlogo1.png';
import user_icon from '../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className="footer w-[1200px] m-auto ">
            <div className="footer-top ">
                <div className="footer-top-left">
                    <img className="h-[80px]" src={vlogo} />
                    <p className="text-[20px] max-w-[400px]">Made with ❤️ by Vivek Kumar Mishra</p>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>2024</p>
                </div>

            </div>
        </div >
    )
}

export default Footer