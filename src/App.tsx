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
            
          </div>

          <div className="flex">
            <button className="lg:w-48">
                <p className=" px-4 py-2 bg-green-dark text-white rounded-3xl text-sm w-3/4 font-medium font-sans">
                  Apply Now
                </p>
              </button>
              <button>
              <p className=" px-4 py-2 bg-green-dark text-white rounded-3xl text-sm w-3/4 font-medium font-sans">
                <img
                  src="/right-arrow.png"
                  className="h-8"
                />
              </p>
              </button>
          </div>
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
