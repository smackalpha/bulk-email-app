import React from 'react';
import { useNavigate } from 'react-router-dom';

const OTPPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Enter the Received OTP From Mail</h1>
        <input
          type="text"
          placeholder="Enter OTP"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />

        <button
          onClick={handleLogin}
          className="bg-primary text-white py-2 px-4 rounded w-full"
        >
          Submit
        </button>

        
      </div>
    </div>
  );
};

export default OTPPage;
