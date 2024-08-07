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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    const upperCaseValue = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    setFormData({ ...formData, [name]: upperCaseValue });
  };

  // Function to validate the form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@bennett\.edu\.in$/)) {
      newErrors.email = 'Email must end with @bennett.edu.in';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors.email);
      return;
    }
    try {
      await axios.post('https://rsbackend-3.onrender.com/submit', formData);
      alert('Form submitted successfully');
      onSearch({
        desiredFloor: formData.desiredFloor,
        desiredHostelBlock: formData.desiredHostelBlock
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        console.error('There was an error submitting the form!', error);
      }
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="RoomSearch.com"
          src="newicon.png"
          className="mx-auto h-24 w-auto"
        />
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-blue-950">
          Fill Your Details
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6 ">
          {['email', 'name', 'phoneNo', 'currentHostelBlock', 'currentFloor', 'desiredHostelBlock', 'desiredFloor'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm  leading-6 text-gray-900">
                {field.split(/(?=[A-Z])/).join(' ')}
              </label>
              <div className="mt-2">
                <input
                  id={field}
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  onInput={['currentHostelBlock', 'currentFloor', 'desiredHostelBlock', 'desiredFloor'].includes(field) ? handleInput : undefined}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-black font-mono font-semibold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                />
              </div>
            </div>
          ))}
          {errorMessage && (
            <div className="text-red-600 font-bold font-mono">
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
