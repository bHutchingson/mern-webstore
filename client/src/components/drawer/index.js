import React from 'react';
import { Link } from 'react-router-dom';

const Drawer = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-gray-500'
          : 'hidden'
      }
      onClick={toggle}
    >
      <button to='/' className='p-4'>
        Home
      </button>
      <button to='/menu' className='p-4'>
        Menu
      </button>
      <button to='/about' className='p-4'>
        About
      </button>
      <button to='/contact' className='p-4'>
        Contact
      </button>
    </div>
  );
};

export default Drawer;