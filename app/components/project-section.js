"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaAndroid, FaApple } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      name: "JB Portfolio",
      description:
        "A personal portfolio website showcasing projects and skills.",
      tech: "Next.js, TailwindCSS",
      image: "/images/projects/portfolio/jp-portfolio.png",
      badges: [
        { label: "Live", color: "bg-green-100 text-green-800" },
        { label: "Web", color: "bg-blue-100 text-blue-800" },
        { label: "Personal", color: "bg-purple-100 text-purple-800" },
      ],
      type: "web",
      slug: "jp-portfolio",
    },
    {
      name: "BorrowWhen – Item Lending Platform",
      description:
        "Platform to lend and borrow items with payment integration.",
      tech: "Java, Spring Boot, JavaScript, HTML, Tailwind CSS, PostgreSQL, Stripe(Payment)",
      image: "/images/projects/borrowhen/jp-borrowhen.png",
      badges: [
        { label: "Completed", color: "bg-sky-100 text-sky-800" },
        { label: "Web", color: "bg-blue-100 text-blue-800" },
        { label: "Capstone", color: "bg-purple-100 text-purple-800" },
      ],
      type: "web",
      slug: "jp-borrowhen",
    },
    {
      name: "FuturePath – Academic Guidance Platform",
      description:
        "Helps students plan their academic path and monitor progress.",
      tech: "Java, Spring Boot, JavaScript, HTML, Tailwind CSS, PostgreSQL",
      image: "/images/projects/futurepath/pr-futurepath.png",
      badges: [
        { label: "Completed", color: "bg-sky-100 text-sky-800" },
        { label: "Web", color: "bg-blue-100 text-blue-800" },
        { label: "Capstone", color: "bg-purple-100 text-purple-800" },
      ],
      type: "web",
      slug: "futurepath",
    },
    {
      name: "SPOTSelect – Project Proposal Platform",
      description:
        "A web platform for users to submit project proposals, get evaluated by Officers, Managers, and the TBI Board with feedback and notifications.",
      tech: "Java, Spring Boot, Thymeleaf, PostgreSQL",
      image: "/images/projects/spotselect/pr-spotselect.png",
      badges: [
        { label: "Completed", color: "bg-sky-100 text-sky-800" },
        { label: "Web", color: "bg-blue-100 text-blue-800" },
        { label: "Capstone", color: "bg-purple-100 text-purple-800" },
      ],
      type: "web",
      slug: "spotselect",
    },
    {
      name: "ServiceConnect – Service Booking Platform",
      description:
        "A web and mobile platform where users can book services from verified service providers. Each service provider has an employee account who can accept or reject bookings. Once accepted, the service is performed on-site (home or office), and the provider completes the booking and charges the user.",
      tech: "PHP, Laravel, Flutter, Dart, Firebase, MySQL, Google Maps API",
      image: "/images/projects/serviceconnect/pr-serviceconnect.png",
      badges: [
        { label: "Completed", color: "bg-sky-100 text-sky-800" },
        { label: "Web", color: "bg-blue-100 text-blue-800" },
        { label: "Android", color: "bg-green-100 text-green-800" },
        { label: "My Capstone", color: "bg-purple-100 text-purple-800" },
      ],
      type: ["web", "android"], // updated type to array
      slug: "serviceconnect",
    },
  ];

  return (
    <section id="project" className="w-full py-12 px-6">
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  {/* Conditional Icons */}
                  {Array.isArray(project.type) ? (
                    project.type.map((t) => {
                      if (t === "web")
                        return <FaGlobe key="web" className="text-blue-500" />;
                      if (t === "android")
                        return (
                          <FaAndroid key="android" className="text-green-500" />
                        );
                      if (t === "ios")
                        return <FaApple key="ios" className="text-gray-800" />;
                    })
                  ) : project.type === "web" ? (
                    <FaGlobe className="text-blue-500" />
                  ) : project.type === "android" ? (
                    <FaAndroid className="text-green-500" />
                  ) : project.type === "ios" ? (
                    <FaApple className="text-gray-800" />
                  ) : null}

                  {/* Project Name as Link */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:underline"
                  >
                    {project.name}
                  </Link>
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {project.description.length > 100
                    ? project.description.slice(0, 100) + "..."
                    : project.description}
                </p>
                <p className="text-gray-500 text-xs mb-4">{project.tech}</p>

                {/* Badge */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.badges?.map((badge, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
