import React from 'react';
import { motion } from 'framer-motion';
import hero from '../assets/hero.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background with img tag */}
      <div className="absolute inset-0 z-0">
        <img 
          src={hero} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 dark:bg-black/80"></div>
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-transparent z-0"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Forge Your <span className="text-[var(--color-primary-base)] block md:inline">Legacy</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience premium facilities, elite trainers, and a community built on relentless progress. Stop waiting. Start working.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="px-8 py-4 bg-[var(--color-primary-base)] hover:bg-[var(--color-primary-hover)] text-white text-lg font-bold rounded-full transition-transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(251,146,60,0.3)]"
            >
              Get Started
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white text-lg font-bold rounded-full transition-all hover:-translate-y-1"
            >
              View Services
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
