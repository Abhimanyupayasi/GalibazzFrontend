import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import '../css/About.css'; // Assuming you have a CSS file for styling

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const controls = useAnimation();
  const gsapRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      gsap.fromTo(
        gsapRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
      );
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div ref={ref} className="about-container bg-gray-800 text-gray-100 p-10 flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold">Our Story</h1>
        <p className="text-lg mt-4">
          Welcome to <span className="text-orange-400">GaliBazz</span>, where you can express yourself freely without judgment. In today's world, many people feel depressed and unable to share their true feelings publicly. Our platform provides a safe space where your voice feels heard, respected, and empowered.
        </p>
      </motion.div>
      <div className="story-content flex flex-col lg:flex-row items-center justify-center w-full">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="lg:w-1/2 p-5"
        >
          <h2 className="text-2xl font-semibold">Our Goal</h2>
          <p className="mt-4">
            At <span className="text-orange-400">GaliBazz</span>, we are committed to promoting mental well-being by providing a platform where people can express their true feelings without fear of being judged. We believe that everyone deserves to feel heard, respected, and empowered. Join us and let your voice be heard.
          </p>
        </motion.div>
        <motion.div
          ref={gsapRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 p-5"
        >
          <img
            src="https://via.placeholder.com/400" // Replace with your image source
            alt="Our Story"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
