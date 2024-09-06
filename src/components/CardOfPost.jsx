const sanitizeUsername = (username) => {
  // Remove @gmail.com part if it exists
  if (username.includes('@gmail.com')) {
    return username.split('@gmail.com')[0];
  }
  return username;
};

import { useState } from 'react';
import { FaShareAlt, FaWhatsapp, FaFacebook, FaTwitter, FaRegCopy } from 'react-icons/fa';
import moment from 'moment';



const CardOfPost = ({ id, heading, content, username, createdAt, type }) => {
  const [isCopied, setIsCopied] = useState(false); // State to manage copy notification visibility
  const [showShareOptions, setShowShareOptions] = useState(false); // Toggle share options visibility

  const LinkPost = `https://galibazz.vercel.app/post/${id}`; // Create a link to the post

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy) // Copy content and link to clipboard
      .then(() => {
        setIsCopied(true); // Show copy notification
        setShowShareOptions(false); // Close share options after copying
        setTimeout(() => setIsCopied(false), 2000); // Hide after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
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
    setShowShareOptions(false); // Close share options after sharing
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
      setShowShareOptions(false); // Close share options after native sharing
    } else {
      alert("Sharing not supported on this device.");
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
              {/* Web Share API (for mobile devices) */}
              {navigator.share && (
                <button onClick={handleNativeShare} className="flex items-center space-x-2 w-full text-left">
                  <FaShareAlt size={18} className="text-green-500" />
                  <span>Share via</span>
                </button>
              )}
              {/* Individual Share Buttons */}
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

        {/* Bottom right: Copy and type */}
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
    </div>
  );
};

export default CardOfPost;
