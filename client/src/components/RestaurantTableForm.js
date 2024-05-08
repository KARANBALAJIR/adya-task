// import React, { useState } from 'react';
// import axios from 'axios';

// const RestaurantTableForm = ({ menu, onClose }) => {
//   // State for form fields
//   const [date, setDate] = useState('');
//   const [startTime, setStartTime] = useState('');
//   const [endTime, setEndTime] = useState('');
//   const [availabilityStatus, setAvailabilityStatus] = useState('');
//   const [noOfGuests, setNoOfGuests] = useState('');

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Make a POST request to your backend API endpoint
//       const response = await axios.post('/api/bookings', {
//         date,
//         startTime,
//         endTime,
//         availabilityStatus,
//         noOfGuests,
//       });
//       console.log('Booking successful:', response.data);
//     console.log('Form submitted');
//     // Clear form fields
//     setDate('');
//     setStartTime('');
//     setEndTime('');
//     setAvailabilityStatus('');
//     setNoOfGuests('');
//     // Close the form popup
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg p-8">
//         <h2 className="text-2xl font-semibold mb-4">{menu.name} Table Booking</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="date" className="block text-sm font-semibold mb-2">Date</label>
//             <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-full" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="startTime" className="block text-sm font-semibold mb-2">Start Time</label>
//             <input type="time" id="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-full" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="endTime" className="block text-sm font-semibold mb-2">End Time</label>
//             <input type="time" id="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-full" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="availabilityStatus" className="block text-sm font-semibold mb-2">Availability Status</label>
//             <select id="availabilityStatus" value={availabilityStatus} onChange={(e) => setAvailabilityStatus(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-full">
//               <option value="">Select Availability Status</option>
//               <option value="Available">Available</option>
//               <option value="Booked">Booked</option>
//               <option value="Reserved">Reserved</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="noOfGuests" className="block text-sm font-semibold mb-2">Number of Guests</label>
//             <input type="number" id="noOfGuests" value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-full" />
//           </div>
//           <div className="flex justify-end">
//             <button type="button" onClick={onClose} className="mr-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:bg-gray-400 focus:outline-none">Cancel</button>
//             <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RestaurantTableForm;

import React, { useState } from 'react';
import axios from 'axios';

const RestaurantTableForm = ({ menu, onClose }) => {
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [availabilityStatus, setAvailabilityStatus] = useState('');
  const [noOfGuests, setNoOfGuests] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/bookings', {
        date,
        startTime,
        endTime,
        availabilityStatus,
        noOfGuests,
      });
      console.log('Booking successful:', response.data);
      console.log('Form submitted');
      setDate('');
      setStartTime('');
      setEndTime('');
      setAvailabilityStatus('');
      setNoOfGuests('');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">{menu.name} Table Booking</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-semibold mb-2">Date</label>
            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="startTime" className="block text-sm font-semibold mb-2">Start Time</label>
            <input type="time" id="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="endTime" className="block text-sm font-semibold mb-2">End Time</label>
            <input type="time" id="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="availabilityStatus" className="block text-sm font-semibold mb-2">Availability Status</label>
            <select id="availabilityStatus" value={availabilityStatus} onChange={(e) => setAvailabilityStatus(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-full">
              <option value="">Select Availability Status</option>
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
              <option value="Reserved">Reserved</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="noOfGuests" className="block text-sm font-semibold mb-2">Number of Guests</label>
            <input type="number" id="noOfGuests" value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:bg-gray-400 focus:outline-none">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantTableForm;
