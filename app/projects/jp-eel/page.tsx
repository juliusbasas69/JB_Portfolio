"use client";

import Image from "next/image";
import { useState } from "react";

export default function EELPage() {
  return (
    <div>
      <div className="w-full py-12 bg-sky-50">
        <HeroSection />
        <DetailsSection />
      </div>

      <div className="flex flex-col items-center justify-center py-16 border border-dashed border-gray-300 rounded-xl bg-gray-50">
        <span className="text-4xl mb-3">🖼️</span>
        <h3 className="text-lg font-semibold text-gray-700">
          Screenshots Available Soon
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Actual hardware setup and monitoring interface will be added soon.
        </p>
      </div>
    </div>
  );
}

function HeroSection() {
  const [showCode, setShowCode] = useState(false);

  return (
    <section className="max-w-7xl w-full m-auto px-6 mb-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Enhanced Electrical Lamp with Smart Monitoring System
          </h1>

          <p className="text-gray-600">
            A thesis-based Arduino and IoT smart monitoring system designed for
            automated electrical lamp control and real-time fault detection. The
            system continuously monitors the operational status of connected
            lamps and displays NORMAL when all units are functioning properly.
            When a lamp failure or abnormal condition is detected, the system
            immediately identifies the affected line and triggers alerts via LCD
            display, Blynk mobile application, and GSM SMS notification.
          </p>

          <p className="text-gray-500 mt-2 italic text-sm">
            Integrates embedded hardware automation, ESP32-based monitoring, GSM
            communication, and IoT mobile control through Blynk for real-time
            system supervision and fault notification.
          </p>

          <div className="mt-6">
            <button
              onClick={() => setShowCode(!showCode)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-900 text-white hover:opacity-90 transition cursor-pointer"
            >
              {showCode ? "Hide Code" : "View Code"}
            </button>

            {showCode && (
              <div className="mt-3 p-4 rounded-lg bg-gray-100 text-sm text-gray-700">
                Arduino C++ source code available upon request.
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-800">
                Completed
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-800">
                Hardware
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-800">
                IoT
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                Thesis
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[250px] md:h-[300px]">
          <Image
            src="/images/projects/images/pj-7.png"
            fill
            sizes="512px"
            alt="Smart Lamp Monitoring"
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function DetailsSection() {
  const techStack = {
    Controller: ["ESP32"],
    Sensors: ["ZMCT103C CT Coil"],
    Communication: ["SIM800L GSM", "Blynk"],
    Display: ["LCD I2C 16x2"],
    Switching: ["8 Channel Relay Module", "3 Gang Switch", "MCB"],
    Power: ["Centralized Power Supply", "Buck Converter"],
    Output: ["Pilot Light Red", "Pilot Light Green", "Lamps"],
    Tools: ["Breadboard", "Electrical Wiring"],
  };

  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <section className="max-w-7xl w-full m-auto px-6 grid md:grid-cols-3 gap-10">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-semibold mb-4">
          ─── ✦ Project Details ✦ ───
        </h2>

        <p className="text-gray-600 mb-6">
          This system enhances traditional electrical lamp control by
          implementing smart monitoring, automation, and remote accessibility.
          It enables real-time tracking of lamp conditions, automatic fault
          detection, and remote switching capabilities through IoT integration.
          The system improves safety and efficiency in electrical load
          management by providing instant status updates and multi-channel
          alerts.
        </p>

        <h3 className="text-xl font-semibold mb-3">─── ✦ Key Features ✦ ───</h3>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>
            Real-time monitoring of lamp operational status (NORMAL / FAULT)
          </li>
          <li>Automatic detection of defective or non-functional lamp lines</li>
          <li>Electrical current sensing using CT coil sensor</li>
          <li>Instant fault indication via LCD display</li>
          <li>Mobile monitoring and control using Blynk IoT platform</li>
          <li>GSM/SMS notification for remote fault alerts</li>
          <li>Multi-channel relay-based switching system</li>
          <li>Manual override using physical switches</li>
          <li>Centralized power distribution system</li>
          <li>Energy-efficient smart lighting automation</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">─── ✦ Tech Stack ✦ ───</h2>

        <div className="space-y-3 mb-6">
          {Object.entries(techStack).map(([category, items]) => (
            <div
              key={category}
              className="shadow-md rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenCategory(openCategory === category ? null : category)
                }
                className="w-full flex justify-between text-sm items-center px-2 py-2 bg-gray-100 hover:bg-gray-200 transition"
              >
                <span className="font-medium">{category}</span>
                <span>{openCategory === category ? "−" : "+"}</span>
              </button>

              {openCategory === category && (
                <div className="flex flex-wrap gap-2 p-3 bg-white">
                  {items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          ─── ✦ Project Info ✦ ───
        </h2>

        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">Role:</span>
            <span>Programmer</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Type:</span>
            <span>Hardware / IoT</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Category:</span>
            <span>Thesis Project</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Developed:</span>
            <span>2026</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Status:</span>
            <span className="text-green-600">Completed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
