import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShareAlt, FaWhatsapp, FaFacebook, FaTwitter, FaRegCopy } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const videoList = [
  { id: "dbZ7ppPlqG4", title: "Volume 1 - Honey Singh" },
  { id: "CEm6IoLSHD0", title: "Girlfriend - Dino James" },
  { id: "o5wyko358jo", title: "Ashiq hu dil ka - Carry Minati" },
  { id: "Up6Yqv6WXqc", title: "Chacha aa Gya" },
  { id: "-NlE5XPD-p4", title: "Ashali Bhasad" },
  { id: "5yeZNDoFth4", title: "Soking Bhabhi" },
];

const SongHome = () => {
  const navigate = useNavigate();
  const [showShareOptions, setShowShareOptions] = useState(null);
  const [copied, setCopied] = useState(false);

  const token = useSelector(state => state.auth.token);
// useEffect(() => {
//     if (token) {
//       navigate('/songs');
//     }
//     }, [token, navigate]);
    

  const handleVideoClick = (videoId) => {
    if (token) {
        navigate(`/songs/${videoId}`);
    } else {
    navigate(`/song/${videoId}`);
    }
  };

  const handleShare = (videoId, platform) => {
    const link = `https://galibazz.live/song/${videoId}`;
    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(link)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(link)}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, '_blank');
    setShowShareOptions(null); // Hide share options after sharing
  };

  const handleCopy = (videoId) => {
    const link = `https://galibazz.live/song/${videoId}`;
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide the notification after 2 seconds
      })
      .catch(err => console.error('Failed to copy text: ', err));
    setShowShareOptions(null); // Hide share options after copying
  };

  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mt-6 
                text-transparent bg-gradient-to-r from-[#9333EA] to-[#34D399] 
                bg-clip-text">
  Galibazz's Top Song Picks
  <span className="block mt-2 border-b-4 border-[#FACC15] w-1/2 mx-auto"></span>
</h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {videoList.map((video) => (
          <div key={video.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer relative">
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-48 object-cover"
              onClick={() => handleVideoClick(video.id)}
            />
            <h3 className="p-4 text-white font-bold text-lg">{video.title}</h3>
            <div className="absolute top-4 right-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowShareOptions(showShareOptions === video.id ? null : video.id);
                }}
                className="text-gray-400 hover:text-white relative"
              >
                <FaShareAlt size={24} />
                {showShareOptions === video.id && (
                  <div className="absolute top-full right-0 mt-2 bg-gray-900 text-white border border-gray-700 rounded-lg p-2 space-y-2 w-48">
                    <button onClick={() => handleShare(video.id, 'whatsapp')} className="flex items-center space-x-2 w-full text-left">
                      <FaWhatsapp size={18} className="text-green-500" />
                      <span>WhatsApp</span>
                    </button>
                    <button onClick={() => handleShare(video.id, 'facebook')} className="flex items-center space-x-2 w-full text-left">
                      <FaFacebook size={18} className="text-blue-600" />
                      <span>Facebook</span>
                    </button>
                    <button onClick={() => handleShare(video.id, 'twitter')} className="flex items-center space-x-2 w-full text-left">
                      <FaTwitter size={18} className="text-blue-400" />
                      <span>Twitter</span>
                    </button>
                    <button onClick={() => handleCopy(video.id)} className="flex items-center space-x-2 w-full text-left">
                      <FaRegCopy size={16} />
                      <span>Copy Link</span>
                    </button>
                  </div>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Copied message */}
      {copied && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-md z-50">
          Link copied to clipboard!
        </div>
      )}
    </>
  );
};

export default SongHome;
