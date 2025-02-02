import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">About Us</h1>
      </header>

      {/* Content Section */}
      <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to the Library Management System
        </h1>
        <p className="mb-6">
          Our Library Management System is designed to simplify the process of managing books, users, and transactions in a library.
          It provides features like book search, borrowing, return tracking, and user management, making library operations efficient
          and hassle-free.
        </p>

        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-6">
          To provide a seamless, user-friendly, and automated solution for libraries to manage their resources effectively and improve
          the experience of librarians and readers alike.
        </p>

        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Efficient book cataloging and search functionality</li>
          <li>Automated borrowing and return management</li>
          <li>User-friendly interface for both librarians and members</li>
          <li>Detailed reports and analytics</li>
        </ul>

        {/* Team Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-lg font-bold">John Doe</h3>
              <p>Project Manager</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-lg font-bold">Jane Smith</h3>
              <p>Lead Developer</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-lg font-bold">Emily Johnson</h3>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-4 text-center">
        <p>&copy; 2025 Library Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
