"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { GoDotFill, GoDot } from "react-icons/go";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Carousel3() {
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
    <div className="carousel-container w-full max-w-4xl mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSlideChange={handleSlideChange}
        navigation={false}
        pagination={false} // Disable default pagination
        className="mb-6"
      >
        {/* Sample slides */}
        {Array.from({ length: totalSlides }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 rounded p-6 h-48 flex items-center justify-center">
              <h3 className="text-xl font-medium">Slide {index + 1}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom controls container */}
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
      <div className="navigation-buttons flex items-center justify-start gap-4">
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

    </div>
  );
};
