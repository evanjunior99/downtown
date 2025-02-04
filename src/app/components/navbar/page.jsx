'use client'

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../themeProvider";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose, DrawerTitle } from "../ui/drawer";

const navItems = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Get all sections and their positions
      const sections = navItems
        .map((item) => {
          const sectionId = item.href.replace("#", "");
          const section = document.getElementById(sectionId); // Changed to getElementById
          if (section) {
            return {
              id: sectionId,
              offset: section.offsetTop - 550,
              height: section.offsetHeight,
            };
          }
          return null;
        })
        .filter(Boolean);

      const currentPosition = window.scrollY;
      const active = sections.find(
        (section) =>
          currentPosition >= section.offset &&
          currentPosition < section.offset + section.height
      );

      if (active) {
        setActiveSection(active.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId); // Changed to getElementById
    if (section) {
      const top = section.offsetTop - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-[#030014]/95"
          : "bg-white/50 dark:bg-[#030014]/50 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#Home"
              onClick={(e) => scrollToSection(e, "#Home")}
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#096929] to-[#09442c] bg-clip-text text-transparent"
            >
              Matius
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="group relative px-1 py-2 text-sm font-medium"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "bg-gradient-to-r from-[#0aad69] to-[#55f7d4] bg-clip-text text-transparent font-semibold"
                      : "text-gray-700 dark:text-[#e2d3fd] group-hover:text-black dark:group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            ))}

            {/* Dark Mode Toggle - Desktop */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-[#1e1e1e] hover:bg-gray-200 dark:hover:bg-[#444] transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-gray-700 dark:text-[#e2d3fd]" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-[#e2d3fd]" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Dark Mode Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-gray-100 dark:bg-[#1e1e1e] hover:bg-gray-200 dark:hover:bg-[#444] transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-gray-700 dark:text-[#e2d3fd]" />
              ) : (
                <Moon className="w-4 h-4 text-gray-700 dark:text-[#e2d3fd]" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <button
                  className="p-1.5 text-gray-700 dark:text-[#e2d3fd] hover:text-black dark:hover:text-white transition-transform duration-300 ease-in-out transform"
                  aria-label="Toggle menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="h-[96%] p-6 bg-white dark:bg-[#030014]">
                <div className="relative">
                  <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
                  <DrawerClose className="absolute right-0 top-0 p-2 text-gray-700 dark:text-[#e2d3fd] hover:text-black dark:hover:text-white">
                    <X className="w-6 h-6" />
                  </DrawerClose>
                  <div className="flex flex-col space-y-6 mt-8">
                    {navItems.map((item, index) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className={`text-2xl font-medium transition-all duration-300 ${
                          activeSection === item.href.substring(1)
                            ? "bg-gradient-to-r from-[#0aad69] to-[#55f7d4] bg-clip-text text-transparent font-semibold"
                            : "text-gray-700 dark:text-[#e2d3fd] hover:text-black dark:hover:text-white"
                        }`}
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;