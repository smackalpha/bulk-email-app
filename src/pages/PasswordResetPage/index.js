import React from "react";
import { useNavigate } from "react-router-dom";

const PasswordResetPage = () => {
  const navigate = useNavigate();
  const[password, setPassword] = React.useState('')

  const handleLogin = () => {
    // Perform login logic here
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Enter New Password</h1>

        <input
          type="password"
          placeholder="New Password"
          className="mb-2 p-2 border border-gray-300 rounded w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />

        <button
          //   onClick={handleLogin}
          className="bg-primary text-white py-2 px-4 rounded w-full"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default PasswordResetPage;
