import React from 'react';
import profile1 from '../assets/profile1.png'
import symbol1 from '../symbols/symbol1.png'
import symbol2 from '../symbols/symbol2.png'
import symbol3 from '../symbols/symbol3.png'
import symbol4 from '../symbols/symbol4.png'
import symbol5 from '../symbols/symbol5.png'
import symbol6 from '../symbols/symbol6.png'
import symbol7 from '../symbols/symbol7.png'
import symbol8 from '../symbols/symbol8.png'
import symbol9 from '../symbols/symbol9.png'
import symbol10 from '../symbols/symbol10.png'
import symbol11 from '../symbols/symbol11.png'








function Working() {
    return(
        <main className='bg-gray-100 flex flex-col'>
            <section className='flex flex-row justify-between mx-[5cm] mt-[2cm]'>
                <div>
                    <h1 className='text-2xl font-semibold text-gray-900 mb-[0.5cm]'>Shortlisting</h1>
                    <h1 className='text-lg font-normal text-gray-400 max-w-80'>Identifying a policy that best suits your financial & medical needs</h1>
                </div>

                <div className='px-5 py-8 bg-white rounded-2xl w-[10cm]'>
                    <ul>
                        <li>
                            <img className='pb-4'
                            src={symbol1} 
                            alt='error'/>
                        </li>

                        <li className='text-xl text-gray-800 max-w-96 '>
                            Get 2-3 carefully selected policy recommendations, backed by clear explanations tailored to your needs
                        </li>
                    </ul>
                </div>

                <div className='px-5 py-8 bg-gray-200 rounded-2xl w-[10cm]'>
                    <ul>
                        <li>
                            <img className='pb-4'
                            src={symbol2} 
                            alt='error'/>
                        </li>

                        <li className='text-xl text-gray-800 max-w-96 '>
                            Minimal or no human guidance, with policies recommended based on sales targets
                        </li>
                    </ul>
                </div>
            </section>

            <div className='border-t-2 border-gray-200 mx-[3cm] my-[2cm]' ></div>

                {/* next section */}

            <section className='flex flex-row justify-between mx-[5cm]'>
                <div>
                    <h1 className='text-2xl font-semibold text-gray-900 mb-[0.5cm]'>Application & Payment</h1>
                    <h1 className='text-lg font-normal text-gray-400 max-w-80'>The most critical step – ensuring your application is accurate</h1>
                </div>

                <div className='px-5 py-6 bg-white rounded-2xl w-[10cm]'>
                    <ul>
                        <li>
                            <img className='pb-2'
                            src={symbol3} 
                            alt='error'/>
                        </li>

                        <li className='text-xl text-gray-800 max-w-96 '>
                            Expert assistance with your application
                        </li>

                        <li className='border-t-1 border-gray-200 my-[0.5cm]'></li>

                        <li className='flex flex-row'>
                            <img className='h-[2cm]'
                            src={symbol4} alt='error'/>
                            <h1 className='text-xl text-gray-800 max-w-50 ml-[1cm]'>Clear do's and don'ts for declarations</h1>
                        </li>

                        <li className='border-t-1 border-gray-200 my-[0.5cm]'></li>

                        <li className='flex flex-row'>
                            <h1 className='text-xl text-gray-800 max-w-46'>Help you avoid common mistakes</h1>
                            <img className='h-[1.5cm] ml-[1.5cm]'
                            src={symbol5} alt='error'/>
                        </li>

                        <li className='border-t-1 border-gray-200 my-[0.5cm]'></li>

                        <li>
                            <img className='pb-2 h-15'
                            src={profile1} 
                            alt='error'/>
                        </li>

                        <li className='text-xl text-gray-800 max-w-70 '>
                            Advisor manages insurer coordination
                        </li>
                    </ul>
                </div>


                <div className='px-5 py-8 bg-gray-200 rounded-2xl w-[10cm]'>
                    <ul>
                        <li>
                            <img className='pb-4'
                            src={symbol2} 
                            alt='error'/>
                        </li>

                        <li className='text-xl text-gray-800 max-w-96 mb-[1cm]'>
                            No guidance provided
                        </li>

                        <li className='text-xl text-gray-800 max-w-96 mb-[1cm] '>
                            Higher risk of rejection with your application
                        </li>

                        <li className='text-xl text-gray-800 max-w-96 mb-[3cm]'>
                           Mistakes disrupt the claims process
                        </li>

                        <li className='border-t-1 border-gray-400 my-[0.5cm]'></li>

                        <li>
                            <img className='pb-4'
                            src={symbol6} 
                            alt='error'/>
                        </li>

                        <li className='text-xl text-gray-800 max-w-96'>
                            No insurer coordination
                        </li>

                    </ul>
                </div>
            </section>

            <div className='border-t-2 border-gray-200 mx-[3cm] my-[2cm]' ></div>

            {/* another section */}
            <section className='flex flex-row justify-between mx-[5cm] mb-[2cm]'>
                <div>
                    <h1 className='text-2xl font-semibold text-gray-900 mb-[0.5cm]'>Policy Issuance</h1>
                    <h1 className='text-lg font-normal text-gray-400 max-w-80'>Here, the insurer evaluates your application</h1>
                </div>

                <div className='px-5 py-8 bg-white rounded-2xl w-[10cm]'>
                    <ul>
                        <li>
                            <img className='pb-2'
                            src={symbol7} 
                            alt='error'/>
                        </li>

                        <li className='text-xl text-gray-800 max-w-96  pb-8'>
                           Assistance with medical tests
                        </li>

                        <li>
                            <img className='pb-2'
                            src={symbol8} 
                            alt='error'/>
                        </li>

                        <li className='text-xl text-gray-800 max-w-96 pb-10 '>
                          Evaluation of counteroffers
                        </li>

                        <li>
                            <img className='pb-2'
                            src={symbol9} 
                            alt='error'/>
                        </li>

                        <li className='text-xl text-gray-800 max-w-96  pb-9'>
                           Resolution of any issues
                        </li>

                        <li>
                            <img className='pb-2'
                            src={symbol10} 
                            alt='error'/>
                        </li>

                        <li className='text-xl text-gray-800 max-w-96 '>
                           Extensive support for claims
                        </li>
                    </ul>
                </div>

                <div className='px-5 py-8 bg-gray-200 rounded-2xl w-[10cm]'>
                    <ul>
                        <li>
                            <img className='pb-4'
                            src={symbol11} 
                            alt='error'/>
                        </li>

                         <li className='text-xl text-gray-800 max-w-80 mb-[0.7cm]'>
                            No assistance provided
                        </li>
                         <li className='text-xl text-gray-800 max-w-70 mb-[0.7cm]'>
                            Rejections require extensive follow-up
                        </li>
                         <li className='text-xl text-gray-800 max-w-80 mb-[0.7cm]'>
                            Re-application is slow and tedious
                        </li>
                         <li className='text-xl text-gray-800 max-w-80 mb-[0.7cm]'>
                            No support for claims
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Working;