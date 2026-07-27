"use client";

import React from "react";
import { ArrowRight, Sparkles, TrendingUp, Award, CheckCircle2, MessageSquare, GraduationCap } from "lucide-react";
import { BIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Google Ambient Colorful Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4285F4]/20 rounded-full blur-[120px] pointer-events-none animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-80 h-80 bg-[#EA4335]/15 rounded-full blur-[100px] pointer-events-none animate-float-delayed"></div>
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-[#34A853]/15 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-[#FBBC05]/15 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Experience Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-blue-500/30 text-blue-400 text-sm font-medium animate-pulse-glow">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Over {BIO_DATA.experienceYears}+ Years Marketing & Community Management Experience</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I'm <span className="text-gradient-google">{BIO_DATA.name}</span>.
              <br />
              <span className="text-gray-200 text-3xl sm:text-4xl lg:text-5xl font-bold block mt-2">
                Marketing Strategist & Community Manager
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Computer Science graduate & marketing specialist with a proven track record of growing social media communities by up to 95%, authoring 50+ published articles, and executing end-to-end event campaigns for global tech brands.
            </p>

            {/* Google Service Pills */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-2.5">
              <div className="px-3.5 py-1.5 rounded-lg bg-[#4285F4]/15 border border-[#4285F4]/30 text-blue-300 text-xs font-semibold flex items-center gap-1.5 hover:bg-[#4285F4]/25 transition-all">
                <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
                Content Writing
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-[#EA4335]/15 border border-[#EA4335]/30 text-red-300 text-xs font-semibold flex items-center gap-1.5 hover:bg-[#EA4335]/25 transition-all">
                <span className="w-2 h-2 rounded-full bg-[#EA4335]"></span>
                Social Media Visuals
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-[#34A853]/15 border border-[#34A853]/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 hover:bg-[#34A853]/25 transition-all">
                <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
                Social Media Management
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-[#FBBC05]/15 border border-[#FBBC05]/30 text-amber-300 text-xs font-semibold flex items-center gap-1.5 hover:bg-[#FBBC05]/25 transition-all">
                <span className="w-2 h-2 rounded-full bg-[#FBBC05]"></span>
                Marketing Strategist
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2 group transition-all duration-300 active:scale-98"
                suppressHydrationWarning
              >
                <MessageSquare className="w-5 h-5 text-yellow-300" />
                <span>Contact Me For Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto px-7 py-4 rounded-xl glass-panel text-gray-200 hover:text-white font-semibold text-base border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 transition-all hover:bg-white/5"
                suppressHydrationWarning
              >
                <span>View Real Experience</span>
                <Sparkles className="w-4 h-4 text-blue-400" />
              </a>
            </div>

            {/* Micro proof badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> BS in Computer Science (UBIT)
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" /> Google Quiz Winner 2023
              </span>
            </div>

          </div>

          {/* Right Column - Real Resume Metric Highlights */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Decorative Card */}
              <div className="glass-panel google-multi-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
                
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                      MT
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Maham Tahir</h3>
                      <p className="text-xs text-blue-400 font-medium">Visionwise AB • GDGOC UOK • Lady Evelyn</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#4285F4]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#EA4335]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#FBBC05]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#34A853]"></span>
                  </div>
                </div>

                {/* Real Verified Resume Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <div className="text-xs text-blue-300 font-medium">Community Growth</div>
                    <div className="text-2xl font-extrabold text-blue-400 mt-1">+95%</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Visionwise AB</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="text-xs text-emerald-300 font-medium">Audience Reach</div>
                    <div className="text-2xl font-extrabold text-emerald-400 mt-1">+70%</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">GDGOC - UOK</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20">
                    <div className="text-xs text-red-300 font-medium">Published Articles</div>
                    <div className="text-2xl font-extrabold text-red-400 mt-1">50+</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Lady Evelyn</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <div className="text-xs text-amber-300 font-medium">Followers Increase</div>
                    <div className="text-2xl font-extrabold text-amber-400 mt-1">+65%</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Targeted Copywriting</div>
                  </div>
                </div>

                {/* Verified Roles Snapshot */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1 font-semibold text-gray-300">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-400" /> Active Role
                    </span>
                    <span className="text-emerald-400 font-mono text-[11px] font-bold">● Stockholm, Sweden (Remote)</span>
                  </div>
                  <p className="text-xs text-gray-200 font-semibold">
                    Content Strategist & Community Manager at Visionwise AB
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Managing Code with Ahsan & Ahsync Bytes newsletters, events & hackathons.
                  </p>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute -top-5 -right-4 glass-panel p-3.5 rounded-2xl border border-yellow-500/30 flex items-center gap-3 shadow-xl animate-float-slow hidden sm:flex">
                <div className="w-9 h-9 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">
                  🏆
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Google Quiz Winner</div>
                  <div className="text-[10px] text-gray-400">Devfest Sindh 2023</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
