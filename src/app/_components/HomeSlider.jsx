"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { GoDotFill, GoDot } from "react-icons/go";
import { FaArrowRightLong, FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';


export default function HomeSlider() {
  const swiperRef = useRef(null);
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

  return (
    <div className="mb-[4rem] relative carousel-container w-full h-auto mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1500}
        autoplay={{
            delay: 4000,
            disableOnInteraction: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        onSlideChange={handleSlideChange}
        navigation={false}
        pagination={false} // Disable default pagination
        className=""
      >
        {/* Sample slides */}
        {Array.from({ length: totalSlides }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="w-[100vw] lg:aspect-[5/2] aspect-[5/3] grid grid-cols-2 overflow-hidden bg-white">
              <section className='w-[100%] h-[100%] pl-[8%] flex flex-col items-start justify-center'>
                <h2 className='text-5xl mb-3 font-serif'>
                Letter to Shareholders
                </h2>
                <p className='text-lg font-light pr-6 mb-8'>
                In our 2024 Annual Report, we reflects on the past year and the opportunities that lie ahead for the firm.
                </p>
                <Link href='#' className="group">
                  <button className=" group flex items-center justify-center gap-1 text-lg px-6 py-3 cursor-pointer group-hover:drop-shadow-md text-[#aa1845] bg-white border border-[#aa1845] rounded-md transition-all ease-linear">
                    View More <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                  </button>
                </Link>


              </section>
              <section className='pr-[8%] w-[100%] h-[100%] bg-[#aa1845] rounded-l-3xl drop-shadow-lg'></section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* IGNORE Custom controls container */}
      <div className="hidden carousel-controls flex-col items-center gap-4">
        {/* Custom React-based pagination dots */}
        {<div className="custom-pagination flex items-center justify-center gap-3 mb-4">
          {
          Array.from({ length: Math.ceil(totalSlides / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index * (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1))}
              className="pagination-dot focus:outline-none"
              aria-label={`Go to slide group ${index + 1}`}
            >
              {index === Math.floor(activeIndex / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)) ? (
                <GoDotFill className="w-5 h-5 text-blue-500" />
              ) : (
                <GoDot className="w-5 h-5 text-gray-300" />
              )}
            </button>
          ))}
        </div>}
      </div>

      {/* Navigation buttons */}
      <div className="-mt-[7rem] ml-[3%] relative z-[100] navigation-buttons flex items-center justify-start gap-2">
          <button 
            onClick={() => swiperRef.current?.swiper?.slidePrev()} 
            className="group carousel-button-prev p-2 rounded-full bg-[#aa1845] text-white hover:bg-[#750b2b] focus:outline-none"
          >
            <FaCircleChevronLeft className="w-8 h-8 transition-all ease-linear duration-100 group-hover:scale-110" />
          </button>

          <button 
            onClick={() => swiperRef.current?.swiper?.slideNext()} 
            className="group carousel-button-next p-2 rounded-full bg-[#aa1845] text-white hover:bg-[#750b2b] focus:outline-none"
          >
            <FaCircleChevronRight className="w-8 h-8 transition-all ease-linear duration-100 group-hover:scale-110" />
          </button>
    </div>

    </div>
  );
};
