"use client";

import { useState } from "react";

export default function ProfessionalSkillsSection() {
  const skills = [
    { name: "Microservices", category: "Architecture", level: "Intermediate" },
    { name: "Web Development", category: "Development", level: "Advanced" },
    { name: "Testing", category: "Quality", level: "Intermediate" },
    { name: "Documentation", category: "Process", level: "Intermediate" },
    { name: "REST API Design", category: "Backend", level: "Advanced" },
    { name: "System Design", category: "Architecture", level: "Intermediate" },
    { name: "Agile / Scrum", category: "Process", level: "Intermediate" },
    { name: "Code Review", category: "Quality", level: "Advanced" },
    { name: "Debugging", category: "Development", level: "Advanced" },
    { name: "CI/CD", category: "DevOps", level: "Beginner" },
    { name: "Monitoring", category: "DevOps", level: "Beginner" },
  ];

  const categories = [
    "All",
    "Architecture",
    "Development",
    "Quality",
    "Process",
    "Backend",
    "DevOps",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="w-full py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Professional Skills
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full font-medium transition cursor-pointer
              ${
                activeCategory === cat
                  ? "bg-btn text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-200"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-800 mb-2">{skill.name}</h3>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{skill.category}</span>

                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
