import React from 'react';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';

function Profile() {
    return(
        <main className='flex justify-between mx-[4cm] mb-[1cm]'>
            <section>
                <h1 className='text-4xl font-semibold text-gray-800 max-w-75'>Insurance Buying Experience</h1>
                <h2 className='text-lg font-normal text-gray-500 max-w-96 mt-[0.4cm]'>What customers experience throughout their insurance journey with Ditto versus other platforms</h2>
            </section>

            <section className='flex flex-col items-center '>
                <h1 className='text-3xl font-semibold text-gray-800'>Ditto</h1>
                <img src={profile1} alt="Ditto Experience" className='w-[4.5cm] mt-[0.4cm]'/>
            </section>
            <section className='flex flex-col items-center mr-[2cm]'>
                <h1 className='text-3xl font-semibold text-gray-800'>Other Platforms</h1>
                <img src={profile2} alt="Ditto Experience" className='w-[4.5cm] mt-[0.4cm]'/>
            </section>
        </main>
    );
}

export default Profile; 