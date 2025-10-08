import Sidebar from "@/components/layout/sidebar";
import MainContent from "@/components/layout/main-content";

export default function About() {
  return (
    <div className="flex h-screen bg-[var(--background)]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <MainContent />
      </div>
    </div>
  );
}



