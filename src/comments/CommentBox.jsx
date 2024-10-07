import React from 'react';
import { useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';


function CommentBox({ text, userName, postId, userEmail, id, createdAt }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const serverURL = import.meta.env.VITE_API_URL;

  // Sanitize username to remove the @gmail.com part
  const sanitizeUsername = (username) => {
    if (username.includes('@gmail.com')) {
      return username.split('@gmail.com')[0];
    }
    return username;
  };

  // Fetch the current user's email from the Redux store
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const userEmailfromState = user ? user.email : null;

  console.log(userEmailfromState);
  console.log(userEmail);
  
  

  // Delete comment function

    const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`${serverURL}/api/post/${postId}/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      console.log(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      window.location.reload();
    }
    };
  
  

  return (
    <div className="bg-gray-700 w-11/12 lg:w-9/12 p-4 rounded-lg mb-4 relative">
      <p className="text-gray-300">{text}</p>
      <div className='flex'>
      <p className="text-gray-400">{sanitizeUsername(userName)}</p>
      {(sanitizeUsername(userName) === 'Galibazz.com' || sanitizeUsername(userName) === 'galibazz.com') && (
            <span className="bg-blue-500 text-white py-1 px-2 rounded text-xs ml-2">
              Verified
            </span>
          )}

      </div>
      

      {/* Conditional delete button if emails match */}
      {userEmailfromState === userEmail && (
        <button
          onClick={handleDelete}
          disabled={loading}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        >
          <FaTrash size={16} />
          {loading ? 'Deleting...' : ''}
        </button>
      )}

      {/* Error message */}
      {error && (
        <div className="text-red-500 mt-2">
          {error}
        </div>
      )}
    </div>
  );
}

export default CommentBox;
