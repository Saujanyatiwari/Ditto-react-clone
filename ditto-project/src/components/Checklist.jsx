import React from 'react';
import checklist from '../assets/checklist.png';

function Checklist(){
    return(
        <main className='bg-[url(./Background.png)]  bg-cover bg-position-[center_top_0.1rem] bg-gray-100 '>
            <article className='flex justify-between mx-[9cm] py-[3cm]'>

            <section className='mr-[2cm]'>
                <img className='h-[11cm] w-[13cm]'
                src={checklist} alt='error'/>
            </section>

            <section className='flex flex-col'>
                <div>
                    <ul>
                        <li className='mb-[0.5cm] text-5xl max-w-96 text-gray-900 font-bold'>Insurance Checklist</li>
                        <li className='mb-[0.5cm] max-w-125 text-gray-500 font-normal text-xl pb-[1cm] pt-[0.5cm]'>We know how difficult it can be to navigate through hundreds of policies. So we've designed this handly checklist to make sure you knowexactly what to look for in a good policy</li>
                        <li className='mb-[0.5cm]'>
                            <button className='text-lg  text-left px-7 py-3 font-normal bg-blue-500 text-white rounded-2xl w-[10cm] hover: transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-103 flex flex-row'>
                                <p className='font-bold pr-[0.1cm]'>Term </p>
                                Insurance Checklist
                            </button>
                        </li>

                        <li className='mb-[0.5cm]'>
                            <button className='text-lg  text-left px-7 py-3 font-normal bg-blue-500 text-white rounded-2xl w-[10cm] hover: transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-103 flex flex-row'>
                                <p className='font-bold pr-[0.1cm]'>Health </p>
                                Insurance Checklist
                            </button>
                        </li>
                        
                    </ul> 
                </div>
            </section>
            </article>
        </main>
    );
}

export default Checklist;