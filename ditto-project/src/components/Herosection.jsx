import React from 'react';
import Hero1 from '../assets/Hero1.png';
import Hero2 from '../assets/Hero2.png';
import Calender from '../assets/Calender.png';

function Herosection() {
    return(
        <main className='flex justify-between mx-[4cm] mt-[2.5cm]'>
            <section>
                <div className='mb-7'>
                    <img className='w-[11cm]'
                    src={Hero1} 
                    alt="Hero1" />
                </div>
                <div className='mb-[1.5cm] max-w-120 ml-[0.5cm]'>
                    <h1 className='text-7xl font-bold text-gray-900'>The Ultimate Insurance Buying Experience</h1>
                </div>
                <div className='ml-[0.5cm]'>
                    <button className='text-xl px-7 py-5 font-semibold bg-blue-600 text-white rounded-xl'>
                        {/* <img className='h-4 w-4 mr-2'
                        src={Calender} 
                        alt='calender'/> */}
                        Book a free call now</button>
                </div>
            </section>

            <section>
                <img className='mt-[3cm] ml-[2cm] w-[20cm]'
                src={Hero2} 
                alt="Hero2" />
            </section>
        </main>
    );
}

export default Herosection;