"use client";

import { useState } from "react";

export default function ProfessionalSkillsSection() {
  const skills = [
    {
      name: "Microservices",
      category: "Architecture",
      level: "Intermediate",
      tools: ["Spring Boot", "REST API", "Docker", "Kafka"],
    },
    {
      name: "Web Development",
      category: "Development",
      level: "Advanced",
      tools: ["React", "Next.js", "Thymeleaf", "HTML", "CSS", "JavaScript"],
    },
    {
      name: "Testing",
      category: "Quality",
      level: "Intermediate",
      tools: ["JUnit", "Postman", "Manual Testing"],
    },
    {
      name: "Technical Documentation",
      category: "Process",
      level: "Intermediate",
      tools: ["Swagger/OpenAPI", "Markdown", "API Specs"],
    },
    {
      name: "UI / Screen Documentation",
      category: "Process",
      level: "Intermediate",
      tools: ["UI Flows", "Feature Guides", "Screenshots"],
    },
    {
      name: "REST API Design",
      category: "Backend",
      level: "Advanced",
      tools: ["Spring Boot", "Node.js", "Express", "HTTP Standards"],
    },
    {
      name: "System Design",
      category: "Architecture",
      level: "Intermediate",
      tools: ["Scalability Patterns", "Load Balancing", "Caching Concepts"],
    },
    {
      name: "Agile / Scrum",
      category: "Process",
      level: "Intermediate",
      tools: ["Sprint Planning", "Jira", "Standups"],
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
      tools: ["DevTools", "Logs Analysis", "Breakpoints"],
    },
    {
      name: "CI/CD",
      category: "DevOps",
      level: "Beginner",
      tools: ["GitHub Actions", "Automated Build & Deploy"],
    },
    {
      name: "Monitoring",
      category: "DevOps",
      level: "Beginner",
      tools: [
        "Prometheus",
        "Grafana",
        "Logging",
        "Basic Observability Concepts",
      ],
    },
    {
      name: "Swagger / OpenAPI",
      category: "Quality",
      level: "Intermediate",
      tools: ["API Documentation", "Endpoint Testing"],
    },
    {
      name: "Figma",
      category: "Process",
      level: "Intermediate",
      tools: ["UI Design", "Wireframes", "Prototypes"],
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

              <div className="text-xs text-gray-500 mt-2">
                {skill.tools?.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
