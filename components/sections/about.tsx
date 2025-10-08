"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Briefcase, Code, Award } from "lucide-react";

const About = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">About me</h1>
        <p className="text-[var(--muted)]">Get to know more about my background and interests</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Card */}
        <div className="card p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              RS
            </div>
            <div>
              <h2 className="text-xl font-semibold">Rishabh Sharma</h2>
              <p className="text-[var(--muted)]">Frontend Developer</p>
              <p className="text-sm text-[var(--muted)]">Pune, Maharashtra, India</p>
            </div>
          </div>
          
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            I'm a passionate Software Engineer with 3+ years of experience building scalable web applications. 
            I specialize in React, Next.js, Node.js, and full-stack development, with expertise in delivering 
            enterprise solutions for industry leaders and government clients.
          </p>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[var(--accent)] text-white text-xs rounded-full">React</span>
            <span className="px-3 py-1 bg-[var(--accent)] text-white text-xs rounded-full">Next.js</span>
            <span className="px-3 py-1 bg-[var(--accent)] text-white text-xs rounded-full">Node.js</span>
            <span className="px-3 py-1 bg-[var(--accent)] text-white text-xs rounded-full">MongoDB</span>
            <span className="px-3 py-1 bg-[var(--accent)] text-white text-xs rounded-full">AWS</span>
            <span className="px-3 py-1 bg-[var(--accent)] text-white text-xs rounded-full">TypeScript</span>
          </div>
        </div>

        {/* Stats Card */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[var(--muted)]">Years of Experience</span>
              <span className="font-semibold">3+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[var(--muted)]">Projects Completed</span>
              <span className="font-semibold">20+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[var(--muted)]">Technologies</span>
              <span className="font-semibold">15+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[var(--muted)]">Education</span>
              <span className="font-semibold">B.Tech (9.2 GPA)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-6">My Journey</h3>
        <div className="timeline-line">
          <div className="timeline-item">
            <div className="timeline-icon">
              <GraduationCap size={20} />
            </div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-xl">B.Tech in Electronics & Telecommunication</h4>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  Completed
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] mb-3">2019 - 2023</p>
              <p className="text-sm mb-3">Bharti Vidyapeeth University, Pune</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Award size={16} className="text-yellow-500" />
                  <span className="text-sm font-medium">GPA: 9.2</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon">
              <Code size={20} />
            </div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-xl">Full-Stack Developer Intern</h4>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  Internship
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] mb-3">Oct 2021 - Apr 2022</p>
              <p className="text-sm mb-3">Hezkrost Technologies</p>
              <p className="text-sm text-[var(--muted)]">Developed web applications from scratch, served as sole web developer on multiple projects</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon">
              <Briefcase size={20} />
            </div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-xl">Technical Associate</h4>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                  Full-time
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] mb-3">Jul 2023 - May 2024</p>
              <p className="text-sm mb-3">Dexian</p>
              <p className="text-sm text-[var(--muted)]">Testing, debugging, and code improvements across multiple client projects</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon">
              <Award size={20} />
            </div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-xl">Software Engineer</h4>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  Current
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] mb-3">Jun 2024 - Present</p>
              <p className="text-sm mb-3">Fore Excel Pvt. Ltd.</p>
              <p className="text-sm text-[var(--muted)] mb-3">Leading enterprise solutions for TASL, TTL, and government clients</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[var(--accent)] text-white text-xs rounded">Team Lead</span>
                <span className="px-2 py-1 bg-[var(--accent)] text-white text-xs rounded">Client-Facing</span>
                <span className="px-2 py-1 bg-[var(--accent)] text-white text-xs rounded">Enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

