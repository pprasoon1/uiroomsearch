import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='flex items-center justify-between w-full'>
        <ul className='list-none flex space-x-8'>
          <Link to={'/'}>
          <li className='px-16 py-6 text-white text-xl'>HOME</li>
          </Link>
          <Link to={'/about'}>
          <li className='px-16 py-6 text-white text-xl'>ABOUT</li>
          </Link>
        </ul>
        <div className='flex-grow text-center'>
          <span className='text-white text-2xl'>Room Search.com</span>
          
        </div>
        <div className='w-1/3'></div>
      </div>
    </div>
  );
};

export default Navbar;
