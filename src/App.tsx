import React, {useState} from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay'; 

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full min-h-screen bg-light scrollable scroll-smooth">
      
      <header className="sticky top-0 z-50 bg-light">
        {" "}
        {/* Header */}
        <div className="container mx-auto px-0 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/esse4.png"
              className="h-52 absolute -top-16 left-0 ml-8"
            />
          </a>

          {/* Buttons in the center */}

          <div className="flex-1 flex justify-center space-x-4 ml-[360px] mr-[400px]">
            <button className="px-20 py-2 bg-transparent text-black rounded"></button>
            <button className="px-3 py-2 bg-transparent text-black rounded text-base font-medium font-grotesk">
              Features
            </button>
            <button className="px-3 py-2 bg-transparent text-black rounded text-base font-medium font-grotesk ">
              Stores
            </button>
            <button className="px-3 py-2 bg-transparent text-black rounded text-base font-medium font-grotesk ">
              About
            </button>
            <button className=" px-3 py-2 bg-transparent text-black rounded text-base font-medium  ml-auto font-grotesk ">
              Contact
            </button>
          </div>
          <button className="ml-auto mr-auto py-2 bg-transparent text-black rounded text-base font-normal "></button>

          <div className="flex-1 flex justify-center space-x-4">
            {" "}
            {/* Apply now Button */}
            <div className="group inline-flex transition transform">
              <button className="px-4 py-2 bg-transparent text-black rounded text-base font-normal "></button>

              <button className="lg:w-30  group-hover:-translate-x-2 duration-500 ease-in-out">
                <p className="px-4 py-2 bg-green-dark text-white rounded-3xl text-sm w-36 font-normal  font-ubuntu">
                  Apply Now
                </p>
              </button>
              <button className="group-hover:translate-x-2 duration-500 ease-in-out">
                <svg
                  className="text-gray-800 dark:text-white bg-green-dark rounded-3xl w-8 h-8 -rotate-45 group-hover:rotate-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="-12 -12 48 48"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.7"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <hr className="border-gray-light" />

      <main className="container mx-auto px-4 py-8 ">
        {" "}
        {/* Heading of page */}
        <h1 className="px-4 py-3 font-bold text-4xl text-center font-ubuntu  ">
          Discover ESSE: Carving the Future of E-commerce
        </h1>
        <h1 className="px-4 py-3 font-medium text-[#2c2727] text-xl text-center font-ubuntu ">
          Welcome to ESSE, where social media meets ecommerce, to shape the
          future of online shopping experiences.
        </h1>
      </main>

      <div className="flex justify-center">
        {" "}
        {/* Buttons under heading */}
        <div className="group inline-flex transition transform -space-y-4">
          <button className="px-0 py-2 bg-transparent text-black rounded text-base font-normal "></button>

          <button className="w-auto  group-hover:-translate-x-2 duration-500 ease-in-out">
            <p className="px-0 py-2 bg-green-dark text-white rounded-full text-sm w-64  font-normal font-ubuntu">
              View Products
            </p>
          </button>
          <button className="group-hover:translate-x-2 duration-500 ease-in-out">
            <svg
              className="text-gray-800 dark:text-white bg-green-dark rounded-3xl w-8 h-8 -rotate-45 group-hover:rotate-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="-12 -12 48 48"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.7"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
        </div>
        <div className="group inline-flex transition transform">
          <button className="px-2 py-2 bg-transparent text-black rounded text-base font-normal "></button>

          <button className="w-auto  group-hover:-translate-x-2 duration-500 ease-in-out">
            <p className="px-2 py-2 bg-none text-black rounded-full text-sm w-64 font-normal  font-ubuntu">
              Join Us
            </p>
          </button>
          <button className="group-hover:translate-x-2 duration-500 ease-in-out">
            <svg
              className="text-gray-800 dark:text-black bg-none rounded-3xl w-8 h-8 -rotate-45 group-hover:rotate-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="-12 -12 48 48"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.7"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full py-16">
        {" "}
        {/* Sliding images */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          centeredSlides={false}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          slidesPerView={4}
          loop={true}
          className="swiper-container overflow-hidden"
          speed={2000}
        >
          <SwiperSlide>
            <img src="/slide_3.jpg" className="h-auto rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_4.jpg" className="h-auto rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_1.jpg" className="h-auto rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_2.jpg" className="h-auto rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_3.jpg" className="h-auto rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_4.jpg" className="h-auto rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_1.jpg" className="h-auto rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_2.jpg" className="h-auto rounded-lg" />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default App;
