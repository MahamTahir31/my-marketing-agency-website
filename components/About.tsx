"use client";

import React from "react";
import { BIO_DATA } from "@/data/portfolioData";
import { User, Award, CheckCircle, Target, Sparkles, GraduationCap, BookOpen, ShieldCheck, Wrench } from "lucide-react";

export default function About() {
  const googleColors = [
    { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
    { bg: "bg-red-500/10", border: "border-red-500/20", text: "text-red-400" },
    { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
    { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#0a0e17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Maham Tahir</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Computer Science Background & <span className="text-gradient-google">Proven Growth Results</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Combining analytical technical problem-solving with creative content writing, community building, and digital marketing strategy.
          </p>
        </div>

        {/* 4 Key Real Resume Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {BIO_DATA.stats.map((stat, idx) => {
            const style = googleColors[idx % googleColors.length];
            return (
              <div
                key={stat.label}
                className={`glass-panel p-6 rounded-2xl border ${style.border} text-center space-y-2 group hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`text-3xl sm:text-4xl font-extrabold ${style.text} tracking-tight group-hover:scale-105 transition-transform`}>
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Education, Awards & Certificates */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Bio & Approach */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-400" />
                <span>Professional Background</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {BIO_DATA.about}
              </p>
            </div>

            {/* Education Card */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
                <span>Education</span>
              </h3>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                <div className="text-base font-bold text-white">{BIO_DATA.education.degree}</div>
                <div className="text-xs font-semibold text-emerald-400">{BIO_DATA.education.institution}</div>
                <div className="text-xs text-gray-400 flex justify-between pt-1">
                  <span>{BIO_DATA.education.location}</span>
                  <span>{BIO_DATA.education.period}</span>
                </div>
              </div>
            </div>

            {/* Awards & Honors */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                <span>Awards & Achievements</span>
              </h3>
              <div className="space-y-3">
                {BIO_DATA.awards.map((award, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <div className="text-sm font-bold text-amber-300">{award.title}</div>
                    <div className="text-xs text-gray-300">{award.detail}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Skills, Tools & Certificates */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Core Skills */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <span>Core Expertise & Skills</span>
                </span>
              </h3>

              <div className="space-y-4">
                {BIO_DATA.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-200">{skill.name}</span>
                      <span style={{ color: skill.color }}>{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: skill.level,
                          backgroundColor: skill.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Wrench className="w-5 h-5 text-red-400" />
                <span>Tools, Platforms & AI</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {BIO_DATA.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-200 hover:border-blue-500/40 hover:text-white transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <span>Certifications</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {BIO_DATA.certificates.map((cert, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-center space-y-1">
                    <div className="text-xs font-bold text-white">{cert.name}</div>
                    <div className="text-[11px] text-blue-400 font-medium">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
