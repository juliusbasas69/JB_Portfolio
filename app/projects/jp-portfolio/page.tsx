"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function JBPortfolioPage() {
  return (
    <div>
      <div className="w-full py-12 bg-sky-50">
        <HeroSection />
        <DetailsSection />
      </div>
      <div className="flex flex-col items-center justify-center py-16 border border-dashed border-gray-300 rounded-xl bg-gray-50">
        <span className="text-4xl mb-3">🖼️</span>

        <h3 className="text-lg font-semibold text-gray-700">
          No Screenshots Available
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Screenshots will be added soon.
        </p>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="max-w-7xl w-full m-auto px-6 mb-16 ">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            JB Portfolio
          </h1>

          <p className="text-gray-600">
            A personal portfolio website designed to showcase my projects,
            technical skills, and experience as a full-stack developer. It
            provides a clean and interactive interface for exploring my work,
            including detailed project pages and categorized tech stacks.
          </p>

          <p className="text-gray-500 mt-2 italic text-sm">
            Built to present my development journey and highlight real-world
            projects for recruiters and clients.
          </p>

          {/* GitHub */}
          <div className="mt-6">
            <Link
              href="https://github.com/sajstartup-design/FuturePath"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-900 text-white hover:opacity-90 transition"
            >
              <FaGithub size={16} />
              GitHub
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                Active
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                Web
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                Personal
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[250px] md:h-[300px]">
          <Image
            src="/images/projects/futurepath/jp-futurepath.png"
            fill
            sizes="512px"
            preload={true}
            alt="BorrowWhen Landing Page"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function DetailsSection() {
  const techStack = {
    Frontend: ["Next.js", "TailwindCSS"],
    Backend: [],
    Database: [],
    Security: [],
    DevOps: ["Vercel"],
    Messaging: [],
    Caching: [],
    Tools: ["Git", "GitHub"],
    Payment: [],
  };

  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <section className="max-w-7xl w-full m-auto px-6 grid md:grid-cols-3 gap-10">
      {/* Left */}
      <div className="md:col-span-2">
        <h2 className="text-2xl font-semibold mb-4">
          ─── ✦ Projects Details ✦ ───
        </h2>

        <p className="text-gray-600 mb-6">
          This portfolio serves as a centralized platform to present my
          development work, including backend systems, full-stack applications,
          and UI-focused projects. Each project is structured with clear
          descriptions, features, and technologies used to demonstrate my
          technical capabilities.
        </p>

        <h3 className="text-xl font-semibold mb-3">─── ✦ Key Features ✦ ───</h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Responsive and modern UI design</li>
          <li>Project showcase with detailed pages</li>
          <li>Expandable tech stack categorization</li>
          <li>Interactive UI with hover effects</li>
          <li>Downloadable CV integration</li>
          <li>Optimized performance using Next.js</li>
          <li>Deployed and accessible via Vercel</li>
        </ul>
      </div>

      {/* Right */}
      {/* Right Column */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">─── ✦ Tech Stack ✦ ───</h2>

        <div className="space-y-3 mb-6">
          {Object.entries(techStack)
            .filter(([_, items]) => items.length > 0) // 👈 skip empty categories
            .map(([category, items]) => (
              <div
                key={category}
                className="shadow-md rounded-lg overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setOpenCategory(openCategory === category ? null : category)
                  }
                  className="w-full flex justify-between text-sm items-center px-2 py-2 bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
                >
                  <span className="font-medium">{category}</span>
                  <span>{openCategory === category ? "−" : "+"}</span>
                </button>

                {/* Content */}
                {openCategory === category && (
                  <div className="flex flex-wrap gap-2 p-3 bg-white">
                    {items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          ─── ✦ Projects Info ✦ ───
        </h2>

        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Role:</span>
            <span>Full Stack Developer</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Type:</span>
            <span>Personal Portfolio</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Architecture:</span>
            <span>Jamstack (Next.js + Vercel)</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Developed:</span>
            <span>2026</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Status:</span>
            <span className="text-green-600">Active</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Deployment:</span>
            <span>Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
}
