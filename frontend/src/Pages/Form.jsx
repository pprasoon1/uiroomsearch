import React, { useState } from 'react';
import axios from 'axios';

export default function Form({ onSearch }) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneNo: '',
    currentHostelBlock: '',
    currentFloor: '',
    desiredHostelBlock: '',
    desiredFloor: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@bennett\.edu\.in$/)) {
      newErrors.email = 'Email must end with @bennett.edu.in';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors.email);
      return;
    }

    try {
      await axios.post('https://rs-backend.vercel.app/submit', formData);

      // Clear form data after successful submission
      setFormData({
        email: '',
        name: '',
        phoneNo: '',
        currentHostelBlock: '',
        currentFloor: '',
        desiredHostelBlock: '',
        desiredFloor: ''
      });

      // Call the onSearch callback if provided
      if (onSearch) {
        onSearch({
          desiredFloor: formData.desiredFloor,
          desiredHostelBlock: formData.desiredHostelBlock
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('There was an error submitting the form!');
        console.error('There was an error submitting the form!', error);
      }
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mx-auto w-full max-w-sm">
        <img
          alt="RoomSearch.com"
          src="newicon.png"
          className="mx-auto h-24 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl md:text-3xl font-bold leading-9 tracking-tight text-blue-950">
          Fill Your Details
        </h2>
      </div>

      <div className="mt-10 mx-auto w-full max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-xl md:text-2xl leading-6 text-gray-900">
              Bennett Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-black text-base md:text-xl font-mono font-semibold shadow-sm ring-1 ring-inset ring-zinc-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 bg-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block text-xl md:text-2xl leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-black text-base md:text-xl font-mono font-semibold shadow-sm ring-1 ring-inset ring-zinc-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 bg-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phoneNo" className="block text-xl md:text-2xl leading-6 text-gray-900">
              Phone No
            </label>
            <div className="mt-2">
              <input
                id="phoneNo"
                name="phoneNo"
                type="number"
                required
                value={formData.phoneNo}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-black text-base md:text-xl font-mono font-semibold shadow-sm ring-1 ring-inset ring-zinc-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 bg-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="currentHostelBlock" className="block text-xl md:text-2xl leading-6 text-gray-900">
              Current Hostel Block
            </label>
            <div className="mt-2">
              <input
                id="currentHostelBlock"
                name="currentHostelBlock"
                type="text"
                required
                value={formData.currentHostelBlock}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-black text-base md:text-xl font-mono font-semibold shadow-sm ring-1 ring-inset ring-zinc-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 bg-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="currentFloor" className="block text-xl md:text-2xl leading-6 text-gray-900">
              Current Floor
            </label>
            <div className="mt-2">
              <input
                id="currentFloor"
                name="currentFloor"
                type="number"
                required
                value={formData.currentFloor}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-black text-base md:text-xl font-mono font-semibold shadow-sm ring-1 ring-inset ring-zinc-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 bg-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="desiredHostelBlock" className="block text-xl md:text-2xl leading-6 text-gray-900">
              Desired Hostel Block
            </label>
            <div className="mt-2">
              <input
                id="desiredHostelBlock"
                name="desiredHostelBlock"
                type="text"
                required
                value={formData.desiredHostelBlock}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-black text-base md:text-xl font-mono font-semibold shadow-sm ring-1 ring-inset ring-zinc-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 bg-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="desiredFloor" className="block text-xl md:text-2xl leading-6 text-gray-900">
              Desired Floor
            </label>
            <div className="mt-2">
              <input
                id="desiredFloor"
                name="desiredFloor"
                type="number"
                required
                value={formData.desiredFloor}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-black text-base md:text-xl font-mono font-semibold shadow-sm ring-1 ring-inset ring-zinc-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 bg-transparent"
              />
            </div>
          </div>

          {errorMessage && (
            <div className="text-red-600 font-bold font-mono text-base md:text-lg">
              {errorMessage}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
