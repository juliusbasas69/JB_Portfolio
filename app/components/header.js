import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default function Header() {
  return (
    <div className="w-full bg-sky-50">
      <header className="flex flex-row justify-between p-4 max-w-7xl mx-auto w-full">
        {/* Logo / Name */}
        <div className="text-xl font-semibold flex overflow-hidden rounded-lg">
          <span className="bg-blue-600 text-white px-2 py-0.5 text-sm flex items-center">
            J · B
          </span>
          <span className="bg-blue-300 text-blue-900 px-2 py-0.5 text-sm flex items-center">
            Portfolio
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link href="#intro" className="hover:text-blue-600 transition">
            Intro
          </Link>
          <Link href="#about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="#project" className="hover:text-blue-600 transition">
            Project
          </Link>
          <Link href="#contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

          <Link
            href="#hire"
            className="bg-btn text-white px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-2"
          >
            Hire Me <HiArrowRight className="w-5 h-5" />
          </Link>
        </nav>
      </header>
    </div>
  );
}
