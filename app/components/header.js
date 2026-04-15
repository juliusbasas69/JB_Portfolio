"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `relative transition ${
      pathname === path ? "text-[#1099de] font-medium" : "hover:text-[#1099de]"
    }`;

  return (
    <div className="w-full bg-sky-50">
      <header className="flex flex-row justify-between p-4 max-w-7xl mx-auto w-full">
        {/* Logo / Name */}
        <div className="text-xl font-semibold flex overflow-hidden rounded-lg">
          <span className="bg-blue-400 text-white px-2 py-0.5 text-sm flex items-center">
            J · B
          </span>

          <span className="bg-blue-100 text-blue-900 px-2 py-0.5 text-sm flex items-center gap-2">
            Portfolio
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className={linkClass("/")}>
            Home
            {pathname === "/" && (
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#1099de] rounded-full" />
            )}
          </Link>

          <Link href="/projects" className={linkClass("/projects")}>
            Projects
            {pathname === "/projects" && (
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#1099de] rounded-full" />
            )}
          </Link>

          <Link href="/tech-journal" className={linkClass("/tech-journal")}>
            Tech Journal
            {pathname === "/tech-journal" && (
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#1099de] rounded-full" />
            )}
          </Link>

          <Link
            href="#contact"
            className="bg-btn text-white px-4 py-2 rounded-full hover:bg-blue-700 flex items-center gap-2 hover:scale-105 transition"
          >
            Hire Me <HiArrowRight className="w-5 h-5" />
          </Link>
        </nav>
      </header>
    </div>
  );
}
