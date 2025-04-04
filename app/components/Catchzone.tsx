"use client";
import Image from "next/image";

export default function CatchzoneSection() {
  return (
    // Single background color instead of a gradient
    <section className="relative py-20 px-6 md:px-16 bg-gray-50 text-center overflow-hidden">
      {/* Main Container */}
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 animate-fadeInUp">
          What is a catchzone?
        </h2>

        {/* Illustration Area */}
        <div className="relative flex justify-center mb-6 animate-fadeInUp animation-delay-200">
          <div className="relative flex items-center justify-center">
            {/* Larger pulsing ring around the illustration */}
            <div className="absolute w-72 h-72 rounded-full border-4 border-gray-100 animate-pulse-slow" />

            {/* Bigger Circular container for catchzone.png */}
            <div className="relative h-64 w-64 bg-white rounded-full shadow-md overflow-hidden">
              <Image
                src="/catchzone.png"
                alt="Catchzone illustration"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>

        {/* "Add your daily social spot!" text (below the image) */}
        <p className="text-gray-800 font-semibold text-base md:text-lg mb-6 animate-fadeInUp animation-delay-300">
          Add your daily social spot!
        </p>

        {/* Paragraph Text */}
        <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed animate-fadeInUp animation-delay-400">
          Your everyday social spaces are turned into networking hubs! Coffee
          shops, coworking spaces, gyms, universities, companies, and more!
        </p>
      </div>
    </section>
  );
}
