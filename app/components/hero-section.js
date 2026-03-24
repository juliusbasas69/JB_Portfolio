"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full bg-sky-50 relative">
      <section className="max-w-7xl w-full m-auto py-20 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Design That Works. <br />
            <span className="text-blue-500">Results That Matter.</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-lg mb-8">
            Bring your ideas to life with clean, functional, and modern design.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="bg-btn hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300"
            >
              Explore My Projects
            </Link>

            <Link
              href="/contact"
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Floating Bottom Cards */}
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 
                inline-flex gap-6 bg-white shadow-xl rounded-2xl px-8 py-5"
        >
          {/* Web Dev */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
              🌐
            </div>
            <div>
              <p className="text-sm text-gray-500 text-xs whitespace-nowrap">
                Web Development
              </p>
              <p className="font-semibold text-gray-800">1</p>
            </div>
          </div>

          {/* Android Dev */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full">
              🤖
            </div>
            <div>
              <p className="text-sm text-gray-500 text-xs whitespace-nowrap whitespace-nowrap">
                Android Development
              </p>
              <p className="font-semibold text-gray-800">-</p>
            </div>
          </div>

          {/* iOS Dev */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full">
              🍎
            </div>
            <div>
              <p className="text-sm text-gray-500 text-xs whitespace-nowrap">
                iOS Development
              </p>
              <p className="font-semibold text-gray-800">-</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-full">
              🎮
            </div>
            <div>
              <p className="text-sm text-gray-500 text-xs whitespace-nowrap">
                Game Development
              </p>
              <p className="font-semibold text-gray-800">-</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
