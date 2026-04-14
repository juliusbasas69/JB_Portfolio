"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function SpotSelectPage() {
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
            SPOTSelect – Project Proposal Platform
          </h1>

          <p className="text-gray-600">
            A web platform for users to submit project proposals, get evaluated
            by Officers, Managers, and the TBI Board with feedback and
            notifications.
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
                Defended
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                Web
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                Capstone
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
    Frontend: ["HTML", "CSS", "JavaScript"],
    Backend: ["Java", "Spring Boot", "Spring MVC", "Thymeleaf"],
    Database: ["PostgreSQL"],
    Security: ["Spring Security", "JWT Authentication"],
    DevOps: [],
    Messaging: [],
    Caching: [],
    Tools: ["Git"],
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
          SPOTSelect is a web-based project proposal platform that allows users
          to submit innovative ideas and have them evaluated through a
          structured approval process. The system supports multiple roles
          including Officers, Managers, and Board members, each with specific
          responsibilities in reviewing, approving, or rejecting proposals.
        </p>

        <h3 className="text-xl font-semibold mb-3">─── ✦ Key Features ✦ ───</h3>
        <li>Project proposal submission system</li>
        <li>Multi-level approval workflow (Officer, Manager, Board)</li>
        <li>Role-based access control for different user types</li>
        <li>Status tracking for submitted proposals</li>
        <li>Feedback and evaluation system</li>
        <li>Notification system for updates and decisions</li>
        <li>Organized dashboard for managing proposals</li>
        <li>Automatic certificate generation for approved proposals</li>
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
            <span>Web Application</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Architecture:</span>
            <span>Monolithic (Spring MVC)</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Developed:</span>
            <span>2024</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Status:</span>
            <span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                Defended
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
