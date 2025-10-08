"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Building2, Users, Code2, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Fore Excel Pvt. Ltd.",
      location: "Pune, Maharashtra",
      period: "Jun 2024 - Present",
      type: "Full-time",
      description: "Designing and developing scalable web applications using Next.js, React.js, Node.js, Express.js, MongoDB, and AWS. Delivering enterprise solutions for industry leaders and government clients.",
      achievements: [
        "Delivered enterprise solutions for TASL (Tata Advanced Systems Limited), TTL (Tata Technologies Limited), and Pune Customs",
        "Acted as client-facing representative, translating technical issues into business terms and managing escalations",
        "Led a team of 8-10 interns, mentoring them on development best practices while driving client deliverables",
        "Set up and configured development & production servers on SUSE Linux for TASL project",
        "Built web dashboard from scratch and conducted rigorous VR application testing",
        "Collaborated with TTL's internal dev team to integrate e-learning platform with VR headsets",
        "Designed and deployed modernized government website for Pune Customs, enhancing usability and performance"
      ],
      tech: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "AWS", "TypeScript", "JavaScript"],
      links: [
        { name: "Portfolio", url: "https://rishabh-portfolio.vercel.app" },
        { name: "GitHub", url: "https://github.com/code-rishabh" }
      ]
    },
    {
      id: 2,
      title: "Technical Associate",
      company: "Dexian",
      location: "Pune, Maharashtra",
      period: "Jul 2023 - May 2024",
      type: "Full-time",
      description: "Supported the development team by assisting in testing, debugging, and code improvements across multiple client projects.",
      achievements: [
        "Performed unit and integration testing, documenting issues and collaborating with senior engineers",
        "Contributed to minor feature enhancements and bug fixes, ensuring alignment with client requirements",
        "Assisted senior engineers in preparing deployment packages and release documentation",
        "Improved code quality and testing processes across multiple client projects"
      ],
      tech: ["JavaScript", "React", "Node.js", "Testing", "Debugging", "Git"],
      links: []
    },
    {
      id: 3,
      title: "WordPress Developer (Freelance)",
      company: "Hortus Rudra Pvt. Ltd.",
      location: "Pune, Maharashtra",
      period: "Nov 2022 - Feb 2023",
      type: "Freelance",
      description: "Delivered custom WordPress Elementor websites aligned with client goals, integrating call/chat features and optimizing SEO.",
      achievements: [
        "Delivered custom WordPress Elementor websites aligned with client goals",
        "Integrated call/chat features & optimized SEO for higher engagement",
        "Implemented PHP & CSS customizations, ensuring security & scalability",
        "Improved website performance and user engagement metrics"
      ],
      tech: ["WordPress", "Elementor", "PHP", "CSS", "SEO", "JavaScript"],
      links: []
    },
    {
      id: 4,
      title: "Full-Stack Developer Intern",
      company: "Hezkrost Technologies",
      location: "Pune, Maharashtra",
      period: "Oct 2021 - Apr 2022",
      type: "Internship",
      description: "Developed authentication, database, and hosting workflows. Collaborated with a dynamic team to design and develop comprehensive web applications from inception to deployment.",
      achievements: [
        "Developed authentication, database, and hosting workflows",
        "Served as the sole web developer on the project, designing comprehensive web applications",
        "Developed and designed the official parent website for Hezkrost Technologies",
        "Enhanced company's online presence and branding through multiple website projects"
      ],
      tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Firebase"],
      links: [
        { name: "Linkedlabs", url: "http://linkedlabs.co/" },
        { name: "Hezkrost", url: "http://hezkrost.com/" },
        { name: "The One Hour", url: "http://theonehour.co/" },
        { name: "My Naukri", url: "http://mynaukri.co/" }
      ]
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Experience</h1>
        <p className="text-[var(--muted)]">My professional journey and key achievements</p>
      </div>

      {/* Timeline */}
      <div className="timeline-line">
        {experiences.map((exp, index) => {
          const getIcon = (title: string) => {
            if (title.includes('Software Engineer')) return <Award size={20} />;
            if (title.includes('Technical Associate')) return <Code2 size={20} />;
            if (title.includes('WordPress')) return <Building2 size={20} />;
            if (title.includes('Intern')) return <Users size={20} />;
            return <Building2 size={20} />;
          };

          const getStatusColor = (type: string) => {
            if (type === 'Full-time') return 'bg-green-100 text-green-800';
            if (type === 'Internship') return 'bg-blue-100 text-blue-800';
            if (type === 'Freelance') return 'bg-purple-100 text-purple-800';
            return 'bg-gray-100 text-gray-800';
          };

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-icon">
                {getIcon(exp.title)}
              </div>
              <div className="timeline-content">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <h4 className="text-lg font-medium text-[var(--accent)]">{exp.company}</h4>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-[var(--muted)] mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-[var(--muted)] mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="mb-4">
                  <h5 className="font-semibold mb-3 flex items-center space-x-2">
                    <Award size={16} className="text-[var(--accent)]" />
                    <span>Key Achievements</span>
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-[var(--muted)] flex items-start space-x-3">
                        <span className="text-[var(--accent)] mt-1 font-bold">▶</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-semibold mb-3 flex items-center space-x-2">
                    <Code2 size={16} className="text-[var(--accent)]" />
                    <span>Technologies Used</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[var(--accent)] text-white text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {exp.links && exp.links.length > 0 && (
                  <div>
                    <h5 className="font-semibold mb-3 flex items-center space-x-2">
                      <ExternalLink size={16} className="text-[var(--accent)]" />
                      <span>Related Links</span>
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {exp.links.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-3 py-2 bg-[var(--border)] hover:bg-[var(--accent)] text-sm rounded-lg transition-colors group"
                        >
                          <span>{link.name}</span>
                          <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

