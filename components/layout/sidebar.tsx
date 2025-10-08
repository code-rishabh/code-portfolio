"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { 
  Home, 
  User, 
  FolderOpen, 
  Briefcase, 
  Code, 
  Mail,
  Github,
  Linkedin,
  Twitter,
  Sun,
  Moon
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update active section based on current pathname
  useEffect(() => {
    const path = pathname.slice(1); // Remove leading slash
    if (path === "" || path === "home") {
      setActiveSection("home");
    } else {
      setActiveSection(path);
    }
  }, [pathname]);

  const navigation = [
    { id: "home", label: "Home", icon: Home, href: "/" },
    { id: "about", label: "About", icon: User, href: "/about" },
    { id: "projects", label: "Projects", icon: FolderOpen, href: "/projects" },
    { id: "experience", label: "Experience", icon: Briefcase, href: "/experience" },
    { id: "skills", label: "Skills", icon: Code, href: "/skills" },
    { id: "contact", label: "Contact", icon: Mail, href: "/contact" },
  ];

  return (
    <aside 
      className="w-64 bg-[var(--card)] border-r border-minimal flex flex-col h-full"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Profile Section */}
      <div className="p-4 border-minimal-bottom">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
            RS
          </div>
          <div>
            <h2 className="font-semibold text-sm">Rishabh Sharma</h2>
            <p className="text-xs text-[var(--muted)]">Software Engineer</p>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex space-x-2">
          <a href="https://github.com/code-rishabh" target="_blank" rel="noopener noreferrer" className="p-1 hover:bg-[var(--border)] rounded">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com/in/rishabh-sharma-9864741b8" target="_blank" rel="noopener noreferrer" className="p-1 hover:bg-[var(--border)] rounded">
            <Linkedin size={16} />
          </a>
          <a href="https://twitter.com/iamRissu" target="_blank" rel="noopener noreferrer" className="p-1 hover:bg-[var(--border)] rounded">
            <Twitter size={16} />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2" role="navigation" aria-label="Section navigation">
        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  activeSection === item.id
                    ? "bg-[var(--accent)] text-white"
                    : "text-[var(--foreground)] hover:bg-[var(--border)]"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
                role="menuitem"
              >
                <Icon size={16} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

          {/* Theme Toggle */}
          <div className="p-4 border-minimal-top">
            {mounted ? (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-sm hover:bg-[var(--border)] transition-colors"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
                <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
              </button>
            ) : (
              <div className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-sm">
                <div className="w-4 h-4" />
                <span>Theme</span>
              </div>
            )}
          </div>
    </aside>
  );
};

export default Sidebar;

