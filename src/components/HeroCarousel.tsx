"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

// --- Interface Definitions ---
interface SlideData {
    id: number;
    image: string;
    title: string;
    subtitle: string;
}

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
}

// --- Sub-Components for the Buttons ---

// 1. Primary Button (Gradient background with white icon circle)
const PrimaryButton: React.FC<ButtonProps> = ({ children, href = "#" }) => (
    <a href={href} className="group flex items-center h-14 pr-2 pl-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl transition duration-300 transform hover:scale-[1.03]">
        <span className="text-white text-lg font-semibold tracking-wide mr-4">
            {children}
        </span>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-purple-600 transition-colors duration-300 group-hover:bg-gray-100">
            <ArrowUpRight className="w-5 h-5" />
        </div>
    </a>
);

// 2. Secondary Button (Black with White Outline)
const SecondaryButton: React.FC<ButtonProps> = ({ children, href = "#" }) => (
    <a href={href} className="h-14 px-8 py-3 flex items-center justify-center rounded-full bg-black/40 border border-white text-white text-lg font-semibold transition-colors duration-300 hover:bg-black/60 backdrop-blur-sm">
        {children}
    </a>
);


// --- Content Component with Animations ---

interface SlideContentProps {
    slide: SlideData;
    isActive: boolean;
}

const SlideContent: React.FC<SlideContentProps> = ({ slide, isActive }) => {
    // Note: The animation is now controlled entirely by the isActive prop
    return (
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white p-8 md:p-16 z-10">
            
            {/* Wrapper for content to control max width and ensure left alignment */}
            <div className="max-w-3xl">
                {/* Title - Flips In From Up */}
                <h1
                    className={`
                        text-4xl md:text-6xl font-bold mb-4
                        transition-all duration-1000 ease-out 
                        ${isActive
                            ? 'opacity-100 translate-y-0' // Final state
                            : 'opacity-0 -translate-y-16'} // Initial state (above and hidden)
                    `}
                >
                    {slide.title}
                </h1>

                {/* Subtitle - Flips In From Down (with delay) */}
                <p
                    className={`
                        text-lg md:text-2xl
                        transition-all duration-1000 ease-out 
                        ${isActive
                            ? 'opacity-100 translate-y-0 delay-300' // Final state with delay
                            : 'opacity-0 translate-y-16'} // Initial state (below and hidden)
                        mb-10
                    `}
                >
                    {slide.subtitle}
                </p>

                {/* Buttons - Only for the first slide */}
                {slide.id === 1 && (
                    <div 
                        className={`
                            flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-4
                            transition-opacity duration-1000 ease-out
                            ${isActive ? 'opacity-100 delay-500' : 'opacity-0'}
                        `}
                    >
                        <PrimaryButton>List Your Business</PrimaryButton>
                        <SecondaryButton>Learn More</SecondaryButton>
                    </div>
                )}
            </div>
        </div>
    );
};


// --- Main Carousel Component ---

const slides: SlideData[] = [
    {
        id: 1,
        image: "/images/Header1.png",
        title: "Connect, Promote, and Grow Your Business Today",
        subtitle:
            "Join our corporate business directory to showcase your brand and reach new customers. Sign up now and elevate your business presence online!",
    },
    {
        id: 2,
        image: "/images/Header2.png",
        title: "Empower Your Business with Our Platform",
        subtitle:
            "Our platform simplifies business registration and profile creation, allowing you to showcase your offerings effectively. With advanced search functionality, potential customers can easily find and connect with your business.",
    },
    {
        id: 3,
        image: "/images/Header3.png",
        title: "Connect with Businesses, Grow Your Network",
        subtitle:
            "Discover a world of opportunities with our corporate business directory. Easily search, browse, and connect with businesses that meet your needs.",
    },
];

const HeroCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-advance logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3400); // Matches the original autoplay delay

        return () => clearInterval(interval);
    }, []);

    const goToPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <section className="relative w-full h-[80vh] overflow-hidden">
            
            {/* Carousel Slides Container */}
            <div 
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={slide.id} className="min-w-full h-full relative">
                        
                        {/* Background Image (using standard img tag instead of next/image) */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="object-cover w-full h-full brightness-75 absolute inset-0"
                            loading="eager" // Use standard loading attribute
                        />

                        {/* Animated Content */}
                        <SlideContent 
                            slide={slide} 
                            isActive={activeIndex === index} 
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between z-30 pointer-events-none p-4">
                <button 
                    onClick={goToPrev} 
                    className="p-3 bg-white/20 hover:bg-white/40 rounded-full transition-colors pointer-events-auto"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button 
                    onClick={goToNext} 
                    className="p-3 bg-white/20 hover:bg-white/40 rounded-full transition-colors pointer-events-auto"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>
            </div>

            {/* Pagination Dots */}
            {/* Moved up from bottom-24 to bottom-10 to make room for content */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {slides.map((_, index) => (
                    <button 
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`
                            h-3 w-3 rounded-full transition-all duration-300 
                            ${activeIndex === index ? 'bg-white w-8' : 'bg-gray-400/80'}
                        `}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* 👇 Meet point curve for smooth transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-40">
                <svg
                    className="relative block w-full h-[100px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44C173.81,92.41,0,120,0,120H1200V0S928.94,89.29,645.5,72.5C487.17,63.4,375.27,44.55,321.39,56.44Z"
                        fill="#fff"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default HeroCarousel;
