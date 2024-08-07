import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-black'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <div className='flex justify-between w-full md:w-auto'>
          <div className='text-white text-2xl md:hidden'>Room Search.com</div>
          <button
            className='text-white md:hidden'
            onClick={toggleMenu}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>
        <ul className={`list-none flex-col space-y-4 ${isOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:space-y-0 md:space-x-8 absolute md:static top-16 right-0 bg-black p-4 md:p-0`}>
          <Link to={'/'}>
            <li className='px-4 py-2 md:px-16 md:py-6 text-white text-xl'>HOME</li>
          </Link>
          <Link to={'/about'}>
            <li className='px-4 py-2 md:px-16 md:py-6 text-white text-xl'>Contact Us</li>
          </Link>
        </ul>
        <div className='hidden md:block md:flex-grow md:text-center mt-4 md:mt-0'>
          <span className='text-white text-2xl'>Room Search.com</span>
        </div>
        <div className='hidden md:block w-1/3'></div>
      </div>
    </div>
  );
};

export default Navbar;
