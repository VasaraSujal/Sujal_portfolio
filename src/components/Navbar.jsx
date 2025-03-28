import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  GraduationCap,
  BadgeCheck,
  Briefcase,
  Mail,
} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
    { id: "certifications", label: "Certificate", icon: BadgeCheck },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const NavLink = ({ item }) => {
    const Icon = item.icon;
    return (
      <ScrollLink
        to={item.id}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all cursor-pointer"
        onClick={() => setIsMenuOpen(false)}
      >
        <Icon className="w-5 h-5 md:w-6 md:h-6 mr-2" />
        <span className="text-sm md:text-base">{item.label}</span>
      </ScrollLink>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-lg sm:text-xl text-cyan-400 dark:text-cyan-300">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-800/95 backdrop-blur-sm shadow-xl`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <NavLink key={item.id} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;