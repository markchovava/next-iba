"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence} from "motion/react"
import { OpacityVariants } from '@/utils/MotionAnimations';



export default function HeaderResponsive() {
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
    const [isToggle, setIsToggle] = useState(false)


  return (
    <>
    <div className='lg:hidden block'>
        <section className='relative w-[100%]'>
            <div className='mx-auto w-[94%] flex items-center justify-between'>
                <div className='w-[8rem] flex items-center justify-center'>
                <Link href='/'>
                    <img 
                        src={`/assets/img/logo.png`}
                        className='w-[100%] object-fit'
                        alt="Logo" /> 
                </Link>
                </div>
                <div>
                <AnimatePresence>
                    {isToggle ? 
                    <motion.button 
                        variants={OpacityVariants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        onClick={() => setIsToggle(!isToggle)}>
                        <IoCloseSharp className='text-2xl' />
                    </motion.button>
                    :
                    <motion.button 
                        variants={OpacityVariants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        onClick={() => setIsToggle(!isToggle)}>
                        <GiHamburgerMenu className='text-2xl' />
                    </motion.button>
                    }
                </AnimatePresence>
                </div>
            </div>
        </section>
        <AnimatePresence>
            {isToggle &&
            <motion.section 
                variants={OpacityVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                className='relative z-[100] w-[100%] bg-white drop-shadow-md'>
                {/*  */}
                <motion.div
                    className='w-[100%] h-[100%] py-[2rem] flex flex-col justify-start items-center'>
                    <ul className='relative flex flex-col items-center justify-start gap-4'>
                        <li>
                            <Link 
                                href='/' 
                                onClick={() => setIsActive({one: true})}
                                className={`${isActive?.one == true ?? 'text-[#aa1845]'} px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear`}>
                                Home</Link>
                        </li>
                        <li>
                            <button 
                                onClick={() => setIsActive({two: !isActive?.two})} 
                                className='w-[100%] flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                About Us <FaAngleDown />
                            </button>
                            { isActive?.two &&
                            <ul className='text-sm w-[100vw] rounded-b-xl bg-gray-50 drop-shadow flex flex-col items-start justify-start gap-2'>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                <li className='w-[100%] flex items-center justify-center'>
                                    Nav 1
                                </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                <li className='w-[100%] flex items-center justify-center'>
                                    Nav 1
                                </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                <li className='w-[100%] flex items-center justify-center'>
                                    Nav 1 </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li className='w-[100%] flex items-center justify-center'>
                                        Nav 1
                                    </li>
                                </Link>
                            </ul>
                            }   
                        </li>
                        <li 
                            className='relative'>
                            <button 
                                onClick={() => setIsActive({three: !isActive?.three})}
                                className='w-[100%] flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                Businesses <FaAngleDown />
                            </button>
                            {isActive?.three &&
                            <ul className='text-sm w-[100vw] bg-gray-50 drop-shadow flex flex-col items-start justify-start gap-2'>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                <li className='w-[100%] flex items-center justify-center'>
                                    Nav 1
                                </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                <li className='w-[100%] flex items-center justify-center'>
                                    Nav 1
                                </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                <li className='w-[100%] flex items-center justify-center'>
                                    Nav 1 </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li className='w-[100%] flex items-center justify-center'>
                                        Nav 1
                                    </li>
                                </Link>
                            </ul>
                            }
                        </li>
                        <li className='relative'>
                            <button 
                                onClick={() => setIsActive({four: !isActive?.four})} 
                                className='w-[100%] flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                News <FaAngleDown />
                            </button>
                            { isActive?.four &&
                            <ul className='text-sm w-[100vw] bg-gray-50 drop-shadow flex flex-col items-start justify-start gap-2'>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                <li className='w-[100%] flex items-center justify-center'>
                                    Nav 1
                                </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                <li className='w-[100%] flex items-center justify-center'>
                                    Nav 1
                                </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                <li className='w-[100%] flex items-center justify-center'>
                                    Nav 1 </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li className='w-[100%] flex items-center justify-center'>
                                        Nav 1
                                    </li>
                                </Link>
                            </ul>
                            }
                        </li>
                        <li className='relative'>
                            <button 
                                onClick={() => setIsActive({five: !isActive?.five})} 
                                className='w-[100%] flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                Investors <FaAngleDown />
                            </button>
                            { isActive?.five &&
                            <ul className='text-sm w-[100vw] bg-gray-50 drop-shadow flex flex-col items-start justify-start gap-2'>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li className='w-[100%] flex items-center justify-center'>
                                        Nav 1
                                    </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li className='w-[100%] flex items-center justify-center'>
                                        Nav 1
                                    </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li className='w-[100%] flex items-center justify-center'>
                                        Nav 1 
                                    </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li className='w-[100%] flex items-center justify-center'>
                                        Nav 1
                                    </li>
                                </Link>
                            </ul>
                            }                   
                        </li>
                        <li className='relative' >
                            <button
                                onClick={() => setIsActive({six: !isActive?.six})}  
                                className='w-[100%] flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                Careers <FaAngleDown />
                            </button>
                            { isActive?.six &&
                            <ul className='text-sm w-[100vw] bg-gray-50 drop-shadow flex flex-col items-start justify-start gap-2'>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                <li className='w-[100%] flex items-center justify-center'>
                                    Nav 1
                                </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li className='w-[100%] flex items-center justify-center'>
                                        Nav 1
                                    </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li className='w-[100%] flex items-center justify-center'>
                                        Nav 1 
                                    </li>
                                </Link>
                                <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li className='w-[100%] flex items-center justify-center'>
                                        Nav 1
                                    </li>
                                </Link>
                            </ul>
                            }   
                        </li>
                        <li className='w-[100vw] relative' >
                            <button
                                onClick={() => setIsActive({eight: !isActive?.eight})}  
                                className='w-[100%] flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                Account <FaAngleDown />
                            </button>
                            { isActive?.eight &&
                            <ul className='text-sm w-[100vw] bg-gray-50 drop-shadow flex flex-col items-start justify-start gap-2'>
                            <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                            <li className='w-[100%] flex items-center justify-center'>
                                Nav 1
                            </li>
                            </Link>
                            <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                <li className='w-[100%] flex items-center justify-center'>
                                    Nav 1
                                </li>
                            </Link>
                            <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                <li className='w-[100%] flex items-center justify-center'>
                                    Nav 1 
                                </li>
                            </Link>
                            <Link href='#' className='w-[100%] px-4 py-3 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                <li className='w-[100%] flex items-center justify-center'>
                                    Nav 1
                                </li>
                            </Link>
                            </ul>
                            }   
                        </li>
                    </ul>

                    <section className='mt-6 mb-8 mx-auto w-[90%] flex items-center justify-start overflow-hidden border rounded-xl border-gray-300'>
                        <input type='text' className='w-[90%] outline-none px-3 py-3' />
                        <button className='w-[10%] cursor-pointer h-[100%] flex items-center justify-center text-[#aa1845]'>
                            <IoSearch />
                        </button>
                    </section>
                    
                </motion.div>
            </motion.section>
            }
        </AnimatePresence>
    </div>

    
    

    
    </>
  )
}
