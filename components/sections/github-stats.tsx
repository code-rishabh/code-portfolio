"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, Eye, Calendar } from "lucide-react";

const GitHubStats = () => {
  const stats = {
    followers: 42,
    following: 38,
    publicRepos: 25,
    totalStars: 156,
    totalForks: 23,
    contributions: 1247,
    streak: 45
  };

  const recentRepos = [
    {
      name: "portfolio-website",
      description: "Modern portfolio website built with Next.js and TypeScript",
      language: "TypeScript",
      stars: 12,
      forks: 3,
      updated: "2 days ago"
    },
    {
      name: "ecommerce-platform",
      description: "Full-stack e-commerce solution with Stripe integration",
      language: "JavaScript",
      stars: 8,
      forks: 2,
      updated: "1 week ago"
    },
    {
      name: "chat-application",
      description: "Real-time chat app with Socket.IO and MongoDB",
      language: "JavaScript",
      stars: 15,
      forks: 5,
      updated: "2 weeks ago"
    }
  ];

  return (
    <div className="space-y-6">
      {/* GitHub Overview */}
      <div className="card p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Github className="w-6 h-6 text-[var(--accent)]" />
          <h3 className="text-xl font-semibold">GitHub Activity</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--accent)]">{stats.followers}</div>
            <div className="text-sm text-[var(--muted)]">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--accent)]">{stats.following}</div>
            <div className="text-sm text-[var(--muted)]">Following</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--accent)]">{stats.publicRepos}</div>
            <div className="text-sm text-[var(--muted)]">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--accent)]">{stats.totalStars}</div>
            <div className="text-sm text-[var(--muted)]">Stars</div>
          </div>
        </div>
      </div>

      {/* Contribution Stats */}
      <div className="card p-6">
        <h4 className="text-lg font-semibold mb-4">Contribution Activity</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-[var(--muted)]" />
              <span className="text-sm">Total Contributions</span>
            </div>
            <span className="font-semibold">{stats.contributions.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-[var(--muted)]" />
              <span className="text-sm">Current Streak</span>
            </div>
            <span className="font-semibold">{stats.streak} days</span>
          </div>
        </div>
        
        {/* Mock contribution graph */}
        <div className="mt-4 p-4 bg-[var(--background)] rounded border border-[var(--border)]">
          <div className="text-sm text-[var(--muted)] mb-2">Last 30 days</div>
          <div className="grid grid-cols-30 gap-1">
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className={`h-3 rounded-sm ${
                  Math.random() > 0.3 
                    ? 'bg-[var(--accent)]' 
                    : 'bg-[var(--border)]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Recent Repositories */}
      <div className="card p-6">
        <h4 className="text-lg font-semibold mb-4">Recent Repositories</h4>
        <div className="space-y-3">
          {recentRepos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-3 bg-[var(--background)] rounded border border-[var(--border)] hover:bg-[var(--card)] transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h5 className="font-semibold text-[var(--accent)] mb-1">{repo.name}</h5>
                  <p className="text-sm text-[var(--muted)] mb-2">{repo.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-[var(--muted)]">
                    <span className="px-2 py-1 bg-[var(--border)] rounded">{repo.language}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-3 h-3" />
                      <span>{repo.forks}</span>
                    </div>
                    <span>Updated {repo.updated}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
