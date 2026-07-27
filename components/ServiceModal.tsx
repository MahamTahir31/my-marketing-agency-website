"use client";

import React from "react";
import { Service } from "@/data/portfolioData";
import { X, CheckCircle, ArrowRight, Sparkles, Package } from "lucide-react";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export default function ServiceModal({
  service,
  onClose,
  onSelectServiceForContact,
}: ServiceModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="glass-panel w-full max-w-2xl rounded-3xl border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        style={{ borderColor: service.color }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-gray-900/90 text-white border-2 border-white/40 shadow-2xl hover:bg-red-600 hover:border-red-500 transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer backdrop-blur-md"
          aria-label="Close dialog"
        >
          <span>Close</span>
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg"
            style={{ backgroundColor: service.color }}
          >
            <Sparkles className="w-7 h-7" />
          </div>
          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-1"
              style={{
                borderColor: `${service.color}40`,
                color: service.color,
                backgroundColor: `${service.color}15`,
              }}
            >
              Service Detail
            </span>
            <h3 className="text-2xl font-extrabold text-white">{service.title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base border-b border-white/10 pb-4">
          {service.fullDesc}
        </p>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Key Features & Scope</span>
          </h4>
          <div className="space-y-2">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: service.color }} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="space-y-3 border-t border-white/10 pt-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Package className="w-4 h-4 text-emerald-400" />
            <span>What You Get (Deliverables)</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.deliverables.map((item, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-gray-200 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }}></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl glass-panel text-gray-300 hover:text-white text-sm font-medium"
          >
            Close Preview
          </button>

          <button
            onClick={() => {
              onSelectServiceForContact(service.title);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all hover:opacity-90"
            style={{ backgroundColor: service.color }}
          >
            <span>Request This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
