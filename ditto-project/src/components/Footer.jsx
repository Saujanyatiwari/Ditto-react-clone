import React from "react";
import Logo from '../assets/Logo.png'
import button from '../assets/button.png'

function Footer(){
    return (
        <body className="bg-gray-100">
        <main className="flex flex-col my-[1cm] mx-[3cm]">
            <article className="flex flex-row justify-between">
                <section>
                    <ul>
                        <li className="flex flex-row">
                            <img className="h-[1.2cm] w-[2.5cm]"
                            src={Logo} alt="error" />
                             <img className="h-[1.2cm] w-[5.4cm]"
                            src={button} alt="error" />
                        </li>

                        <li className="text-gray-500 max-w-96 text-md mt-[0.3cm]">With Ditto, you don't just compare insurance. You understand it. Narrow down choices. Avoid pitfalls and make better decisions.</li>

                        <li className="mt-[1cm]">
                            <button className='text-sm px-4 py-3 font-semibold bg-blue-600 text-white rounded-lg mr-[0.5cm]'>Book a free call now</button>

                            <button className='text-sm px-4 py-3 font-semibold bg-green-500 text-white rounded-lg'>Whatsapp Us</button>
                        </li>
                        <li className="font-semibold mt-[0.5cm]">Need help?</li>
                        <li className="text-gray-600 mt-[0.2cm]">General Support:</li>
                        <li className="text-gray-900">080-45680003 | help@joinditto.in</li> 
                        
                        <li className='border-t-2 border-gray-200 my-[0.5cm]'></li>

                        
                        <li className="text-gray-600 mt-[0.2cm]">Claims Assistance Only:</li>
                        <li className="text-gray-900">080-48816818 | claims@joinditto.in</li> 
                        <li className="text-gray-600 mt-[0.2cm]">Please do not call this number for any other queries.</li>
                        <li className="text-gray-600 mt-[0.2cm]">This is strictly for emergency usage.</li>

                        <li className='border-t-2 border-gray-200 my-[0.5cm]'></li>

                        <li className="text-gray-600 mt-[0.2cm]">Hiring Queries:</li>
                        <li className="text-gray-900">careers@joinditto.in</li> 
                    </ul>
                </section>
                <section>
                    <ul>
                        <li className="text-xl font-semibold mb-[0.6cm]">Products</li>
                        <li className="text-gray-600">Health Insuarance</li>
                        <li className="text-gray-600 mb-[0.4cm]">Term Insuarance</li>

                        <li className='border-t-2 border-gray-200'></li>

                        <li className="text-xl font-semibold mb-[0.6cm]">Articles</li>
                        <li className="text-gray-600">Health Insuarance</li>
                        <li className="text-gray-600 mb-[0.4cm]">Term Insuarance</li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li className="text-xl font-semibold mb-[0.6cm]">Tools</li>
                        <li className="text-gray-600">Understand your insurance</li>
                        <li className="text-gray-600">Health Insurance Checklist</li>
                        <li className="text-gray-600">Term Insurance Checklist</li>
                        <li className="text-gray-600">Compare Health Policies</li>

                    </ul>
                </section>
                <section>
                    <ul>
                        <li className="text-xl font-semibold mb-[0.6cm]">Guides</li>
                        <li className="text-gray-600">Health Insurance 101</li>
                        <li className="text-gray-600">Term Insurance 101</li>
                        <li className="text-gray-600">Best Health Plans</li>
                        <li className="text-gray-600 mb-[0.4cm]">Best Term Plans</li>

                        <li className='border-t-2 border-gray-200'></li>

                         <li className="text-xl font-semibold mb-[0.6cm]">Tax Benefits</li>
                        <li className="text-gray-600">Section 80D</li>
                        <li className="text-gray-600 mb-[0.4cm]">Section 80C</li>

                    </ul>
                </section>
                <section>
                    <ul>
                        <li className="text-xl font-semibold mb-[0.6cm]">General</li>
                        <li className="text-gray-600">Terms and Conditions</li>
                        <li className="text-gray-600">Privacy & Policies</li>
                        <li className="text-gray-600">Health Insurers</li>
                        <li className="text-gray-600">Term Insurers</li>
                        <li className="text-gray-600">Claims Assistance</li>
                        <li className="text-gray-600">Health Insurance Glossary</li>
                        <li className="text-gray-600">Renewal</li>
                        <li className="text-gray-600">Corporate Social Responsibility</li>
                        <li className="text-gray-600">Careers</li>
                        <li className="text-gray-600">Contact Us</li>
                    </ul>
                </section>
            </article>

             <div className='border-t-2 border-gray-200 my-[0.5cm]'></div>
            <article className="flex flex-row mb-[2cm]">
                <ul>
                  <li className="text-gray-500 pb-5 text-sm">Finshots © 2021-2025. All Rights Reserved.</li>
                  <li className="text-gray-500 text-sm">Tacterial Consulting Private Limited</li>
                  <li className="text-gray-500 text-sm">CIN: U74999KA2018PTC184423</li>
                  <li className="text-gray-500 text-sm">IRDAI Registered Corporate Agent (Composite) License No CA0738</li>
                  <li className="text-gray-500 text-sm">valid till 9th December 2026</li>
                </ul>
                <div className="ml-[5cm]">
                    <p className="text-md max-w-170 text-gray-800">
                        Disclaimer : The information contained in this website is presented purely for information purposes only provided as service to the internet community at large. It does not constitute insurance advice and we do not guarantee the accuracy, adequacy or the completeness of the information contained here
                    </p>
                </div>
            </article>
        </main>
        </body>
    );
}

export default Footer;