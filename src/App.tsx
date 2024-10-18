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

      <div className="py-72 bg-green-verydark rounded-2xl max-h-72">
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
          <div className="group flex flex-row items-center store lg:h-20 lg:cursor-pointer transition transform px-60">
            <img
              src="Brand.jpg"
              className="rounded-2xl scale-0 transition-all duration-500 transform group-hover:scale-110 lg:h-14 lg:w-20 group-hover:translate-x-24 -ml-8"
              alt="Brand"
            />
            <h1 className="font-bold text-4xl transition-all duration-500 transform group-hover:translate-x-20 text-white ml-8">
              Sapphire
            </h1>
          </div>

          <div className="ml-72 h-0.5 bg-white w-auto mr-32"></div>
          <div className="group flex flex-row items-center store lg:cursor-pointer transition transform px-52 py-5">
            <img
              src="Brand2.jpg"
              className="rounded-2xl scale-0 transition-all duration-500 transform group-hover:scale-110 lg:h-16 lg:w-auto group-hover:translate-x-24"
              alt="Brand2"
            />
            <h1 className="font-bold text-4xl transition-all duration-500 transform group-hover:translate-x-28 text-white">
              HSY
            </h1>
          </div>
          <div className="ml-72 h-0.5 bg-white w-auto mr-32"></div>
          <div className="group flex flex-row items-center store lg:cursor-pointer transition transform px-40 py-5">
            <img
              src="Brand3.jpg"
              className="rounded-2xl scale-0 transition-all duration-500 transform group-hover:scale-110 lg:h-16 lg:w-auto group-hover:translate-x-36"
              alt="Brand3"
            />
            <h1 className="font-bold text-4xl transition-all duration-500 transform group-hover:translate-x-48 text-white -ml-8">
              Lulusar
            </h1>
          </div>

          <div className="ml-72 h-0.5 bg-white w-auto mr-32"></div>
          <div className="group flex flex-row items-center store lg:cursor-pointer transition transform px-48 py-5">
            <img
              src="Brand4.jpg"
              className="rounded-2xl scale-0 transition-all duration-500 transform group-hover:scale-110 lg:h-16 lg:w-32 group-hover:translate-x-28"
              alt="Brand"
            />
            <h1 className="font-bold text-4xl transition-all duration-500 transform group-hover:translate-x-32 text-white">
              Junaid Jamshed (J.)
            </h1>
          </div>
          <div className="ml-72 h-0.5 bg-white w-auto mr-32"></div>
        </div>
        <div className="relative ml-20">
          <img src="/socialflare.jpg" className="rounded-4xl" alt="Brand" />
          <p className="absolute top-10 left-28 font-ubuntu text-white text-3xl font-bold bg-black bg-opacity-70 backdrop-blur-lg rounded-xl px-4 py-3">
            “ ESSE: Online Retail<br/> with Social Flair “
          </p>
        </div>
      </div>

      <div className="mt-auto py-128 flex lg:flex-row ">
  {/* About Text */}
  <p className="lg:w-1/4 px-20 font-grotesk font-base">• About</p>

  <p className="lg:w-5/12 -ml-80 text-3xl font-bold text-right">
    At ESSE, you will find yourself in a<br /> carefully curated world of fashion. We<br /> offer you plenty of choices from<br /> leading apparel brands around the<br /> world. Quality Assurance is our<br /> promise to you, so you can shop with<br /> the confidence that you shall be<br /> delivered exactly what you ordered.
  </p>

  <p className=" px-10 ml-10 text-lg font-normal font-ubuntu">
    ESSE is as interactive as social media, and as convenient as e-commerce. Connect, share,<br />  and shop together! We focus exclusively on apparel. Our platform invites leading companies<br />  to market their lines, so you can prepare your wardrobe for this season with as many options<br />  as you would like on your fingertips.<br /> 
    <br /> 
    We facilitate direct communication between brands and customers, enhancing the shopping<br />  experience with real-time interactions and feedback. By leveraging AI, we offer personalized<br />  recommendations, making it easier for you to find items that match your likes, interests and<br />  preferences. All of us have our favorites. You can now not only pick and choose, but also<br />  share them, whilst connecting to other users with similar tastes!<br /> 
    <br /> 
    Have you ever wondered how your outfits will look when you wear them? Start with creating <br />a  virtual avatar, and visualize your wardrobe in 3D here at ESSE! After that, you can drop by<br />  our Virtual Fitting Room to try on your clothes on your digital self. We also use intuitive AI to<br />  send recommendations matching your style your way with our Style Match feature!<br /> 
    <br /> 
    Feel free to connect with fashion enthusiasts in the Fashion Hub, where you can share, learn<br />  and inspire those who share your aesthetic.
  </p>
</div>



    </div>
  );
};

export default App;
