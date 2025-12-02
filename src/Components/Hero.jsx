// src/components/Hero.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import heroVideo from "../assets/videos/hero1.mp4";

const taglines = [
  "Crafting Culinary Excellence for Every Event",
  "Serving Premium Experiences with Heart and Soul",
  "Delighting Every Guest with Signature Flavors",
  "Transforming Events into Unforgettable Memories"
];

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full bg-neutral-50 text-gray-900 overflow-hidden">

      {/* ---------------- VIDEO BACKGROUND ---------------- */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ---------------- OVERLAY ---------------- */}
      <div className="absolute inset-0 bg-[#1A1A1A]/40 backdrop-blur-[1px]" />

      {/* ---------------- CONTENT WRAPPER ---------------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ------------ LEFT - Typing Animation Heading --------------- */}
          <div className="text-center md:text-left mb-20 md:mb-12">
            <p className="uppercase tracking-[0.2em] text-sm text-gray-200 drop-shadow ">
              Welcome to Golden Leaf Catering
            </p>

            {/* Fixed height to prevent jumping */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white drop-shadow-lg min-h-[16rem] py-8">
              <Typewriter
                words={taglines}
                loop={0} // infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>

            <p className="mt-0 hidden md:mt-6 text-gray-100 max-w-md md:text-base text-sm opacity-90 mx-auto md:mx-0">
              From weddings & corporate events to private luxury dining — Golden Leaf Catering brings authentic flavors, premium service, and unforgettable experiences to your table.
            </p>
          </div>

          {/* ------------ RIGHT - Supporting Text --------------- */}
          <div className="hidden md:flex justify-end">
            <p className="max-w-sm text-gray-200 text-sm leading-relaxed opacity-90 mb-24">
              Our chefs blend creativity with tradition, ensuring every dish tells a story. With a commitment to premium quality and flawless hospitality, we transform every event into a memorable culinary journey.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- BOTTOM INDEX POINTS ---------------- */}
      <div className="absolute bottom-10 left-0 w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-200 uppercase tracking-wide">
          
          <div className="cursor-pointer border-b border-white/40 pb-2 hover:text-white transition">
            <span className="text-red-700 mr-2">01.</span> Luxury Wedding Catering
          </div>

          <div className="cursor-pointer border-b border-white/40 pb-2 hover:text-white transition">
            <span className="text-red-700 mr-2">02.</span> Corporate Events & Conferences
          </div>

          <div className="cursor-pointer border-b border-white/40 pb-2 hover:text-white transition">
            <span className="text-red-700 mr-2">03.</span> Signature Live Food Counters
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
