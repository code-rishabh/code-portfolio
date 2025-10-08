"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DAO (Decentralized Autonomous Organization)",
      description: "Built my own DAO using JavaScript and received an NFT. A Web3 project exploring decentralized governance and blockchain technology.",
      tech: ["JavaScript", "Web3", "Blockchain", "NFT"],
      status: "Completed",
      date: "2023",
      github: "https://github.com/code-rishabh/dao-project",
      live: "https://buildspace-dao-starter-mocha.vercel.app/",
      stars: 15,
      featured: true
    },
    {
      id: 2,
      title: "Web3 Solana Application",
      description: "Built a Web3 app on Solana with React and Rust, received an NFT. Exploring blockchain development and smart contracts.",
      tech: ["React", "Rust", "Solana", "Web3", "Blockchain"],
      status: "Completed",
      date: "2023",
      github: "https://github.com/code-rishabh/solana-app",
      live: "https://gif-portal-starter-six.vercel.app/",
      stars: 12,
      featured: true
    },
    {
      id: 3,
      title: "Real-time Chat App (Android)",
      description: "Chat application using SocketIO and ReactJS. Real-time messaging with modern UI and responsive design.",
      tech: ["React", "Socket.IO", "JavaScript", "Android"],
      status: "Completed",
      date: "2023",
      github: "https://github.com/code-rishabh/chat-app",
      live: "https://ello.vercel.app/",
      stars: 8,
      featured: true
    },
    {
      id: 4,
      title: "StartOnSolana Clone",
      description: "Built a clone of the renowned website startonsolana.com. Recreated the design and functionality using modern web technologies.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      status: "Completed",
      date: "2023",
      github: "https://github.com/code-rishabh/startonsolana-clone",
      live: "https://startonsolana-clone.vercel.app/",
      stars: 6,
      featured: false
    },
    {
      id: 5,
      title: "Linkedlabs Platform",
      description: "Comprehensive web application developed from inception to deployment. Served as the sole web developer on this project.",
      tech: ["React", "Node.js", "MongoDB", "Firebase"],
      status: "Completed",
      date: "2022",
      github: "https://github.com/code-rishabh/linkedlabs",
      live: "http://linkedlabs.co/",
      stars: 10,
      featured: false
    },
    {
      id: 6,
      title: "Hezkrost Technologies Website",
      description: "Official parent website for Hezkrost Technologies, enhancing the company's online presence and branding.",
      tech: ["HTML", "CSS", "JavaScript", "WordPress"],
      status: "Completed",
      date: "2022",
      github: "https://github.com/code-rishabh/hezkrost-website",
      live: "http://hezkrost.com/",
      stars: 4,
      featured: false
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-[var(--muted)]">A collection of my recent work and side projects</p>
      </div>

      {/* Featured Projects */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.filter(p => p.featured).map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              className="card card-hover p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-[var(--muted)] mb-3">{project.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-[var(--border)] text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-[var(--muted)]">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star size={14} />
                    <span>{project.stars}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-[var(--border)] rounded"
                  >
                    <Github size={16} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-[var(--border)] rounded"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Projects */}
      <div>
        <h2 className="text-xl font-semibold mb-4">All Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ x: 4 }}
              className="card card-hover p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold">{project.title}</h3>
                    <span className="px-2 py-1 bg-[var(--accent)] text-white text-xs rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted)] mb-2">{project.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-[var(--muted)]">
                    <span>{project.date}</span>
                    <div className="flex items-center space-x-1">
                      <Star size={12} />
                      <span>{project.stars}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-[var(--border)] rounded"
                  >
                    <Github size={16} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-[var(--border)] rounded"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

