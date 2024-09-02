import React from 'react';
import { motion } from 'framer-motion';

const GaliBazz = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.1, // Delay between each character
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className="flex items-center justify-center bg-gray-800 text-gray-100">
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="text-6xl font-bold flex"
      >
        <motion.span variants={charVariants} className="text-yellow-400">
          G
        </motion.span>
        <motion.span variants={charVariants} className="text-purple-600">
          a
        </motion.span>
        <motion.span variants={charVariants} className="text-yellow-400">
          l
        </motion.span>
        <motion.span variants={charVariants} className="text-purple-600">
          i
        </motion.span>
        <motion.span variants={charVariants} className="text-yellow-400">
          B
        </motion.span>
        <motion.span variants={charVariants} className="text-purple-600">
          a
        </motion.span>
        <motion.span variants={charVariants} className="text-yellow-400">
          z
        </motion.span>
        <motion.span variants={charVariants} className="text-purple-600">
          z
        </motion.span>
      </motion.div>
    </div>
  );
};

export default GaliBazz;

