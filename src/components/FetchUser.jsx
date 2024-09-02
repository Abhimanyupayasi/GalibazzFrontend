// src/components/FetchUser.jsx
import React, { useState } from 'react';
import axios from 'axios';

const FetchUser = () => {
  const serverURL = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${serverURL}/api/user`, { email });
      setUser(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-white mb-6">Fetch User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded mt-4"
          disabled={loading}
        >
          {loading ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            'Fetch User'
          )}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {user && (
        <div className="mt-6 text-white">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p>Email: {user.email}</p>
            
        </div>
      )}
    </div>
  );
};

export default FetchUser;
