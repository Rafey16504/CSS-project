// src/Drawer.tsx
import React, { useState } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-red-100 text-black shadow-lg transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out w-64`}
    >
      <div className="p-4">
        <button
          className="text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl mt-4">Drawer Content</h2>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default Drawer;
