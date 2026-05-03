"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const languages = [
    { name: "JavaScript", top: "10%", left: "5%", size: "2rem" },
    { name: "Python", top: "15%", left: "70%", size: "1.8rem" },
    { name: "Java", top: "40%", left: "80%", size: "2rem" },
    { name: "C++", top: "60%", left: "85%", size: "1.5rem" },
    { name: "Go", top: "30%", left: "40%", size: "1.7rem" },
    { name: "Swift", top: "50%", left: "10%", size: "1.6rem" },
    { name: "Kotlin", top: "80%", left: "75%", size: "2rem" },
    { name: "IoT", top: "25%", left: "55%", size: "1.8rem" },
  ];

  return (
    <div className="w-full bg-sky-50 relative">
      {/* Floating Text */}
      {languages.map((lang, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            top: lang.top,
            left: lang.left,
            fontSize: lang.size,
            transform: "translate(-50%, -50%)",
            opacity: 0.25,
            pointerEvents: "none",
            whiteSpace: "nowrap",
            zIndex: 1,
          }}
          className="text-gray-400 select-none"
        >
          {lang.name}
        </span>
      ))}

      <section className="max-w-7xl w-full m-auto pt-14 md:pt-20 pb-40 md:pb-52 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
            Design That Works. <br />
            <span className="text-blue-500">Results That Matter.</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Bring your ideas to life with clean, functional, and modern design.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <Link
              href="#project"
              className="bg-btn hover:bg-blue-700 text-white py-3 px-6 rounded-full duration-300 hover:scale-105 transition text-center w-56"
            >
              Explore My Projects
            </Link>

            <Link
              href="#contact"
              className="border border-blue-500 text-sky-500 py-3 px-6 rounded-full hover:scale-105 transition duration-300 text-center w-56"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Floating Card */}
        {/* Floating Card */}
        {/* Floating Card */}
        <div
          className="absolute left-1/2 bottom-8 -translate-x-1/2
  bg-white shadow-xl rounded-2xl px-4 py-4 md:px-6 md:py-5
  w-[95%] max-w-[1100px] z-30 overflow-x-auto"
        >
          <div className="flex flex-nowrap gap-6">
            <div className="flex items-center gap-3 min-w-[180px]">
              <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                🌐
              </div>
              <div>
                <p className="text-xs text-gray-500 whitespace-nowrap">
                  Web Development
                </p>
                <p className="font-semibold text-gray-800">6</p>
              </div>
            </div>

            <div className="flex items-center gap-3 min-w-[180px]">
              <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full">
                🤖
              </div>
              <div>
                <p className="text-xs text-gray-500 whitespace-nowrap">
                  Android Development
                </p>
                <p className="font-semibold text-gray-800">-</p>
              </div>
            </div>

            <div className="flex items-center gap-3 min-w-[180px]">
              <div className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full">
                🍎
              </div>
              <div>
                <p className="text-xs text-gray-500 whitespace-nowrap">
                  iOS Development
                </p>
                <p className="font-semibold text-gray-800">-</p>
              </div>
            </div>

            <div className="flex items-center gap-3 min-w-[180px]">
              <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-full">
                🎮
              </div>
              <div>
                <p className="text-xs text-gray-500 whitespace-nowrap">
                  Game Development
                </p>
                <p className="font-semibold text-gray-800">-</p>
              </div>
            </div>

            <div className="flex items-center gap-3 min-w-[180px]">
              <div className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center rounded-full">
                📡
              </div>
              <div>
                <p className="text-xs text-gray-500 whitespace-nowrap">
                  IoT Development
                </p>
                <p className="font-semibold text-gray-800">2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Robot Fully Visible */}
        <Image
          src="/images/welcome-robot.png"
          alt="Robot"
          width={512}
          height={512}
          priority
          className="
    absolute bottom-22 -left-1
    sm:bottom-16 sm:left-1
    md:bottom-20 md:left-1
    lg:bottom-18 lg:left-1
    w-28 sm:w-32 md:w-44 lg:w-60
    h-auto z-20 pointer-events-none
  "
        />
      </section>
    </div>
  );
}
