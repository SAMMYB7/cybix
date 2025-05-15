import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import AiSolutions from '../components/sections/AiSolutions';
import ExclusiveServices from '../components/sections/ExclusiveServices';
import Industries from '../components/sections/Industries';
import Branches from '../components/sections/Branches';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import ScrollAnimation from '../components/ui/ScrollAnimation';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a1530]">
      <Header />
      {/* Hero section typically doesn't need scroll animation as it's initially visible */}
      <Hero />
      
      {/* About section with fadeIn animation */}
      <ScrollAnimation animation="fadeIn" delay={0.3}>
        <About />
      </ScrollAnimation>
      
      {/* AI Solutions section with slideInRight animation */}
      <ScrollAnimation animation="slideInRight" delay={0.3}>
        <AiSolutions />
      </ScrollAnimation>
      
      {/* Services section with scaleUp animation */}
      <ScrollAnimation animation="scaleUp" delay={0.3}>
        <ExclusiveServices />
      </ScrollAnimation>
      
      {/* Industries section with fadeIn animation */}
      <ScrollAnimation animation="fadeIn" delay={0.3}>
        <Industries />
      </ScrollAnimation>
      
      {/* Branches section with fadeInUp animation */}
      <ScrollAnimation animation="fadeInUp" delay={0.3}>
        <Branches />
      </ScrollAnimation>
      
      {/* Contact section with slideInLeft animation */}
      <ScrollAnimation animation="slideInLeft" delay={0.3}>
        <Contact />
      </ScrollAnimation>
      
      {/* Footer typically doesn't need scroll animation as it's expected at the bottom */}
      <Footer />
    </div>
  );
};

export default HomePage;