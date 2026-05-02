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
      image: "/images/projects/images/pj-1.png",
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
      tech: "Next.js, Springboot, Java,",
      image: "/images/projects/images/pj-2.png",
      badges: [
        { label: "Ongoing", color: "bg-yellow-100 text-yellow-800" },
        { label: "Personal", color: "bg-purple-100 text-purple-800" },
      ],
      type: "web",
      slug: "jp-acadex",
    },
    {
      name: "BorrowWhen – Item Lending Platform",
      description:
        "Platform to lend and borrow items with payment integration.",
      tech: "Java, Spring Boot, JavaScript, HTML, Tailwind CSS, PostgreSQL, Stripe(Payment)",
      image: "/images/projects/images/pj-3.png",
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
      image: "/images/projects/images/pj-4.png",
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
      image: "/images/projects/images/pj-5.png",
      badges: [
        { label: "Completed", color: "bg-sky-100 text-sky-800" },
        { label: "Capstone", color: "bg-purple-100 text-purple-800" },
      ],
      type: "web",
      slug: "jp-spotselect",
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
    {
      name: "Enhanced Electrical Lamp with Smart Monitoring System",
      description:
        "A thesis-based Arduino project that automates lamp control and provides real-time monitoring of electrical usage, lamp status, and system performance.",
      tech: "Arduino, C++, Sensors, Relay Module, LCD, Electrical Wiring",
      image: "/images/projects/images/pj-7.png",
      badges: [
        { label: "Completed", color: "bg-sky-100 text-sky-800" },
        { label: "Thesis", color: "bg-purple-100 text-purple-800" },
      ],
      type: ["hardware", "iot"],
      slug: "jp-eel",
    },
    {
      name: "Secure Contactor Access Control System",
      description:
        "A hardware-based security and control system designed for safe activation of a 3-phase contactor using multi-factor authentication. The system ensures that electrical power can only be activated after successful password verification and registered fingerprint authentication. It also includes an admin mode for managing fingerprint access control.",
      tech: "Arduino Mega, SIM800L Module, Buck Converter, LED Display, Relay Module (4-pin), Latching Relay (8-pin), Contactor, Keypad (Arduino), Biometric Fingerprint Sensor, 3-phase MCB, Single RCBO, Buzzer, Push Button",
      image: "/images/projects/images/pj-8.png",
      badges: [
        { label: "Completed", color: "bg-sky-100 text-sky-800" },
        { label: "Thesis", color: "bg-purple-100 text-purple-800" },
      ],
      type: ["hardware", "iot"],
      slug: "jp-eel2",
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
        <p className="text-sm text-gray-500 text-center max-w-2xl mx-auto mb-10">
          Personal and academic projects built for learning and skill
          development. <br /> Projects from previous work experience are not
          included in this section.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="group flex"
            >
              <div
                className="
                  bg-white rounded-2xl shadow-md flex flex-col relative card
                  transition-all duration-300
                  group-hover:scale-[1.03]
                  group-hover:shadow-[0_8px_25px_rgba(59,130,246,0.35)]
                "
              >
                {/* Project Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="1080px"
                    className="object-cover rounded-t-2xl"
                  />
                </div>

                {/* Project Details */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    {/* Conditional Icons */}

                    {/* Project Name as Link */}
                    <span className="text-md">{project.name}</span>
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
                  <p className="text-blue-500 text-xs font-medium mb-8 cursor-pointer hover:text-blue-700 transition">
                    View tech stack →
                  </p>

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

                        {t === "hardware" && (
                          <>
                            <span>🔌</span>
                            <span>Hardware</span>
                          </>
                        )}

                        {t === "iot" && (
                          <>
                            <span>📡</span>
                            <span>IoT</span>
                          </>
                        )}

                        {index < arr.length - 1 && <span>&</span>}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-2 rounded-full bg-[#1099de] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#0e86c3] hover:shadow-xl active:scale-[0.98]"
          >
            View More Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
            {/* subtle glow */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-white transition"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
