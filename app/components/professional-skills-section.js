"use client";

import { useState } from "react";

export default function ProfessionalSkillsSection() {
  const skills = [
    {
      name: "Microservices Architecture",
      category: "Architecture",
      level: "Intermediate",
      tools: ["Spring Boot", "Docker", "Kafka", "Redis", "Spring Session"],
    },
    {
      name: "Web Development",
      category: "Development",
      level: "Advanced",
      tools: ["React", "Next.js", "Thymeleaf", "HTML", "CSS", "JavaScript"],
    },
    {
      name: "REST API Design",
      category: "Backend",
      level: "Advanced",
      tools: ["REST Principles", "HTTP Methods", "Status Codes", "API Design"],
    },
    {
      name: "System Design",
      category: "Architecture",
      level: "Intermediate",
      tools: ["Scalability", "Load Balancing", "Caching Strategies"],
    },
    {
      name: "Testing",
      category: "Quality",
      level: "Intermediate",
      tools: ["JUnit", "Postman", "Manual Testing"],
    },
    {
      name: "Code Review",
      category: "Quality",
      level: "Advanced",
      tools: ["GitHub PRs", "Best Practices", "Clean Code"],
    },
    {
      name: "Debugging",
      category: "Development",
      level: "Advanced",
      tools: ["DevTools", "Logging", "Breakpoints"],
    },
    {
      name: "CI/CD",
      category: "DevOps",
      level: "Beginner",
      tools: ["GitHub Actions", "Automated Build & Deploy"],
    },
    {
      name: "Monitoring & Observability",
      category: "DevOps",
      level: "Beginner",
      tools: ["Prometheus", "Grafana", "Logging"],
    },
    {
      name: "Technical Documentation",
      category: "Process",
      level: "Intermediate",
      tools: ["Swagger / OpenAPI", "API Documentation", "Markdown"],
    },
    {
      name: "UI / UX Documentation",
      category: "Process",
      level: "Intermediate",
      tools: ["UI Flows", "Wireframes", "Feature Guides"],
    },
    {
      name: "Agile / Scrum",
      category: "Process",
      level: "Intermediate",
      tools: ["Sprint Planning", "Jira", "Standups"],
    },
    {
      name: "Figma",
      category: "Process",
      level: "Intermediate",
      tools: ["UI Design", "Wireframes", "Prototyping"],
    },
    {
      name: "Caching",
      category: "Architecture",
      level: "Intermediate",
      tools: ["Redis", "Cache Strategies", "Performance Optimization"],
    },
    {
      name: "Authentication & Security",
      category: "Backend",
      level: "Intermediate",
      tools: ["JWT", "Spring Security", "RBAC", "API Security"],
    },
  ];

  const categories = [
    "All",
    "Architecture",
    "Development",
    "Backend",
    "Quality",
    "Process",
    "DevOps",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="w-full py-10 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
          Professional Skills
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium transition text-xs sm:text-sm md:text-base
              ${
                activeCategory === cat
                  ? "bg-btn text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                {skill.name}
              </h3>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{skill.category}</span>

                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  {skill.level}
                </span>
              </div>

              <div className="text-xs text-gray-500 mt-2 leading-relaxed">
                {skill.tools?.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
