"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const images = ["/im1.png", "/im2.png", "/im3.png", "/im4.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Interval in milliseconds to auto-advance slides
  const INTERVAL_MS = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Content Wrapper */}
      <div className="relative py-16 px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side content */}
        <div className="md:w-1/2 space-y-5 relative z-10">
          {/* Decorative ring behind heading */}
          <div className="absolute -top-10 -left-16 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-60 pointer-events-none" />

          {/* Tagline */}
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
            Transforming Venues into Social Hubs
          </h2>

          {/* Main Title */}
          <h1 className="relative text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            huntshake
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 font-medium">
            Making Social Media Truly Social Again
          </p>

          {/* Description */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            huntshake connects you to people around you in real time, transforming
            social venues into hubs for personal, professional, and academic
            networking.
          </p>

          {/* CTA Button */}
          <button className="px-6 py-2 mt-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors shadow-md">
            Get Started
          </button>
        </div>

        {/* Right side: Carousel */}
        <div className="relative md:w-1/2 bg-gray-200 rounded-xl overflow-hidden shadow-md">
          <div className="relative w-full h-96">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
