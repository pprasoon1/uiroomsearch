import React from 'react';
import Navbar from './Navbar';

const ContactUs = () => {
  return (
    
    <div className="relative min-h-screen w-screen">
      <img src="/coverImage.jpg" alt="Cover" className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-60" />
      <Navbar/>
      <div className="relative z-10 p-6 space-y-12">
        <div className="bg-white bg-opacity-35 p-6 rounded-lg shadow-lg font-sans">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">About</h1>
          <p className="text-lg text-gray-700 text-center">
            Welcome to our website! Here you can search for available rooms in various hostel blocks. Simply enter your desired floor and hostel block to find available rooms.
          </p>
        </div>
        <div className="bg-white bg-opacity-35 p-6 rounded-lg shadow-lg font-sans">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">How to Use</h1>
          <p className="text-lg text-gray-700 text-center">
            To use this website, enter your desired floor and hostel block in the search form. You will be presented with a list of available rooms that match your criteria.
          </p>
        </div>
        <div className="bg-white bg-opacity-35 p-6 rounded-lg shadow-lg font-sans">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">Contact Us</h1>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Persons</h2>
            <div className="mb-6">
              <p className="text-xl font-medium text-gray-900">John Doe</p>
              <p className="text-lg text-gray-700">Phone: +123 456 7890</p>
              <p className="text-lg text-gray-700">LinkedIn: <a href="https://www.linkedin.com/in/johndoe" className="text-blue-600 underline">John Doe</a></p>
            </div>
            <div className="mb-6">
              <p className="text-xl font-medium text-gray-900">Jane Smith</p>
              <p className="text-lg text-gray-700">Phone: +098 765 4321</p>
              <p className="text-lg text-gray-700">LinkedIn: <a href="https://www.linkedin.com/in/janesmith" className="text-blue-600 underline">Jane Smith</a></p>
            </div>
            <div className="text-lg text-gray-700 mb-6">
              Email: <a href="mailto:info@company.com" className="text-blue-600 underline">info@company.com</a>
            </div>
            <div className="text-lg text-gray-700">
              <a href="/download-app" className="text-blue-600 underline">Download our app</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
