import React from 'react';
import { FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'LLM-Powered YouTube Transcript Chatbot',
      description: 'Natively harnesses RAG pipelines, vector embeddings, and LLM reasoning to deliver live, sentiment-aware conversational intelligence over YouTube video content.',
      tags: ['RAG', 'Langchain', 'NLP', 'LLM', 'Vector Embeddings'],
      link: 'https://github.com/Devatva24/Youtube_Chatbot',
    },
    {
      title: 'CareFlow MedOps : Hospital Operations System',
      description: 'CareFlow natively orchestrates Spring Boot microservices and RESTful APIs to digitize hospital workflows, enabling efficient patient management, appointment scheduling, and operational insights.',
      tags: ['SpringBoot', 'Java', 'MySQL', 'JWT', 'Docker', 'JUnit'],
      link: 'https://github.com/Devatva24/Patient-Management',
    },
    {
      title: 'Foodoo: Conversational Food Assistant',
      description: 'Foodoo leverages language understanding to deliver context-aware food recommendations and interactive dialogue, transforming user queries into personalized culinary insights.',
      tags: ['Python', 'NLP', 'FastAPI', 'DialogFlow'],
      link: 'https://github.com/Devatva24/Foodoo-FoodChatBot',
    },
  ];

  return (
    <div id="projects" className="p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FolderGit2 size={18} className="text-[var(--text-color)]" />
        <h2 className="text-lg font-semibold text-[var(--text-color)]">Projects</h2>
      </div>
      
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-[var(--primary-bg)] rounded-lg shadow-sm p-4 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
          >
            <h3 className="font-semibold text-base mb-2 text-[var(--text-color)]">{project.title}</h3>
            <p className="text-[var(--text-color)]/70 mb-3 text-sm">{project.description}</p>
            
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 bg-[var(--secondary-bg)] text-[var(--text-color)] text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-medium text-[var(--text-color)] hover:text-[var(--secondary-bg)] transition-colors duration-300"
            >
              View Project →
            </a>
          </div>
        ))}

        {/* See All Projects Card */}
        <div className="flex items-center justify-center h-full relative">
          <img 
            src="/public/loader.png"
            className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-lg pointer-events-none"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Devatva24?tab=repositories"
            className="inline-block px-4 py-2 border border-[var(--text-color)] rounded-lg font-medium transition-all duration-300 hover:bg-[var(--text-color)] hover:text-[var(--primary-bg)] text-sm w-full text-center relative z-10"
          >
            See All Projects →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
