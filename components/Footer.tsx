"use client";

import React from "react";
import { BIO_DATA } from "@/data/portfolioData";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070a10] text-gray-400 border-t border-white/10 overflow-hidden">
      {/* Top Google Multi-color Border Bar */}
      <div className="h-1 bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {BIO_DATA.name}
              </span>
            </a>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Marketing Strategist, Content Writer, Visual Designer, and Social Media Manager with 3+ years of experience transforming brands.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-500/50 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-500/50 transition-all"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="mailto:mahamst31@gmail.com"
                className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Experience</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services Offered</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Form</a></li>
            </ul>
          </div>

          {/* Services Offered list */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Core Services</h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>Content Writing</li>
              <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]"></span>Social Media Visuals Designing</li>
              <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>Social Media Management</li>
              <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]"></span>Marketing Strategist</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">{BIO_DATA.name}</span>. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            suppressHydrationWarning
            className="flex items-center gap-2 text-gray-400 hover:text-white px-3 py-1.5 rounded-lg glass-panel text-xs transition-all hover:bg-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
