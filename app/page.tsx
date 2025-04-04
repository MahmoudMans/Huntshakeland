// app/page.tsx
"use client";
import React from "react";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
import HowToUseSection from "./components/HowToUseSection";
import WhatIsACatchzone from "./components/Catchzone";
import FAQSection from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed Nav */}
      <Navbar />

      {/* Main content is offset by 4rem (the navbar height) */}
      <main className="pt-16">
        <HeroSection />
        <HowToUseSection />
        <WhatIsACatchzone />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
