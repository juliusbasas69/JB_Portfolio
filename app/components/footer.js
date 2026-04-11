import { FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section
        id="contact"
        className="flex gap-12 items-center justify-center bg-gradient-to-r from-[#F0F9FF] to-white py-20"
      >
        {" "}
        {/* LEFT */}
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <p className="text-sm tracking-widest text-[#1099de] font-semibold">
              GET IN TOUCH
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Contact Me
            </h2>
            <div className="w-16 h-1 bg-[#1099de] mx-auto mt-2 rounded-full"></div>
          </div>
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/images/contactme-nobg.png"
              alt="Contact Me"
              fill
              sizes="512px"
              className="object-contain"
              preload={true}
            />
          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex gap-4 mt-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61577425559511"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-btn text-white border-2 border-white hover:scale-110 transition"
            >
              <FaFacebookF size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/julius-basas-2287a125a/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-btn text-white border-2 border-white hover:scale-110 transition"
            >
              <FaLinkedinIn size={20} />
            </Link>

            <Link
              href="https://github.com/juliusbasas69"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-btn text-white border-2 border-white hover:scale-110 transition"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex flex-col gap-4 w-full max-w-md">
          {/* Phone */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md">
            <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center shrink-0">
              <Phone size={18} />
            </div>

            <div className="text-sm">
              <div>
                <p className="text-xs text-gray-400">Phone / Viber</p>
                <p className="font-medium text-gray-700">0994 927 3866</p>
              </div>

              <div className="mt-2">
                <p className="text-xs text-gray-400">Phone / WhatsApp</p>
                <p className="font-medium text-gray-700">0932 356 9314</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md">
            <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center shrink-0">
              <Mail size={18} />
            </div>

            <div className="text-sm">
              <div>
                <p className="text-xs text-gray-400">Main Email</p>
                <p className="font-medium text-gray-700">
                  julius.basas69@gmail.com
                </p>
              </div>

              <div className="mt-2">
                <p className="text-xs text-gray-400">Secondary Email</p>
                <p className="font-medium text-gray-700">
                  jusbas0713@gmail.com
                </p>
              </div>

              <div className="mt-2">
                <p className="text-xs text-gray-400">Other Email</p>
                <p className="font-medium text-gray-700">jusbas098@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md">
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

      <footer className="bg-[#CDE9F6] py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4 gap-8">
          <h2 className="text-4xl font-extrabold text-[#5EC3F5]">
            Let's Build Something Amazing Together
          </h2>

          <div className="flex gap-4">
            <button className="bg-btn text-white px-5 py-2 rounded-full shadow hover:scale-105 transition flex items-center gap-2 cursor-pointer">
              <FaEnvelope />
              Email Me
            </button>

            <button className="bg-btn text-white px-5 py-2 rounded-full shadow hover:scale-105 transition flex items-center gap-2 cursor-pointer">
              <FaPhone />
              Call Me
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
