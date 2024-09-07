import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SongHome from './SongHome';


function AuthSingleSong() {

    const { id } = useParams();
  


  
  // Embed URL for the YouTube video
  const videoUrl = `https://www.youtube.com/embed/${id}?autoplay=1`;

  // Scroll to top when component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      
      <div className="py-5 bg-[#1F2937] flex items-center justify-center p-4">
        <motion.div
          className="bg-gray-900 rounded-lg shadow-lg overflow-hidden w-full max-w-3xl lg:max-w-4xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6">
            <h2 className="text-white text-2xl lg:text-3xl font-bold mb-2">Now Playing</h2>
            <p className="text-gray-400 text-base lg:text-lg">Enjoy the song!</p>
          </div>
        </motion.div>
      </div>
      <SongHome/>
    </>
  );
  
}

export default AuthSingleSong