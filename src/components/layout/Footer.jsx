import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ChevronRight, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-6 font-display">Solvency Inc</h2>
            <p className="text-gray-300 mb-6">
              Empowering Success: Solvency Inc's 
              Vision for IT Innovation
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {[
                { icon: Facebook, link: '#' },
                { icon: Twitter, link: '#' },
                { icon: Instagram, link: '#' },
                { icon: Linkedin, link: '#' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f7931e] transition-colors"
                  aria-label={social.icon.name}
                >
                  <social.icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Short Links */}
          <div className="md:col-span-1">
            <h3 className="text-[#f7931e] text-xl font-semibold mb-6 font-display">Short Link</h3>
            <ul className="space-y-3">
              {[
                { name: 'About us', link: '#about' },
                { name: 'Contact us', link: '#contact' },
                { name: 'Our Services', link: '#services' },
                { name: 'Our Products', link: '#products' },
                { name: 'Our Industries', link: '#industries' },
                { name: 'Careers', link: '#careers' }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="flex items-center text-gray-300 hover:text-[#f7931e] transition-colors">
                    <ChevronRight size={18} className="text-[#f7931e] mr-2" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-[#f7931e] text-xl font-semibold mb-6 font-display">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="#map" className="flex items-start text-gray-300 hover:text-[#f7931e] group">
                  <MapPin size={20} className="text-[#f7931e] mr-3 mt-1 flex-shrink-0" />
                  <span>44330 Mercure Cir,ste 144<br />Sterling,VA-20166-USA</span>
                </a>
              </li>
              <li>
                <a href="tel:+12029824237" className="flex items-center text-gray-300 hover:text-[#f7931e] group">
                  <Phone size={20} className="text-[#f7931e] mr-3 flex-shrink-0" />
                  <span>+1 2029824237</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@solvency.us" className="flex items-center text-gray-300 hover:text-[#f7931e] group">
                  <Mail size={20} className="text-[#f7931e] mr-3 flex-shrink-0" />
                  <span>info@solvency.us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Horizontal Line */}
        <div className="border-t border-gray-800 my-10"></div>
        
        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Solvency Inc. All Rights Reserved.</p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#f7931e] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#e58719] transition-colors"
        aria-label="Back to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;