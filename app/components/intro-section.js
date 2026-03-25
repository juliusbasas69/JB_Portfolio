"use client";

import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="mt-16 w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
            <Image
              src="/images/me.png"
              alt="Julius Basas"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Intro Text */}
        <div className="w-full md:w-1/2">
          {/* Experience + Open for Work */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-block bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-full">
              +3 Years Experience
            </div>

            <div className="inline-flex items-center bg-green-100 text-green-600 font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Open for Work
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="mr-2">👋</span>Hello, I'm{" "}
            <span className="text-blue-500">Julius Basas</span>
          </h2>
          <p className="text-gray-500 text-lg mb-6">
            A highly motivated and detail-oriented developer who is eager to
            continuously learn and grow. My current skills represent only the
            foundation of my journey, as I remain committed to constant
            improvement, learning new technologies, and delivering high-quality
            solutions through collaboration and dedication.
          </p>

          <Link
            href="/resume.pdf" // replace with the path to your CV file
            download
            className="inline-block bg-btn hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
}
