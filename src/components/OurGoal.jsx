import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';

const OurGoal = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  // Use GSAP for more advanced animations
  React.useEffect(() => {
    if (inView) {
      gsap.from('.goal-text', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="bg-gray-800  text-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 goal-text"
          >
            Our Goal
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl goal-text px-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            At <span className="text-yellow-400 ">GaliBazz</span>, we aim to provide a safe and unrestricted space where people can express themselves freely without fear of judgment or condemnation.
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl goal-text my-4  px-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          >
            We believe in <span className="text-purple-400">promoting</span> mental well-being by encouraging open dialogue and removing societal taboos surrounding expression.
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl goal-text px-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Join us in creating a community where everyone <span className="text-green-400">feels heard</span>, <span className="text-green-400">respected</span>, and <span className="text-green-400">empowered</span> to share their thoughts and feelings authentically.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurGoal;
