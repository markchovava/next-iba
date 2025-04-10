"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { motion, AnimatePresence} from "motion/react"
import HeaderResponsive from './HeaderResponsive';
import { OpacityVariants } from '@/utils/MotionAnimations';
import Image from 'next/image';


export default function Header() {
    const [isActive, setIsActive] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
    })

  return (
    <>
    <HeaderResponsive />

    {/* MAIN */}
    <div className='lg:block hidden'>

        {/* Main */}
        <section className='relative z-[100] w-[100%] bg-white drop-shadow-md'>
            {/* TOP */}
            <div className='w-[94%] mx-auto flex justify-start items-center gap-8 py-3'>
                {/* LOGO AREA */}
                <div className='w-[10%] p-1  flex items-center justify-center'>
                    {/* <Image 
                        src={`/assets/img/logo.png`}
                        layout="fill" 
                        objectFit="contain" 
                        alt="Logo" />  */}
                    <Link href='/'>
                    <img 
                        src={`/assets/img/logo.png`}
                        className='w-[100%] object-fit'
                        alt="Logo" /> 
                    </Link>
                </div>
                <div className='w-[90%] h-[100%] flex justify-between items-center'>
                    <ul className='relative flex items-center justify-start'>
                        <li onMouseOver={() => setIsActive({one: !isActive?.one})}>
                            <Link 
                                href='/' 
                                onClick={() => setIsActive({one: true})}
                                className={`${isActive?.one == true ?? 'text-[#aa1845]'} px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear`}>
                                Home</Link>
                        </li>
                        <li>
                            <button 
                                onClick={() => setIsActive({two: !isActive?.two})} 
                                className='flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                About Us <FaAngleDown />
                            </button>
                        </li>
                        <li 
                            className='relative'>
                            <button 
                                onClick={() => setIsActive({three: !isActive?.three})}
                                className='flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                Businesses <FaAngleDown />
                            </button>
                        </li>


                        <li className='relative' 
                            onMouseLeave={() => setIsActive({four: false})} 
                            onMouseOver={() => setIsActive({four: true})} >
                            <button 
                                onClick={() => setIsActive({four: !isActive?.four})} 
                                className='flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                News <FaAngleDown />
                            </button>
                            <AnimatePresence>
                            { isActive?.four &&
                            <ul
                                variants={OpacityVariants}
                                initial='hidden'
                                animate='visible'
                                exit='hidden'
                                className='absolute top-[100%] text-sm w-[150%] rounded-b-xl bg-gray-50 drop-shadow-md flex flex-col items-start justify-start overflow-hidden'>
                                <Link href='/news' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li>Overview</li>
                                </Link>
                                <Link href='/news' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li>Press Release</li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li>Perspectives</li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li> Events</li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li>Media Resources</li>
                                </Link>
                            </ul>
                            }
                            </AnimatePresence>
                        </li>
                        <li className='relative' 
                            onMouseLeave={() => setIsActive({five: false})} 
                            onMouseOver={() => setIsActive({five: true})} >
                            <button 
                                onClick={() => setIsActive({five: !isActive?.five})} 
                                className='flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                Investors <FaAngleDown />
                            </button>
                            <AnimatePresence>
                            { isActive?.five &&
                            <motion.ul 
                                variants={OpacityVariants}
                                initial='hidden'
                                animate='visible'
                                exit='hidden'
                                className='absolute top-[100%] text-sm w-[120%] rounded-b-xl bg-gray-50 drop-shadow-md flex flex-col items-start justify-start overflow-hidden'>         
                                <Link href='/investor' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li> Overview</li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li> SEC Filings</li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li> Quarterly Earnings</li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li> Annual Reports and Proxy Statements</li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li> Other Regulatory Filings</li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li> Corporate Governance</li>
                                </Link>
                            </motion.ul>
                            }                   
                            </AnimatePresence>
                        </li>
                        <li className='relative'
                            onMouseOver={() => setIsActive({six: true})} 
                            onMouseLeave={() => setIsActive({six: false})} >
                            <button
                                onClick={() => setIsActive({six: !isActive?.six})}  
                                className='flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                Careers <FaAngleDown />
                            </button>
                            <AnimatePresence>
                                { isActive?.six &&
                                <motion.ul 
                                    variants={OpacityVariants}
                                    initial='hidden'
                                    animate='visible'
                                    exit='hidden'
                                    className='absolute top-[100%] drop__down text-sm w-[120%] rounded-b-xl bg-gray-50 drop-shadow-md flex flex-col items-start justify-start overflow-hidden'>
                                    <Link href='/career' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                        <li> Overview</li>
                                    </Link>
                                    <Link href='/career' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                        <li> Teams</li>
                                    </Link>
                                    <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                        <li> Why IBA?</li>
                                    </Link>
                                    <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                        <li> Students & Graduates </li>
                                    </Link>
                                </motion.ul>
                                }   
                            </AnimatePresence>
                        </li>
                    </ul>
                    {/*  */}
                    <ul className='flex items-center justify-end'>
                        <li className='relative flex items-center justify-center border-r-2 border-gray-300'>
                            <button
                                onClick={() => setIsActive({seven: !isActive?.seven})}
                                className='px-5 tracking-wide'>
                                <IoSearch />
                            </button>
                            <AnimatePresence>
                                { isActive?.seven &&
                                <motion.div 
                                    variants={OpacityVariants}
                                    initial='hidden'
                                    animate='visible'
                                    exit='hidden'
                                    className='absolute top-[110%] right-0 text-sm p-3 w-[500%] rounded-xl bg-gray-50 drop-shadow-md flex flex-col items-start justify-start'>
                                    <section className='w-[100%] flex items-center justify-start overflow-hidden border rounded-xl border-gray-500'>
                                        <input type='text' className='w-[90%] outline-none px-3 py-2' />
                                        <button className='w-[10%] h-[100%] flex items-center justify-center text-[#aa1845]'>
                                            <IoSearch />
                                        </button>
                                    </section>
                                </motion.div>
                                }
                            </AnimatePresence>
                            
                        </li>
                        <li className='relative'
                            onMouseLeave={() => setIsActive({eight: false})} 
                            onMouseOver={() => setIsActive({eight: true})}>
                            <button 
                                onClick={() => setIsActive({eight: !isActive?.eight})} 
                                className='flex items-center justify-center gap-1 px-5 hover:text-[#aa1845] tracking-wide'>
                                Account <FaAngleDown />
                            </button>
                            <AnimatePresence>
                                { isActive?.eight &&
                                <motion.ul 
                                    variants={OpacityVariants}
                                    initial='hidden'
                                    animate='visible'
                                    exit='hidden'
                                    className='absolute w-[110%] top-[100%] right-0 text-sm rounded-b-xl bg-gray-50 drop-shadow-md flex flex-col items-start justify-start overflow-hidden'>
                                    <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li> Profile</li>
                                    </Link>
                                    <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                        <li> Password </li>
                                    </Link>
                                    <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                        <li> Login</li>
                                    </Link>
                                </motion.ul>
                                }
                            </AnimatePresence>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* ABOUT US */}
        <AnimatePresence>
            {isActive?.two &&
            <motion.section 
                variants={OpacityVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                className='w-[100%] h-0 relative z-[90] '>
                <div className='mx-auto pt-2 w-[94%] rounded-2xl bg-gray-50 drop-shadow-md overflow-hidden'>
                    <div className='w-[100%] h-[100%] grid grid-cols-3 gap-8'>
                        {/* COL */}
                        <div className='w-[100%]'>
                            <div className='pt-[2rem] pb-6 px-4 bg-gray-100'>
                                <h1 className='text-4xl font-light mb-3'>About Us</h1>
                                <p className='font-light text-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Incidunt eveniet itaque laborum sequi voluptates fuga nisi 
                                    quidem asperiores blanditiis dolore sed, saepe, illum aliquid error.
                                </p>
                            </div>
                            <div className='w-[100%] overflow-hidden bg-gray-300 h-[15rem]'>
                                <div className="relative w-[100%] h-[100%]">
                                <Image
                                src='/assets/img/01.jpg'
                                alt="Full Cover Image"
                                layout="fill"
                                objectFit="cover"
                                />
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] h-[100%] flex items-center justify-start'>
                            <nav className='px-4'>
                                <Link href='/about'>
                                    <h2 className='font-semibold tracking-1 mb-4 text-shadow-gray-700 transition-all ease-linear duration-200 hover:underline hover:text-[#aa1845]'>
                                        Overview
                                    </h2>
                                </Link>
                                <ul className='font-light'>
                                    <li className='mb-1'>
                                        <Link 
                                            href='/contact' 
                                            className='px-0 text-shadow-gray-700 transition-all ease-linear duration-200 hover:underline hover:text-[#aa1845]'>
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li className='mb-1'>
                                    <Link 
                                        href='#' 
                                        className='px-0 text-shadow-gray-700 transition-all ease-linear duration-200 hover:underline hover:text-[#aa1845]'>
                                        Leadership</Link>
                                    </li>
                                    <li className='mb-1'>
                                    <Link 
                                        href='#' 
                                        className='px-0 text-shadow-gray-700 transition-all ease-linear duration-200 hover:underline hover:text-[#aa1845]'>
                                        Strengthening Community</Link>
                                    </li>
                                    <li className='mb-1'>
                                    <Link 
                                        href='#' 
                                        className='px-0 text-shadow-gray-700 transition-all ease-linear duration-200 hover:underline hover:text-[#aa1845]'>
                                        About Us</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='w-[100%] h-[100%] flex items-center justify-start'>
                            <nav className='px-4'>
                                <h2 className='font-semibold tracking-1 mb-4'>Other Links</h2>
                                <ul className='font-light'>
                                    <li className='mb-1'>
                                        <Link 
                                            href='#' 
                                            className='px-0 text-shadow-gray-700 hover:underline hover:text-[#aa1845]'>
                                            Heritage
                                        </Link>
                                    </li>
                                    <li className='mb-1'>
                                    <Link 
                                        href='#' 
                                        className='px-0 text-shadow-gray-700 hover:underline hover:text-[#aa1845]'>
                                        Research</Link>
                                    </li>
                                    <li className='mb-1'>
                                    <Link 
                                        href='#' 
                                        className='px-0 text-shadow-gray-700 hover:underline hover:text-[#aa1845]'>
                                        Management</Link>
                                    </li>                    
                                    <li className='mb-1'>
                                    <Link 
                                        href='#' 
                                        className='px-0 text-shadow-gray-700 hover:underline hover:text-[#aa1845]'>
                                        Operations</Link>
                                    </li>                    
                                </ul>
                                
                            </nav>
                        </div>
                    </div>
                </div>
            </motion.section>
            }
        </AnimatePresence>

        {/* BUSINESS */}
        <AnimatePresence>
            {isActive?.three &&
            <motion.section 
                variants={OpacityVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                className='w-[100%] h-0 relative z-[90]'>
                <div className='mx-auto w-[94%] pt-2 rounded-2xl bg-gray-50 drop-shadow-md overflow-hidden'>
                    <div className='w-[100%] grid grid-cols-3 gap-8'>
                        {/* COL */}
                        <div className='w-[100%]'>
                            <div className='pt-[2rem] pb-6 px-4 bg-gray-100'>
                                <h1 className='text-4xl font-light mb-3'>Businesses</h1>
                                <p className='font-light text-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Incidunt eveniet itaque laborum sequi voluptates fuga nisi 
                                    quidem asperiores blanditiis dolore sed, saepe, illum aliquid error.
                                </p>
                            </div>
                            <div className='w-[100%] overflow-hidden bg-gray-300 h-[15rem]'>
                            <div className="relative w-[100%] h-[100%]">
                                <Image
                                    src='/assets/img/a01.jpg'
                                    alt="Full Cover Image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] h-[100%] flex items-center justify-start'>
                            <nav className='px-4'>
                                <Link href='/business'>
                                    <h2 className='font-semibold tracking-1 mb-4 text-shadow-gray-700 transition-all ease-linear duration-200 hover:underline hover:text-[#aa1845]'>
                                        Overview
                                    </h2>
                                </Link>

                                <ul className='font-light'>
                                    <li className='mb-1'>
                                        <Link 
                                            href='#' 
                                            className='px-0 text-shadow-gray-700 transition-all ease-linear duration-200 hover:underline hover:text-[#aa1845]'>
                                            Services
                                        </Link>
                                    </li>
                                    <li className='mb-1'>
                                    <Link 
                                        href='#' 
                                        className='px-0 text-shadow-gray-700 transition-all ease-linear duration-200 hover:underline hover:text-[#aa1845]'>
                                        Markets</Link>
                                    </li>
                                    <li className='mb-1'>
                                    <Link 
                                        href='#' 
                                        className='px-0 text-shadow-gray-700 transition-all ease-linear duration-200 hover:underline hover:text-[#aa1845]'>
                                        Banking and International</Link>
                                    </li>
                                    <li className='mb-1'>
                                    <Link 
                                        href='#' 
                                        className='px-0 text-shadow-gray-700 transition-all ease-linear duration-200 hover:underline hover:text-[#aa1845]'>
                                        Wealth</Link>
                                    </li>
                                    <li className='mb-1'>
                                    <Link 
                                        href='#' 
                                        className='px-0 text-shadow-gray-700 transition-all ease-linear duration-200 hover:underline hover:text-[#aa1845]'>
                                        Personal Banking</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </motion.section>
            }
        </AnimatePresence>

    </div>

    

    
    </>
  )
}
