"use client";

import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      name: "JB Portfolio",
      description:
        "An online store built with React, Next.js, and TailwindCSS.",
      tech: "React.js, Next.js, TailwindCSS, Firebase",
      image: "/images/project-ecommerce.png",
      badge: "Live",
    },
    {
      name: "Task Manager App",
      description: "A productivity app with task tracking and reminders.",
      tech: "React Native, Firebase, Redux",
      image: "/images/project-taskmanager.png",
      badge: "In Progress",
    },
    {
      name: "Portfolio Website",
      description: "My personal portfolio showcasing projects and skills.",
      tech: "Next.js, TailwindCSS",
      image: "/images/project-portfolio.png",
      badge: "Completed",
    },
    {
      name: "Blog Platform",
      description: "A full-stack blogging platform with authentication.",
      tech: "Spring Boot, Thymeleaf, PostgreSQL",
      image: "/images/project-blog.png",
      badge: "Live",
    },
    {
      name: "Weather App",
      description: "Displays real-time weather information based on location.",
      tech: "JavaScript, OpenWeather API, HTML, CSS",
      image: "/images/project-weather.png",
      badge: "Completed",
    },
  ];

  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {project.description}
                </p>
                <p className="text-gray-500 text-xs mb-4">{project.tech}</p>

                {/* Badge */}
                <span
                  className={`self-start px-3 py-1 text-xs font-medium rounded-full ${
                    project.badge === "Live"
                      ? "bg-green-100 text-green-800"
                      : project.badge === "In Progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {project.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
