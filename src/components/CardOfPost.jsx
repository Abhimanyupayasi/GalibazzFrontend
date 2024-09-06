import { useState } from 'react';
import { FaShareAlt, FaWhatsapp, FaFacebook, FaTwitter, FaRegCopy, FaTrash } from 'react-icons/fa';
import moment from 'moment';
import axios from 'axios';
import { useSelector } from 'react-redux';

const sanitizeUsername = (username) => {
  if (username.includes('@gmail.com')) {
    return username.split('@gmail.com')[0];
  }
  return username;
};

const CardOfPost = ({ id, email, heading, content, username, createdAt, type }) => {

  
  const [isCopied, setIsCopied] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for deletion
  const [showConfirmDelete, setShowConfirmDelete] = useState(false); // Confirmation modal state
  const [error, setError] = useState(''); // Error state to display errors

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
   // Assuming the user data contains email

  const LinkPost = `https://galibazz.vercel.app/post/${id}`;

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setShowShareOptions(false);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => console.error('Failed to copy text: ', err));
  };

  const handleShare = (platform) => {
    let shareUrl = "";
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${content}\n${LinkPost}`)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(LinkPost)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${content}\n${LinkPost}`)}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, '_blank');
    setShowShareOptions(false);
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: heading,
        text: content,
        url: LinkPost,
      })
        .then(() => console.log('Successfully shared!'))
        .catch((error) => console.error('Error sharing:', error));
      setShowShareOptions(false);
    } else {
      alert("Sharing not supported on this device.");
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const serverURL =  import.meta.env.VITE_API_URL;
      const response = await axios.get(`${serverURL}/delete/${id}`,
        {
          
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (response.status === 200) {
        window.location.reload(); // Refetch the posts after deletion
      }
    } catch (err) {
      setError('Error deleting post');
      setTimeout(() => setError(''), 2000); // Clear error after 2 seconds
    } finally {
      setLoading(false);
      setShowConfirmDelete(false); // Close the confirmation modal
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6 relative">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white mb-2">{heading}</h2>
        <span className="text-sm text-gray-400">{moment(createdAt).fromNow()}</span>
      </div>
      <p className="text-gray-300 mb-4" style={{ whiteSpace: 'pre-wrap' }}>
        {content}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-sm text-gray-400">Posted by {sanitizeUsername(username)}</span>
          {(sanitizeUsername(username) === 'Galibazz.com' || sanitizeUsername(username) === 'galibazz.com') && (
            <span className="bg-blue-500 text-white py-1 px-2 rounded text-xs ml-2">
              Verified
            </span>
          )}
        </div>

        {/* Show delete button if email matches */}
        {email === user.email && (
          <button
            onClick={() => setShowConfirmDelete(true)} // Show confirmation modal
            disabled={loading}
            className="text-red-500 hover:text-red-700 flex items-center space-x-2"
          >
            <FaTrash size={16} />
            <span>{loading ? 'Deleting...' : 'Delete'}</span>
          </button>
        )}
      </div>

      <div className="flex justify-between items-center mt-4">
        {/* Bottom left: Share options */}
        <div className="relative">
          <button
            onClick={() => setShowShareOptions(!showShareOptions)}
            className="text-gray-400 hover:text-white flex items-center space-x-2"
          >
            <FaShareAlt size={18} />
            <span className="text-sm">Share</span>
          </button>

          {showShareOptions && (
            <div className="absolute bottom-full left-0 bg-gray-900 text-white shadow-lg rounded-lg p-2 space-y-2">
              {navigator.share && (
                <button onClick={handleNativeShare} className="flex items-center space-x-2 w-full text-left">
                  <FaShareAlt size={18} className="text-green-500" />
                  <span>Share via</span>
                </button>
              )}
              <button onClick={() => handleShare('whatsapp')} className="flex items-center space-x-2 w-full text-left">
                <FaWhatsapp size={18} className="text-green-500" />
                <span>WhatsApp</span>
              </button>
              <button onClick={() => handleShare('facebook')} className="flex items-center space-x-2 w-full text-left">
                <FaFacebook size={18} className="text-blue-600" />
                <span>Facebook</span>
              </button>
              <button onClick={() => handleShare('twitter')} className="flex items-center space-x-2 w-full text-left">
                <FaTwitter size={18} className="text-blue-400" />
                <span>Twitter</span>
              </button>
              <button onClick={() => handleCopy(LinkPost)} className="flex items-center space-x-2 w-full text-left">
                <FaRegCopy size={16} />
                <span>Copy Link</span>
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleCopy(`${content}\n${LinkPost}`)}
            className="text-gray-400 hover:text-white"
            aria-label="Copy content"
          >
            <FaRegCopy size={16} />
          </button>
          <span className="bg-blue-600 text-white py-1 px-2 rounded text-xs">{type}</span>
        </div>
      </div>

      {/* Copy confirmation message */}
      {isCopied && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#00BCD4] text-black py-2 px-4 rounded shadow-md z-50">
          Content copied to clipboard!
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-2 px-4 rounded shadow-md z-50">
          {error}
        </div>
      )}

      {/* Delete confirmation modal */}
      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Are you sure you want to delete this post?</h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmDelete(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                disabled={loading}
              >
                {loading ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardOfPost;
