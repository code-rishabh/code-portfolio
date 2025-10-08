"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MobileHeader from "@/components/layout/mobile-header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";

const MainContent = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  // Determine active section based on pathname
  useEffect(() => {
    const path = pathname.slice(1); // Remove leading slash
    if (path === "" || path === "home") {
      setActiveSection("home");
    } else {
      setActiveSection(path);
    }
  }, [pathname]);

  // Listen for hash changes in URL (for backward compatibility)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && hash !== activeSection) {
        setActiveSection(hash);
      }
    };

    // Check initial hash
    const initialHash = window.location.hash.slice(1);
    if (initialHash) {
      setActiveSection(initialHash);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeSection]);

  const sections = {
    home: <Hero />,
    about: <About />,
    projects: <Projects />,
    experience: <Experience />,
    skills: <Skills />,
    contact: <Contact />,
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden">
        <MobileHeader activeSection={activeSection} onSectionChange={setActiveSection} />
      </div>
      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {sections[activeSection as keyof typeof sections]}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
};

export default MainContent;

