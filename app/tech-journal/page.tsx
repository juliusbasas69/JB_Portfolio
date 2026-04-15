"use client";

import MicroservicesSpringboot from "./components/journal-one";
import RedisIntegrationSpringboot from "./components/journal-two";
import SwaggerIntegrationSpringboot from "./components/journal-three";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6 flex flex-col gap-2">
      {/* Page Title */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Dev Learning Log</h1>

        <p className="mt-2 text-gray-600">
          A personal journal of everything I learn in software development —
          from backend systems, DevOps, to full-stack architecture.
        </p>

        <p className="mt-2 text-gray-600">
          This journal is also a reference for myself in case I forget anything,
          so I can easily go back and relearn concepts whenever needed.
        </p>
      </div>

      <MicroservicesSpringboot />
      <RedisIntegrationSpringboot />
      <SwaggerIntegrationSpringboot />
    </div>
  );
}
