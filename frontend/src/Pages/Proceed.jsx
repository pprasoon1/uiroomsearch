// src/Pages/Proceed.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Dashboard from './Dashboard';

const Proceed = () => {
  const [searchCriteria, setSearchCriteria] = useState(null);

  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);
  };

  return (
    <div className='relative min-h-screen w-screen'>
      <Navbar />
      <div
        className='fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-1]'
        style={{ 
          backgroundImage: 'url(/bg1.jpg)', 
          backgroundAttachment: 'fixed', 
          backgroundRepeat: 'repeat', 
          backgroundSize: 'cover' 
        }}
      />
      <div className='relative top-20 left-0 w-full h-full flex flex-col md:flex-row justify-center items-start p-6 space-y-12 md:space-x-12 md:space-y-0 overflow-y-auto'>
        <div className='bg-zinc-600 bg-opacity-25 p-6 rounded-lg shadow-lg w-full md:w-1/3'>
          <Form onSearch={handleSearch} />
        </div>
        <div className='bg-zinc-600 bg-opacity-25 p-6 rounded-lg shadow-lg w-full md:w-2/3'>
          <Dashboard searchCriteria={searchCriteria} />
        </div>
      </div>
    </div>
  );
};

export default Proceed;
