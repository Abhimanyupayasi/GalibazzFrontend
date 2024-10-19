import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(ScrollTrigger);

const HomePageThree = () => {
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
    { size: '20vw', position: { top: '20%', left: '2%' }, color: 'bg-purple-600', text: 'Jokes' },
    { size: '25vw', position: { top: '40%', right: '25%' }, color: 'bg-blue-600', text: 'Shayari\'s' },
    { size: '22vw', position: { bottom: '20%', left: '15%' }, color: 'bg-yellow-400', text: 'Thoughts' },
    { size: '28vw', position: { bottom: '10%', right: '2%' }, color: 'bg-[#22d3ee] text-black', text: 'Madar***D' },
  ];
  
  return (
    // min-h-screen
    <div className="relative min-h-screen  bg-gray-800" ref={sectionRef}>
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full overflow-hidden ${circle.color} flex justify-center items-center`}
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
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white font-bold text-sm md:text-lg lg:text-xl">
            {circle.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HomePageThree;
