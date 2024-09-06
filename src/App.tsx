import React, { useState } from "react";
import Drawer from "./Drawer";

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <div className="min-h-screen bg-light">
      <header className="">
        <div className="container mx-auto px-0 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/esse4.png"
              className="h-48 absolute -top-14 left-0 ml-10"
            />
          </a>

          {/* Buttons in the center */}

          <div className="flex-1 flex justify-center space-x-4">
            <button className="px-20 py-2 bg-transparent text-black rounded text-base font-medium font-sans"></button>
            <button className="px-4 py-2 bg-transparent text-black rounded text-base font-medium font-sans">
              Features
            </button>
            <button className="px-4 py-2 bg-transparent text-black rounded text-base font-medium font-sans">
              Stores
            </button>
            <button className="px-4 py-2 bg-transparent text-black rounded text-base font-medium font-sans">
              About
            </button>
            <button className="px-4 py-2 bg-transparent text-black rounded text-base font-medium font-sans">
              Contact
            </button>
            <button className="lg:w-48">
              <div className="arrows h-0 w-auto rounded-full ms-[-5px] flex justify-center items-center">
                <svg
                  viewBox="0 0 8 8"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2"
                >
                  <path d="M7.5 0.999999C7.5 0.723857 7.27614 0.5 7 0.499999L2.5 0.5C2.22386 0.5 2 0.723857 2 1C2 1.27614 2.22386 1.5 2.5 1.5L6.5 1.5L6.5 5.5C6.5 5.77614 6.72386 6 7 6C7.27614 6 7.5 5.77614 7.5 5.5L7.5 0.999999ZM1.35355 7.35355L7.35355 1.35355L6.64645 0.646446L0.646447 6.64645L1.35355 7.35355Z"></path>
                </svg>
              </div>

              <div className="h-0 w-0 invisible">
                <svg
                  viewBox="0 0 9 8"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2"
                >
                  <path d="M8.83884 4.35355C9.0341 4.15829 9.0341 3.84171 8.83884 3.64645L5.65685 0.464466C5.46159 0.269204 5.14501 0.269204 4.94975 0.464466C4.75449 0.659728 4.75449 0.976311 4.94975 1.17157L7.77818 4L4.94975 6.82843C4.75449 7.02369 4.75449 7.34027 4.94975 7.53553C5.14501 7.7308 5.46159 7.7308 5.65685 7.53553L8.83884 4.35355ZM0 4.5L8.48528 4.5V3.5L0 3.5L0 4.5Z"></path>
                </svg>
              </div>
              <p className="ml-96 px-4 py-2 bg-green-dark text-white rounded-3xl text-sm w-3/4 font-medium font-sans">
                Apply Now
              </p>
            </button>
          </div>

          <div className="flex"></div>
          {/* <button
            onClick={toggleDrawer}
            className="ml-4 px-4 py-2 bg-transparent text-white rounded "
          >
            
            <img src="/hamburger.png"  className="h-8 w-auto" />
        
          </button> */}
        </div>
      </header>
      {/* Drawer Component */}
      {/* <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} /> */}
      <hr className="border-gray-light" />
      <main className="container mx-auto px-4 py-8">
        <h1 className="px-4 py-4 font-medium text-4xl text-center">
          Discover ESSE: Carving the Future of E-commerce
        </h1>
      </main>
    </div>
  );
};

export default App;
