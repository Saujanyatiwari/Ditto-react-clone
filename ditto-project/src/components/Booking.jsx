import React from 'react';

function Booking(){
    return(
        <main className='flex flex-row justify-between mx-[5cm] mt-[2cm] mb-[2cm]'>
            <div className='text-4xl font-semibold text-gray-900 max-w-80'>
                Choose Ditto for a well-guided insurance purchase
            </div>
            <div className='mt-[1cm]'>
                <button className='text-xl  text-left px-7 py-3 font-semibold bg-blue-500 text-white rounded-2xl w-[10cm] hover: transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-103'>Book a free call now</button>
            </div>

            <div className='mt-[1cm]'>
                <button className='text-xl  text-left px-7 py-3 font-semibold bg-gray-200 text-green-700 rounded-2xl w-[10cm] hover: transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-103'>Chat with us on Whatsapp</button>
            </div>
        </main>
    );
}

export default Booking;