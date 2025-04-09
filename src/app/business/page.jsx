import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function page() {
  return (
    <>
    {/* HEADER */}
    <section className='bg-fixed w-[100%] lg:aspect-[5/2] grid lg:grid-cols-2 grid-cols-1 gap-5 bg-gradient-to-br from-[#aa1845] to-[#5c041e] text-gray-50'>
        <div className='ml-[8%] lg:h-[100%] h-[20rem] flex flex-col items-start justify-center py-[2rem] pr-[2rem]'>
            <p className='text-gray-300 font-medium text-xl'>OUR BUSINESSES</p>
            <h2 className='text-4xl leading-tight'>
                We empower our clients with new solutions that 
                help their businesses succeed and grow.
            </h2>
        </div>
        <div className='w-[100%] h-[100%] rounded-l-3xl bg-gray-400'></div>
    </section>


    <section className='w-[100%] bg-gray-100 py-[5rem]'>
        <div className='mx-auto overflow-hidden rounded-2xl w-[65%] py-[3rem] px-[2.5rem] bg-gradient-to-br from-[#aa1845] to-[#5c041e] text-gray-50'>
            <h3 className='text-3xl mb-6'>Support your business across the globe with commercial cards.</h3>
            <p className='text-xl mb-6'>
                Citi can help support your commercial cards needs in over 100 countries, with one of 
                the largest proprietary networks in the industry, using our global network and local expertise.
            </p>
            <Link href='#' className="group">
                <button className="group flex items-center justify-center gap-1 text-md px-6 py-3 cursor-pointer group-hover:drop-shadow-md text-white border border-white rounded-md transition-all ease-linear">
                    View More <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                </button>
            </Link>
        </div>
    </section>


    <section className='w-[100%]'>
        <div className='mx-auto lg:w-[94%] w-[90%] py-[4rem]'>
            <h1 className="text-[2.5rem] leading-tight font-bold tracking-1 mb-2">
                OUR BUSINESSES
            </h1>
            <hr className="border-b-4 border-[#aa1845] w-[10rem]" />
            <p className="text-xl font-light mt-6 mb-8 lg:w-[40%]">
                We offer products and services as one integrated 
                institution while treating our clients as one global relationship.
            </p>
            <section className='w-[100%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10'>
               {/* COL */}
                <div className='w-[100%] rounded-xl px-5 pt-5 pb-6 bg-gray-50 drop-shadow hover:drop-shadow-md ease-linear transition-all duration-150'>
                    <h3 className='text-2xl leaading-tight font-serif mb-6'>Commercial Real Estate</h3>
                    <p className='font-light mb-6'>
                        Capitalize on opportunities and prepare for challenges throughout the real estate cycle.
                    </p>
                    <Link href='/business/commercial'>
                        <button className='font-light group pb-2 flex items-center justify-center gap-2 hover:border-b hover:border-[#aa1845] hover:text-[#aa1845]'>
                            Read more 
                            <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                        </button>
                    </Link>
                </div>
               {/* COL */}
                <div className='w-[100%] rounded-xl px-5 pt-5 pb-6 bg-gray-50 drop-shadow hover:drop-shadow-md ease-linear transition-all duration-150'>
                    <h3 className='text-2xl leaading-tight font-serif mb-6'>Commercial Real Estate</h3>
                    <p className='font-light mb-6'>
                        Capitalize on opportunities and prepare for challenges throughout the real estate cycle.
                    </p>
                    <Link href='#'>
                        <button className='font-light group pb-2 flex items-center justify-center gap-2 hover:border-b hover:border-[#aa1845] hover:text-[#aa1845]'>
                            Read more 
                            <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                        </button>
                    </Link>
                </div>
               {/* COL */}
                <div className='w-[100%] rounded-xl px-5 pt-5 pb-6 bg-gray-50 drop-shadow hover:drop-shadow-md ease-linear transition-all duration-150'>
                    <h3 className='text-2xl leaading-tight font-serif mb-6'>Commercial Real Estate</h3>
                    <p className='font-light mb-6'>
                        Capitalize on opportunities and prepare for challenges throughout the real estate cycle.
                    </p>
                    <Link href='#'>
                        <button className='font-light group pb-2 flex items-center justify-center gap-2 hover:border-b hover:border-[#aa1845] hover:text-[#aa1845]'>
                            Read more 
                            <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                        </button>
                    </Link>
                </div>
               {/* COL */}
                <div className='w-[100%] rounded-xl px-5 pt-5 pb-6 bg-gray-50 drop-shadow hover:drop-shadow-md ease-linear transition-all duration-150'>
                    <h3 className='text-2xl leaading-tight font-serif mb-6'>Commercial Real Estate</h3>
                    <p className='font-light mb-6'>
                        Capitalize on opportunities and prepare for challenges throughout the real estate cycle.
                    </p>
                    <Link href='#'>
                        <button className='font-light group pb-2 flex items-center justify-center gap-2 hover:border-b hover:border-[#aa1845] hover:text-[#aa1845]'>
                            Read more 
                            <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                        </button>
                    </Link>
                </div>
               {/* COL */}
                <div className='w-[100%] rounded-xl px-5 pt-5 pb-6 bg-gray-50 drop-shadow hover:drop-shadow-md ease-linear transition-all duration-150'>
                    <h3 className='text-2xl leaading-tight font-serif mb-6'>Commercial Real Estate</h3>
                    <p className='font-light mb-6'>
                        Capitalize on opportunities and prepare for challenges throughout the real estate cycle.
                    </p>
                    <Link href='#'>
                        <button className='font-light group pb-2 flex items-center justify-center gap-2 hover:border-b hover:border-[#aa1845] hover:text-[#aa1845]'>
                            Read more 
                            <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                        </button>
                    </Link>
                </div>
               {/* COL */}
                <div className='w-[100%] rounded-xl px-5 pt-5 pb-6 bg-gray-50 drop-shadow hover:drop-shadow-md ease-linear transition-all duration-150'>
                    <h3 className='text-2xl leaading-tight font-serif mb-6'>Commercial Real Estate</h3>
                    <p className='font-light mb-6'>
                        Capitalize on opportunities and prepare for challenges throughout the real estate cycle.
                    </p>
                    <Link href='#'>
                        <button className='font-light group pb-2 flex items-center justify-center gap-2 hover:border-b hover:border-[#aa1845] hover:text-[#aa1845]'>
                            Read more 
                            <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                        </button>
                    </Link>
                </div>
               {/* COL */}
                <div className='w-[100%] rounded-xl px-5 pt-5 pb-6 bg-gray-50 drop-shadow hover:drop-shadow-md ease-linear transition-all duration-150'>
                    <h3 className='text-2xl leaading-tight font-serif mb-6'>Commercial Real Estate</h3>
                    <p className='font-light mb-6'>
                        Capitalize on opportunities and prepare for challenges throughout the real estate cycle.
                    </p>
                    <Link href='#'>
                        <button className='font-light group pb-2 flex items-center justify-center gap-2 hover:border-b hover:border-[#aa1845] hover:text-[#aa1845]'>
                            Read more 
                            <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                        </button>
                    </Link>
                </div>
               {/* COL */}
                <div className='w-[100%] rounded-xl px-5 pt-5 pb-6 bg-gray-50 drop-shadow hover:drop-shadow-md ease-linear transition-all duration-150'>
                    <h3 className='text-2xl leaading-tight font-serif mb-6'>Commercial Real Estate</h3>
                    <p className='font-light mb-6'>
                        Capitalize on opportunities and prepare for challenges throughout the real estate cycle.
                    </p>
                    <Link href='#'>
                        <button className='font-light group pb-2 flex items-center justify-center gap-2 hover:border-b hover:border-[#aa1845] hover:text-[#aa1845]'>
                            Read more 
                            <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                        </button>
                    </Link>
                </div>
               
        
            </section>
        </div>
    </section>

    {/*  */}
    <section className="w-[100%] bg-gray-50">
        <div className="mx-auto w-[100%] grid lg:grid-cols-2 grid-cols-1 gap-4 pt-[5rem] pb-[5rem]">
            <div className="pl-[8%] w-[100%] flex flex-col items-start justify-center lg:py-4 lg:pb-8 pb-16">
            <p className="uppercase px-2 mb-10 text-[#aa1845] font-semibold">Wealth Management</p>
            <h1 className="mb-10 px-2 leading-[3rem] text-[2.6rem]">Personalize your investment experience</h1>
            <p className="mb-12 pl-2 pr-4 font-light text-xl">
            Whether you want to work with a J.P. Morgan advisor to create a personalized 
            financial strategy or invest on your own with our powerful digital tools, 
            the answer is J.P. Morgan U.S. Wealth Management.
            </p>
            <Link href='#' className="group">
                <button className="mx-2 group flex items-center justify-center gap-1 text-lg px-6 py-3 cursor-pointer group-hover:drop-shadow-md text-[#aa1845] bg-white border border-[#aa1845] rounded-md transition-all ease-linear">
                View More <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                </button>
            </Link>
            </div>
            <div className="w-[100%] lg:rounded-l-2xl lg:aspect-[4/3] aspect-[5/3] bg-gray-400"></div>
        </div>
    </section>
   


    </>
  )
}
