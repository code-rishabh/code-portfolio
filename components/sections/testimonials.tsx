"use client";

import { motion } from "framer-motion";
import { Star, Quote, Linkedin, Github } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      avatar: "SJ",
      rating: 5,
      text: "Rishabh delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the project a huge success. Highly recommended!",
      project: "E-commerce Platform",
      linkedin: "https://linkedin.com/in/sarah-johnson",
      featured: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      avatar: "MC",
      rating: 5,
      text: "Working with Rishabh was a pleasure. He's not just a great developer but also an excellent communicator. The React application he built for us is still running smoothly after 2 years.",
      project: "React Dashboard",
      linkedin: "https://linkedin.com/in/michael-chen",
      featured: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Designer",
      company: "Creative Agency",
      avatar: "ER",
      rating: 5,
      text: "Rishabh's ability to translate complex designs into pixel-perfect code is remarkable. He's always willing to go the extra mile to ensure the best user experience.",
      project: "Portfolio Website",
      linkedin: "https://linkedin.com/in/emily-rodriguez",
      featured: false
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder",
      company: "InnovateLab",
      avatar: "DK",
      rating: 5,
      text: "Rishabh helped us build a scalable web application from scratch. His knowledge of modern technologies and best practices is impressive. Will definitely work with him again.",
      project: "Web Application",
      linkedin: "https://linkedin.com/in/david-kim",
      featured: false
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Marketing Director",
      company: "GrowthCo",
      avatar: "LW",
      rating: 5,
      text: "The landing page Rishabh created for our campaign increased our conversion rate by 40%. His understanding of both technical and business requirements is outstanding.",
      project: "Landing Page",
      linkedin: "https://linkedin.com/in/lisa-wang",
      featured: false
    }
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Testimonials</h1>
        <p className="text-[var(--muted)]">What clients and colleagues say about working with me</p>
      </div>

      {/* Featured Testimonials */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Featured Reviews</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-[var(--muted)]">{testimonial.role} at {testimonial.company}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative mb-4">
                <Quote className="w-6 h-6 text-[var(--accent)] opacity-30 absolute -top-2 -left-2" />
                <p className="text-sm text-[var(--muted)] italic pl-4">{testimonial.text}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--accent)] bg-[var(--border)] px-2 py-1 rounded">
                  {testimonial.project}
                </span>
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:bg-[var(--border)] rounded transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Testimonials */}
      <div>
        <h2 className="text-xl font-semibold mb-4">All Testimonials</h2>
        <div className="space-y-4">
          {regularTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card card-hover p-4"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <span className="text-xs text-[var(--muted)]">{testimonial.role}</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[var(--muted)] mb-2">{testimonial.text}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--accent)] bg-[var(--border)] px-2 py-1 rounded">
                      {testimonial.project}
                    </span>
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 hover:bg-[var(--border)] rounded transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">Client Satisfaction</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--accent)]">100%</div>
              <div className="text-sm text-[var(--muted)]">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--accent)]">15+</div>
              <div className="text-sm text-[var(--muted)]">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--accent)]">5.0</div>
              <div className="text-sm text-[var(--muted)]">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--accent)]">12</div>
              <div className="text-sm text-[var(--muted)]">Repeat Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
