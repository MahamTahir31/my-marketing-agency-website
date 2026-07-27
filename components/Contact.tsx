"use client";

import React, { useState, FormEvent, forwardRef, useImperativeHandle } from "react";
import confetti from "canvas-confetti";
import { Mail, Send, CheckCircle2, MapPin, Sparkles, MessageSquare, Clock } from "lucide-react";
import { SERVICES_DATA } from "@/data/portfolioData";

export interface ContactHandle {
  preFillForm: (services: string[], duration?: string) => void;
}

const Contact = forwardRef<ContactHandle, {}>((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Content Writing",
    "Social Media Visuals Designing",
  ]);
  const [budget, setBudget] = useState("$500 - $1,500");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Expose preFillForm method to parent via ref
  useImperativeHandle(ref, () => ({
    preFillForm: (services: string[], duration?: string) => {
      setSelectedServices(services);
      if (duration) {
        setMessage((prev) =>
          prev ? `${prev}\n\n[Campaign Duration: ${duration}]` : `Hi Maham, I'd like to discuss a ${duration} for the selected services.`
        );
      }
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    },
  }));

  const handleServiceToggle = (serviceTitle: string) => {
    if (selectedServices.includes(serviceTitle)) {
      setSelectedServices(selectedServices.filter((s) => s !== serviceTitle));
    } else {
      setSelectedServices([...selectedServices, serviceTitle]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger Confetti Celebration!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
        });
      } catch (err) {
        console.log("Confetti trigger", err);
      }
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0a0e17]">
      {/* Google Ambient Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact Me For <span className="text-gradient-google">Marketing & Social Services</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Ready to elevate your brand? Fill out the form below or reach out directly for custom service proposals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Perks */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <span>Let's Work Together</span>
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Whether you need compelling content writing, scroll-stopping social visuals, full channel management, or a 90-day marketing strategy—I'm here to help your brand stand out.
              </p>

              <div className="space-y-4 pt-2">
                
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">Direct Email</div>
                    <a href="mailto:mahamst31@gmail.com" className="text-sm font-bold text-white hover:text-blue-400 transition-colors">
                      mahamst31@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">Response Time & Hours</div>
                    <div className="text-sm font-bold text-white">Within 24 Hours (Mon - Fri)</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">Location / Availability</div>
                    <div className="text-sm font-bold text-white">Available Worldwide (Remote)</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Google Brand Guarantee */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-emerald-900/30 border border-blue-500/20 flex items-center gap-4">
              <div className="flex shrink-0 -space-x-2">
                <span className="w-4 h-4 rounded-full bg-[#4285F4]"></span>
                <span className="w-4 h-4 rounded-full bg-[#EA4335]"></span>
                <span className="w-4 h-4 rounded-full bg-[#FBBC05]"></span>
                <span className="w-4 h-4 rounded-full bg-[#34A853]"></span>
              </div>
              <p className="text-xs text-gray-300 font-medium leading-relaxed">
                Custom marketing plans built to match your brand identity, target demographics, and growth budget.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel google-multi-border rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl relative">
              
              {isSuccess ? (
                <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-3xl font-extrabold text-white">Message Sent Successfully!</h3>

                  <p className="text-gray-300 text-base max-w-md mx-auto">
                    Thank you <span className="text-blue-400 font-bold">{name}</span>! I've received your request for{" "}
                    <span className="text-emerald-400 font-bold">{selectedServices.join(", ")}</span>. I will review your requirements and respond within 24 hours.
                  </p>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                        Your Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        suppressHydrationWarning
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                        Your Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. sarah@company.com"
                        suppressHydrationWarning
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection Buttons */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Services Needed (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SERVICES_DATA.map((service) => {
                        const isChecked = selectedServices.includes(service.title);
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => handleServiceToggle(service.title)}
                            suppressHydrationWarning
                            className={`flex items-center gap-3 p-3.5 rounded-xl border text-xs font-semibold text-left transition-all duration-200 ${
                              isChecked
                                ? "bg-blue-600/25 border-blue-500 text-white shadow-md ring-1 ring-blue-500/50"
                                : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                                isChecked ? "bg-blue-500 border-blue-400 text-white" : "border-gray-500"
                              }`}
                            >
                              {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />}
                            </div>
                            <span>{service.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Estimated Project Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      suppressHydrationWarning
                      className="w-full px-4 py-3.5 rounded-xl bg-[#121826] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option value="Under $500">Under $500</option>
                      <option value="$500 - $1,500">$500 - $1,500</option>
                      <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                      <option value="$3,000+">$3,000+ / Ongoing Retainer</option>
                    </select>
                  </div>

                  {/* Project Details Message */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Project Goals & Details
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell Maham about your business, target audience, or specific requirements..."
                      suppressHydrationWarning
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    suppressHydrationWarning
                    className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold text-base shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 transition-all active:scale-98 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending Request...
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-yellow-300" />
                        <span>Send Contact Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
});

Contact.displayName = "Contact";
export default Contact;
