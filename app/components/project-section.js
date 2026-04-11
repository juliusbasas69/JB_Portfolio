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
        { label: "Personal", color: "bg-purple-100 text-purple-800" },
      ],
      type: "web",
      slug: "jp-portfolio",
    },
    {
      name: "Acadex",
      description:
        "Acadex is a web-based platform for managing programming assignments with built-in code compilation. Key Features: Online code editor with integrated compiler Assignment submission and tracking Professor dashboard for reviewing and grading Secure user authentication Organized academic workflow managements",
      tech: "Next.js, Springboot, Java, Microservices,",
      image: "/images/no-image.png",
      badges: [
        { label: "Ongoing", color: "bg-yellow-100 text-yellow-800" },
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
      image: "/images/projects/futurepath/jp-futurepath.png",
      badges: [
        { label: "Completed", color: "bg-sky-100 text-sky-800" },
        { label: "Capstone", color: "bg-purple-100 text-purple-800" },
      ],
      type: "web",
      slug: "jp-futurepath",
    },
    {
      name: "SPOTSelect – Project Proposal Platform",
      description:
        "A web platform for users to submit project proposals, get evaluated by Officers, Managers, and the TBI Board with feedback and notifications.",
      tech: "Java, Spring Boot, JavaScript, HTML, CSS, Thymeleaf, PostgreSQL",
      image: "/images/no-image.png",
      badges: [
        { label: "Completed", color: "bg-sky-100 text-sky-800" },
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
      image: "/images/no-image.png",
      badges: [
        { label: "Completed", color: "bg-sky-100 text-sky-800" },
        { label: "My Capstone", color: "bg-purple-100 text-purple-800" },
      ],
      type: ["web", "android"], // updated type to array
      slug: "serviceconnect",
    },
  ];

  return (
    <section id="project" className="w-full py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800  text-center flex items-center justify-center gap-1">
          My Projects
          <span className="bg-yellow-200 text-yellow-900 text-[10px] px-1.5 py-0.5 rounded-full font-medium">
            Updating
          </span>
        </h2>
        <p className="text-sm text-gray-500 text-center max-w-2xl mx-auto mb-10 ">
          Personal, academic, and freelance projects built for clients and skill
          development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md flex flex-col relative card"
            >
              {/* Project Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  {/* Conditional Icons */}

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
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.badges?.map((badge, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mb-8">{project.tech}</p>

                <span className="banner text-white px-4 flex flex-row gap-2 items-center justify-center text-sm">
                  {(Array.isArray(project.type)
                    ? project.type
                    : [project.type]
                  ).map((t, index, arr) => (
                    <span key={t} className="flex items-center gap-1">
                      {t === "web" && (
                        <>
                          <FaGlobe />
                          <span>Website</span>
                        </>
                      )}

                      {t === "android" && (
                        <>
                          <FaAndroid className="text-green-400" />
                          <span>Android</span>
                        </>
                      )}

                      {t === "ios" && (
                        <>
                          <FaApple />
                          <span>iOS</span>
                        </>
                      )}

                      {index < arr.length - 1 && <span>&</span>}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
