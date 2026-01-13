import React, { useEffect, useState } from 'react';
import { Code, Terminal } from 'lucide-react';
import TechForAll from './TechForAll';

const roles = ["Java Developer", "Backend & API Developer", "AI Enthusiast"];

const TYPING_SPEED = 75; // ms per character
const DELAY_BETWEEN_ROLES = 300; // ms after a role is fully typed

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayedText.length < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(roles[roleIndex].slice(0, displayedText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, DELAY_BETWEEN_ROLES);
      }
    } else {
      timeout = setTimeout(() => {
        setTyping(true);
        setDisplayedText("");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing, roleIndex]);

  return (
    <div
      id="hero"
      className="h-full p-4 md:p-6 flex flex-col justify-center relative overflow-hidden bg-[var(--primary-bg)] text-[var(--text-color)] rounded-xl mb-4" 
      // <-- added mb-4 for small gap
    >
      {/* Background Icons */}
      <div className="absolute -top-8 -right-8 text-[var(--secondary-bg)]/20">
        <Code size={100} />
      </div>
      <div className="absolute -bottom-8 -left-8 text-[var(--secondary-bg)]/20">
        <Terminal size={100} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <h1 className="custom-hero-h1 text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[var(--text-color)]">
          Devatva Rachit
        </h1>

        <div className="overflow-hidden h-10 md:h-12 flex items-center">
          <span className="text-lg md:text-xl font-semibold text-[var(--text-color)]/90 py-2 tracking-tight">
            {displayedText}
            <span className="custom-connect-h1 animate-pulse">|</span>
          </span>
        </div>

        {/* Tech for All */}
        <TechForAll />

        {/* Mobile Button */}
        <div className="mt-6 md:hidden">
          <a 
            href="#projects" 
            className="inline-block px-4 py-2 bg-[var(--text-color)] text-[var(--primary-bg)] rounded-lg font-medium transition-all duration-300 hover:bg-[var(--text-color)]/90 hover:translate-y-[-2px] hover:shadow-md text-sm"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
