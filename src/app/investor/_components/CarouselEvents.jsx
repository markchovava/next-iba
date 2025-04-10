"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { GoDotFill, GoDot } from "react-icons/go";
import { FaArrowRightLong, FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';


export default function CarouselEvents({ slides }) {
  const swiperRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 8; // Update this based on your actual slide count

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  // Handle direct pagination click with React components
  const handlePaginationClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };


  useEffect(() => {
    // This code will only run on the client-side
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []); 





  return (
    <div className="carousel-container w-full mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: slides },
        }}
        onSlideChange={handleSlideChange}
        navigation={false}
        pagination={false} // Disable default pagination
        className="mb-6"
      >
        {/* Sample slides */}
        {Array.from({ length: totalSlides }).map((_, index) => (
          <SwiperSlide key={index} className='pt-4 pb-2'>
            <section className='w-[100%] px-5 py-8 rounded-xl bg-gray-100 ease-linear transition-all drop-shadow-sm hover:drop-shadow-lg'>
                <p className='tracking-[1.5px] font-medium text-sm text-[#aa1845] mb-4'>April 15, 2025</p>
                <h3 className='text-2xl font-serif leading-tight mb-6'>Payments Unbound - The digital magazine</h3>
                <Link href="#">
                    <button className='group mb-6 px-4 py-2 rounded-lg border border-gray-700 hover:border hover:border-[#aa1845] hover:text-[#aa1845] transition-all ease-linear text-lg flex items-center justify-start gap-2 font-light'>
                        Read More
                        <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                    </button>
                </Link>
                <div>
                    <h5 className='font-medium text-lg'>Jane Fraser </h5>
                    <p className='font-light'>Chief Executive Officer, Citi </p>
                </div>
                <div className="mb-4 .w-[100%]"></div>
                <div>
                    <h5 className='font-medium text-lg'>Jane Fraser </h5>
                    <p className='font-light'>Chief Executive Officer, Citi </p>
                </div>
               
                
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom controls container */}
      <div className="hidden carousel-controls flex-col items-center gap-4">
        {/* Custom React-based pagination dots */}
        {<div className="custom-pagination flex items-center justify-center gap-3 mb-4">
          {
          Array.from({ length: Math.ceil(totalSlides / (windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1)) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index * (windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1))}
              className="pagination-dot focus:outline-none"
              aria-label={`Go to slide group ${index + 1}`}
            >
              {index === Math.floor(activeIndex / (windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1)) ? (
                <GoDotFill className="w-5 h-5 text-blue-500" />
              ) : (
                <GoDot className="w-5 h-5 text-gray-300" />
              )}
            </button>
          ))}
        </div>}
      </div>

      {/* Navigation buttons */}
      <div className="navigation-buttons flex items-center justify-start gap-4">
          <button 
            onClick={() => swiperRef.current?.swiper?.slidePrev()} 
            className="group cursor-pointer carousel-button-prev drop-shadow-md p-2 rounded-full bg-gray-50 hover:bg-gray-100 focus:outline-none"
          >
            <FaCircleChevronLeft className="w-6 h-6 text-[#aa1845] transition-all ease-linear duration-100 group-hover:scale-105" />
          </button>

          <button 
            onClick={() => swiperRef.current?.swiper?.slideNext()} 
            className="group cursor-pointer carousel-button-next p-2 drop-shadow-md rounded-full bg-gray-50 hover:bg-gray-100 focus:outline-none"
          >
            <FaCircleChevronRight className="w-6 h-6 text-[#aa1845] transition-all ease-linear duration-100 group-hover:scale-105" />
          </button>
    </div>

    </div>
  );
};
