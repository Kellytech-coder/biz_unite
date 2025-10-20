"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "/images/Header.png",
      title: "",
      subtitle: "",
    },
    // {
    //   id: 2,
    //   image: "/images/slide2.jpg",
    //   title: "Showcase Your Brand",
    //   subtitle: "Boost your visibility with our business network.",
    // },
    // {
    //   id: 3,
    //   image: "/images/slide3.jpg",
    //   title: "Collaborate and Succeed",
    //   subtitle: "Join a thriving ecosystem of innovators and entrepreneurs.",
    // },
  ];

  return (
    <section className="relative w-full h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
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
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-2xl max-w-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
