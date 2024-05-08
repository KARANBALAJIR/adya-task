import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.jpeg';
import axios from 'axios';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginMode, setLoginMode] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const[name,setName]=useState('Karan');
  const[password,setPassword]=useState('1234');
  const[email,setEmail]=useState('Karan@gmail.com');
  const[phoneno,setPhoneno]=useState('123456789');


  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleLoginMode = () => {
    setLoginMode(!loginMode);
  };

  const handleLogin = async () => {
 
    try {
      console.log(name+" "+password);
     const api = await axios.get('http://localhost:8000/user/Login', {
  params: {
    name:name,
    password:password,
  },
});

      const data = api.data;
      setSuccessMessage('Successfully logged in!');
      console.log(data);
    } catch (err) {
      setSuccessMessage("Invalid Credentials");
      console.log('error');
    }

    // Set success message
   
    // Close the login modal
    toggleLoginModal();
  };

  const handleSignup = async () => {
    console.log('Signing up...');
    try {
      
      const api = await axios.post('http://localhost:8000/user/create', {
        
          name: name,
          email: 'karan@gmail.com',
          phoneno: '123456789',
          password: password,
        },
      );
      setSuccessMessage('Successfully signed up!');
      const data = api.data;
      console.log(data);
    } catch (err) {
      setSuccessMessage('Aleready Exists!');
      console.log('error');
    }
    
    toggleLoginModal();
  };

  const clearSuccessMessage = () => {
    setSuccessMessage('');
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src={logoImage} alt="Restaurant Logo" className="h-12 mr-4" />
          <span className="font-semibold text-xl text-orange-500 mr-4">Adya</span>
        </div>

        <div className="flex items-center ml-4">
          <select className="border border-gray rounded px-3 py-1 focus:outline-none focus:border-blue-300 h-10 overflow-y-auto">
            <option value="location1">Chennai</option>
            <option value="location2">Coimbatore</option>
            <option value="location3">Salem</option>
            <option value="location4">Tirupur</option>
            <option value="location5">Dindugul</option>
          </select>
        </div>

        <div className="flex items-center flex-1 ml-8">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray rounded px-2 py-1 focus:outline-none focus:border-blue-300 w-full max-w-xs"
          />
        </div>

        <nav className="flex items-center space-x-4 mr-10">
          <Link to="/" className="text-orange-500">Home</Link>
          <Link to="/Booking" className="text-orange-500">Book a Table</Link>
          <Link to="/payment" className="text-orange-500">Payment</Link>
          <button onClick={toggleLoginModal} className="text-orange-500">Login</button>
        </nav>

        {showLoginModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-20">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">{loginMode ? 'Login' : 'Sign Up'}</h2>
              {loginMode ? (
                <>
                  <label htmlFor="loginInput" className="block mb-2">Name or Email:</label>
                  <input id="loginInput" type="text" placeholder="Enter your name or email" className="border border-gray rounded px-3 py-1 mb-2 w-full" value={name}
            onChange={(e) => setName(e.target.value)} />
                  <label htmlFor="signupPassword" className="block mb-2">Password:</label>
                  <input id="signupPassword" type="password" placeholder="Enter your password" className="border border-gray rounded px-3 py-1 mb-2 w-full" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                  <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">Continue</button>
                </>
              ) : (
                <>
                  <label htmlFor="signupName" className="block mb-2">Name:</label>
                  <input id="signupName" type="text" placeholder="Enter your name" className="border border-gray rounded px-3 py-1 mb-2 w-full"value={name}
            onChange={(e) => setName(e.target.value)} />
                  <label htmlFor="signupEmail" className="block mb-2">Email:</label>
                  <input id="signupEmail" type="email" placeholder="Enter your email" className="border border-gray rounded px-3 py-1 mb-2 w-full" value={email}
            onChange={(e) => setEmail(e.target.value)} />
                  <label htmlFor="signupPhone" className="block mb-2">Phone Number:</label>
                  <input id="signupPhone" type="tel" placeholder="Enter your phone number" className="border border-gray rounded px-3 py-1 mb-2 w-full" value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)} />
                  <label htmlFor="signupPassword" className="block mb-2">Password:</label>
                  <input id="signupPassword" type="password" placeholder="Enter your password" className="border border-gray rounded px-3 py-1 mb-2 w-full"value={password} onChange={(e) =>setPassword(e.target.value)} />
                  <button onClick={handleSignup} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">Sign Up</button>
                </>
              )}
              <button onClick={toggleLoginMode} className="bg-gray-300 text-gray-800 px-4 py-2 rounded mt-2 hover:bg-gray-400 w-full">
                {loginMode ? 'Sign Up' : 'Login'}
              </button>
              <button onClick={toggleLoginModal} className="bg-gray-300 text-gray-800 px-4 py-2 rounded mt-2 hover:bg-gray-400 w-full">Cancel</button>
            </div>
          </div>
        )}

        {successMessage && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">{successMessage}</h2>
              <button onClick={clearSuccessMessage} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Close</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


