"use client";

import { useState } from "react";

export default function SwaggerIntegrationSpringboot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 shadow-md rounded-2xl bg-gray-50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 font-semibold text-lg flex justify-between cursor-pointer"
      >
        Swagger Integration in Spring Boot
        <span>{open ? "-" : "+"}</span>
      </button>

      {open && (
        <div className="px-6 py-4 text-sm text-gray-600 space-y-6 bg-white">
          {/* WHAT IS SWAGGER */}
          <div>
            <h3 className="font-semibold text-gray-800">What is Swagger?</h3>
            <p className="mt-2">
              Swagger (OpenAPI) is a tool used to automatically generate API
              documentation. It provides a UI where you can test and visualize
              your REST APIs without using Postman.
            </p>
          </div>

          {/* WHY USE SWAGGER */}
          <div>
            <h3 className="font-semibold text-gray-800">Why Use Swagger?</h3>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Automatically generates API documentation</li>
              <li>Allows API testing from browser</li>
              <li>Improves collaboration between frontend and backend</li>
              <li>Reduces need for manual API documentation</li>
            </ul>
          </div>

          {/* STEP 1 DEPENDENCY */}
          <div>
            <h3 className="font-semibold text-gray-800">
              Step 1: Add Dependency
            </h3>

            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.5.0</version>
</dependency>`}
            </pre>
          </div>

          {/* STEP 2 DEFAULT URL */}
          <div>
            <h3 className="font-semibold text-gray-800">
              Step 2: Default Swagger URL
            </h3>

            <p className="mt-2">
              After running your Spring Boot application, visit:
            </p>

            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`http://localhost:8080/swagger-ui/index.html`}
            </pre>
          </div>

          {/* STEP 3 CONFIG */}
          <div>
            <h3 className="font-semibold text-gray-800">
              Step 3: Change Swagger URL (Optional)
            </h3>

            <p className="mt-2">
              You can customize the Swagger path in{" "}
              <b>application.properties</b>:
            </p>

            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`springdoc.swagger-ui.path=/api-docs`}
            </pre>

            <p className="mt-3">Then your new Swagger URL becomes:</p>

            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`http://localhost:8080/api-docs`}
            </pre>
          </div>

          {/* STEP 4 TEST */}
          <div>
            <h3 className="font-semibold text-gray-800">Step 4: Test It</h3>

            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Run your Spring Boot application</li>
              <li>Open the Swagger URL in browser</li>
              <li>Check all endpoints listed automatically</li>
              <li>Try executing APIs directly from Swagger UI</li>
            </ul>

            <p className="mt-3">
              If everything is correct, you will see all your controllers
              documented automatically.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
