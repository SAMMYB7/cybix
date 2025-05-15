import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Printer } from 'lucide-react'; // Replace Fax with Printer which is available

// Import office images - you'll need to add these to your assets
import usaOfficeImage from '../../assets/images/1.jpg'; 
import hyderabadOfficeImage from '../../assets/images/2.jpeg';
import khammamOfficeImage from '../../assets/images/31.jpg';

const BranchCard = ({ title, email, address, phone, fax, image }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg relative"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Office Image */}
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Location Label */}
      <div className="absolute top-6 right-6">
        <div className="bg-[#f7931e] text-white px-5 py-3 rounded-md font-medium">
          {title}
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="p-6 text-center">
        <a href={`mailto:${email}`} className="text-[#f7931e] hover:text-[#e58719] transition-colors mb-4 inline-block">
          {email}
        </a>
        
        <p className="text-gray-600 mb-4">
          {address}
        </p>
        
        <div className="flex justify-center space-x-4 mt-6">
          {/* Phone Number */}
          <div className={`flex items-center justify-center bg-blue-600 text-white px-4 py-3 rounded-md ${fax ? 'w-1/2' : 'w-full'}`}>
            <Phone size={16} className="mr-2" />
            <span>{phone}</span>
          </div>
          
          {/* Fax Number if available */}
          {fax && (
            <div className="flex items-center justify-center bg-blue-600 text-white px-4 py-3 rounded-md w-1/2">
              <Printer size={16} className="mr-2" /> {/* Using Printer icon instead of Fax */}
              <span>Fax {fax}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Branches = () => {
  const branchOffices = [
    {
      title: "Headquarters - USA",
      email: "info@cybix.us",
      address: "44330 Mercure Cir, ste 144 Sterling,VA-20166-USA",
      phone: "+1 2029824237",
      image: usaOfficeImage
    },
    {
      title: "India - Hyderabad",
      email: "info@cybix.in",
      address: "Street No.1, Kakathiya Nagar, Habsiguda, Hyderabad-500007, Telangana India.",
      phone: "+91 79959 74333",
      fax: "866 594 4637",
      image: hyderabadOfficeImage
    },
    {
      title: "India - Khammam",
      email: "info@cybix.in",
      address: "IT HUB, 5th Floor, Block-B, Indira Nagar, Khammam, Telangana-507002, India.",
      phone: "+91 79959 74333",
      fax: "866 594 4637",
      image: khammamOfficeImage
    }
  ];

  return (
    <section id="branches" className="py-24 bg-gray-100 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-1">Locations</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Our Branches.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branchOffices.map((branch, index) => (
            <BranchCard 
              key={index} 
              title={branch.title} 
              email={branch.email} 
              address={branch.address} 
              phone={branch.phone} 
              fax={branch.fax}
              image={branch.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;