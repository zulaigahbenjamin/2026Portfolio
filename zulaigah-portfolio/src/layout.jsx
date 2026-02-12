import React from "react";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  const [activeSection, setActiveSection] = React.useState("home");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <style>
        {`
          :root {
            --pink-primary: #ff69b4;
            --pink-light: #ffb6d9;
            --pink-soft: #ffd4e8;
            --bg-pink: #fff5f9;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #fff5f9 0%, #ffe4f0 100%);
          }
          
          .glow-text {
            text-shadow: 0 0 20px rgba(255, 105, 180, 0.3);
          }
          
          .gradient-border {
            border-image: linear-gradient(135deg, var(--pink-primary), var(--pink-light)) 1;
          }
        `}
      </style>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-lg shadow-lg shadow-pink-200" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              {"<Dev/>"}
            </motion.div>

            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-colors hover:text-pink-500 ${
                    activeSection === item.id ? "text-pink-500" : "text-gray-600"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-pink-600"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu icon */}
            <div className="md:hidden">
              <button className="text-gray-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-pink-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Developer Portfolio. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
}