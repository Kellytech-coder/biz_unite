import React from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

// Define testimonial data
const testimonial = {
  id: 1,
  quote: "This platform has transformed the way we connect with our customers. Our visibility has skyrocketed, and we're seeing real growth in our business!",
  reviewerName: "John Doe",
  reviewerTitle: "CEO, Tech Solutions",
  companyLogo: "/images/PlaceholderLogo1.png", // Ensure this path is correct
  // 👇 MODIFIED: You need the correct file extension (.jpg, .png, etc.)
  reviewerImage: "/images/PlaceholderImage6.png", 
  stars: 5, // Number of stars for the rating
};

const TestimonialSection = () => {
  // Function to render star icons (e.g., for 5 stars)
  const renderStars = (count: number) => {
    return (
      <div className="flex gap-1 mb-4"> {/* Reduced bottom margin (mb-6 to mb-4) */}
        {[...Array(count)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"> {/* Slightly smaller stars (w-5 h-5 to w-4 h-4) and yellow-400 to yellow-500 */}
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-gray-900 py-12 sm:py-16 text-white"> {/* Moderated background color (from #110D1D to gray-900) and vertical padding (py-16/24 to py-12/16) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4"> {/* Moderated max-width (max-w-7xl to max-w-6xl) */}
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12"> {/* Moderated bottom margin (mb-16 to mb-10/12) */}
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white"> {/* Moderated font size (4xl/5xl to 3xl/4xl) and font weight (extrabold to bold) */}
            What our <span className="text-indigo-400">Users</span> Say {/* Changed purple-400 to indigo-400 for a slightly calmer accent */}
          </h1>
        </div>

        {/* Testimonial Card */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl"> {/* Moderated gap (12 to 8), added p-6/8 padding, and changed background to a softer gray-800 */}
          
          {/* Reviewer Image */}
          <div className="flex-shrink-0 w-full lg:w-5/12 overflow-hidden rounded-lg shadow-lg"> {/* Slightly adjusted width (1/2 to 5/12) and used rounded-lg */}
            <Image
              src={testimonial.reviewerImage}
              alt={testimonial.reviewerName}
              width={600}
              height={450}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg" // Adjusted rounding
            />
          </div>

          {/* Testimonial Content */}
          <div className="flex-grow lg:w-7/12 flex flex-col justify-center text-center lg:text-left"> {/* Adjusted width (1/2 to 7/12) and removed redundant horizontal padding (px-4) */}
            
            {renderStars(testimonial.stars)}

            <p className="text-xl sm:text-2xl font-normal mb-6 leading-normal text-gray-200"> {/* Moderated text size (2xl/3xl to xl/2xl) and font weight/leading */}
              &quot;{testimonial.quote}&quot;
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4"> {/* Removed lg:gap-6 for consistent spacing */}
              <div className="flex-shrink-0 text-white">
                <p className="font-semibold text-base">{testimonial.reviewerName}</p> {/* Slightly smaller font size (lg to base) */}
                <p className="text-xs text-gray-400">{testimonial.reviewerTitle}</p> {/* Slightly smaller font size (sm to xs) */}
              </div>
              {testimonial.companyLogo && (
                <div className="flex-shrink-0 w-20 h-5 relative"> {/* Slightly smaller logo size (w-24 h-6 to w-20 h-5) */}
                  <Image
                    src={testimonial.companyLogo}
                    alt="Company Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>


       {/* Navigation Controls */}
<div className="mt-20 flex justify-between items-center px-4">
  
  {/* Dots Indicator (Left side) */}
  <div className="flex gap-2">
    {/* Active Dot - Blue */}
    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span> 
    {/* Inactive Dots - Dark Gray */}
    <span className="w-2.5 h-2.5 bg-gray-700 rounded-full"></span> 
    <span className="w-2.5 h-2.5 bg-gray-700 rounded-full"></span>
  </div>

  {/* Arrows (Right side) - Circular, Small-to-Medium Size */}
  <div className="flex gap-4"> {/* Increased gap between buttons to gap-4 (looks slightly larger than dot gap) */}
    
    {/* Previous Button - Dark/Gray */}
    <button className="p-2.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200"> {/* p-2.5 provides a good small-to-medium button size */}
      <ArrowLeftIcon className="h-5 w-5 text-white" /> {/* Reverted icon size to h-5 w-5 for better visibility/proportion */}
    </button>
    
    {/* Next Button - Blue Accent */}
    <button className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200"> {/* p-2.5 padding */}
      <ArrowRightIcon className="h-5 w-5 text-white" /> {/* h-5 w-5 icon size */}
    </button>
  </div>
</div>
      </div>
    </section>
  );
};

export default TestimonialSection;