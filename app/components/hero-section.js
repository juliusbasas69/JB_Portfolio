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
  ];

  return (
    <div className="w-full bg-sky-50 relative relative ">
      {languages.map((lang, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            top: lang.top,
            left: lang.left,
            fontSize: lang.size,
            transform: "translate(-50%, -50%) rotate(0deg)", // centers the text
            opacity: 0.3, // visible but subtle
            pointerEvents: "none",
            whiteSpace: "nowrap",
            zIndex: 1,
          }}
          className="text-gray-400 select-none z-0"
        >
          {lang.name}
        </span>
      ))}

      <section className="max-w-7xl w-full m-auto py-20 px-6">
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
              href="#project"
              className="bg-btn hover:bg-blue-700 text-white px-6 py-3 rounded-full duration-300 hover:scale-105 transition"
            >
              Explore My Projects
            </Link>

            <Link
              href="#contact"
              className="border border-blue-500 text-sky-500 h px-6 py-3 rounded-full hover:scale-105 transition duration-300"
            >
              Contact Me
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/welcome-robot.png"
              alt="Robot"
              width={512}
              height={512}
              preload={true}
              className="absolute -bottom-30 -left-12 w-8 h-88 md:w-60 lg:w-80 z-0 pointer-events-none"
            />
          </div>
        </div>
        {/* Floating Bottom Cards */}
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2
             flex flex-wrap justify-center gap-4 bg-white shadow-xl rounded-2xl
             px-4 py-3 md:px-8 md:py-5 w-fit max-w-[75%]"
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
              <p className="font-semibold text-gray-800">5</p>
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
