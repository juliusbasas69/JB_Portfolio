"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Tech Journal", path: "/tech-journal" },
  ];

  const linkClass = (path) =>
    `relative transition duration-200 ${
      pathname === path
        ? "text-[#1099de] font-semibold"
        : "text-slate-700 hover:text-[#1099de]"
    }`;

  return (
    <div className="w-full bg-sky-50 border-b border-sky-100 sticky top-0 z-50 backdrop-blur-md">
      <header className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold flex overflow-hidden rounded-xl shadow-sm"
        >
          <span className="bg-blue-500 text-white px-3 py-1 text-sm flex items-center">
            J · B
          </span>

          <span className="bg-blue-100 text-blue-900 px-3 py-1 text-sm flex items-center">
            Portfolio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={linkClass(item.path)}
            >
              {item.name}

              {pathname === item.path && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#1099de] rounded-full" />
              )}
            </Link>
          ))}

          <Link
            href="#contact"
            className="bg-btn text-white px-5 py-2 rounded-full hover:scale-105 hover:shadow-md transition flex items-center gap-2"
          >
            Hire Me
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-slate-700"
        >
          {menuOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-6 bg-sky-50 border-t border-sky-100 flex flex-col items-center text-center">
          <nav className="flex flex-col gap-4 pt-4 text-sm font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={linkClass(item.path)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-btn text-white px-4 py-2 rounded-full flex items-center justify-center gap-2"
            >
              Hire Me
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
