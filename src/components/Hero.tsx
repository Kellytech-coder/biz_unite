import React from 'react';

// --- CSS Keyframe Definition for the Pulsating Background ---
// This uses a style block to define the CSS animation keyframes needed for the effect.
const PulsingAnimation = () => (
    // Removed 'jsx' and 'global' attributes to fix the React warning
    <style>{`
        /* Defines the animation logic: subtle scale change and opacity dip */
        @keyframes subtle-pulse {
            0%, 100% {
                transform: scale(1);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
            50% {
                transform: scale(1.005); /* Slight expansion */
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4); /* Subtle shadow emphasis */
            }
        }

        /* Applies the animation to the main section */
        .animate-subtle-pulse {
            animation: subtle-pulse 8s infinite ease-in-out;
        }
    `}</style>
);


const DropdownArrow = () => (
    // Custom SVG for the dropdown arrow
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);


const BusinessSearch = () => {
    return (
        <>
            <PulsingAnimation />
            {/* ADDED: min-h-screen, flex, and items-center to make the section full height and vertically center the content */}
            <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center animate-subtle-pulse transition duration-300 min-h-screen flex items-center">
                
                {/* Added w-full and py-20 padding for the centered content */}
                <div className="w-full max-w-4xl mx-auto px-4 z-20 relative py-20"> 
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Search for a business
                    </h1>
                    <p className="mb-8 text-lg">
                        Search for businesses by category, location, or keywords to discover what you need today.
                    </p>

                    <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <div className="flex items-center bg-white text-black rounded-full px-4 py-3 w-full md:w-72 shadow-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Enter business name"
                                className="outline-none w-full bg-transparent"
                            />
                        </div>

                        {/* Category Dropdown with Custom Icon */}
                        <div className="relative w-full md:w-48 shadow-xl">
                            <select className="px-4 py-3 pr-10 rounded-full bg-white text-black w-full appearance-none cursor-pointer outline-none">
                                <option>Category</option>
                                <option>Restaurants</option>
                                <option>Shops</option>
                                <option>Services</option>
                            </select>
                            <DropdownArrow />
                        </div>
                        
                        {/* Location Dropdown with Custom Icon */}
                        <div className="relative w-full md:w-48 shadow-xl">
                            <select className="px-4 py-3 pr-10 rounded-full bg-white text-black w-full appearance-none cursor-pointer outline-none">
                                <option>Location</option>
                                <option>New York</option>
                                <option>Los Angeles</option>
                                <option>Chicago</option>
                            </select>
                            <DropdownArrow />
                        </div>

                        <button
                            type="submit"
                            // Changed button color for better contrast and prominence
                            className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-700 transition duration-200 w-full md:w-auto shadow-xl"
                        >
                            Search
                        </button>
                    </form>

                    <p className="mt-6 text-sm text-white/90">
                        Find businesses near you using our smart search feature
                    </p>
                </div>
                
            </section>
        </>
    );
}

// Exported as App to be the main component of the Canvas
export default function App() {
    return <BusinessSearch />;
}
