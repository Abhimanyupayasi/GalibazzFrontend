// src/components/CardOfPost.jsx
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const CardOfPost = ({ heading, content, username, createdAt, type }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white mb-2">{heading}</h2>
        <span className="text-sm text-gray-400">{moment(createdAt).fromNow()}</span>
      </div>
      {/* Updated content display to preserve line breaks */}
      <p className="text-gray-300 mb-4" style={{ whiteSpace: 'pre-wrap' }}>
        {content}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">Posted by {username}</span>
        <span className="bg-blue-600 text-white py-1 px-2 rounded text-xs">{type}</span>
      </div>
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

