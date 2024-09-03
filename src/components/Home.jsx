import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from "react-icons/fa";
import GaliBazz from './GaliBazz';
import axios from 'axios';
import LoginButton from './Buttons/LoginButton';

const Home = () => {



  

  






  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-gray-100">
      <div className="text-center">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        <div className='lg:flex lg:gap-5'>  Welcome to <GaliBazz/> </div>
          {/* GaliBazz */}
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Express Yourself Freely at GaliBazz.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-purple-600 text-white py-2 px-4 rounded-full inline-block"
        >
           <a className="cursor-pointer"
           onClick={() => {
            window.location.href = '/login'}}
           >Get Started</a>
           


        </motion.div>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
           
          <p className="text-2xl font-semibold">
          Where words find their  <span className="text-yellow-400">wildest freedom</span>
          </p>
          
          
        </motion.div>
      </div>
      
    </div>
  );
};

export default Home;
