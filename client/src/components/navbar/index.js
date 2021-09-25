import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import API from '../../utils/fakeStoreApi'
import DropdownRender from '../dropdownMenu/index';

const Navbar = ({ toggle }) => {

  useEffect(() => {
    API.getAllCategories();
    
  }, [])

  return (
    <nav
      className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
      role='navigation'
    >
      <button to='/' className='pl-8'>
        MERN Webstore
      </button>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block hidden'>
        <button to='/' className='p-4'>
        <DropdownRender/>
        </button>
        <button to='/about' className='p-4'>
          Login/Logout
        </button>
        <button to='/contact' className='p-4'>
          'Recent Orders'
        </button>
        <button to='/contact' className='p-4'>
          "Cart Icon"
        </button>
      </div>
    </nav>
  )
}

export default Navbar
