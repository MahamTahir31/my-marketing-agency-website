"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ServiceEstimator from "@/components/ServiceEstimator";
import Contact, { ContactHandle } from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const contactRef = useRef<ContactHandle>(null);

  const handleSelectServiceForContact = (serviceTitle: string) => {
    if (contactRef.current) {
      contactRef.current.preFillForm([serviceTitle]);
    }
  };

  const handlePreFillContactForm = (selectedServices: string[], duration: string) => {
    if (contactRef.current) {
      contactRef.current.preFillForm(selectedServices, duration);
    }
  };

  const handleContactClick = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0f19] text-gray-100 selection:bg-blue-500 selection:text-white">
      <Navbar onContactClick={handleContactClick} />
      <Hero />
      <About />
      <Services onSelectServiceForContact={handleSelectServiceForContact} />
      <Portfolio />
      <ServiceEstimator onPreFillContactForm={handlePreFillContactForm} />
      <Contact ref={contactRef} />
      <Footer />
    </main>
  );
}
