import React from 'react';
import Navbar from './Navbar';

const ContactUs = () => {
  return (
    <div className="relative min-h-screen w-screen">
      <img src="/bg3.jpg" alt="Cover" className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-60" />
      <Navbar />
      <div className="relative z-10 p-6 space-y-12">
        <div className="bg-white bg-opacity-35 p-6 rounded-lg shadow-lg font-mono">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">About</h1>
          <p className="text-xl text-zinc-900 text-center sm:text-lg sm:px-4">
            Welcome to Roomsearch.com! Here you can search for available rooms in various hostel blocks. Simply enter your desired floor and hostel block to find the room you're looking for.
          </p>
        </div>
        <div className="bg-white bg-opacity-35 p-6 rounded-lg shadow-lg font-mono">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">How to Use</h1>
          <p className="text-xl text-zinc-900 text-center sm:text-lg sm:px-4">
            To use this website, enter your desired floor and hostel block in the search form. You'll be presented with a list of available rooms that match your criteria.
            Once you've found your desired room, or if you need to <span className="font-semibold">delete or edit your profile</span>, please email us at <a href="mailto:contact@roomsearch.com" className="text-red-900 underline">contact@roomsearch.com</a>.
            <span className="block font-bold mt-2">This helps us maintain relevant information in the application.</span>
          </p>
        </div>
        <div className="bg-white bg-opacity-35 p-6 rounded-lg shadow-lg font-mono">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">Contact Us</h1>
          <div className="text-center">
            <div className="mb-6">
              <p className="text-2xl font-bold text-gray-900">Pranay Prasoon</p>
              <p className="text-xl text-zinc-900">Phone: 8824446045</p>
              <p className="text-xl text-zinc-900">LinkedIn: <a href="https://www.linkedin.com/in/pprasoon01/" className="text-red-900 underline">https://www.linkedin.com/in/pprasoon01/</a></p>
            </div>
            <div className="mb-6">
              <p className="text-2xl font-bold text-gray-900">Aryan Patel</p>
              <p className="text-xl text-zinc-900">Phone: 8817839559</p>
              <p className="text-xl text-zinc-900">LinkedIn: <a href="https://www.linkedin.com/in/-aryan-patel/" className="text-red-900 underline">https://www.linkedin.com/in/-aryan-patel/</a></p>
            </div>
            <div className="text-lg text-zinc-900 mb-6">
              Contact us at: <a href="mailto:contact@roomsearch.com" className="text-red-900 underline">contact@roomsearch.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
