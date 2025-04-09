import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <>
    <section className='w-[100%] bg-gradient-to-br from-[#aa1845] to-[#750b2b] text-gray-100 font-light pt-[5rem] '>
        <div className='pb-[2rem] lg:w-[94%] w-[90%] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg;gap-6 gap-8 '>
            <section className='w-[100%]'>
                <Link href='/'>
                    <div className='lg:mx-0 mx-auto lg:w-[70%] w-[40%] overflow-hidden'>
                        <img 
                            src={`/assets/img/iba_logo_white.png`}
                            className='w-[100%] object-fit'
                            alt="Logo" /> 
                    </div>
                </Link>
            </section>
            <section className='w-[100%]'>
                <ul>
                    <Link href='#'>
                        <li className='ease-linear transition-all duration-200 uppercase font-semibold hover:underline mb-3'>
                            About Us
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                            Strategy
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                            Leadership
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                            Contact Details
                        </li>
                    </Link>
                    <li className='w-[100%] h-[1.5rem]'></li>
                    <Link href='#'>
                        <li className='ease-linear transition-all duration-200 uppercase font-semibold hover:underline mb-3'>
                        Businesses
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        Services
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        Markets
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        Banking and International
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        Wealth
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        Personal Banking
                        </li>
                    </Link>
                </ul>
            </section>
            <section className='w-[100%]'>
                <ul>
                    <Link href='#'>
                        <li className='ease-linear transition-all duration-200 uppercase font-semibold hover:underline mb-3'>
                        News
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        Quarterly Earnings
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        Events and Presentations
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        Annual Reports and Proxy Statements
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        SEC Filings
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        Stockholder Services
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        Other Regulatory Filings
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        Stockholder Services
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        Corporate Governance
                        </li>
                    </Link>
                </ul>
            </section>
            <section className=''>
                <div className='uppercase font-semibold mb-3'>
                    Social Media Links
                </div>
                <div className='w-[100%] flex items-center justify-start gap-3 text-gray-100'>
                    <a href="https://www.facebook.com/381482548389147" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaFacebook className="text-[1.5rem]" />
                    </a>
                    <a href="https://wa.me/27683776585" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaWhatsapp className="text-[1.5rem]" />
                    </a>
                    <a href="mailto:info@investmentbankofafrica.coma" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaEnvelope className="text-[1.5rem]" />
                    </a>
                    <a href="https://www.linkedin.com/company/investment-bank-ofafrica/" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaLinkedin className="text-[1.5rem]" />
                    </a>
                    <a href="https://www.instagram.com/investment_bankof_africa?igsh=OXY4NWd5OTNpbnAz&utm_source=qr" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaInstagram className="text-[1.5rem]" />
                    </a>
                    <a href="http://www.x.com/IBA_Africa" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaXTwitter className="text-[1.5rem]" />
                    </a>
                    <a href="http://www.tiktok.com/@investmentbankofafrica" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaTiktok className="text-[1.5rem]" />
                    </a>
                </div>
            </section>
        </div>

        <div className='lg:w-[94%] w-[90%] mx-auto pb-[3rem] text-gray-100 flex lg:flex-row flex-col lg:items-center items-start lg:justify-between justify-start gap-6 font-light text-sm'>
            <ul className='flex lg:flex-row flex-col lg:items-center justify-start gap-3'>
                <Link href='#' className='hover:underline ease-linear transition-all duration-150'>
                    <li>Privacy</li>
                </Link>
                <li className='hidden lg:inline'>|</li>
                <Link href='#' className='hover:underline ease-linear transition-all duration-150'>
                    <li>Terms of Use</li>
                </Link>
                <li className='hidden lg:inline'>|</li>
                <Link href='#' className='hover:underline ease-linear transition-all duration-150'>
                    <li>Accessibility</li>
                </Link>
                <li className='hidden lg:inline'>|</li>
                <Link href='#' className='hover:underline ease-linear transition-all duration-150'>
                    <li>Cookies Policy</li>
                </Link>
                <li className='hidden lg:inline'>|</li>
                <Link href='#' className='hover:underline ease-linear transition-all duration-150'>
                    <li>Regulatory Disclosures</li>
                </Link>
            </ul>
            <p className='leading-tight'>
                &copy; {new Date().getFullYear()} JPMorgan Chase & Co. All rights reserved.
            </p>
        </div>

    </section>
    </>
  )
}





