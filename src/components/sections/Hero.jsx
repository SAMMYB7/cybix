import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';

import heroImage from '../../assets/images/hero-transformed.jpeg';

const Hero = () => {
  return (
    <section id="hero-section" className="relative text-white min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1530]/80 to-[#0a1530]/95"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/images/grid-pattern.png')] bg-repeat opacity-10"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-32 flex flex-col items-center justify-center text-center h-full">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-[#f59e0b] font-display">Best IT Solutions</h2>
          
          <div className="group">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 transition-all duration-300 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_15px_rgba(103,232,249,0.7)] font-display tracking-tight">
              Cybix Inc
            </h1>
          </div>
          
          {/* Improved responsive layout for services text */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 mb-10">
            <div className="flex items-center space-x-2">
              <span className="text-xl hover:text-yellow-500 transition-colors duration-300 font-display">
                Technology
              </span>
              <span className="text-xl hidden sm:block">|</span>
            </div>
            
            <div className="flex items-center space-x-2 my-2 sm:my-0">
              <span className="text-xl hover:text-orange-400 transition-colors duration-300 font-display">
                Development
              </span>
              <span className="text-xl hidden sm:block">|</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-xl hover:text-amber-400 transition-colors duration-300 font-display">
                Consulting
              </span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.button
            className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all duration-300 font-display"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Demo
            <ArrowRight size={18} />
          </motion.button>
          
          <motion.button
            className="border-2 border-white hover:border-[#f59e0b] hover:text-[#f59e0b] px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all duration-300 font-display"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Platform
            <Rocket size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;