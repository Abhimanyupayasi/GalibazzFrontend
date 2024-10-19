// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaStar } from "react-icons/fa";
// import GaliBazz from './GaliBazz';
// import axios from 'axios';
// import LoginButton from './Buttons/LoginButton';

// const Home = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-800 text-gray-100">
//       <div className="text-center">
//         <motion.h1
//           className="text-6xl font-bold mb-4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//         <div className='lg:flex lg:gap-5'>  Welcome to <GaliBazz/> </div>
//           {/* GaliBazz */}
//         </motion.h1>
//         <motion.p
//           className="text-xl mb-8"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Express Yourself Freely at GaliBazz.
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="bg-purple-600 text-white py-2 px-4 rounded-full inline-block"
//         >
//            <a className="cursor-pointer"
//            onClick={() => {
//             window.location.href = '/login'}}
//            >Get Started</a>
           


//         </motion.div>
//         <motion.div
//           className="mt-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1.5 }}
//         >
           
//           <p className="text-2xl font-semibold">
//           Where words find their  <span className="text-yellow-400">wildest freedom</span>
//           </p>
          
          
//         </motion.div>
//       </div>
      
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaStar } from "react-icons/fa";
// import GaliBazz from './GaliBazz';
// import axios from 'axios';
// import LoginButton from './Buttons/LoginButton';

// const Home = () => {

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-800 text-gray-100">
//       <div className="text-center">
//         {/* Main Heading Animation */}
//         <motion.h1
//           className="text-6xl font-bold mb-4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="lg:flex lg:gap-5">
//             Welcome to <GaliBazz />
//           </div>
//         </motion.h1>

//         {/* Subtext Animation */}
//         <motion.p
//           className="text-xl mb-8"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Express Yourself Freely at GaliBazz.
//         </motion.p>

//         {/* Get Started Button */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="bg-purple-600 text-white py-2 px-4 rounded-full inline-block"
//         >
//           <a className="cursor-pointer" onClick={() => { window.location.href = '/login'; }}>
//             Get Started
//           </a>
//         </motion.div>

//         {/* Subtext with Star Animation */}
//         <motion.div
//           className="mt-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1.5 }}
//         >
//           <p className="text-2xl font-semibold">
//             Where words find their <span className="text-yellow-400">wildest freedom</span>
//           </p>
//         </motion.div>

//         {/* New Links Section with Animation */}
//         <motion.div
//           className="mt-12 space-x-6"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 2 }}
//         >
//           <a
//             href="https://galibazz.social/write-jokes"
//             className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
//           >
//             Write Best Jokes
//           </a>
//           <a
//             href="https://galibazz.social/write-shayari"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
//           >
//             Write Best Shayari
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaLaugh, FaFeatherAlt } from "react-icons/fa";  // Importing icons for jokes and shayari
// import GaliBazz from './GaliBazz';
// import axios from 'axios';
// import LoginButton from './Buttons/LoginButton';

// const Home = () => {

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-800 text-gray-100">
//       <div className="text-center">
//         {/* Main Heading Animation */}
//         <motion.h1
//           className="text-6xl font-bold mb-4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="lg:flex lg:gap-5">
//             Welcome to <GaliBazz />
//           </div>
//         </motion.h1>

//         {/* Subtext Animation */}
//         <motion.p
//           className="text-xl mb-8"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Express Yourself Freely at GaliBazz.
//         </motion.p>

//         {/* Get Started Button */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="bg-purple-600 text-white py-2 px-4 rounded-full inline-block"
//         >
//           <a className="cursor-pointer" onClick={() => { window.location.href = '/login'; }}>
//             Get Started
//           </a>
//         </motion.div>

//         {/* Subtext with Star Animation */}
//         <motion.div
//           className="mt-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1.5 }}
//         >
//           <p className="text-2xl font-semibold">
//             Where words find their <span className="text-yellow-400">wildest freedom</span>
//           </p>
//         </motion.div>

//         {/* New Links Section with Animation and Icons */}
//         <motion.div
//           className="mt-12 space-x-6"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 2 }}
//         >
//           {/* Read Best Funny Jokes Button */}
//           <a
//             href="https://galibazz.social/read-jokes"
//             className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full inline-flex items-center transition-colors duration-300"
//           >
//             <FaLaugh className="mr-2" /> Read Best Funny Jokes
//           </a>
          
//           {/* Read Best Shayari Button */}
//           <a
//             href="https://galibazz.social/read-shayari"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-flex items-center transition-colors duration-300"
//           >
//             <FaFeatherAlt className="mr-2" /> Read Best Shayari
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { motion } from 'framer-motion';
import { FaLaugh, FaFeatherAlt } from "react-icons/fa";  // Importing icons for jokes and shayari
import GaliBazz from './GaliBazz';

const Home = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-gray-100 p-4">
      <div className="text-center">
        {/* Main Heading Animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="lg:flex lg:gap-5">
            Welcome to <GaliBazz />
          </div>
        </motion.h1>

        {/* Subtext Animation */}
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Express Yourself Freely at GaliBazz.
        </motion.p>

        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-purple-600 text-white py-2 px-4 rounded-full inline-block"
        >
          <a className="cursor-pointer" onClick={() => { window.location.href = '/login'; }}>
            Get Started
          </a>
        </motion.div>

        {/* Subtext with Star Animation */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-xl md:text-2xl font-semibold">
            Where words find their <span className="text-yellow-400">wildest freedom</span>
          </p>
        </motion.div>

        {/* New Links Section with Animation and Icons */}
        <motion.div
          className="mt-12 flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {/* Read Best Funny Jokes Button bg-green-500 hover:bg-green-600*/}
          <a
            href="https://galibazz.social"
            target='_blank'
            className="bg-[#078456] text-white font-semibold py-2 px-4 rounded-full inline-flex items-center transition-colors duration-300"
          >
            <FaLaugh className="mr-2" /> Read Best Funny Jokes
          </a>

          {/* Read Best Shayari Buttonbg-blue-500 hover:bg-blue-600 */}
          <a
            href="https://galibazz.social"
            target='_blank'
            className="bg-[#4c58e0] text-white font-semibold py-2 px-4 rounded-full inline-flex items-center transition-colors duration-300"
          >
            <FaFeatherAlt className="mr-2" /> Read Best Shayari
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

