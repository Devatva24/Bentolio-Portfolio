import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <div
      id="about"
      className="h-full p-4 md:p-6 flex flex-col justify-between bg-[var(--primary-bg)] text-[var(--text-color)]"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <User size={18} className="text-[var(--text-color)]" />
        <h2 className="custom-connect-h2 text-lg font-semibold text-[var(--text-color)]">
          About Me
        </h2>
      </div>

      {/* About Text */}
      <div className="flex-1">
        <p className="mb-3 text-[var(--text-color)]/80 text-sm">
          A final-year Computer Science undergraduate driven by the intersection of backend engineering and applied AI. I focus on building scalable, data-driven systems—from Spring Boot–based backend platforms to machine learning and generative AI applications—that transform raw data into meaningful, real-time insights. With a strong foundation in Java, system design, and ML workflows, I enjoy crafting practical, end-to-end solutions using modern frameworks and cloud-ready toolchains.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mt-4">
        <h3 className="font-medium mb-2 text-sm text-[var(--text-color)]">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {[
            'python', 'postgresql', 'fastapi', 'java', 'css', 'bash', 'git', 'c',
            'linux', 'django', 'langchain', 'springboot', 'react', 'mongodb', 'dialogflow',
            'llm', 'nextjs', 'prisma', 'vercel', 'aws', 'numpy', 'tensorflow', 'matplotlib'
          ].map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-[var(--secondary-bg)] text-[var(--text-color)] text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
