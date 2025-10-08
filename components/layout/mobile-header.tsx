"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";

interface MobileHeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const MobileHeader = ({ activeSection, onSectionChange }: MobileHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "experience", label: "Experience", href: "/experience" },
    { id: "skills", label: "Skills", href: "/skills" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  const handleSectionClick = (section: string) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent, section: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSectionClick(section);
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden bg-[var(--card)] border-b border-minimal p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
            RS
          </div>
          <div>
            <h1 className="font-semibold text-sm">Rishabh Sharma</h1>
            <p className="text-xs text-[var(--muted)]">Software Engineer</p>
          </div>
        </div>
        
            <div className="flex items-center space-x-2">
              {mounted ? (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 hover:bg-[var(--border)] rounded transition-colors"
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
                </button>
              ) : (
                <div className="p-2 w-10 h-10" />
              )}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-[var(--border)] rounded transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-[var(--card)] w-80 h-full shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-minimal">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Navigation</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-[var(--border)] rounded transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            
            <nav className="p-4">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => handleSectionClick(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeSection === item.id
                        ? "bg-[var(--accent)] text-white"
                        : "text-[var(--foreground)] hover:bg-[var(--border)]"
                    }`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
