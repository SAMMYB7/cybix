import React from 'react';
import { motion } from 'framer-motion';

// Import actual industry images - replace with your actual image paths
import iotImage from '../../assets/images/project-7.jpg'; 
import bankingImage from '../../assets/images/banking.jpg';
import educationImage from '../../assets/images/project-4.jpg';
import insuranceImage from '../../assets/images/project-5.jpg';
import supplyChainImage from '../../assets/images/scm.jpg';
import retailImage from '../../assets/images/retail.jpg';

const IndustryCard = ({ title, image, showTitle = false }) => {
  return (
    <motion.div 
      className="relative overflow-hidden group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card container with padding to allow space for the L-shapes */}
      <div className="relative pt-5 pl-5 pb-5 pr-5">
        {/* Orange L-shaped frame in top-left */}
        <div className="absolute top-0 left-0 z-10 group-hover:opacity-0 transition-opacity duration-300">
          <div className="bg-[#f7931e] w-[80px] h-[5px]"></div>
          <div className="bg-[#f7931e] w-[5px] h-[80px]"></div>
        </div>
        
        {/* Main card with image */}
        <div className="w-full h-[250px] relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>
          
          {/* Title overlay */}
          <div className={`
            absolute transition-all duration-300 
            ${showTitle ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
            top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          `}>
            <div className="bg-[#f7931e] text-white px-6 py-3 whitespace-nowrap text-center">
              <span className="font-display">{title}</span>
            </div>
          </div>
        </div>
        
        {/* Blue L-shaped frame in bottom-right */}
        <div className="absolute bottom-0 right-0 z-10 group-hover:opacity-0 transition-opacity duration-300">
          <div className="bg-[#335ef7] w-[5px] h-[80px] ml-auto"></div>
          <div className="bg-[#335ef7] w-[80px] h-[5px] ml-auto"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Industries = () => {
  const industries = [
    {
      title: "IOT & OEM",
      image: iotImage,
      showTitle: true // IOT already shows its title in the screenshot
    },
    {
      title: "BANKING AND FINANCIAL",
      image: bankingImage
    },
    {
      title: "EDUCATION",
      image: educationImage
    },
    {
      title: "INSURANCE",
      image: insuranceImage
    },
    {
      title: "SUPPLY CHAIN MANAGEMENT",
      image: supplyChainImage
    },
    {
      title: "RETAIL",
      image: retailImage
    }
  ];

  return (
    <section id="industries" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Added Cybix Inc text above Industries */}
          <p className="text-[#335ef7] font-medium mb-1">Cybix Inc</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Industries
          </h2>
          <div className="h-1 w-24 bg-[#f7931e] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index} 
              title={industry.title} 
              image={industry.image}
              showTitle={industry.showTitle}
            />
          ))}
        </div>
      </div>
      
      {/* Back to top button */}
      <a 
        href="#top" 
        className="fixed bottom-6 right-6 bg-[#f7931e] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#e58719] transition-colors"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </section>
  );
};

export default Industries;