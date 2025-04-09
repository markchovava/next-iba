import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function page() {
  return (
    <>
    <section className='bg-fixed w-[100%] lg:aspect-[5/2] grid lg:grid-cols-2 grid-cols-1 gap-5 bg-gradient-to-br from-[#aa1845] to-[#5c041e] text-gray-50'>
        <div className='ml-[8%] lg:h-[100%] h-[20rem] flex flex-col items-start justify-center py-[2rem] pr-[2rem]'>
            <p className='text-gray-300 font-medium text-xl'>ABOUT US</p>
            <h2 className='text-4xl leading-tight'>A bank built for a world of complexity</h2>
        </div>
        <div className='w-[100%] h-[100%] rounded-l-3xl bg-gray-400'></div>
    </section>


    <section className='w-[100%]'>
        <div className='mx-auto w-[70%] py-[5rem]'>
            <p className='font-light text-gray-800 text-2xl'>
                We live in an increasingly complex world. Companies these days are either born global or 
                are going global at record speed. Business and geopolitics are forging an entirely new 
                dynamic and consumers now expect financial services to be a seamless part of their digital 
                lives. Citi is a bank that's uniquely positioned for this moment. Through our vast global 
                network and our on-the-ground expertise, we can connect the dots, anticipate change and 
                empathize the needs of our clients in ways that other banks simply cannot.
            </p>
        </div>
    </section>


    <section className='w-[100%]'>
        <div className='mx-auto overflow-hidden rounded-3xl lg:p-[3rem] lg:pb-[3rem] p-[2.5rem] pb-[2.5rem] lg:w-[65%] w-[90%] text-gray-100 bg-gradient-to-br from-[#aa1845] to-[#5c041e]'>
            <div className='w-[100%] rounded-2xl lg:aspect-[5/2] aspect-[5/3] bg-gray-300'></div>
            <div className='pt-8'>
                <h3 className='text-4xl mb-4'>Our Mission</h3>
                <p className='text-xl leading-tight'>
                    Citi's mission is to serve as a trusted partner to our clients by responsibly providing financial 
                    services that enable growth and economic progress. We have set expectations for how we must act 
                    to bring our mission to life. These expectations are at the heart of our Leadership Principles - 
                    we take ownership, we deliver with pride and we succeed together.
                </p>
            </div>
        </div>
    </section>
    

    {/* TWO */}
   <section className="w-[100%] pt-[5rem] pb-[5rem]">
    <div className="mx-auto w-[100%] grid lg:grid-cols-2 grid-cols-1 gap-4">
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



    <section className='w-[100%] pt-[1rem] pb-[6rem]'>
        <div className='mx-auto lg:w-[94%] w-[90%] overflow-hidden rounded-2xl bg-gray-200 drop-shadow-lg grid lg:grid-cols-2 grid-cols-1'>
            <div className='w-[100%] h-[100%] bg-gray-400'></div>
            <div className='w-[100%] flex flex-col gap-8 items-start justify-center lg:pl-8 px-8 py-12'>
                <p className="uppercase px-2 text-[#aa1845] font-semibold">Wealth Management</p>
                <h1 className=" px-2 leading-[3rem] text-[2.6rem]">Personalize your investment experience</h1>
                <p className="mb-12 pl-2 pr-4 font-light text-xl">
                Whether you want to work with a J.P. Morgan advisor to create a personalized 
                financial strategy or invest on your own with our powerful digital tools, 
                the answer is J.P. Morgan U.S. Wealth Management.
                </p>
            </div>
        </div>
    </section>
    </>
  )
}
