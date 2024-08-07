import React from 'react';
import Navbar from './Navbar';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='relative h-screen w-screen'>
      <Navbar />
      <img src='/coverImage.jpg' alt='image here' className='absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-60' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-8xl font-extrabold pt-4'>
        <div className='text-animation'>
          <span className='animate-word'>GET</span>
          <span className='animate-word'>THE</span>
        </div>
        <div className='text-animation mt-4'>
          <span className='animate-word'>ROOM</span>
          <span className='animate-word'>OF</span>
          <span className='animate-word'>YOUR</span>
          <span className='animate-word'>CHOICE</span>
          
        </div>
       
        <div className='mx-4 py-8'>
          <Link to={'/proceed'}>
        <button className='bottom-2 right-2 bg-zinc-900 text-white py-2 px-12 rounded-3xl text-2xl'>
          <span className='block'>Click here to</span>
          <span className='block'>Proceed</span>
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
