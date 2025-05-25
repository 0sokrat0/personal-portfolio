"use client";

import { CardDecoration } from "@/components/ui/decorations";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("info");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "info", name: "Информация", emoji: "👋" },
    { id: "about", name: "Обо мне", emoji: "👩‍🏫" },
    { id: "education", name: "Образование", emoji: "🎓" },
    { id: "events", name: "События", emoji: "📅" },
    { id: "materials", name: "Учебные материалы", emoji: "📚" },
    { id: "student-works", name: "Работы студентов", emoji: "👩‍🎓" },
    { id: "achievements", name: "Достижения", emoji: "🏆" },
    { id: "contacts", name: "Контакты", emoji: "📱" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="sticky top-24">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-md p-4 relative overflow-hidden">
        <CardDecoration />

        <div className="flex lg:hidden justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-primary">Навигация</h2>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className={`${mobileMenuOpen ? "block" : "hidden"} lg:block`}>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-sm"
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{section.emoji}</span>
                    <span>{section.name}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
