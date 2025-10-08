"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large React applications using TypeScript, proper state management, and modern development patterns.",
      content: "In this comprehensive guide, I'll walk you through the process of building scalable React applications...",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      featured: true,
      url: "https://dev.to/rishabh/building-scalable-react-applications"
    },
    {
      id: 2,
      title: "Next.js 14: New Features and Performance Improvements",
      excerpt: "Exploring the latest features in Next.js 14 including the new App Router, Server Components, and performance optimizations.",
      content: "Next.js 14 brings exciting new features that significantly improve developer experience...",
      date: "2024-01-08",
      readTime: "6 min read",
      tags: ["Next.js", "Performance", "Web Development"],
      featured: true,
      url: "https://dev.to/rishabh/nextjs-14-new-features"
    },
    {
      id: 3,
      title: "Mastering CSS Grid: A Complete Guide",
      excerpt: "A deep dive into CSS Grid layout system with practical examples and real-world use cases.",
      content: "CSS Grid has revolutionized how we create layouts on the web...",
      date: "2023-12-20",
      readTime: "10 min read",
      tags: ["CSS", "Layout", "Frontend"],
      featured: false,
      url: "https://dev.to/rishabh/mastering-css-grid"
    },
    {
      id: 4,
      title: "State Management in React: Context vs Redux vs Zustand",
      excerpt: "Comparing different state management solutions in React and when to use each one.",
      content: "Choosing the right state management solution can make or break your React application...",
      date: "2023-12-10",
      readTime: "7 min read",
      tags: ["React", "State Management", "Redux"],
      featured: false,
      url: "https://dev.to/rishabh/state-management-react"
    },
    {
      id: 5,
      title: "Building Accessible Web Applications",
      excerpt: "Essential accessibility practices every frontend developer should know to create inclusive web experiences.",
      content: "Accessibility is not just a nice-to-have feature, it's a fundamental requirement...",
      date: "2023-11-28",
      readTime: "9 min read",
      tags: ["Accessibility", "Web Standards", "UX"],
      featured: false,
      url: "https://dev.to/rishabh/accessible-web-apps"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Blog & Articles</h1>
        <p className="text-[var(--muted)]">Technical insights, tutorials, and thoughts on modern web development</p>
      </div>

      {/* Featured Posts */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Featured Articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card card-hover p-6"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-[var(--accent)] hover:underline">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h3>
                <p className="text-sm text-[var(--muted)] mb-3">{post.excerpt}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-[var(--border)] text-xs rounded flex items-center space-x-1">
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-[var(--muted)]">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-[var(--accent)] hover:underline"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* All Posts */}
      <div>
        <h2 className="text-xl font-semibold mb-4">All Articles</h2>
        <div className="space-y-4">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card card-hover p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold mb-2 text-[var(--accent)] hover:underline">
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-sm text-[var(--muted)] mb-3">{post.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-xs text-[var(--muted)]">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-[var(--border)] rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-[var(--border)] rounded transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Writing Stats */}
      <div className="mt-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">Writing Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--accent)]">{blogPosts.length}</div>
              <div className="text-sm text-[var(--muted)]">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--accent)]">12.5k</div>
              <div className="text-sm text-[var(--muted)]">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--accent)]">156</div>
              <div className="text-sm text-[var(--muted)]">Likes Received</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--accent)]">23</div>
              <div className="text-sm text-[var(--muted)]">Comments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
