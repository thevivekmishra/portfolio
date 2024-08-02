// import React from "react";
// import vlogo from '../assets/vlogo1.png';
// import user_icon from '../assets/user_icon.svg'

// const Footer = () => {
//     return (
//         <div className="footer w-[1200px] m-auto ">
//             <div className="footer-top ">
//                 <div className="footer-top-left">
//                     <img className="h-[80px]" src={vlogo} />
//                     <p className="text-[20px] max-w-[400px]">Made with ❤️ by Vivek Kumar Mishra</p>
//                 </div>
//             </div>
//             <hr />
//             <div className="footer-bottom">
//                 <p className="footer-bottom-left">All rights reserved</p>
//                 <div className="footer-bottom-right">
//                     <p>Terms of Services</p>
//                     <p>Privacy Policy</p>
//                     <p>2024</p>
//                 </div>

//             </div>
//         </div >
//     )
// }

// export default Footer



import React from 'react';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import github from '../assets/github.png'
import vlogo from '../assets/vlogo1.png';


const Footer = () => {
    return (
        <div className='relative bg-[#191819] text-white'>
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between p-6 lg:p-12'>
                {/* <div className='flex-shrink-0 mb-6 lg:mb-0 lg:mr-6'>
                    <img src={vlogo} className='h-40 w-auto mx-auto lg:mx-0' alt='Footer Car' />
                </div> */}
                <div className='flex-1'>
                    <div className='bg-[#292929] p-4 lg:p-8 rounded-lg'>
                        <div className='lg:flex justify-around gap-14 text-center lg:text-left'>
                            <div className='mb-4 lg:mb-0'>
                                <h1 className='text-lg pb-2 text-yellow-300'>Vivek Kumar Mishra </h1>
                                <a href="mailto:mishravivek9569@gmail.com">mishravivek9569@gmail.com</a>
                            </div>
                            <div className='mb-4 lg:mb-0'>
                                <h1 className='text-lg pb-2 text-yellow-300'>Reach Us</h1>
                                <a href="tel:+919876543210" className='text-sm'>Call Us: 9569486065</a>
                            </div>
                            <div>
                                <h1 className='text-lg pb-2 text-yellow-300'>Address</h1>
                                <p className='text-sm pb-5'>Knowledge park 2 Greater Noida</p>

                            </div>
                        </div>
                        <div className='md:flex flex-row-reverse justify-between mt-12 ml-4'>
                            <div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14029.90585407906!2d77.48763635330363!3d28.46519432367476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea75939040b9%3A0xf80aa08154223323!2sKnowledge%20Park%20II%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1722541315867!5m2!1sen!2sin"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className=' gap-4 mb-6 justify-center '>
                                <p className='text-lg font-semibold mb-4 mt-6 text-center '>Connect with Us:</p>
                                <div className='flex justify-center gap-5  rounded-lg p-4 bg-gray-700'>
                                    <a href='https://www.facebook.com/VivekMishra2003/' target='_blank' rel='noopener noreferrer'>
                                        <img src={facebook} className='h-7 lg:h-10  hover:scale-110 transition 0.2s' alt='Facebook' />
                                    </a>
                                    <a href='https://www.instagram.com/v__4__vivek_/' target='_blank' rel='noopener noreferrer'>
                                        <img src={instagram} className='h-8 lg:h-11 hover:scale-110 transition 0.2s' alt='Instagram' />
                                    </a>
                                    <a href='https://www.x.com/thevivekmishra_' target='_blank' rel='noopener noreferrer'>
                                        <img src={twitter} className='h-8 lg:h-11 hover:scale-110 transition 0.2s' alt='Twitter' />
                                    </a>
                                    <a href='https://www.linkedin.com/in/vivekmishra100' target='_blank' rel='noopener noreferrer'>
                                        <img src={linkedin} className='h-8 lg:h-11 hover:scale-110 transition 0.2s' alt='LinkedIn' />
                                    </a>
                                    <a href=' https://github.com/thevivekmishra/' target='_blank' rel='noopener noreferrer'>
                                        <img src={github} className='h-8 lg:h-10 hover:scale-110 transition 0.2s' alt='LinkedIn' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-sm'>&copy; 2024 All rights reserved</p>
                        <p className='text-center text-sm'>&copy; Made with 💛 by Vivek</p>
                    </div>
                </div>
            </div>
            {/* <div className='flex justify-center pb-7'>
                <AnchorLink href="#home">
                    <img src={up} className='h-9 hover:scale-110 transition 0.2s' alt='Scroll to top' />
                </AnchorLink>
            </div> */}
        </div>
    );
}

export default Footer;
