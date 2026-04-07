import { Award, Briefcase } from "lucide-react";

export default function CertificateAchievementSection() {
  const certificates = [
    {
      title: "IT Passport Passer",
      issuer: "Philnits",
      month: "2024",
    },
  ];

  const achievements = [
    {
      title: "Certificate of Completion",
      issuer: "Alliance Software Inc.",
      month: "Dec 2024",
    },
  ];

  return (
    <section className="mt-10 w-full py-16 px-6 bg-gradient-to-r from-white to-[#F0F9FF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Certifications & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column: Certificates */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Certificates</h3>

            {certificates.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-yellow-100 text-yellow-500 rounded-lg flex items-center justify-center">
                  <Award size={24} />
                </div>

                <div>
                  <p className="text-xs text-gray-400">{cert.month}</p>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Achievements */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>

            {achievements.map((ach, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center">
                  <Briefcase size={24} />
                </div>

                <div>
                  <p className="text-xs text-gray-400">{ach.month}</p>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {ach.title}
                  </h4>
                  <p className="text-sm text-gray-500">{ach.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
