import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ setUserData ,setIsLoggedIn}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate(); // Use navigate to redirect to profile page after login

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      setUserData({ username, password });
      setIsLoggedIn(true);
  
      navigate('/profile');
    } else {
      alert("Please fill in both username and password!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className={`bg-white p-8 rounded-lg shadow-lg w-80 transition-transform duration-700 ease-in-out transform ${showForm ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-blue-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              pattern="^[a-zA-Z0-9]{3,16}$"
              title="Username should be 3-16 characters and shouldn't include any special character!"
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
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              title="Password must be at least 8 characters long, and include at least one letter and one number!"
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
