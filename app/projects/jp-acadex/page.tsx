"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function AcadexPage() {
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
    <section className="max-w-7xl w-full m-auto px-6 mb-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Acadex</h1>

          <p className="text-gray-600">
            Acadex is a web platform for managing programming assignments with
            built-in code compilation. It enables students to write and submit
            code, while professors can review, grade, and manage academic
            workflows efficiently.
          </p>

          <p className="text-gray-500 mt-2 italic text-sm">
            Built as a monolithic full-stack application using Next.js and
            Spring Boot, focusing on performance and maintainability.
          </p>

          <div className="mt-6">
            <Link
              href="https://github.com/juliusbasas69/Acadex"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-900 text-white hover:opacity-90 transition"
            >
              <FaGithub size={16} />
              GitHub
            </Link>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                Ongoing
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                Web
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                System Project
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[250px] md:h-[300px]">
          <Image
            src="/images/projects/images/pj-2.png"
            fill
            sizes="512px"
            alt="Acadex"
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function DetailsSection() {
  const techStack = {
    Frontend: ["Next.js"],
    Backend: ["Java", "Spring Boot"],
    Database: ["PostgreSQL"],
    Security: ["Spring Security", "JWT Authentication"],
    DevOps: ["Prometheus", "Grafana"],
    Messaging: [],
    Caching: ["Redis"],
    Tools: ["Git"],
    Payment: [],
  };

  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <section className="max-w-7xl w-full m-auto px-6 grid md:grid-cols-3 gap-10">
      {/* LEFT */}
      <div className="md:col-span-2">
        <h2 className="text-2xl font-semibold mb-4">
          ─── ✦ Project Details ✦ ───
        </h2>

        <p className="text-gray-600 mb-6">
          Acadex is a monolithic full-stack web application built using Next.js
          for the frontend and Spring Boot for the backend. It provides a
          centralized system for managing programming assignments, submissions,
          and grading workflows in an academic environment.
        </p>

        <h3 className="text-xl font-semibold mb-3">─── ✦ Key Features ✦ ───</h3>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Online code editor with compilation support</li>
          <li>Assignment submission and tracking system</li>
          <li>Professor dashboard for grading and review</li>
          <li>Secure authentication and role-based access control</li>
          <li>Redis caching for performance optimization</li>
          <li>System monitoring using Prometheus and Grafana</li>
        </ul>
      </div>

      {/* RIGHT */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">─── ✦ Tech Stack ✦ ───</h2>

        <div className="space-y-3 mb-6">
          {Object.entries(techStack)
            .filter(([_, items]) => items.length > 0)
            .map(([category, items]) => (
              <div
                key={category}
                className="shadow-md rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenCategory(openCategory === category ? null : category)
                  }
                  className="w-full flex justify-between text-sm items-center px-2 py-2 bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
                >
                  <span className="font-medium">{category}</span>
                  <span>{openCategory === category ? "−" : "+"}</span>
                </button>

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
          ─── ✦ Project Info ✦ ───
        </h2>

        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">Role:</span>
            <span>Full Stack Developer</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Type:</span>
            <span>Web Application</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Architecture:</span>
            <span>Monolithic</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Developed:</span>
            <span>2026</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Status:</span>
            <span className="text-yellow-600">Ongoing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
