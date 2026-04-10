"use client";

import { User, Building2 } from "lucide-react";

export default function ReferenceSection() {
  const references = [
    {
      name: "Christian Lloyd Remo",
      company: "Ascendion",
      role: "Senior Analyst Programmer",
      relationship: "Former Colleague",
    },
    {
      name: "Engr. Elmar Diez",
      company: "Ernst & Young",
      role: "Java Developer",
      relationship: "Former Team Lead",
    },
    {
      name: "Yoshiaki Okada",
      company: "BridgeCulture Inc.",
      role: "Japanese Staff / Business Coordinator",
      relationship: "IT Supervisor",
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Professional References
        </h2>

        <p className="text-center text-gray-500 mb-10">
          Contact details available upon request.
        </p>

        {/* 3 columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {references.map((ref, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-md w-full box bg-white"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg">
                <User size={20} />
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <h4 className="text-md font-semibold text-gray-800">
                  {ref.name}
                </h4>

                <p className="text-sm text-gray-500">{ref.role}</p>

                <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                  <Building2 size={12} />
                  <span>{ref.company}</span>
                </div>

                <span className="text-[10px] text-gray-400 mt-1">
                  {ref.relationship}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
