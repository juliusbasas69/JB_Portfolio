"use client";

import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center justify-center bg-gradient-to-r from-[#F0F9FF] to-white py-16 sm:py-20 px-4 sm:px-6"
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center text-center lg:text-left">
          <div className="mb-8">
            <p className="text-sm tracking-widest text-[#1099de] font-semibold">
              GET IN TOUCH
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Contact Me
            </h2>
            <div className="w-16 h-1 bg-[#1099de] mx-auto lg:mx-0 mt-2 rounded-full"></div>
          </div>

          {/* IMAGE */}
          <div className="relative w-[250px] sm:w-[320px] lg:w-[400px] aspect-square">
            <Image
              src="/images/contactme-nobg.png"
              alt="Contact Me"
              fill
              sizes="(max-width: 768px) 250px, (max-width: 1024px) 320px, 400px"
              className="object-contain"
              priority
            />
          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex gap-3 sm:gap-4 mt-6">
            <Link
              href="https://www.facebook.com/profile.php?id=61577425559511"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-btn text-white hover:scale-110 transition"
            >
              <FaFacebookF size={18} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/julius-basas-2287a125a/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-btn text-white hover:scale-110 transition"
            >
              <FaLinkedinIn size={18} />
            </Link>

            <Link
              href="https://github.com/juliusbasas69"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-btn text-white hover:scale-110 transition"
            >
              <FaGithub size={18} />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4 w-full max-w-md px-2 sm:px-0">
          {/* PHONE */}
          <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg shadow-md">
            <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center shrink-0">
              <Phone size={18} />
            </div>

            <div className="text-sm">
              <p className="text-xs text-gray-400">Phone / Viber</p>
              <p className="font-medium text-gray-700">0994 927 3866</p>

              <p className="text-xs text-gray-400 mt-2">Phone / WhatsApp</p>
              <p className="font-medium text-gray-700">0932 356 9314</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg shadow-md">
            <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center shrink-0">
              <Mail size={18} />
            </div>

            <div className="text-sm break-words">
              <p className="text-xs text-gray-400">Main Email</p>
              <p className="font-medium text-gray-700">
                julius.basas69@gmail.com
              </p>

              <p className="text-xs text-gray-400 mt-2">Secondary Email</p>
              <p className="font-medium text-gray-700">jusbas0713@gmail.com</p>

              <p className="text-xs text-gray-400 mt-2">Other Email</p>
              <p className="font-medium text-gray-700">jusbas098@gmail.com</p>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg shadow-md">
            <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </div>

            <div className="text-sm">
              <p className="text-xs text-gray-400">Address</p>
              <p className="font-medium text-gray-700 leading-relaxed">
                St. Luke Street, Hipodromo, Cebu City, Cebu, 6000, Philippines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BOTTOM */}
      <footer className="bg-[#CDE9F6] py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#5EC3F5]">
            Let's Build Something Amazing Together
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-center">
            <button className="bg-btn hover:bg-blue-700 text-white py-3 px-6 rounded-full duration-300 hover:scale-105 transition text-center w-56">
              <FaEnvelope className="inline mr-2" />
              Email Me
            </button>

            <button className="border border-blue-500 text-sky-500 py-3 px-6 rounded-full hover:scale-105 transition duration-300 text-center w-56">
              <FaPhone className="inline mr-2" />
              Call Me
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
