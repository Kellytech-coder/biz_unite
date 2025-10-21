"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroCarousel = () => {
  const slides = [
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

  return (
    <section className="relative w-full h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-75"
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl max-w-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 👇 Meet point curve for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
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
