"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Screen {
  name: string;
  src: string;
}

interface ScreensSectionProps {
  title: string;
  screens: Screen[];
}

function ScreensSection({ title, screens }: ScreensSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevScreen = () => {
    setCurrentIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  const nextScreen = () => {
    setCurrentIndex((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  };

  const currentScreen = screens[currentIndex];

  return (
    <section className="max-w-7xl w-full m-auto px-6 mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevScreen}
          className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
        >
          <FaChevronLeft />
        </button>

        <div className="relative w-[90%] md:w-[70%] rounded-xl shadow-lg border border-gray-300">
          <Image
            src={currentScreen.src}
            alt={currentScreen.name}
            width={1600}
            height={900}
            className="w-full h-auto object-contain rounded-xl"
            sizes="90vw"
            preload={true}
          />
          <p className="absolute bottom-4 left-6 bg-black/50 text-white px-4 py-2 rounded text-xs md:text-xs font-medium">
            {currentScreen.name}
          </p>
        </div>

        <button
          onClick={nextScreen}
          className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default function ScreenshotsSection() {
  const landingScreens: Screen[] = [
    { name: "Landing Page", src: "/images/projects/borrowhen/landing.png" },
    { name: "Login Screen", src: "/images/projects/borrowhen/login.png" },
    { name: "Register Screen", src: "/images/projects/borrowhen/register.png" },
  ];

  const borrowerScreens: Screen[] = [
    {
      name: "Dashboard",
      src: "/images/projects/borrowhen/borrower/dashboard.png",
    },
    {
      name: "Inventory",
      src: "/images/projects/borrowhen/borrower/inventory.png",
    },
    {
      name: "Inventory - Borrow Request (Modal)",
      src: "/images/projects/borrowhen/borrower/inventory-borrow-request.png",
    },
  ];

  const lenderScreens: Screen[] = [
    {
      name: "Lender Dashboard",
      src: "/images/projects/borrowhen/lender/dashboard.png",
    },
    { name: "Lender Approvals", src: "/images/projects/lender-approvals.png" },
  ];

  const adminScreens: Screen[] = [
    {
      name: "Admin Dashboard",
      src: "/images/projects/borrowhen/admin/dashboard.png",
    },
    {
      name: "Inventory",
      src: "/images/projects/borrowhen/admin/inventory-list.png",
    },
    {
      name: "Inventory Add",
      src: "/images/projects/borrowhen/admin/inventory-add.png",
    },
    {
      name: "Request List",
      src: "/images/projects/borrowhen/admin/request-list.png",
    },
  ];

  return (
    <div className="my-10">
      <ScreensSection
        title="Landing / Login / Register Screens"
        screens={landingScreens}
      />
      <ScreensSection title="Borrower's Screens" screens={borrowerScreens} />
      <ScreensSection title="Lender's Screens" screens={lenderScreens} />
      <ScreensSection title="Admin's Screens" screens={adminScreens} />
    </div>
  );
}
