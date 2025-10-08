"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio</h1>
        <p className="text-[var(--muted)] text-lg">
          I'm Rishabh Sharma, a passionate Software Engineer building modern web experiences and enterprise solutions.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/projects">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="card card-hover p-4 text-left cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <Github size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold">View my work</h3>
                <p className="text-sm text-[var(--muted)]">Check out my projects</p>
              </div>
            </div>
          </motion.div>
        </Link>

        <a href="/Rishabh Sharma CV.pdf" download>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="card card-hover p-4 text-left cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <Download size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Download resume</h3>
                <p className="text-sm text-[var(--muted)]">Get my latest CV</p>
              </div>
            </div>
          </motion.div>
        </a>

        <Link href="/contact">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="card card-hover p-4 text-left cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                <Mail size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Get in touch</h3>
                <p className="text-sm text-[var(--muted)]">Let's collaborate</p>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

