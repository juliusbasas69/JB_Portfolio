import Image from "next/image";
import ScreenshotsSection from "./components/screenshots-section";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function BorrowhenPage() {
  return (
    <div>
      <div className="w-full py-12 bg-sky-50">
        <HeroSection />
        <DetailsSection />
      </div>
      <div>
        <ScreenshotsSection />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="max-w-7xl w-full m-auto px-6 mb-16 ">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            BorrowWhen – Item Lending Platform
          </h1>

          <p className="text-gray-600">
            BorrowWhen is a platform that allows users to lend and borrow items
            securely with built-in payment integration. It supports item
            listing, booking, approval workflows, and notifications to
            streamline the borrowing experience.
          </p>

          <p className="text-gray-500 mt-2 italic text-sm">
            This project was completed as a capstone and is available for
            reference in my GitHub repository.
          </p>

          {/* GitHub */}
          <div className="mt-6">
            <Link
              href="https://github.com/sajstartup-design/BorrowWhen"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-900 text-white hover:opacity-90 transition"
            >
              <FaGithub size={16} />
              GitHub
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                Completed
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                Web
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                Capstone
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[250px] md:h-[300px]">
          <Image
            src="/images/jp_borrowhen/jp-borrowhen.png"
            fill
            sizes="512px"
            preload={true}
            alt="BorrowWhen Landing Page"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function DetailsSection() {
  return (
    <section className="max-w-7xl w-full m-auto px-6 grid md:grid-cols-3 gap-10">
      {/* Left */}
      <div className="md:col-span-2">
        <h2 className="text-2xl font-semibold mb-4">Project Details</h2>

        <p className="text-gray-600 mb-6">
          The system allows users to browse available items, request borrowing,
          and manage lending transactions. It includes role-based access for
          borrowers, lenders, and administrators. Stripe integration enables
          secure payment handling, while PostgreSQL ensures reliable data
          storage.
        </p>

        <h3 className="text-xl font-semibold mb-3">Key Features</h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Item lending and borrowing workflow</li>
          <li>Stripe payment integration</li>
          <li>User authentication and authorization</li>
          <li>Approval and request management</li>
          <li>Notifications and status tracking</li>
          <li>Excel export of reports and data</li>
        </ul>
      </div>

      {/* Right */}
      {/* Right Column */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>

        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "Stripe",
            "SMTP",
            "Thymeleaf",
            "TailwindCSS",
            "JavaScript",
            "HTML",
            "CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Project Info</h2>

        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Role:</span>
            <span>Full Stack Developer</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Type:</span>
            <span>Web Application</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Status:</span>
            <span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                Defended
              </span>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Availability:</span>
            <span className="italic text-gray-500">
              Reference only (GitHub)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
