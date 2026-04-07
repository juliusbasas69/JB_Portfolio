import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const workExperience = [
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      month: "Present",
      duration: "Ongoing",
    },
    {
      title: "Student Trainee",
      company: "Alliance Software Inc.",
      month: "Feb 2024 - Jun 2024",
      duration: "4 Months",
    },
    {
      title: "Intern | Full Stack Developer",
      company: "Fullscale Inc.",
      month: "Feb 2025 - Jun 2025",
      duration: "4 Months",
    },
    {
      title: "Full Stack Developer",
      company: "BridgeCulture Inc.",
      month: "Feb 2023 - Feb 2026",
      duration: "3 Years",
    },
  ];

  return (
    <section className="mt-10 w-full py-16 px-6 bg-gradient-to-r from-white to-[#F0F9FF]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-12">
          Experience & Achievements
        </h2>

        <div className="flex flex-col items-center w-128">
          {/* Left Column: Work Experience */}
          <div className="space-y-6 w-full">
            <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
            {workExperience.map((work, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-md w-full box"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center">
                  <Briefcase size={24} />
                </div>

                <div>
                  <p className="text-xs text-gray-400">{work.month}</p>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {work.title}
                  </h4>
                  <p className="text-sm text-gray-500">{work.company}</p>
                </div>
                <div className="ribbon ribbon-top-right">
                  <span>{work.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
