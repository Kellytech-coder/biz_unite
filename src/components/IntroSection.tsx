"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white"> {/* <-- CHANGED: Replaced 'bg-blue' with 'bg-gray-50' */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Left Text Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-[#7B3CFF] to-[#2DB2FF] rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">⨀</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#7B3CFF]">Empowering Businesses</span>
            <br />
            <span className="text-black">Through a Dynamic Platform</span>
          </h1>

          <p className="mt-5 text-gray-600 max-w-lg">
            Our platform connects business owners with potential customers,
            offering tools for profile creation and promotion. Discover how we
            streamline the process of business visibility and engagement.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#7B3CFF] to-[#2DB2FF] text-white px-6 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition">
              Learn More <ArrowUpRight size={18} />
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/PlaceholderImage5.png"
            alt="business handshake"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}