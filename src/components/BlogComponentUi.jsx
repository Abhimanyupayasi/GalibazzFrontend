import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import IntroButton from './Galiya/IntroButton';
import RedirectSongs from './Songs/RedirectSongs';

const GalibazzWelcome = () => {
  useEffect(() => {
    gsap.fromTo('.pulse-text', 
      { opacity: 0.5 }, 
      { opacity: 1, repeat: -1, yoyo: true, ease: 'power1.inOut', duration: 1 }
    );
  }, []);

  return (
    <div className="bg-[#1F2937] lg:h-72 py-10 flex items-center justify-center">
      <motion.div
        className="text-center  text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">
          Welcome to <span className="pulse-text" style={{ color: '#9333EA' }}>Our World</span>
        </h1>
        <p className="mt-4 text-xl">Where innovation meets creativity.</p>
        <div className='w-full lg:flex lg:items-center lg:gap-16 lg:justify-between'>
        
        <motion.a
          
          className="mt-6 inline-block rounded-full"
          style={{ backgroundColor: '#FACC15', color: '#1F2937' }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <RedirectSongs/>
          
        </motion.a>

        <motion.a
          
          className="mt-6 inline-block rounded-full"
          style={{ backgroundColor: '#FACC15', color: '#1F2937' }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <IntroButton/>
          
        </motion.a>

        </div>
        
      </motion.div>
    </div>
  );
};

export default GalibazzWelcome;
