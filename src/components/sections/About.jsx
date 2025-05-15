import React from 'react';
import { motion } from 'framer-motion';

// This is a placeholder - you'll need to add actual team/office images
import teamImage from '../../assets/images/about-1.jpg';
import officeImage from '../../assets/images/about-2.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-accent text-xl mb-4 font-display">About Us</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 group font-display tracking-tight">
              <span className="group-hover:text-secondary transition-colors duration-300">
                Empowering Success: Cybix Inc's Vision for IT Innovation
              </span>
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed font-sans">
              At Cybix Inc, we believe in a different approach to Information Technology. we're not just 
              another Information Technology Company we're a group of passionate individuals who 
              understand that people are at the heart of the IT industry. We believe that by putting people first, 
              we can create a unique advantage in providing top-notch IT consulting and staffing services to 
              Fortune 250+ organizations. Cybix Inc isn't just about technology it's about people, 
              partnerships, and delivering high-quality solutions without the overhead of large consulting 
              firms.
            </p>
            
            <motion.button
              className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-medium transition-all duration-300 overflow-hidden relative group font-display"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">More Details</span>
            </motion.button>
          </div>
          
          {/* Images */}
          <div className="relative h-[500px]">
            {/* Background image */}
            <motion.div 
              className="absolute right-0 top-0 w-[80%] h-[400px] rounded-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={officeImage} 
                alt="Our Office" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Foreground image */}
            <motion.div 
              className="absolute left-0 bottom-0 w-[70%] h-[350px] rounded-lg overflow-hidden shadow-xl"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={teamImage} 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;