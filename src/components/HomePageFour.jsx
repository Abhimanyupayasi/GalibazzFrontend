import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(ScrollTrigger);

const HomePageFour = () => {
  const containerRef = useRef(null);
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const elements = containerRef.current?.children;
    if (elements) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }
  }, [sectionRef]);

  const circles = [
    { size: '20vw', position: { top: '20%', left: '2%' }, imgSrc: 'https://pbs.twimg.com/profile_images/1411957445711196163/rzYzw-T1_400x400.jpg', text: 'Story' },
    { size: '25vw', position: { top: '40%', right: '25%' }, imgSrc: 'https://stickerly.pstatic.net/sticker_pack/Fcxo0AZ8oaXXrzH693IC9w/NPMNDL/16/c7f2f8f7-0b9d-4b06-88b9-f4dbc8e1f4e0.png', text: 'Jokes' },
    { size: '28vw', position: { bottom: '20%', left: '15%' }, imgSrc: 'https://stickerly.pstatic.net/sticker_pack/Fcxo0AZ8oaXXrzH693IC9w/NPMNDL/16/d05f639d-a173-48b4-a217-723280e67b4c.png', text: 'Shayri' },
    { size: '32vw', position: {  bottom: '10%', right: '2%' }, imgSrc: 'https://stickerly.pstatic.net/sticker_pack/Fcxo0AZ8oaXXrzH693IC9w/NPMNDL/16/04caef7d-bfb5-47bf-889a-2c3c56b02563.png', text: 'Thoughts' },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900" ref={sectionRef}>
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full overflow-hidden flex justify-center items-center"
          style={{
            width: circle.size,
            height: circle.size,
            ...circle.position,
            clipPath: 'circle(50% at 50% 50%)',
          }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
        >
          <img src={circle.imgSrc} alt={circle.text} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white font-bold text-lg">
            {circle.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HomePageFour;
