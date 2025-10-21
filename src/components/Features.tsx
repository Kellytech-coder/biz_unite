"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";


export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-50 p-8 bg-dark-grey">
      {/* Left Image */}
      <div className="flex-1">
        <div className="overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/images/PlaceholderImage4.png" // replace with your image path or use next/image remote config
            alt="Business presentation"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 space-y-5">
        <p className="text-indigo-600 font-medium">Connect</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          <span className="text-blue-600">Reach</span> Your Business&apos;s Full
          Potential Today
        </h1>
        <p className="text-gray-600 max-w-lg">
          Our platform empowers business owners to showcase their offerings and
          connect with potential customers. Visitors can easily discover and
          engage with businesses that meet their needs.
        </p>

        {/* Features */}
        <div className="flex flex-col md:flex-row gap-6 text-gray-800">
          <div>
            <h3 className="font-semibold text-lg mb-1">For Business Owners</h3>
            <p className="text-sm text-gray-600">
              Create a standout profile and attract more customers effortlessly.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">For Visitors</h3>
            <p className="text-sm text-gray-600">
              Easily find and connect with businesses that suit your needs.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 pt-3">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2">
            Get started Free <ArrowUpRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-5 py-2.5 rounded-xl"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}
