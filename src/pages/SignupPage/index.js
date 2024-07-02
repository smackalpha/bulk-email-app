import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Perform login logic here
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Create an Account</h1>
        <input
          type="text"
          placeholder="Email"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-primary text-white py-2 px-4 rounded w-full"
        >
          Register
        </button>

        <div className='flex justify-center mt-2'>
            <p>Already have an Account? </p>
            <p className='text-primary cursor-pointer ml-1' onClick={()=>{navigate('/')}}>Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
