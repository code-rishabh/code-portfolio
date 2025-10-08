"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:work.rishabh91@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="text-[var(--muted)]">Let's discuss your next project or just say hello!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--accent)]" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-[var(--muted)]">work.rishabh91@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[var(--accent)]" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-[var(--muted)]">Pune, Maharashtra, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--accent)]" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-[var(--muted)]">+91 9725463273</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/code-rishabh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[var(--border)] hover:bg-[var(--accent)] rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/rishabh-sharma-9864741b8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[var(--border)] hover:bg-[var(--accent)] rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/iamRissu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[var(--border)] hover:bg-[var(--accent)] rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <a
                href="/Rishabh Sharma CV.pdf"
                download
                className="flex items-center space-x-3 p-3 bg-[var(--border)] hover:bg-[var(--accent)] rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-4">Send Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </motion.button>
          </form>
        </div>
      </div>

      {/* Response Time */}
      <div className="mt-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-2">Response Time</h3>
          <p className="text-[var(--muted)]">
            I typically respond to messages within 24 hours. For urgent matters, 
            feel free to reach out via social media or schedule a call.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

