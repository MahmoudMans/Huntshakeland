"use client";
import Image from "next/image";
import {
  Circle as CircleIcon,
  Hand as HandIcon,
  CheckCircle as CheckCircleIcon,
  Smile as SmileIcon,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="relative py-16 overflow-hidden bg-gray-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mt-8">
          How to use?
        </h2>

        {/* 2x2 Grid of Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex flex-col items-center text-center gap-4">
            {/* Icon */}
            <div className="group relative w-16 h-16 flex items-center justify-center rounded-full bg-gray-900">
              <CircleIcon
                size={32}
                className="text-white transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>
            {/* Title & Text */}
            <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
              Step 1
            </h3>
            <p className="text-gray-600">
              Be physically present in a CATCHZONE
            </p>
            {/* Image */}
            <div className="relative w-32 h-32">
              <Image
                src="/step1.png"
                alt="Step 1"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex flex-col items-center text-center gap-4">
            <div className="group relative w-16 h-16 flex items-center justify-center rounded-full bg-gray-900">
              <HandIcon
                size={32}
                className="text-white transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
              Step 2
            </h3>
            <p className="text-gray-600">
              See who’s around you in your social venue
            </p>
            <div className="relative w-32 h-32">
              <Image
                src="/step2.png"
                alt="Step 2"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex flex-col items-center text-center gap-4">
            <div className="group relative w-16 h-16 flex items-center justify-center rounded-full bg-gray-900">
              <CheckCircleIcon
                size={32}
                className="text-white transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
              Step 3
            </h3>
            <p className="text-gray-600">
              Send a symbolic invitation to start a real life conversation
            </p>
            <div className="relative w-32 h-32">
              <Image
                src="/step3.png"
                alt="Step 3"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex flex-col items-center text-center gap-4">
            <div className="group relative w-16 h-16 flex items-center justify-center rounded-full bg-gray-900">
              <SmileIcon
                size={32}
                className="text-white transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
              Step 4
            </h3>
            <p className="text-gray-600">Meet a new friend within a minute!</p>
            <div className="relative w-32 h-32">
              <Image
                src="/step4.png"
                alt="Step 4"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
