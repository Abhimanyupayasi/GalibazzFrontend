import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/Phone.css'; // Assuming you have a CSS file for styling
import Logo from './Logo'; // Assuming this is a component you use
import girlimg from '../imgs/girl.png';

const Phone = () => {
  const { ref: phoneRef, inView: phoneInView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is in view
    triggerOnce: true, // Trigger only the first time it comes into view
  });

  const { ref: girlRef, inView: girlInView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is in view
    triggerOnce: true, // Trigger only the first time it comes into view
  });

  return (
    <div className="lg:flex">
      {/* Phone container */}
      <motion.div
        ref={phoneRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: phoneInView ? 1 : 0, scale: phoneInView ? 1 : 0.5 }}
        transition={{ duration: 0.8 }}
        className="phone-container w-full h-screen lg:w-1/2 bg-gray-800 flex justify-center items-center"
      >
        <motion.div
          className="phone group cursor-pointer hover:skew-x-6 hover:-skew-y-6 hover:duration-500 duration-500 group-hover:duration-500 overflow-hidden relative rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center w-40 h-80 bg-gray-800 text-gray-50"
          whileHover={{ scale: 1.1 }}
        >
          <Logo /> {/* Replace with your Logo component */}
          <div className="flex flex-row justify-center text-sm font-thin items-center gap-1 font-thin">
            <span>Our message here</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="w-4 h-4 stroke-current">
              {/* Replace with your SVG path */}
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Girl image */}
      <motion.div
        ref={girlRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: girlInView ? 1 : 0, y: girlInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 w-full h-screen bg-gray-800 flex justify-center items-center"
      >
        <motion.img
          className="w-2/3 h-2/3"
          src={girlimg}
          alt="Girl"
        />
      </motion.div>
    </div>
  );
};

export default Phone;
