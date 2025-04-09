"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MultiCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="carousel-container w-[90%] mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={false}
        className="mt-8 py-4" 
      >
        {/* Sample slides - replace with your content */}
        {Array.from({ length: 8 }).map((_, index) => (
          <SwiperSlide key={index} className='p-2'>
            <div className="bg-gray-100 hover:drop-shadow-lg rounded p-6 h-48 flex items-center justify-center">
              <h3 className="text-xl font-medium">Slide {index + 1}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
      <div className="carousel-controls flex items-center justify-start gap-4">
        <button 
          onClick={() => swiperRef.current?.swiper?.slidePrev()} 
          className="carousel-button-prev p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
        >
          <FaCircleChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => swiperRef.current?.swiper?.slideNext()} 
          className="carousel-button-next p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
        >
          <FaCircleChevronRight className="w-6 h-6" />
        </button>
      </div>
    

      <section>
        <h1>Text</h1>
      </section>

    </div>
  );
};

export default MultiCarousel;