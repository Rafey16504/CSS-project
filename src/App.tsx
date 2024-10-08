import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full min-h-screen bg-light scroll-smooth">
      <header className="sticky top-0 z-50 bg-light">
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

      <div className="w-full py-14">
        {/* Sliding images */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          centeredSlides={false}
          autoplay={{ delay: 250, disableOnInteraction: false }}
          slidesPerView={4}
          loop={true}
          className="swiper-container overflow-hidden"
          speed={1500}
        >
          <SwiperSlide>
            <img src="/slide_3.jpg" className="h-auto rounded-3xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_4.jpg" className="h-auto rounded-3xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_1.jpg" className="h-auto rounded-3xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_2.jpg" className="h-auto rounded-3xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_3.jpg" className="h-auto rounded-3xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_4.jpg" className="h-auto rounded-3xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_1.jpg" className="h-auto rounded-3xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide_2.jpg" className="h-auto rounded-3xl" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="px-4 space-y-4 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-6 mb-14">
        {/* Who we Are Text */}
        <p className="lg:w-1/4 font-grotesk font-base">• Who we are?</p>
        <p className="text-4xl font-bold lg:w-3/4">
          ESSE merges the best of social media and e-commerce into a single,
          cross-platform mobile application. Our mission is to recast how people
          explore, shop, socialize, and engage online.
        </p>
      </div>

      <div id="features" className="flex">
        {/* Features */}
        <div className="py-10 flex-col">
          {/* Left Column of features */}
          <div className="px-28">
            <img
              src="/virtual_fitting.jpg"
              className=" h-144 rounded-2xl scale-110 hover:scale-105 transition-all duration-200 hover:brightness-50 cursor-pointer"
            />
          </div>
          <div className="py-16 px-20">
            <p className="text-2xl font-medium font-ubuntu">
              Feature no. 1 <span className="mx-2">•</span> Virtual Fitting Room
            </p>
          </div>
          <div className="px-28">
            <img
              src="/virtual_fitting3.jpg"
              className=" h-144 rounded-2xl scale-110 hover:scale-105 transition-all duration-200 hover:brightness-50 cursor-pointer"
            />
          </div>
          <div className="py-16 px-20">
            <p className="text-2xl font-medium font-ubuntu">
              Feature no. 2 <span className="mx-2">•</span> AI Fashion Advisor
            </p>
          </div>
          <div className="px-36 -mt-7">
            <p className="text-4xl font-bold font-ubuntu">Like What You See?</p>
            <div className="group inline-flex transition transform py-9 px-6">
              {" "}
              {/* Button */}
              <button className="px-0 py-2 bg-transparent text-black rounded text-base font-normal "></button>
              <button className="w-auto  group-hover:-translate-x-2 duration-500 ease-in-out">
                <p className="px-0 py-2 bg-green-dark text-white rounded-full text-sm w-64  font-normal font-ubuntu">
                  Choose Now
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
        <div className="flex-col">
          {/* Right Column of features */}
          <div>
            <p className="font-grotesk text-base font-medium static">
              • Our Features
            </p>
          </div>
          <div className="py-4">
            <p className="text-4xl font-bold">Take a look at our Features</p>
          </div>
          <div className="py-24 px-7">
            <img
              src="/virtual_fitting2.jpg"
              className="h-144 rounded-2xl scale-110 hover:scale-105 transition-all duration-200 hover:brightness-50 cursor-pointer"
            />
          </div>
          <div className="-mt-8">
            <p className="text-2xl font-medium font-ubuntu">
              Feature no. 3 <span className="mx-2">•</span> Style Match
            </p>
          </div>
          <div className="px-7 py-20">
            <img
              src="/virtual_fitting4.jpg"
              className=" h-144 rounded-2xl scale-110 hover:scale-105 transition-all duration-200 hover:brightness-50 cursor-pointer"
            />
          </div>
          <div className="-mt-5">
            <p className="text-2xl font-medium font-ubuntu">
              Feature no. 4 <span className="mx-2">•</span> Fashion Hub
            </p>
          </div>
        </div>
      </div>

      <div className="py-96 bg-green-verydark rounded-2xl max-h-80">
        {/* Targeted Brands */}
        <div className="space-32">
          <p className="-mt-52 px-8 font-ubuntu font-base text-white">
            <span className="mx-2">•</span> Our Stores
          </p>
          <div className="-mt-8 px-80">
            <p className=" font-ubuntu text-4xl font-medium text-white">
              Discover Our Targeted Brands
            </p>
          </div>
          <div className="px-32 ml-144 ">
            <p className="font-ubuntu ml-128 text-white">
              Stay tuned for upcoming announcements!
            </p>
          </div>
        </div>

        <div className="flex flex-col px-10 overflow-hidden">
          {/* Brands */}
          <div className="group flex flex-row items-center space-x-6 store lg:h-20 lg:cursor-pointer transition transform px-80">
            <img
              src="Brand.jpg"
              className="h-14 w-14 rounded-2xl object-cover transition-all duration-500 transform group-hover:scale-110 group-hover:translate-x-2 lg:h-0 lg:w-auto"
              alt="Brand"
              height="56px"
              width="56px"
            />
            <h1 className="font-bold text-4xl transition-all duration-500 transform group-hover:translate-x-32 text-white">
              Sapphire
            </h1>
          </div>

          <div className="ml-72 h-0.5 bg-white w-auto mr-32"></div>
          <div className="px-80 py-10">
            <p className="font-ubuntu font-bold text-4xl text-white">Lulusar</p>
          </div>
          <div className="ml-72 h-0.5 bg-white w-auto mr-32"></div>
          <div className="px-80 py-10">
            <p className="font-ubuntu font-bold text-4xl text-white">
              Sapphire
            </p>
          </div>
          <div className="ml-72 h-0.5 bg-white w-auto mr-32"></div>
          <div className="px-80 py-10">
            <p className="font-ubuntu font-bold text-4xl text-white">One</p>
          </div>
          <div className="ml-72 h-0.5 bg-white w-auto mr-32"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
