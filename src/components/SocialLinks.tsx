import React, { useState, useEffect } from 'react';
import { FileText, Github, Linkedin, Mail, Newspaper, Clock, Code } from 'lucide-react';

const SocialLinks = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Kolkata', hour12: false}) + " IST");
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full p-4 md:p-6 flex flex-col justify-between bg-[var(--primary-bg)] text-[var(--text-color)]">
      {/* Header */}
      <div className="mb-3 flex justify-between items-center">
        <div>
          <h2 className="custom-connect-h1 text-lg font-semibold mb-2 text-[var(--text-color)]">Connect</h2>
          <p className="text-[var(--text-color)]/70 text-sm mb-2">
            Let's connect and collaborate!
          </p>
        </div>
        <div className="flex items-center gap-2 text-[var(--text-color)]/80 text-sm">
          <Clock size={14} />
          <span>{time}</span>
        </div>
      </div>
      
      {/* Social Links */}
      <div className="grid grid-cols-1 gap-2">
        {[
          { icon: <Github size={16} />, label: 'GitHub', link: 'https://github.com/Devatva24' },
          { icon: <Linkedin size={16} />, label: 'LinkedIn', link: 'https://linkedin.com/in/devatva-rachit-317a11229' },
          { icon: <Newspaper size={16} />, label: 'Medium', link: 'https://medium.com/@rachitdevatva722448' },
          { icon: <Mail size={16} />, label: 'Email', link: 'mailto:rachitdevatva722448@gmail.com' },
          { icon: <FileText size={16} />, label: 'Resume', link: 'https://drive.google.com/file/d/1WAFUc3XKvGpy8hi8drcLppkBdBwJ' },
          { icon: <Code size={16} />, label: 'LeetCode', link: 'https://leetcode.com/DevatvaR' },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target={item.label !== 'Email' ? "_blank" : undefined}
            rel={item.label !== 'Email' ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 p-3 bg-[var(--secondary-bg)] text-[var(--text-color)] rounded-lg transition-all duration-300 hover:translate-x-1"
          >
            {item.icon}
            <span className="font-medium text-sm">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
