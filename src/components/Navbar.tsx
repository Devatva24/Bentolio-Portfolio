import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import ThreeCube from './ThreeCube';

const Navbar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000; // GMT+5:30 in milliseconds
      const istTime = new Date(now.getTime() + istOffset);

      const hours = istTime.getUTCHours().toString().padStart(2, '0');
      const minutes = istTime.getUTCMinutes().toString().padStart(2, '0');
      const seconds = istTime.getUTCSeconds().toString().padStart(2, '0');

      setTime(`${hours}:${minutes}:${seconds} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[var(--tertiary-bg)] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.01] mb-4">
      <div className="p-4 md:p-6 flex justify-between items-center">
        {/* Desktop Time */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="font-medium text-sm text-[var(--text-color)]">
            {time}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-[var(--text-color)]">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
