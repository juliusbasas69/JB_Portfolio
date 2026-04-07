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
    {
      name: "Landing/Login Page",
      src: "/images/projects/futurepath/login.png",
    },
    {
      name: "Register Screen",
      src: "/images/projects/futurepath/register.png",
    },
  ];

  const userScreens: Screen[] = [
    {
      name: "User Dashboard",
      src: "/images/projects/futurepath/user/dashboard.png",
    },
    {
      name: "Profile",
      src: "/images/projects/futurepath/user/profile.png",
    },
    {
      name: "Asessment | Home",
      src: "/images/projects/futurepath/user/assessment-riasec-home.png",
    },
    {
      name: "Asessment Riasec",
      src: "/images/projects/futurepath/user/assessment.png",
    },
    {
      name: "Asessment Riasec | Result",
      src: "/images/projects/futurepath/user/assessment-result.png",
    },
    {
      name: "Asessment | History",
      src: "/images/projects/futurepath/user/assessment-result.png",
    },
    {
      name: "Strand & Degree | List",
      src: "/images/projects/futurepath/user/strandegree-list.png",
    },
    {
      name: "Strand & Degree | Details",
      src: "/images/projects/futurepath/user/strandegree-details.png",
    },
    {
      name: "University | List",
      src: "/images/projects/futurepath/user/university-list.png",
    },
    {
      name: "University | Details",
      src: "/images/projects/futurepath/user/university-details.png",
    },
  ];

  const adminScreens: Screen[] = [
    {
      name: "Admin Dashboard",
      src: "/images/projects/futurepath/admin/dashboard.png",
    },
    {
      name: "University | Table",
      src: "/images/projects/futurepath/admin/university-list.png",
    },
    {
      name: "University | Add",
      src: "/images/projects/futurepath/admin/university-add.png",
    },
    {
      name: "University | Edit",
      src: "/images/projects/futurepath/admin/university-edit.png",
    },
    {
      name: "University | Delete",
      src: "/images/projects/futurepath/admin/university-delete.png",
    },
    {
      name: "University | Details",
      src: "/images/projects/futurepath/admin/university-details.png",
    },
    {
      name: "Question | Table",
      src: "/images/projects/futurepath/admin/question-list.png",
    },
    {
      name: "Question | Add",
      src: "/images/projects/futurepath/admin/question-add.png",
    },
    {
      name: "Question | Edit",
      src: "/images/projects/futurepath/admin/question-edit.png",
    },
    {
      name: "Question | Delete",
      src: "/images/projects/futurepath/admin/question-delete.png",
    },
    {
      name: "Question | Details",
      src: "/images/projects/futurepath/admin/question-details.png",
    },
    {
      name: "Configuration",
      src: "/images/projects/futurepath/admin/configuration.png",
    },
    {
      name: "Assessment History",
      src: "/images/projects/futurepath/admin/assessment-history.png",
    },
    {
      name: "Strand & Degree | Table",
      src: "/images/projects/futurepath/admin/strandegree-list.png",
    },
    {
      name: "Strand & Degree | Add",
      src: "/images/projects/futurepath/admin/strandegree-add.png",
    },
    {
      name: "Strand & Degree | Edit",
      src: "/images/projects/futurepath/admin/strandegree-edit.png",
    },
    {
      name: "Strand & Degree | Delete",
      src: "/images/projects/futurepath/admin/strandegree-delete.png",
    },
    {
      name: "Strand & Degree | Details",
      src: "/images/projects/futurepath/admin/strandegree-details.png",
    },
    {
      name: "User | Table",
      src: "/images/projects/futurepath/admin/user-list.png",
    },
    {
      name: "User | Add",
      src: "/images/projects/futurepath/admin/user-add.png",
    },
    {
      name: "User | Edit",
      src: "/images/projects/futurepath/admin/user-edit.png",
    },
    {
      name: "User | Delete",
      src: "/images/projects/futurepath/admin/user-delete.png",
    },
    {
      name: "User | Details",
      src: "/images/projects/futurepath/admin/user-details.png",
    },
    {
      name: "Feedback | Table",
      src: "/images/projects/futurepath/admin/feedback.png",
    },
    {
      name: "Push Notification",
      src: "/images/projects/futurepath/admin/push-notification.png",
    },
  ];

  return (
    <div className="my-10">
      <div className="p-1 text-center text-yellow-800 rounded-md text-sm">
        ⚠️ Some screens require proper setup and cannot be captured as
        screenshots.
      </div>
      <ScreensSection
        title="Landing / Login / Register Screens"
        screens={landingScreens}
      />
      <ScreensSection title="User's Screens" screens={userScreens} />
      <ScreensSection title="Admin's Screens" screens={adminScreens} />
    </div>
  );
}
