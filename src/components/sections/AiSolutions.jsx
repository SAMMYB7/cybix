import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

// Import AI solutions image - update to match cloud binary image in screenshot
import aiSolutionsImage from '../../assets/images/ai5.jpg';

const AiSolutions = () => {
  return (
    <section id="ai-solutions" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with Grid Overlay - Left Side */}
          <motion.div 
            className="relative aspect-square max-w-xl mx-auto"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }} 
            style={{
              position: 'relative',
              overflow: 'hidden'
              // Removed the transition property that might be conflicting
            }}
          >
            <div 
              className="ai-grid-container"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden'
              }}
            >
              {/* The main image */}
              <img 
                src={aiSolutionsImage} 
                alt="AI-powered cloud computing"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              
              {/* Grid overlay using CSS */}
              <div 
                className="grid-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `
                    linear-gradient(to right, transparent 20%, white 20%, white 22%, transparent 22%),
                    linear-gradient(to right, transparent 45%, white 45%, white 47%, transparent 47%),
                    linear-gradient(to right, transparent 78%, white 78%, white 80%, transparent 80%),
                    linear-gradient(to bottom, transparent 25%, white 25%, white 27%, transparent 27%),
                    linear-gradient(to bottom, transparent 48%, white 48%, white 50%, transparent 50%),
                    linear-gradient(to bottom, transparent 73%, white 73%, white 75%, transparent 75%)
                  `,
                  pointerEvents: 'none'
                }}
              />
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 font-display tracking-tight">
              We Make Your Business Smarter with Data-Driven Decisions
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed font-sans">
              Unlock the power of artificial intelligence to propel your business into the future 
              with Cybix Inc. Our innovative AI solutions are designed to optimize operations, 
              enhance decision-making, and drive sustainable growth. With cutting-edge 
              technology at your fingertips, you can streamline processes, identify 
              opportunities, and stay ahead of the competition.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed font-sans">
              At Cybix Inc, we understand the unique challenges businesses face in today's 
              dynamic landscape. That's why our team of experts is committed to delivering 
              tailored AI solutions that align with your objectives and drive measurable results. 
              From predictive analytics to machine learning algorithms, we harness the full 
              potential of AI to empower your business and drive success.
            </p>
            
            <div className="space-y-4 mb-8">
              {['Professional AI/ML and Data Engineers', '24/7 Support', 'Fair Prices'].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <p className="font-display font-medium">{feature}</p>
                </div>
              ))}
            </div>
            
            <motion.button
              className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-medium transition-all duration-300 overflow-hidden relative group font-display"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Read More</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Add CSS for the grid pattern */}
      <style >{`
        .ai-grid-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        @media (max-width: 768px) {
          .grid-overlay {
            background-image: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AiSolutions;