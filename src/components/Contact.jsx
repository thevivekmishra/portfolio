import React from "react";
import theme_pattern from '../assets/theme_pattern.svg';
import mail_icon from '../assets/mail_icon.svg';
import location_icon from '../assets/location_icon.svg';
import call_icon from '../assets/call_icon.svg'


const Contact = () => {
    //web3forms

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "4abed419-c15e-4064-bbdb-e8daac3fbc8b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Message sent successfully!,Thank you for your input! We'll get back to you shortly.");
        }
    };

    return (
        <div id="contact" className="contact flex flex-col justify-center items-center gap-[90px]  pt-[30px] mb-[60px] w-[1200px] m-auto ">
            <div className="contact-title relative">
            <h1 className="pt-[0px] pb-[10px] text-[60px] font-semibold">Get In Touch</h1>
                <img className="absolute bottom-0 right-0 z-[-1]" src={theme_pattern} />
            </div>

            <div className="contact-section flex gap-[150px] w-[1200px]">
                <div className="contact-left flex flex-col gap-[30px]">
                    <h1 className="text-[60px] font-semibold text-yellow-400">Let's Talk</h1>
                    <p className="text-[20px] text-justify">Have a project idea in mind? Looking to collaborate on something exciting? Or maybe you just want to chat about all things tech? Whatever it may be, I'd love to hear from you!</p>
                    <p className="text-[20px] text-justify">Feel free to drop me a message using the form given on right side, and I'll get back to you as soon as possible. Let's turn ideas into reality and create something amazing together!</p>
                    <div className="contact-details flex flex-col gap-[30px] ">
                        <div className="contact-detail flex align-center gap-5">
                            <img src={mail_icon} />
                            <p>mishravivek9569@gmail.com</p>
                        </div>

                        <div className=" contact-detail flex align-center gap-5">
                            <img src={call_icon} />
                            <p>9569486065</p>
                        </div>

                        <div className="contact-detail flex align-center gap-5 ">
                            <img src={location_icon} />
                            <p>Knowledge Park II, Greater Noida,UP (Delhi-NCR)</p>

                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right flex flex-col items-center  gap-5">
                    <label className="text-[22px] font-semibold align-start ml-[-450px] " htmlFor="">Your Name</label>
                    <input className=" input border-none w-[550px] h-[48px] rounded-md pl-[20px]  text-[20px]" type="text" placeholder="Enter your name" name='name' required />
                    <label className="text-[22px] font-semibold ml-[-450px]" htmlFor="">Your Email</label>
                    <input className="input border-none w-[550px] h-[48px] rounded-md pl-[20px]  text-[20px]" type="text" placeholder="Enter your email" name='email' required />
                    <label className="text-[22px] font-semibold ml-[-310px]" htmlFor="">Write your message here</label>
                    <textarea className=" input border-none w-[550px] rounded-md pl-[20px] text-[20px] pt-2  " name='message' rows='8' placeholder="Enter your message" required />
                    <button type="submit" className="contact-submit bg-yellow-400 text-black font-semibold">Submit Now</button>
                </form>

            </div>
        </div>
    )
}

export default Contact