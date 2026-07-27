"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onContactClick?: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Service Estimator", href: "#estimator" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f19]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Google brand dots */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4] animate-pulse"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-300">
              Maham<span className="text-blue-400">.</span>Tahir
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 glass-panel rounded-full px-4 py-1.5 border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={onContactClick}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: "6s" }} />
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              suppressHydrationWarning
              className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 pt-4 pb-6 mt-2 space-y-3 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-blue-400 py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onContactClick) onContactClick();
            }}
            className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-red-500 to-amber-500 hover:opacity-95"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
