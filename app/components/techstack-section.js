"use client";

import { useState } from "react";
import Image from "next/image";

export default function TechStackSection() {
  const techStacks = [
    {
      name: "JavaScript",
      category: "Language",
      logo: "/images/logo/logo-javascript.png",
      years: "3 yrs",
    },
    {
      name: "HTML",
      category: "Language",
      logo: "/images/logo/logo-html.png",
      years: "3 yrs",
    },
    {
      name: "CSS",
      category: "Language",
      logo: "/images/logo/logo-css.png",
      years: "3 yrs",
    },
    {
      name: "Dart",
      category: "Language",
      logo: "/images/logo/logo-dart.png",
    },
    {
      name: "Lua",
      category: "Language",
      logo: "/images/logo/logo-lua.png",
    },
    {
      name: "Python",
      category: "Language",
      logo: "/images/logo/logo-python.png",
    },
    {
      name: "Typescript",
      category: "Language",
      logo: "/images/logo/logo-typescript.png",
    },

    {
      name: "React.js",
      category: "Frontend",
      logo: "/images/logo/logo-reactjs.png",
    },
    {
      name: "Next.js",
      category: "Frontend",
      logo: "/images/logo/logo-nextjs.png",
      years: "1 yr",
    },
    {
      name: "TailwindCSS",
      category: "Frontend",
      logo: "/images/logo/logo-tailwindcss.png",
      years: "1 yr",
    },

    {
      name: "Flutter",
      category: "Frontend",
      logo: "/images/logo/logo-flutter.png",
    },

    {
      name: "PHP",
      category: "Backend",
      logo: "/images/logo/logo-php.png",
    },
    {
      name: "Laravel",
      category: "Backend",
      logo: "/images/logo/logo-laravel.png",
    },
    {
      name: "ASP.NET",
      category: "Backend",
      logo: "/images/logo/logo-aspnet.png",
      years: "1 yr",
    },
    {
      name: "Spring Boot",
      category: "Backend",
      logo: "/images/logo/logo-springboot.png",
      years: "3 yrs",
    },
    {
      name: "Thymeleaf",
      category: "Backend",
      logo: "/images/logo/logo-thymeleaf.png",
      years: "3 yrs",
    },

    {
      name: "C#",
      category: "Language",
      logo: "/images/logo/logo-csharp.png",
      years: "1 yr",
    },
    {
      name: "Java",
      category: "Language",
      logo: "/images/logo/logo-java.png",
      years: "3 yrs",
    },

    {
      name: "PostgreSQL",
      category: "Database",
      logo: "/images/logo/logo-postgresql.png",
      years: "3 yrs",
    },
    {
      name: "MySQL",
      category: "Database",
      logo: "/images/logo/logo-mysql.png",
      years: "1 yr",
    },
    {
      name: "Microsoft Server SQL",
      category: "Database",
      logo: "/images/logo/logo-mssql.png",
      years: "1 yr",
    },

    {
      name: "Redis",
      category: "Caching",
      logo: "/images/logo/logo-redis.png",
    },

    {
      name: "Firebase",
      category: "Cloud",
      logo: "/images/logo/logo-firebase.png",
      years: "1 yr",
    },

    {
      name: "JUnit",
      category: "Testing",
      logo: "/images/logo/logo-junit.png",
      years: "3 yrs",
    },
    {
      name: "GitHub",
      category: "Tools",
      logo: "/images/logo/logo-github.png",
      years: "3 yrs",
    },
    {
      name: "Tortoise Git",
      category: "Tools",
      logo: "/images/logo/logo-tortoisegit.png",
      years: "3 yrs",
    },
    {
      name: "VS Code",
      category: "Tools",
      logo: "/images/logo/logo-vscode.png",
      years: "1 yr",
    },
    {
      name: "Eclipse IDE",
      category: "Tools",
      logo: "/images/logo/logo-eclipseide.png",
      years: "3 yrs",
    },
    {
      name: "Postman",
      category: "Tools",
      logo: "/images/logo/logo-postman.png",
      years: "1 yr",
    },
    {
      name: "Docker",
      category: "Tools",
      logo: "/images/logo/logo-docker.png",
    },
    {
      name: "Figma",
      category: "Tools",
      logo: "/images/logo/logo-figma.png",
      years: "3 yrs",
    },
    {
      name: "pgAdmin",
      category: "Tools",
      logo: "/images/logo/logo-pgadmin.png",
      years: "3 yrs",
    },
    {
      name: "Grafana",
      category: "Monitoring",
      logo: "/images/logo/logo-grafana.png",
    },
    {
      name: "Prometheus",
      category: "Monitoring",
      logo: "/images/logo/logo-prometheus.png",
    },
    {
      name: "Kafka",
      category: "Backend",
      logo: "/images/logo/logo-kafka.png",
    },
  ];

  const categories = [
    "All",
    "Language",
    "Frontend",
    "Backend",
    "Database",
    "Caching",
    "Cloud",
    "Testing",
    "Tools",
    "Monitoring",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStacks =
    activeCategory === "All"
      ? techStacks
      : techStacks.filter((tech) => tech.category === activeCategory);

  return (
    <section className="w-full py-10 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
          My Tech Stacks
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 flex-wrap">
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

        {/* Legend */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-8 text-xs sm:text-sm text-gray-500 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span>With year — Used in actual work</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="w-3 h-3 border-2 border-gray-400 rounded-full"></span>
            <span>No year — Used but not in actual work</span>
          </div>
        </div>

        {/* Grid */}
        <div
          className="
          grid
          grid-cols-3
          sm:grid-cols-4
          md:grid-cols-5
          lg:grid-cols-6
          xl:grid-cols-7
          gap-5 sm:gap-6 md:gap-8
          justify-items-center
        "
        >
          {filteredStacks.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 relative"
            >
              {/* Year Badge */}
              {tech.years && (
                <div className="absolute -top-2 -right-2 bg-btn text-white text-[10px] sm:text-xs px-2 py-1 rounded-full shadow z-10">
                  {tech.years}
                </div>
              )}

              {/* Logo */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                <Image
                  src="/images/circle-bg.png"
                  alt="circle background"
                  fill
                  className="object-contain"
                />

                <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3 md:p-4">
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
              <span className="text-gray-800 font-medium text-center text-xs sm:text-sm md:text-base">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
