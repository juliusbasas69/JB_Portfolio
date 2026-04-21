"use client";

import { Briefcase, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ExperienceSection() {
  const workExperience = [
    {
      avatar: "/images/robot-freelance.png",
      logo: "/images/logo/freelancer.png",
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      month: "Present",
      duration: "Ongoing",
      role: "Full Stack Developer",
      responsibility:
        "Develop and maintain full-stack web applications for clients, implementing end-to-end features with focus on performance, security, and usability.",
      techstack:
        "Spring Boot, Java, JavaScript, HTML, CSS, Thymeleaf, Tailwind CSS, Stripe, SMTP",
      contributions: [
        "Built and delivered full-stack applications from scratch, handling both frontend UI and backend API development",
        "Implemented secure payment and email functionalities using Stripe and SMTP integrations",
        "Designed and developed reusable components and backend services to support scalable application features",
      ],
      learned: [
        "Applied modern full-stack development practices across multiple client projects",
        "Maintained clean and modular code structure to support scalability and maintainability",
      ],
      projects: ["FuturePath", "SpotSelect", "Borrowhen", "ServiceConnect"],
    },
    {
      avatar: "/images/robot-student.png",
      logo: "/images/logo/alliance.png",
      title: "Student Trainee",
      company: "Alliance Software Inc.",
      month: "Feb 2024 - Jun 2024",
      duration: "4 Months",
      role: "Student Trainee",
      responsibility: "Assist in web application development and testing.",
      techstack: "ASP.NET MVC, C#, Microsoft SQL",
      contributions: [
        "Developed an end-to-end Hotel Booking System using ASP.NET MVC and C#, enabling streamlined booking and user management processes",
        "Collaborated with frontend and design team members, improving UI consistency and overall user experience",
        "Contributed to backend development and system integration, supporting smooth feature functionality across the application",
      ],
      learned: [
        "Applied C# and ASP.NET fundamentals in building real-world web application features",
        "Translated programming concepts into functional components within an ASP.NET MVC system",
        "Strengthened debugging and problem-solving skills by resolving development and testing issues",
        "Collaborated in a team environment, contributing to shared development tasks and feature delivery",
      ],
      projects: ["Hotel Booking System"],
    },
    {
      avatar: "/images/robot-intern.png",
      logo: "/images/logo/fullscale.png",
      title: "Intern | Full Stack Developer",
      company: "Fullscale Inc.",
      month: "Feb 2025 - Jun 2025",
      duration: "4 Months",
      role: "Intern Developer",
      responsibility:
        "Support full-stack development projects and complete assigned tasks.",
      techstack: "Next.js, C#, ASP.NET, Microsoft SQL",
      contributions: [
        "Delivered backend and frontend features using C# and Next.js, supporting timely completion of sprint goals and improving feature rollout consistency",
        "Diagnosed and resolved bugs across the application, improving system stability and reducing recurring issues during testing cycles",
        "Collaborated with cross-functional team members to align on project updates, ensuring smoother development workflow and on-time task delivery",
        "Contributed to real-world application development using C# and Next.js, strengthening end-to-end feature implementation from backend to UI",
      ],
      learned: [
        "Applied C# and Next.js in real-world development tasks, contributing to functional web application features",
        "Followed coding standards to improve code readability, maintainability, and team collaboration",
        "Used advanced Git workflows (branching, cherry-picking, conflict resolution) to manage and integrate code changes efficiently",
        "Strengthened problem-solving skills by analyzing, debugging, and improving existing application code",
      ],
      projects: ["Task management app"],
    },
    {
      avatar: "/images/robot-developer.png",
      logo: "/images/logo/bridgeculture.png",
      title: "Full Stack Developer",
      company: "BridgeCulture Inc.",
      month: "Feb 2023 - Feb 2026",
      duration: "3 Years",
      role: "Full Stack Developer",
      responsibility:
        "Develop and maintain web applications, contribute to core functionalities, and ensure code quality through testing and documentation.",
      techstack:
        "Spring Boot (MVC), Java, Javascript, HTML, CSS, PostgreSQL, Thymeleaf, Tailwind CSS",
      contributions: [
        "Developed ~50–60% of core features for BC Workflow and Cyzennt Workflow, contributing directly to system functionality and deployment readiness",
        "Implemented unit, integration, and functional testing, improving system reliability and reducing defects before release",
        "Created and maintained technical documentation for code, modules, and workflows, improving knowledge transfer and onboarding efficiency",
        "Mentored and supported new team members, accelerating onboarding and improving team productivity",
        "Optimized code and contributed to technical decisionmaking, improving maintainability and overall code quality",
        "Collaborated closely with the team in an agile environment, ensuring consistent progress and alignment on project goals",
      ],
      learned: [
        "Built and applied Spring Boot MVC applications in real project environments, implementing backend features and business logic",
        "Integrated backend services with frontend interfaces to support seamless application functionality",
        "Contributed to code optimization and structural improvements, enhancing maintainability and performance",
        "Supported team development through collaboration and mentoring on workflows and implementation practices",
      ],
      projects: ["Preschool Project", "BC Workflow (Live)", "Cyzennt Workflow"],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-10 w-full py-16 px-6 bg-gradient-to-r from-white to-[#F0F9FF]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div className="flex flex-col items-center w-200">
          <div className="space-y-6 w-full">
            <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
            {workExperience.map((work, i) => (
              <div key={i} className="w-full">
                <div className="flex flex-row items-center">
                  <div className="relative w-24 h-24">
                    <Image
                      src={work.avatar ?? "/images/no-image.png"} // Make sure this path is correct in /public/images/
                      alt="Robot"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-row gap-5 items-center w-full">
                    <div className="flex items-center gap-4 p-1 bg-gray-50 rounded-lg shadow-md w-full box bg-white">
                      <div className="w-24 h-24 bg-white flex items-center justify-center relative">
                        <Image
                          src={work.logo ?? "/images/no-image.png"}
                          alt={work.company}
                          fill
                          sizes="256px"
                          className="object-contain"
                        />
                      </div>

                      <div class="py-3">
                        <p className="text-xs text-gray-400">{work.month}</p>
                        <h4 className="text-lg font-semibold text-gray-800">
                          {work.title}
                        </h4>
                        <p className="text-sm text-gray-500">{work.company}</p>
                      </div>

                      <div className="ribbon ribbon-top-right">
                        <span>{work.duration}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggle(i)}
                      className="w-10 h-10 m-3 flex items-center justify-center rounded-full bg-btn text-white shadow-md hover:scale-105 transition cursor-pointer"
                    >
                      <ArrowDown
                        size={18}
                        className={`transition-transform ${
                          openIndex === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {openIndex === i && (
                  <div className="mt-3 p-4 bg-white border border-gray-300 shadow-md rounded-lg shadow-sm animate-fadeIn flex flex-col gap-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src="/images/robot_2.png" // Make sure this path is correct in /public/images/
                        alt="Robot"
                        fill
                        className="object-contain"
                      />
                    </div>
                    {/* Role / Title */}
                    <h4 className="text-lg font-semibold text-gray-800">
                      {work.role}
                    </h4>

                    {/* Details */}
                    <p className="text-sm text-gray-600">
                      {work.responsibility}
                    </p>

                    {/* Tech Stack badges */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {work.techstack.split(", ").map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Contributions */}
                    {work.contributions?.length > 0 && (
                      <div className="mt-2">
                        <h5 className="text-sm font-semibold text-gray-700">
                          Contributions:
                        </h5>
                        <ul className="list-disc list-inside text-gray-600 text-sm">
                          {work.contributions.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Learned */}
                    {work.learned?.length > 0 && (
                      <div className="mt-2">
                        <h5 className="text-sm font-semibold text-gray-700">
                          Learned:
                        </h5>
                        <ul className="list-disc list-inside text-gray-600 text-sm">
                          {work.learned.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Projects */}
                    {work.projects?.length > 0 && (
                      <div className="mt-2">
                        <h5 className="text-sm font-semibold text-gray-700">
                          Projects:
                        </h5>
                        <ul className="list-disc list-inside text-gray-600 text-sm">
                          {work.projects.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
