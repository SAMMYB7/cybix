import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = 40, primaryColor = "#ffffff", secondaryColor = "#d1d1d1" }) => {
  return (
    <motion.div 
      className="relative"
      style={{ width: size, height: size }}
      whileHover={{ 
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 0 }}
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {/* Main outer C shape */}
        <motion.path
          d="M256 40C137.5 40 40 137.5 40 256C40 374.5 137.5 472 256 472C374.5 472 472 374.5 472 256"
          stroke={primaryColor}
          strokeWidth="60"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: 1,
            strokeDasharray: "1, 0"
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
        
        {/* Inner stylized C element */}
        <motion.path
          d="M290 140C230 140 170 180 170 256C170 332 230 372 290 372C330 372 360 350 380 320"
          stroke={secondaryColor}
          strokeWidth="40"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: 1,
            strokeDasharray: "1, 0"
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: "easeInOut",
          }}
        />

        {/* Small accent curve that completes the stylized C */}
        <motion.path
          d="M240 180C210 210 200 240 200 256C200 272 210 302 240 332"
          stroke={primaryColor}
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: 1,
            strokeDasharray: "1, 0"
          }}
          transition={{
            duration: 1.5,
            delay: 1,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Logo;