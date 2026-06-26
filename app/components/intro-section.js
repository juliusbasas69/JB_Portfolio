"use client";

import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section
      id="about"
      className="w-full bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      {/* Banner */}
      <div className="w-full mb-8 md:mb-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-semibold px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg text-center text-sm sm:text-base animate-pulse leading-snug">
          🚨 Open Request: I’m actively looking for a mentor or company who can
          teach me <span className="font-bold"> Azure / AWS </span>
          or provide structured training in cloud technologies. If you're
          offering guidance or opportunities, I’d love to connect!
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
            <Image
              src="/images/me.png"
              alt="Julius Basas"
              fill
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 384px, 448px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Badges */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-3 mb-4">
            <div className="bg-blue-100 text-blue-600 font-semibold px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
              +3 Years Experience
            </div>

            <div className="inline-flex items-center bg-green-100 text-green-600 font-semibold px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Employed
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            <span className="mr-2">👋</span>
            Hello, I'm <span className="text-blue-500">Julius Basas</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
            A highly motivated and detail-oriented developer who is eager to
            continuously learn and grow. My current skills represent only the
            foundation of my journey, as I remain committed to constant
            improvement, learning new technologies, and delivering high-quality
            solutions through collaboration and dedication.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              href="/JB_RESUME_042226.pdf"
              download="Julius_Basas_CV.pdf"
              className="inline-block bg-btn hover:bg-blue-700 text-white px-5 sm:px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 text-sm sm:text-base"
            >
              Download CV
            </Link>

            <span className="text-xs sm:text-sm text-gray-500">
              Last updated: April 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
