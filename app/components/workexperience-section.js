"use client";

import { Briefcase, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ExperienceSection() {
  const workExperience = [
    {
      avatar: "/images/robot-freelance.png",
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      month: "Present",
      duration: "Ongoing",
      role: "Full Stack Developer",
      responsibility:
        "Develop and maintain full-stack applications for clients, implementing features and ensuring performance and security.",
      techstack:
        "Springboot, Java, Javascript, HTML, CSS, Thymeleaf, Tailwind CSS, Stripe, SMTP",
      contributions: [
        "Developed the entire project from scratch, including frontend and backend",
      ],
      learned: [
        "Continuously learned new technologies and best practices",
        "Maintained clean, readable, and maintainable code",
      ],
      projects: ["FuturePath", "SpotSelect", "Borrowhen", "ServiceConnect"],
    },
    {
      avatar: "/images/robot-student.png",
      title: "Student Trainee",
      company: "Alliance Software Inc.",
      month: "Feb 2024 - Jun 2024",
      duration: "4 Months",
      role: "Student Trainee",
      responsibility: "Assist in web application development and testing.",
      techstack: "ASP.NET MVC, C#, Microsoft SQL",
      contributions: [
        "Developed the Hotel Booking System end-to-end using ASP.NET MVC and C#",
        "Collaborated with team members for frontend/design support",
      ],
      learned: [
        "Gained hands-on experience in the fundamentals of C# and ASP.NET",
        "Applied programming concepts in real-world application development",
        "Enhanced problem-solving and debugging skills",
        "Learned to work collaboratively in a team environment",
      ],
      projects: ["Hotel Booking System"],
    },
    {
      avatar: "/images/robot-intern.png",
      title: "Intern | Full Stack Developer",
      company: "Fullscale Inc.",
      month: "Feb 2025 - Jun 2025",
      duration: "4 Months",
      role: "Intern Developer",
      responsibility:
        "Support full-stack development projects and complete assigned tasks.",
      techstack: "Next.js, C#, ASP.NET, Microsoft SQL",
      contributions: [
        "Completed assigned development tasks using C# and Next.js",
        "Assisted in bug fixes and code maintenance",
        "Collaborated with team members on project updates",
      ],
      learned: [
        "Hands-on experience with C# and Next.js in real-world projects",
        "Applied coding standards for readability and maintainability",
        "Enhanced Git skills: branching, cherry-picking, conflict resolution",
        "Improved problem-solving by understanding and fixing existing code",
      ],
      projects: ["Task management app"],
    },
    {
      avatar: "/images/robot-developer.png",
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
        "Built core functionalities in BC Workflow (50% of functions) and Cyzennt Workflow (60% of functions)",
        "Performed unit testing, integration testing, and functional testing to ensure reliability",
        "Prepared project documentation for code, modules, and workflows",
        "Among the first batch of developers hired, contributing to the foundation of company projects",
        "Developed scalable and high-performance backend functionalities",
        "Trained and supported new coworkers to help them adapt to workflows and tools",
      ],
      learned: [
        "Learned Spring Boot MVC from scratch and applied it in real projects",
        "Improved backend and frontend integration skills",
        "Gained experience in project leadership and code optimization",
        "Enhanced mentoring and team collaboration abilities",
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
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-md w-full box">
                      <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center">
                        <Briefcase size={24} />
                      </div>

                      <div>
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
