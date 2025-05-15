import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ScrollAnimation = ({ 
  children, 
  delay = 0.2, 
  duration = 0.6, 
  once = true, 
  className = "",
  threshold = 0.15, // Percentage of element in view before triggering
  animation = "fadeIn", // Default animation type
}) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, threshold });

  // Animation variants
  const variants = {
    fadeIn: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    slideInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 }
    },
  };

  // Select the animation variant
  const selectedVariant = variants[animation] || variants.fadeIn;

  // Trigger animation when element is in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedVariant}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;