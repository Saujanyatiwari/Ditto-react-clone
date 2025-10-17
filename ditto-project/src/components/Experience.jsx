import React from 'react';
import Experience1 from '../assets/Experience1.png';
import num1 from '../assets/num1.png';
import num2 from '../assets/num2.png';
import num3 from '../assets/num3.png';  
import Exp1 from '../assets/Exp1.png';
import Exp2 from '../assets/Exp2.png';
import Exp3 from '../assets/Exp3.png';  

function Experience() {
    return(
        <main className='flex justify-between'>


            <article>
                <ul className='pt-[3.5cm] bg-blue-100'>
                    <li className='text-4xl font-semibold text-gray-800 ml-[4cm] mr-[1cm] mb-[0.5cm] max-w-64'>The Ditto Experience</li>
                    <li>
                        <img className='w-[12cm] h-[15cm]'
                src={Experience1} 
                alt="Experience Illustration" />
                    </li>
                </ul>
            </article>


            <article className='mr-[6cm]'> 

                <section className='flex justify-equally mt-[4cm]'>
                    <div className='ml-[2cm] mr-[1cm]'>
                        <ul>
                            <li className='mb-[0.5cm]'>
                                <img className='w-[1.7cm] h-[1.7cm]'
                                src={num1} 
                                alt="num1" />
                            </li>

                            <li className='mb-[0.5cm] text-4xl text-gray-900 font-semibold'>Get Expert Guidance</li>

                            <li className='mb-[0.5cm] max-w-85 text-gray-900 font-normal text-xl pb-[1cm]'>Talk to IRDAI certified experts instead of pushy salesmen, with a guaranteed no-spam policy.</li>

                            <li className='mb-[0.5cm]'>
                                <button className='text-xl  text-left px-7 py-3 font-semibold bg-blue-500 text-white rounded-2xl w-[10cm] hover: transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-103'>Book a free call now</button>
                            </li>

                            <li className='mb-[0.5cm]'>
                                <button className='text-xl  text-left px-7 py-3 font-semibold bg-gray-200 text-green-700 rounded-2xl w-[10cm] hover: transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-103'>Chat with us on Whatsapp</button>
                            </li>

                        </ul>                          
                    </div>

                    

                    <div className='mt-[2cm]'>
                        <img className='w-[10.5cm]' 
                        src={Exp1} alt="Error" />
                    </div>
                </section>

                <div className='border-t-2 border-gray-200 ml-[1.5cm] my-[2cm]'>
                    </div>


                <section className='flex justify-equally'>
                    <div className='ml-[2cm] mr-[1cm]'>
                        <ul>
                            <li className='mb-[0.5cm]'>
                                <img className='w-[1.7cm] h-[1.7cm]'
                                src={num2} 
                                alt="num2" />
                            </li>

                            <li className='mb-[0.5cm] text-4xl text-gray-900 font-semibold'>End-to-End Assistance</li>

                            <li className='mb-[0.5cm] max-w-85 text-gray-900 font-normal text-xl pb-[1cm]'>Get complete handholding from Ditto – from the moment you book a call to the moment you receive your policy.</li>

                            <li className='mb-[0.5cm]'>
                                <button className='text-xl  text-left px-7 py-3 font-semibold bg-[#f78545] text-white rounded-2xl w-[10cm] hover: transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-103'>Undertsand Your Policy</button>
                            </li>

                            <li className='mb-[0.5cm]'>
                                <button className='text-xl  text-left px-7 py-3 font-semibold bg-gray-200 text-gray-500 rounded-2xl w-[10cm] hover: transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-103'>Compare Policies</button>
                            </li>

                        </ul>                          
                    </div>

                    <div className='mt-[2cm]'>
                        <img className='w-[12cm]' 
                        src={Exp2} alt="Error" />
                    </div>
                </section>

                <div className='border-t-2 border-gray-200 ml-[1.5cm] my-[2cm]'>
                    </div>

                <section className='flex justify-equally mb-[4cm]'>
                    <div className='ml-[2cm] mr-[1cm]'>
                        <ul>
                            <li className='mb-[0.5cm]'>
                                <img className='w-[1.7cm] h-[1.7cm]'
                                src={num3} 
                                alt="num3" />
                            </li>

                            <li className='mb-[0.5cm] text-4xl text-gray-900 font-semibold'>Lifetime Claim Support</li>

                            <li className='mb-[0.5cm] max-w-85 text-gray-900 font-normal text-xl pb-[1cm]'>With Ditto's expert claims team at your disposal 24/7, you and your family will always receive the support you deserve.</li>

                            <li className='mb-[0.5cm]'>
                                <button className='text-xl  text-left px-7 py-3 font-semibold bg-[#f78545] text-white rounded-2xl w-[10cm] hover: transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-103'>Register Your Claim</button>
                            </li>

                        </ul>                          
                    </div>

                    <div className='mt-[1cm]'>
                        <img className='w-[10.5cm]' 
                        src={Exp3} alt="Error" />
                    </div>
                </section>
            </article>
        </main>
    );
}

export default Experience;