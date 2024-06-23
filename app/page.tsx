import React from "react";

export const metadata = {
  title: "Next.js Resume Form",
  description: "A resume form built with Next.js and Firebase",
};

export default function HomePage() {
  return (
    <div className="bg-white p-8 shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to the Resume Form Application
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        This application allows you to create and view your resume. Use the
        navigation links to get started.
      </p>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/register" className="text-blue-500 hover:text-blue-700">
              Register
            </a>
          </li>
          <li>
            <a href="/careers" className="text-blue-500 hover:text-blue-700">
              Careers
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
