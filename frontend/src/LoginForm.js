import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from './api/login';

const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (email && password) {
      try {
        const response = await login({ email, password });
        console.log(response)
        if(!response.ok) {
          throw new Error (response.message || 'An error occurred during login');
        }
          localStorage.setItem('token', response.token);
          setIsLoggedIn(true);
          navigate('/profile');
      
      } catch (err) {
        console.log(err)
        setError( err.message ||'An error occurred during login');
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className={`bg-white p-8 rounded-lg shadow-lg w-80 transition-transform duration-700 ease-in-out transform ${
        showForm ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {error && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-blue-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-blue-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
            >
              Login
            </button>
          </div>
          <div className="mt-4 text-center">
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;