import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import SocialLinks from './SocialLinks';

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      
      {/* Hero Section */}
      <div className="bg-[var(--tertiary-bg)] rounded-xl overflow-hidden h-[400px] transition-transform duration-300 hover:scale-[1.01]">
        <Hero />
      </div>
      
      {/* About Section */}
      <div className="bg-[var(--secondary-bg)] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
        <About />
      </div>

      {/* Social Links Section */}
      <div className="bg-[var(--tertiary-bg)] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
        <SocialLinks />
      </div>
      
      {/* Projects Section - Spans full width */}
      <div className="lg:col-span-3 bg-[var(--tertiary-bg)] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
        <Projects />
      </div>
    
    </div>
  );
};

export default BentoGrid;
