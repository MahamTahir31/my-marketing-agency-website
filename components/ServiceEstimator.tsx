"use client";

import React, { useState } from "react";
import { SERVICES_DATA } from "@/data/portfolioData";
import { Calculator, Check, ArrowRight, Sparkles, Send } from "lucide-react";

interface ServiceEstimatorProps {
  onPreFillContactForm: (selectedServices: string[], timeline: string) => void;
}

export default function ServiceEstimator({ onPreFillContactForm }: ServiceEstimatorProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Content Writing", "Social Media Visuals Designing"]);
  const [timeline, setTimeline] = useState<string>("3-Month Growth Campaign");

  const timelines = [
    "1-Month Fast Sprint",
    "3-Month Growth Campaign",
    "6-Month Brand Scaling",
    "Monthly Ongoing Retainer"
  ];

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== title));
      }
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleApplyToContact = () => {
    onPreFillContactForm(selectedServices, timeline);
  };

  return (
    <section id="estimator" className="py-20 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-panel google-multi-border rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Inquiry Builder</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Customize Your <span className="text-gradient-google">Service Package</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Select the exact services you need for your brand. We'll pre-fill your contact inquiry automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step 1: Select Services */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                <span>Select Desired Services:</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES_DATA.map((service) => {
                  const isSelected = selectedServices.includes(service.title);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.title)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start gap-3 ${
                        isSelected
                          ? "bg-blue-600/15 border-blue-500 text-white shadow-lg"
                          : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected ? "bg-blue-500 border-blue-400 text-white" : "border-gray-600"
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div>
                        <div className="text-sm font-bold text-white">{service.title}</div>
                        <div className="text-xs text-gray-400 line-clamp-1 mt-0.5">{service.shortDesc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Step 2: Timeline */}
              <div className="pt-4 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                  <span>Select Campaign Duration:</span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {timelines.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      suppressHydrationWarning
                      className={`p-3 rounded-xl text-xs font-semibold border transition-all ${
                        timeline === t
                          ? "bg-amber-500/20 border-amber-500 text-amber-300"
                          : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Summary Box & CTA */}
            <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/10 space-y-6 bg-black/30">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span>Package Summary</span>
              </h3>

              <div className="space-y-3">
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Selected Services ({selectedServices.length}):</div>
                <div className="space-y-1.5">
                  {selectedServices.map((s, idx) => (
                    <div key={s} className="flex items-center gap-2 text-xs font-bold text-white">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Duration:</div>
                  <div className="text-sm font-bold text-amber-400 mt-1">{timeline}</div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleApplyToContact}
                suppressHydrationWarning
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all group"
              >
                <Send className="w-4 h-4 text-yellow-300" />
                <span>Pre-Fill & Contact Maham</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
