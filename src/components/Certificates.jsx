import React from "react";
import theme_pattern from '../assets/theme_pattern.svg';
import prutor from '../assets/prutor.jpg';
import cybersecurity from '../assets/cybersecurity.jpg';
import microsoft from '../assets/microsoft.jpg';

const Certificate = () => {
    // Function to handle the download action
    const handleDownload = (image) => {
        const link = document.createElement('a');
        link.href = image;
        link.download = 'certificate.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id="certificates" className="certificates flex flex-col items-center justify-center gap-[80px] mt-8 mb-10">

            <div className="certificate-title relative">
                <h1 className="pt-0 pb-[30px] text-[60px] font-semibold">Certificates</h1>
                <img className="absolute bottom-7 right-[-20px] z-[-1]" src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="certificates-text-image flex flex-col w-[1200px] m-auto">

                <div className="styling mb-9 p-5">
                    <div className="flex">
                        <p className="text-[30px] text-justify p-4 flex justify-between items-center">Certified in full-stack web development, proficient in front-end and back-end technologies including HTML, CSS, JavaScript, React.js, and Node.js. Skilled in creating dynamic web applications with seamless user experiences and robust functionality. </p>
                        <img className="h-[40%] w-[40%]" src={prutor} alt="Prutor Certificate" />
                    </div>
                    <button className="btn-download ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => handleDownload(prutor)}>Download Certificate</button>
                </div>

                <div className="styling mb-9 p-5">
                    <div className="flex">
                        <img className="h-[600px] w-[50%]" src={cybersecurity} alt="Cybersecurity Certificate" />
                        <div>
                        <p className="p-4 pt-[150px] text-[30px] text-justify flex justify-between items-center ml-[50px]">Completed a hands-on cybersecurity virtual internship, mastering threat detection, vulnerability assessment, and incident response. Equipped with practical skills in network security, cryptography, and ethical hacking.</p>
                        <button className="btn-download ml-[530px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => handleDownload(cybersecurity)}>Download Certificate</button>
                    </div>
                    </div>
                   
                </div>

                <div className="styling mb-9 p-5">
                    <div className="flex ">
                        <p className="p-4 text-[30px] text-justify mr-[50px] flex justify-between items-center">Successfully completed all requirements for developing an intelligent document processing solution using Azure AI Document Intelligence. Proficient in leveraging cutting-edge AI technology to automate document processing tasks efficiently</p>
                        <img className="h-[40%] w-[40%]" src={microsoft} alt="Microsoft Certificate" />
                    </div>
                    <button className="btn-download ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => handleDownload(microsoft)}>Download Certificate</button>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
