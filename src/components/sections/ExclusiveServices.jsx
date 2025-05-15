import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Monitor, 
  Cloud, 
  Briefcase, 
  Server, 
  LineChart 
} from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg group h-full bg-white"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Quarter circle overlay that expands on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#f7931e]/20 rounded-bl-full transition-all duration-1000 
        group-hover:w-[200%] group-hover:h-[200%] group-hover:bg-secondary"></div>
      
      {/* Content container */}
      <div className="p-8 h-full relative transition-all duration-500">
        {/* Icon container */}
        <div className="mb-6 p-3 bg-secondary inline-block rounded-lg text-white relative z-10 group-hover:bg-white group-hover:text-secondary transition-all duration-500">
          <Icon size={24} />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 font-display text-black relative z-10 group-hover:text-white transition-colors duration-500">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-700 relative z-10 group-hover:text-white/90 transition-colors duration-500">{description}</p>
      </div>
    </motion.div>
  );
};

const ExclusiveServices = () => {
  const services = [
    {
      title: "Data and AI",
      description: "AI services can help solve complex data management and AI problems. We accelerate your Data and AI transformation across your hybrid multicloud environment by providing agile, integrated, flexible solutions for your enterprise data estate.",
      icon: Database
    },
    {
      title: "Application Development",
      description: "We develop fully Dynamic and Interactive UI Websites with user friendly interface by our team of highly skilled and experienced professional developers.",
      icon: Monitor
    },
    {
      title: "Cloud Development",
      description: "Cloud storage is a way of effectively utilizing the actuality data storage technology and resources so as to make them available over the cloud.",
      icon: Cloud
    },
    {
      title: "Business Process Outsourcing",
      description: "Cybix Inc is a leading provider of Business Process Outsourcing (BPO) focusing on the complex, voice and non-voice based segment of customer-care services.",
      icon: Briefcase
    },
    {
      title: "Infrastructure Management",
      description: "Our Services caters to the three most crucial principles of global business: Growth through partnership, Service Delivery Excellence & Transformation Focused Execution.",
      icon: Server
    },
    {
      title: "Software Quality Testing",
      description: "Cybix Inc is dedicated to providing meticulous Quality Assurance (QA) services, ensuring the reliability and performance of software products. With an unwavering focus on quality, we consistently deliver high-quality software solutions.",
      icon: LineChart
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#c5d4ebdf] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display relative inline-block">
            Exclusive Services
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary"></div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-primary ml-24"></div>
          </h2>
          <p className="text-gray-600 mt-6">Services Built Specifically For Your Business</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveServices;