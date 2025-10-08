"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Wrench, 
  Palette,
  FileText,
  Globe,
  Terminal,
  Server,
  Cloud,
  Monitor,
  GitBranch,
  Layers
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-500",
      skills: [
        { name: "JavaScript", level: 95, years: "3+" },
        { name: "TypeScript", level: 90, years: "2+" },
        { name: "HTML5", level: 95, years: "3+" },
        { name: "CSS3", level: 90, years: "3+" },
        { name: "Python", level: 75, years: "2+" },
        { name: "C/C++", level: 80, years: "2+" },
        { name: "Embedded C", level: 70, years: "1+" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      color: "text-green-500",
      skills: [
        { name: "React.js", level: 95, years: "3+" },
        { name: "Next.js", level: 90, years: "2+" },
        { name: "Node.js", level: 85, years: "2+" },
        { name: "Express.js", level: 80, years: "2+" },
        { name: "Tailwind CSS", level: 90, years: "2+" },
        { name: "WordPress", level: 85, years: "2+" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Wrench,
      color: "text-purple-500",
      skills: [
        { name: "MongoDB", level: 85, years: "2+" },
        { name: "MySQL", level: 80, years: "2+" },
        { name: "AWS", level: 75, years: "1+" },
        { name: "Google Firebase", level: 80, years: "2+" },
        { name: "Hostinger", level: 70, years: "1+" }
      ]
    },
    {
      title: "Tools & Operating Systems",
      icon: Palette,
      color: "text-pink-500",
      skills: [
        { name: "Git", level: 90, years: "3+" },
        { name: "Linux", level: 80, years: "2+" },
        { name: "Windows", level: 95, years: "3+" },
        { name: "VS Code", level: 95, years: "3+" },
        { name: "Elementor", level: 85, years: "1+" },
        { name: "SUSE Linux", level: 75, years: "1+" }
      ]
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Skills & Technologies</h1>
        <p className="text-[var(--muted)]">My technical expertise and proficiency levels</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Icon className={`w-6 h-6 ${category.color}`} />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <div className="flex items-center space-x-2 text-sm text-[var(--muted)]">
                        <span>{skill.level}%</span>
                        <span>•</span>
                        <span>{skill.years} years</span>
                      </div>
                    </div>
                    <div className="w-full bg-[var(--border)] rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${
                          skill.level >= 80 ? 'bg-green-500' :
                          skill.level >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3, duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Skills */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Additional Skills</h3>
        <div className="card p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Web Performance",
              "SEO Optimization",
              "Unit Testing",
              "Integration Testing",
              "Team Leadership",
              "Client Communication",
              "Code Review",
              "Mentoring",
              "VR Application Testing",
              "Server Configuration",
              "Deployment",
              "Documentation"
            ].map((skill) => (
              <div key={skill} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
                <span className="text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Goals */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Currently Learning & Exploring</h3>
        <div className="card p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div>
                <h4 className="font-medium">Advanced AWS Services</h4>
                <p className="text-sm text-[var(--muted)]">Deepening knowledge of cloud infrastructure and deployment strategies</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <h4 className="font-medium">Web3 & Blockchain Development</h4>
                <p className="text-sm text-[var(--muted)]">Building DAOs and Solana applications with React and Rust</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <div>
                <h4 className="font-medium">Enterprise Architecture</h4>
                <p className="text-sm text-[var(--muted)]">Learning scalable solutions for large organizations and government clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
