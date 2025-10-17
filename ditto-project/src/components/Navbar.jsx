import React from 'react';  
import logo from '../assets/Logo.png';


function Navbar() {
    return(
        <main className='flex justify-between mx-[3.5cm] mt-5'>
            <section>
                <img className='h-9 w-20'
                src={logo} 
                alt='Logo'/>
            </section>

            <section>
                <ul className='flex flex-row items-center mt--1'>
                    <li className='px-9 text-lg font-semibold font-stretch-70%'>Health Insurance</li>
                    <li className='px-9 text-lg font-semibold font-stretch-70%'>Life Insurance</li>
                    <li className='px-9 text-lg font-semibold font-stretch-70%'>Claims</li>
                    <li className='px-9 text-lg font-semibold font-stretch-70%'>Careers</li>
                    <li>
                        <button className='px-[0.4cm] py-[0.3cm] bg-blue-500 text-white text-lg font-semibold font-stretch-40% rounded-lg'>Buy Insurance</button>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Navbar;