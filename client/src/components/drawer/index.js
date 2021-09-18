import React from 'react';
import { Link } from 'react-router-dom';

const Drawer = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-gray-200'
          : 'hidden'
      }
      onClick={toggle}
    >
      <button to='/' className='p-4'>
        Home
      </button>
      <button to='/menu' className='p-4'>
        Electronics
      </button>
      <button to='/about' className='p-4'>
        Jewelry
      </button>
      <button to='/contact' className='p-4'>
        Men's Clothing
      </button>
      <button to='/contact' className='p-4'>
        Womens's Clothing
      </button>
    </div>
  );
};

export default Drawer;