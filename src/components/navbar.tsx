"use client";
import { motion } from "framer-motion";
import { useSection } from "./sections/sectionContext";

export default function Navbar() {
  const { activeSection } = useSection();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <nav className="w-full p-4 text-white flex justify-center items-center">
      <ul className="flex justify-center items-center space-x-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`relative px-1 py-2 transition-colors ${
                activeSection === item.id
                  ? "text-foreground"
                  : "text-foreground/50 hover:text-foreground/70"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
