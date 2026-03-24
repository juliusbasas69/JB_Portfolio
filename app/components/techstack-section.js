"use client";

import { useState } from "react";
import Image from "next/image";

export default function TechStackSection() {
  // Tech stacks with categories and logo images
  const techStacks = [
    {
      name: "JavaScript",
      category: "Framework",
      logo: "/images/logo-javascript.png",
    },
    {
      name: "HTML",
      category: "Framework",
      logo: "/images/logo-html.png",
    },
    {
      name: "CSS",
      category: "Framework",
      logo: "/images/logo-css.png",
    },
    {
      name: "PostgreSQL",
      category: "Databases",
      logo: "/images/logo-postgresql.png",
    },
    { name: "Firebase", category: "Cloud", logo: "/images/logo-firebase.png" },
    {
      name: "C#",
      category: "Programming Language",
      logo: "/images/logo-csharp.png",
    },
    {
      name: "Java",
      category: "Programming Language",
      logo: "/images/logo-java.png",
    },
  ];

  const categories = [
    "All",
    "Databases",
    "Cloud",
    "Framework",
    "Programming Language",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Filter stacks based on selected category
  const filteredStacks =
    activeCategory === "All"
      ? techStacks
      : techStacks.filter(
          (tech) =>
            tech.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          My Tech Stacks
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full font-medium transition duration-300
                ${
                  activeCategory === cat
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-blue-200"
                }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Stack Display */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {filteredStacks.map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              {/* Logo */}
              <div className="relative w-24 h-24">
                {/* Circle Background (already circular image) */}
                <Image
                  src="/images/circle-bg.png"
                  alt="circle background"
                  fill
                  className="object-contain"
                />

                {/* Logo */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-contain"
                    sizes="256px"
                  />
                </div>
              </div>
              {/* Title */}
              <span className="text-gray-800 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
