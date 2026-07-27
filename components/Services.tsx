"use client";

import React, { useState } from "react";
import { SERVICES_DATA, Service } from "@/data/portfolioData";
import ServiceModal from "@/components/ServiceModal";
import { PenTool, Palette, Share2, TrendingUp, ArrowRight, CheckCircle2, Sparkles, Layers } from "lucide-react";

interface ServicesProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceForContact }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (name: string, color: string) => {
    const props = { className: "w-7 h-7", style: { color } };
    switch (name) {
      case "PenTool":
        return <PenTool {...props} />;
      case "Palette":
        return <Palette {...props} />;
      case "Share2":
        return <Share2 {...props} />;
      case "TrendingUp":
        return <TrendingUp {...props} />;
      default:
        return <Layers {...props} />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      {/* Background colorful glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Marketing Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services Designed To <span className="text-gradient-google">Grow Your Brand</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            From strategic marketing funnels to engaging content, scroll-stopping visuals, and full-funnel management.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="glass-panel rounded-3xl p-8 border border-white/10 glass-panel-hover flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top Accent Color Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                style={{ backgroundColor: service.color }}
              ></div>

              <div className="space-y-6">
                
                {/* Header Icon & Google Pill */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                  >
                    {getIcon(service.iconName, service.color)}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${service.badgeColor}`}>
                    3+ Years Verified
                  </span>
                </div>

                {/* Service Title */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mt-2">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: service.color }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedService(service)}
                  suppressHydrationWarning
                  className="text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Details & Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    onSelectServiceForContact(service.title);
                  }}
                  suppressHydrationWarning
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-white shadow-md transition-all hover:opacity-90 flex items-center gap-1.5"
                  style={{ backgroundColor: service.color }}
                >
                  <span>Contact For Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForContact={onSelectServiceForContact}
      />
    </section>
  );
}
