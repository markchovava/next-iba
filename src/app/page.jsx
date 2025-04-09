import Link from "next/link";
import Carousel from "./_components/CarouselService";
import HomeSlider from "./_components/HomeSlider";
import { FaArrowRightLong } from "react-icons/fa6";
import CarouselNews from "./_components/CarouselNews";

export default function Page() {
  return (
  <>
   <HomeSlider />

   <section className="bg-[#750b2b] text-gray-50 py-[6rem]">
      <div className="bg-[#aa1845] lg:rounded-3xl overflow-hidden mx-auto w-[93%] grid lg:grid-cols-2 grid-cols-1">
        <div className="w-[100%] h-[100%] bg-gray-400"></div>
        <div className='w-[100%] flex flex-col gap-8 items-start justify-center lg:pl-8 px-8 py-12'>
          <p className="uppercase text-gray-300 font-semibold">Wealth Management</p>
          <h1 className="leading-[3rem] text-[2.6rem]">Personalize your investment experience</h1>
          <p className="mb-4 pr-4 font-light text-xl">
          Whether you want to work with a J.P. Morgan advisor to create a personalized 
          financial strategy or invest on your own with our powerful digital tools, 
          the answer is J.P. Morgan U.S. Wealth Management.
          </p>
          <Link href='#' className="group">
            <button className="bg-[#aa1845] group-hover:drop-shadow-lg group flex items-center justify-center gap-2 text-lg px-6 py-3 cursor-pointer text-white border border-white rounded-md transition-all ease-linear">
              View More <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>

      <div className="mx-auto w-[94%] mt-[5rem]">
        <div>
          <h1 className="text-[2.5rem] font-bold tracking-1 mb-3">OUR BUSINESSES</h1>
          <hr className="border-b-4 border-[#aa1845] w-[10rem]" />
          <p className="text-xl font-light mt-6 mb-8 lg:w-[40%]">
            We offer products and services as one integrated 
            institution while treating our clients as one global relationship.
          </p>
        </div>
        <Carousel slides={4} />
      </div>
   </section>

    {/*  */}
   <section className="w-[100%]">
    <div className="mx-auto w-[100%] grid lg:grid-cols-2 grid-cols-1 gap-4 lg:pt-[8rem] pt-[5rem] pb-[5rem]">
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


    {/*  */}
    <section className="w-[100%]">
    <div className="mx-auto w-[100%] grid lg:grid-cols-2 grid-col-reverse grid-cols-1 gap-4 lg:pt-[5rem] lg:pb-[5rem]">
      <div className="lg:order-1 order-2 w-[100%] lg:rounded-r-2xl lg:aspect-[4/3] aspect-[5/3] bg-gray-400"></div>
      <div className="order-1 lg:order-2 pl-[8%] w-[100%] flex flex-col items-start justify-center lg:py-4 lg:pb-8 pb-16">
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
    </div>
   </section>


   {/* NEWS */}
   <section className="w-[100%] bg-gray-50 py-[5rem]">
    <div className="mx-auto w-[94%]">
      <h1 className="text-[2.5rem] font-bold tracking-1 mb-2">LATEST NEWS</h1>
      <hr className="border-b-4 border-[#aa1845] w-[10rem]" />
      <p className="text-xl font-light mt-6 mb-8 lg:w-[40%]">
        We offer products and services as one integrated 
        institution while treating our clients as one global relationship.
      </p>
    </div>
    <div className="mx-auto w-[94%]">
      <CarouselNews slides={4} />
    </div>

   </section>


  
  </>
  );
}
