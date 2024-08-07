import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const About = () => {
  return (
    <div className='relative h-screen w-screen'>
    <Navbar />
    <img src='/coverImage.jpg' alt='image here' className='absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-60' />
   
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-8xl font-extrabold'>
    <div className='text-animation mt-4'>
          <span className='animate-word'>This</span>
          <span className='animate-word'>is</span>
          <span className='animate-word'>About</span>
          <span className='animate-word'>Page</span>
          
        </div>
        </div>
  </div>
  )
}

export default About