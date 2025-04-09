import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { IoSearch } from "react-icons/io5";


export default function page() {
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
  return (
    <>
    {/* HEADER */}
    <section className='bg-fixed parallax-layer w-[100%] lg:aspect-[5/2] grid lg:grid-cols-2 grid-cols-1 gap-5 bg-gradient-to-br from-[#aa1845] to-[#5c041e] text-gray-50'>
        <div className='ml-[8%] lg:h-[100%] h-[20rem] flex flex-col items-start justify-center py-[2rem] pr-[2rem]'>
            <p className='text-gray-300 font-medium text-xl mb-2'>CONTACT DETAILS</p>
            <h2 className='text-2xl leading-tight'>
            For customer service, careers, media and more, please see the contact information below.
            For general inquiries regarding, please call (123) 34543232.
            </h2>
        </div>
        <div className='w-[100%] h-[100%] rounded-l-3xl bg-gray-400'></div>
    </section>

    <section className='w-[100%] grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1'>
        <div className='col-span-1 pl-[8%] py-[4rem]'>
            <ul className='px-2 border-l border-[#aa1845]'>
                <Link href='#' className=' group'>
                <li className='px-4 pb-3 group-hover:underline group-hover:text-[#aa1845] group-hover:font-semibold group-hover:translate-x-2 ease-linear transition-all'>
                Business Inquiries
                </li>
                </Link>
                <Link href='#' className=' group'>
                <li className='px-4 pb-3 group-hover:underline group-hover:text-[#aa1845] group-hover:font-semibold group-hover:translate-x-2 ease-linear transition-all'>
                Customer Service
                </li>
                </Link>
                <Link href='#' className=' group'>
                <li className='px-4 pb-3 group-hover:underline group-hover:text-[#aa1845] group-hover:font-semibold group-hover:translate-x-2 ease-linear transition-all'>
                Careers
                </li>
                </Link>
                <Link href='#' className=' group'>
                <li className='px-4 pb-3 group-hover:underline group-hover:text-[#aa1845] group-hover:font-semibold group-hover:translate-x-2 ease-linear transition-all'>
                Media Center
                </li>
                </Link>
                <Link href='#' className=' group'>
                <li className='px-4 pb-3 group-hover:underline group-hover:text-[#aa1845] group-hover:font-semibold group-hover:translate-x-2 ease-linear transition-all'>
                Other Inquiries
                </li>
                </Link>
            </ul>
        </div>
        <div className='lg:col-span-4 md:col-span-3 col-span-1 bg-gray-100 md:pr-[8%] py-[4rem] md:pl-[5rem] px-[2rem]'>
           
            {/*  */}
            <div className='w-[100%] flex flex-col gap-6 mb-[1rem]'>
                {/*  */}
                <section className='w-[100%] py-10 px-12 bg-white drop-shadow hover:drop-shadow-lg ease-linear transition-all flex items-center justify-between'>
                    <div className=''>
                        <h3 className='text-2xl font-serif leading-tight'>
                        Accounts Inquiries
                        </h3>
                        <p className='text-sm'>accounts@iba.com</p>
                    </div>
                    <div>
                        <Link href='#' className='group'>
                        <button className='flex items-start justify-center gap-2 duration-150 ease-linear transition-all hover:text-[#aa1845]'>
                            <span className='pb-2 duration-150 ease-linear transition-all group-hover:border-b-2 border-[#aa1845]'>
                                View more
                            </span>
                            <FaAngleRight className='mt-1 duration-150 ease-linear transition-all group-hover:translate-x-1' />
                        </button>
                        </Link>
                    </div>
                </section>
                {/*  */}
                <section className='w-[100%] py-10 px-12 bg-white drop-shadow hover:drop-shadow-lg ease-linear transition-all flex items-center justify-between'>
                    <div className=''>
                        <h3 className='text-2xl font-serif leading-tight'>
                            Business Inquiries
                        </h3>
                        <p className='text-sm'>business@iba.com</p>
                    </div>
                    <div>
                        <Link href='#' className='group'>
                        <button className='flex items-start justify-center gap-2 duration-150 ease-linear transition-all hover:text-[#aa1845]'>
                            <span className='pb-2 duration-150 ease-linear transition-all group-hover:border-b-2 border-[#aa1845]'>
                                View more
                            </span>
                            <FaAngleRight className='mt-1 duration-150 ease-linear transition-all group-hover:translate-x-1' />
                        </button>
                        </Link>
                    </div>
                </section>
                {/*  */}
                <section className='w-[100%] py-10 px-12 bg-white drop-shadow hover:drop-shadow-lg ease-linear transition-all flex items-center justify-between'>
                    <div className=''>
                        <h3 className='text-2xl font-serif leading-tight'>
                            Front Office Reception
                        </h3>
                        <p className='text-sm'>reception@iba.com</p>
                    </div>
                    <div>
                        <Link href='#' className='group'>
                        <button className='flex items-start justify-center gap-2 duration-150 ease-linear transition-all hover:text-[#aa1845]'>
                            <span className='pb-2 duration-150 ease-linear transition-all group-hover:border-b-2 border-[#aa1845]'>
                                View more
                            </span>
                            <FaAngleRight className='mt-1 duration-150 ease-linear transition-all group-hover:translate-x-1' />
                        </button>
                        </Link>
                    </div>
                </section>
                {/*  */}
                <section className='w-[100%] py-10 px-12 bg-white drop-shadow hover:drop-shadow-lg ease-linear transition-all flex items-center justify-between'>
                    <div className=''>
                        <h3 className='text-2xl font-serif leading-tight'>
                        Media Center
                        </h3>
                        <p className='text-sm'>media@iba.com</p>
                    </div>
                    <div>
                        <Link href='#' className='group'>
                        <button className='flex items-start justify-center gap-2 duration-150 ease-linear transition-all hover:text-[#aa1845]'>
                            <span className='pb-2 duration-150 ease-linear transition-all group-hover:border-b-2 border-[#aa1845]'>
                                Read more
                            </span>
                            <FaAngleRight className='mt-1 duration-150 ease-linear transition-all group-hover:translate-x-1' />
                        </button>
                        </Link>
                    </div>
                </section>
                {/*  */}
                <section className='w-[100%] py-10 px-12 bg-white drop-shadow hover:drop-shadow-lg ease-linear transition-all flex items-center justify-between'>
                    <div className=''>
                        <h3 className='text-2xl font-serif leading-tight'>
                        Other Inquiries
                        </h3>
                        <p className='text-sm'>
                            inquiries@iba.com
                        </p>
                    </div>
                    <div>
                        <Link href='#' className='group'>
                        <button className='flex items-start justify-center gap-2 duration-150 ease-linear transition-all hover:text-[#aa1845]'>
                            <span className='pb-2 duration-150 ease-linear transition-all group-hover:border-b-2 border-[#aa1845]'>
                                Read more
                            </span>
                            <FaAngleRight className='mt-1 duration-150 ease-linear transition-all group-hover:translate-x-1' />
                        </button>
                        </Link>
                    </div>
                </section>
                {/*  */}
                <section className='w-[100%] py-10 px-12 bg-white drop-shadow hover:drop-shadow-lg ease-linear transition-all flex items-center justify-between'>
                    <div className=''>
                        <h3 className='text-2xl font-serif leading-tight'>
                        Customer Service
                        </h3>
                        <p className='text-sm'>April 07, 2025</p>
                    </div>
                    <div>
                        <Link href='#' className='group'>
                        <button className='flex items-start justify-center gap-2 duration-150 ease-linear transition-all hover:text-[#aa1845]'>
                            <span className='pb-2 duration-150 ease-linear transition-all group-hover:border-b-2 border-[#aa1845]'>
                                Read more
                            </span>
                            <FaAngleRight className='mt-1 duration-150 ease-linear transition-all group-hover:translate-x-1' />
                        </button>
                        </Link>
                    </div>
                </section>
            </div>

        </div>
    </section>
    </>
  )
}
