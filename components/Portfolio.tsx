"use client";

import React, { useState } from "react";
import { REAL_PORTFOLIO_EXPERIENCE, PortfolioItem } from "@/data/portfolioData";
import { Layers, ArrowUpRight, TrendingUp, X, Sparkles, MapPin, Calendar, Briefcase } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'content' | 'visuals' | 'management' | 'strategy'>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Experience' },
    { id: 'strategy', label: 'Strategy & Community' },
    { id: 'visuals', label: 'Social Media Visuals' },
    { id: 'management', label: 'Event & Social Management' },
    { id: 'content', label: 'Content Writing' },
  ];

  const filteredItems = REAL_PORTFOLIO_EXPERIENCE.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#0a0e17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Verified Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-google">Experience & Impact</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Real roles and proven growth results across international companies and tech communities.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              suppressHydrationWarning
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === f.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                  : "glass-panel text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Professional Experience Cards Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 glass-panel-hover group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Banner Header with Image & Badge */}
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent"></div>
                  
                  {/* Category Pill */}
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-md backdrop-blur-md"
                    style={{ backgroundColor: `${item.accentColor}dd` }}
                  >
                    {item.categoryLabel}
                  </span>

                  {/* Expand icon */}
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1 font-semibold text-blue-400">
                      <Briefcase className="w-3.5 h-3.5" /> {item.role}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs text-gray-400 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Key Real Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
                    {item.metrics.map((m, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-white/5 text-center">
                        <div className="text-xs font-extrabold text-white" style={{ color: item.accentColor }}>
                          {m.value}
                        </div>
                        <div className="text-[10px] text-gray-400 truncate mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="px-6 pb-6 pt-2 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md bg-white/5 text-[10px] text-gray-400 font-medium border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-2xl rounded-3xl border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-gray-900/90 text-white border-2 border-white/40 shadow-2xl hover:bg-red-600 hover:border-red-500 transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer backdrop-blur-md"
              aria-label="Close modal"
              suppressHydrationWarning
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-56 rounded-2xl overflow-hidden">
              <img src={activeItem.image} alt={activeItem.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: activeItem.accentColor }}
                >
                  {activeItem.categoryLabel}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">{activeItem.title}</h3>
                <p className="text-xs text-gray-300">{activeItem.role} • {activeItem.location}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Verified Resume Growth Impact</span>
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {activeItem.metrics.map((m, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="text-xl sm:text-2xl font-extrabold" style={{ color: activeItem.accentColor }}>
                      {m.value}
                    </div>
                    <div className="text-xs text-gray-300 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                {activeItem.summary}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {activeItem.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-white/10 text-xs text-gray-300 font-medium">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveItem(null)}
                className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500"
                suppressHydrationWarning
              >
                Close Experience Detail
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
