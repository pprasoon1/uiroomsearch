import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard({ searchCriteria }) {
  const [desiredFloor, setDesiredFloor] = useState('');
  const [desiredHostelBlock, setDesiredHostelBlock] = useState('');
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://rsbackend-3.onrender.com/users', {
        params: {
          desiredFloor,
          desiredHostelBlock,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('There was an error fetching the users!', error);
    }
  };

  useEffect(() => {
    // Fetch users when component mounts or searchCriteria changes
    if (searchCriteria) {
      setDesiredFloor(searchCriteria.desiredFloor);
      setDesiredHostelBlock(searchCriteria.desiredHostelBlock);
      fetchUsers();
    }
  }, [searchCriteria]);

  const handleSearchClick = () => {
    fetchUsers();
  };

  const handleClearClick = () => {
    setDesiredFloor('');
    setDesiredHostelBlock('');
    setUsers([]);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-blue-950 mb-4">Dashboard</h2>
      <div className="mb-4">
        <label htmlFor="desiredFloor" className="block text-2xl font-bold leading-8 text-gray-900">
          Desired Floor
        </label>
        <input
          id="desiredFloor"
          name="desiredFloor"
          type="text"
          value={desiredFloor}
          onChange={(e) => setDesiredFloor(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 px-3 text-black font-bold shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="desiredHostelBlock" className="block text-2xl font-bold leading-8 text-gray-900">
          Desired Hostel Block
        </label>
        <input
          id="desiredHostelBlock"
          name="desiredHostelBlock"
          type="text"
          value={desiredHostelBlock}
          onChange={(e) => setDesiredHostelBlock(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 px-3 text-black font-semibold shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
        />
      </div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={handleSearchClick}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md"
        >
          Search
        </button>
        <button
          onClick={handleClearClick}
          className="px-4 py-2 bg-gray-600 text-white rounded-md"
        >
          Clear
        </button>
      </div>
      <div className="overflow-y-auto max-h-96 border rounded-md p-4 space-y-4">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user._id} className="p-4 border rounded-md">
              <p className='text-zinc-950 font-mono font-bold '><strong>Name: </strong> {user.name}</p>
              <p className='text-zinc-950 font-mono font-bold '><strong>Email: </strong> {user.email}</p>
              <p className='text-zinc-950 font-mono font-bold '><strong>Contact: </strong> {user.phoneNo}</p>
              <p className='text-zinc-950 font-mono font-bold '><strong>Current Hostel Block: </strong> {user.currentHostelBlock}</p>
              <p className='text-zinc-950 font-mono font-bold '><strong>Current Floor: </strong> {user.currentFloor}</p>
              <p className='text-zinc-950 font-mono font-bold '><strong>Desired Hostel Block: </strong> {user.desiredHostelBlock}</p>
              <p className='text-zinc-950 font-mono font-bold '><strong>Desired Floor: </strong> {user.desiredFloor}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No users found</p>
        )}
      </div>
    </div>
  );
}
