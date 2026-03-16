import { Home, Heart, Code, BookOpen, Clock, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "프로필", icon: Home },
    { id: "interests", label: "관심사", icon: Heart },
    { id: "techstack", label: "기술", icon: Code },
    { id: "learning", label: "학습", icon: BookOpen },
    { id: "timeline", label: "타임라인", icon: Clock },
    { id: "guestbook", label: "방명록", icon: MessageSquare },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-semibold text-lg">박건형</div>
          
          <div className="flex gap-1 md:gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                title={section.label}
              >
                <section.icon className="w-4 h-4" />
                <span className="hidden md:inline">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
