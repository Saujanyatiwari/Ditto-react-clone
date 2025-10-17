import React from 'react'; 
import Card1 from '../assets/card1.png';
import Card2 from '../assets/card2.png'; 

function Offers() {
    return(
        <main className='bg-gray-100 mt-[2cm]'>
            <article className='flex justify-center mx-[3cm] py-[4cm]'>
                <section className='pr-[1cm]'>
                    <h1 className='text-blue-500 font-semibold tracking-widest'>DITTO OFFERS</h1>
                    <h1 className='text-5xl font-bold max-w-64 mt-[0.4cm]'>Personalized Advice on</h1>
                </section>

                <section className='px-[1cm]'>
                    <ul className='border border-slate-200 rounded-4xl p-[0.7cm] w-[11.5cm] h-[11.5cm] bg-white shadow-md'>

                        <li className='mb-[0.5cm]'>
                            <img className='w-[2.6cm] h-[1.1cm]'
                            src={Card1} 
                            alt="Card1" />
                        </li>

                        <li className='mb-[0.5cm] text-4xl text-gray-900 font-bold'>
                            Term Life Insurance
                        </li>

                        <li className='mb-[0.5cm] max-w-sm text-gray-900 font-semibold text-lg'>
                            Your family gets ₹1 crore or more in the event of your passing. Talk to an advisor now to understand, compare and finalize a policy that best suits your needs
                        </li>

                        <li className='mb-[0.5cm]'>
                            <button className='text-xl  text-left px-7 py-3 font-semibold bg-blue-500 text-white rounded-2xl w-[10cm] hover: transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-103'>Book a free call now</button>
                        </li>

                        <li className='mb-[0.5cm]'>
                            <button className='text-xl  text-left px-7 py-3 font-semibold bg-gray-200 text-green-700 rounded-2xl w-[10cm] hover: transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-103'>Chat with us on Whatsapp</button>
                        </li>

                    </ul>
                </section>

                <section>
                    <ul className='border-2 border-slate-200 rounded-4xl p-[0.7cm] w-[11.5cm] h-[11.5cm] bg-white shadow-md'>

                        <li className='mb-[0.5cm]'>
                            <img className='w-[2.6cm] h-[1.1cm]'
                            src={Card2} 
                            alt="Card2" />
                        </li>

                        <li className='mb-[0.5cm] text-4xl text-gray-900 font-bold'>
                            Health Life Insurance
                        </li>

                        <li className='mb-[0.5cm] max-w-sm text-gray-900 font-semibold text-lg'>
                            Your medical bills will be covered if you are hospitalized. Talk to an advisor now to explore, compare, and select a plan that best meets your health needs
                        </li>

                        <li className='mb-[0.5cm]'>
                            <button className='text-xl  text-left px-7 py-3 font-semibold bg-blue-500 text-white rounded-2xl w-[10cm] hover: transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-103'>Book a free call now</button>
                        </li>

                        <li className='mb-[0.5cm]'>
                            <button className='text-xl  text-left px-7 py-3 font-semibold bg-gray-200 text-green-700 rounded-2xl w-[10cm] hover: transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-103'>Chat with us on Whatsapp</button>
                        </li>

                    </ul>
                </section>
            </article>
        </main>
    );
}

export default Offers;