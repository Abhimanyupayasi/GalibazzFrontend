import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FaRegCopy, FaCheckCircle } from 'react-icons/fa'; // Import copy and check-circle icons from react-icons

const CardOfPost = ({id, heading, content, username, createdAt, type }) => {
  const [isCopied, setIsCopied] = useState(false); // State to manage copy notification visibility
 
  const LinkPost = `https://galibazz.vercel.app/post/${id}`; // Create a link to the post


  const handleCopy = () => {
    navigator.clipboard.writeText(content + "   "+ LinkPost) // Copy content to clipboard
      .then(() => {
        setIsCopied(true); // Show copy notification
        setTimeout(() => setIsCopied(false), 2000); // Hide after 2 seconds
      })
      .catch((err) => {
        //console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6 relative">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white mb-2">{heading}</h2>
        {/* Using moment.js for relative time format */}
        <span className="text-sm text-gray-400">{moment(createdAt).fromNow()}</span>
      </div>
      <p className="text-gray-300 mb-4" style={{ whiteSpace: 'pre-wrap' }}>
        {content}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-sm text-gray-400">Posted by {username}</span>
          {/* Conditionally render verification badge */}
          {(username === 'Galibazz.com' || username === 'galibazz.com') && (
            <div className="flex items-start ml-2">
              
              <span className="bg-blue-500 text-white py-1 px-2 rounded text-xs">
                Verified
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {/* Copy icon positioned next to the type badge */}
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-white"
            aria-label="Copy content"
          >
            <FaRegCopy size={16} />
          </button>
          <span className="bg-blue-600 text-white py-1 px-2 rounded text-xs">{type}</span>
        </div>
      </div>

      {/* Copy confirmation message at the middle top */}
      {isCopied && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#00BCD4] text-black py-2 px-4 rounded shadow-md z-50">
          Content copied to clipboard!
        </div>
      )}
    </div>
  );
};

CardOfPost.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CardOfPost;
