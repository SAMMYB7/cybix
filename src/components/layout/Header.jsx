import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // Always set the active section to 'home' since we're only on the homepage right now
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.getElementById('hero-section')?.offsetHeight || window.innerHeight;
      const currentScrollPos = window.scrollY;
      
      // Make header visible only when in hero section
      if (currentScrollPos <= heroSectionHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleNavClick = (e, section) => {
    // Only allow clicking on Home for now
    if (section !== 'home') {
      e.preventDefault();
      // Optional: you could add a toast or notification here 
      // to inform users that other sections are coming soon
    }
  };

  return (
    <motion.header 
      className="fixed w-full z-50 bg-[#0a1530]/90 py-5 backdrop-blur-sm"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -100
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <motion.div 
            className="flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Logo size={40} color="#ffffff" secondaryColor="#f7931e" />
          </motion.div>
          <span className="ml-2 text-white text-xl font-bold font-display">Cybix</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-display">
          {['Home', 'About', 'Services', 'Products', 'Careers', 'Contact'].map((item) => {
            const itemLower = item.toLowerCase();
            // Always highlight "Home" since we're on the homepage
            const isActive = itemLower === 'home';
            
            return (
              <a
                key={item}
                href={`#${itemLower === 'home' ? 'hero-section' : itemLower}`}
                className={`
                  text-white transition-all duration-200
                  ${isActive ? 'text-secondary' : 'hover:text-secondary'}
                  hover:font-medium
                `}
                onClick={(e) => handleNavClick(e, itemLower)}
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 border border-white text-white hover:bg-white hover:text-[#0a1530] rounded-md transition-colors font-display">
            Employee Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-[#0a1530] absolute top-full left-0 w-full py-4 px-4 font-display"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="flex flex-col space-y-3">
            {['Home', 'About', 'Services', 'Products', 'Careers', 'Contact'].map((item) => {
              const itemLower = item.toLowerCase();
              // Always highlight "Home" since we're on the homepage
              const isActive = itemLower === 'home';
              
              return (
                <a
                  key={item}
                  href={`#${itemLower === 'home' ? 'hero-section' : itemLower}`}
                  className={`
                    text-white py-2 transition-all duration-200
                    ${isActive ? 'text-secondary' : 'hover:text-secondary'}
                    hover:font-medium
                  `}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    handleNavClick(e, itemLower);
                  }}
                >
                  {item}
                </a>
              );
            })}
            <button className="mt-3 px-5 py-2 border border-white text-white hover:bg-white hover:text-[#0a1530] rounded-md transition-colors text-left">
              Employee Login
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;