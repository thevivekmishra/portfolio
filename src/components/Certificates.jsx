import React from "react";
import theme_pattern from '../assets/theme_pattern.svg';
import prutor from '../assets/prutor.jpg';
import cybersecurity from '../assets/cybersecurity.jpg';
import microsoft from '../assets/microsoft.jpg';
import codsoft from '../assets/codsoft.jpg';
import ir4 from '../assets/ir4.jpg';

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
        <div id="certificates" className="certificates flex flex-col items-center justify-center mt-8 mb-10">
            <div className="certificate-title relative">
                <h1 className="pt-16 pb-10 text-5xl font-semibold text-center">Certificates</h1>
                <img className="absolute bottom-0 right-0 z-[-1]" src={theme_pattern} alt="Pattern" />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mt-8">
                {/* Certificate 1 */}
                <div className="certificate-card bg-black shadow-md rounded-lg overflow-hidden hover:border-2 border-white p-3 hover:shadow-white transition-all ease-in-out">
                    <img className="w-full h-64 object-cover" src={prutor} alt="Prutor Certificate" />
                    <div className="p-6">
                        <h1 className="text-xl font-semibold mb-2">PRUTOR@IITK</h1>
                        <p className="text-base mb-4">Certified in full-stack web development, proficient in HTML, CSS, JavaScript, React.js, and Node.js. Skilled in creating dynamic web applications.</p>
                        <button className="btn-download bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => handleDownload(prutor)}>Download Certificate</button>
                    </div>
                </div>

                {/* Certificate 2 */}
                <div className="certificate-card bg-black shadow-md rounded-lg overflow-hidden hover:border-2 border-white p-3 hover:shadow-white transition-all ease-in-out">
                    <img className="w-full h-64 object-cover" src={cybersecurity} alt="Cybersecurity Certificate" />
                    <div className="p-6">
                        <h1 className="text-xl font-semibold mb-2">Palo Alto - Cybersecurity</h1>
                        <p className="text-base mb-4">Certified in cybersecurity with expertise in network security, threat detection, and mitigation strategies.</p>
                        <button className="btn-download bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => handleDownload(cybersecurity)}>Download Certificate</button>
                    </div>
                </div>

                {/* Certificate 3 */}
                <div className="certificate-card bg-black shadow-md rounded-lg overflow-hidden hover:border-2 border-white p-3 hover:shadow-white transition-all ease-in-out">
                    <img className="w-full h-64 object-cover" src={microsoft} alt="Microsoft Certificate" />
                    <div className="p-6">
                        <h1 className="text-xl font-semibold mb-2">Microsoft</h1>
                        <p className="text-base mb-4">Completed requirements for developing an intelligent document processing solution using Azure AI Document Intelligence.</p>
                        <button className="btn-download bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => handleDownload(microsoft)}>Download Certificate</button>
                    </div>
                </div>

                {/* Certificate 4 */}
                <div className="certificate-card bg-black shadow-md rounded-lg overflow-hidden hover:border-2 border-white p-3 hover:shadow-white transition-all ease-in-out">
                    <img className="w-full h-64 object-cover" src={codsoft} alt="Codsoft Certificate" />
                    <div className="p-6">
                        <h1 className="text-xl font-semibold mb-2">CODSOFT-INTERNSHIP</h1>
                        <p className="text-base mb-4">Codsoft Virtual Internship Certificate recognizing successful completion of a rigorous virtual internship program.</p>
                        <button className="btn-download bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => handleDownload(codsoft)}>Download Certificate</button>
                    </div>
                </div>

                {/* Certificate 5 */}
                <div className="certificate-card bg-black shadow-md rounded-lg overflow-hidden hover:border-2 border-white p-3 hover:shadow-white transition-all ease-in-out">
                    <img className="w-full h-64 object-cover" src={ir4} alt="IR4 Foundation Certificate" />
                    <div className="p-6">
                        <h1 className="text-xl font-semibold mb-2">IR4 FOUNDATION</h1>
                        <p className="text-base mb-4">Successfully completed the IR4 Foundation Certification course under the Tech Saksham initiative, gaining skills in Ubuntu, Java Virtual Machine (JVM), and web development.</p>
                        <button className="btn-download bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4  m-auto" onClick={() => handleDownload(ir4)}>Download Certificate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
