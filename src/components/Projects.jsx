import React, { useState } from "react";

const projects = [
  {
    title: "Budget and Indirect Material Management System",
    description:
      "Efficiently tracks and manages a company's inventory of direct and indirect materials. Monitors stock levels, controls costs, and streamlines procurement to ensure resources are available while minimizing waste.",
    tech: ["ASP.NET", "C#", "PostgreSQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Monitor stock levels",
      "Control costs",
      "Streamline procurement",
      "Minimize waste",
    ],
  },
  {
    title: "Training Management System",
    description:
      "Enhances employee skills through e-learning assessments tailored to specific categories. Tracks progress, evaluates performance, and supports continuous skill development.",
    tech: ["ASP.NET", "C#", "PostgreSQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Custom e-learning assessments",
      "Track employee progress",
      "Performance evaluation",
    ],
  },
  {
    title: "Centralized Logsheet Monitoring System",
    description:
      "Manages borrowing and returning of company assets like PCs and laptops. Tracks borrowed items, ensures timely returns, and identifies missing or overdue assets for accountability.",
    tech: ["C#", "PostgreSQL"],
    features: [
      "Track borrowed items",
      "Ensure timely returns",
      "Identify missing or overdue assets",
    ],
  },
  {
    title: "Ticketing System",
    description:
      "In-house platform for managing and tracking company issues, including bugs and system tasks. Facilitates ticket submission, prioritization, and resolution for smooth operations.",
    tech: ["ASP.NET", "C#", "MS SQL SERVER", "HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Submit and track tickets",
      "Prioritize issues",
      "Ensure timely resolution",
    ],
    iframeUrl: "https://jhymmm24-001-site1.anytempurl.com",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);

  return (
    <section id="Projects" className="w-full px-6 py-24 bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-900 text-center">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer group block p-8 border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((techItem, i) => (
                <span
                  key={i}
                  className="text-sm font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl w-11/12 max-w-[1200px] p-8 relative flex flex-col md:flex-row gap-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold z-10"
            >
              &times;
            </button>

            {/* Left column */}
            <div className="md:w-1/2 flex flex-col justify-start overflow-y-auto pr-4">
              <h3 className="text-4xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-700 mb-6 text-lg">{selectedProject.description}</p>

              {/* Key Features */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-2xl font-semibold mb-3">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-base font-medium bg-gray-100 text-gray-800 px-4 py-2 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Preview button / Coming Soon */}
              {(selectedProject.title === "Budget and Indirect Material Management System" ||
                selectedProject.title === "Training Management System") && (
                <button
                  disabled
                  className="bg-gray-400 cursor-not-allowed text-white font-semibold px-6 py-4 rounded-lg shadow-md w-max"
                >
                  Live Preview Coming Soon
                </button>
              )}

              {selectedProject.title === "Ticketing System" && selectedProject.iframeUrl && (
                <a
                  href={selectedProject.iframeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-lg shadow-md transition-colors w-max"
                >
                  Live Preview
                </a>
              )}
            </div>

            {/* Right column: image or "coming soon" */}
           {/* Right column: image or "coming soon" */}
<div className="md:w-1/2 w-full flex items-center justify-center">
  {selectedProject.title === "Ticketing System" && (
    <img
      src="/ticketinglogin.png"
      alt="Ticketing System Screenshot"
      className="w-full max-w-md rounded-lg shadow-lg cursor-pointer"
      onClick={() => setEnlargedImage("/ticketinglogin.png")}
    />
  )}

  {selectedProject.title === "Budget and Indirect Material Management System" && (
    <img
      src="/bimmssample.png"
      alt="Budget Screenshot"
      className="w-full max-w-md rounded-lg shadow-lg cursor-pointer"
      onClick={() => setEnlargedImage("/bimmssample.png")}
    />
  )}

  {selectedProject.title === "Training Management System" && (
    <img
      src="/tmssample.png"
      alt="Training Screenshot"
      className="w-full max-w-md rounded-lg shadow-lg cursor-pointer"
      onClick={() => setEnlargedImage("/tmssample.png")}
    />
  )}

  {selectedProject.title === "Centralized Logsheet Monitoring System" && (
    <img
      src="/clssample.png"
      alt="Centralized Logsheet Screenshot"
      className="w-full max-w-md rounded-lg shadow-lg cursor-pointer"
      onClick={() => setEnlargedImage("/clssample.png")}
    />
  )}

  {!["Ticketing System", "Budget and Indirect Material Management System", "Training Management System", "Centralized Logsheet Monitoring System"].includes(selectedProject.title) && (
    <span className="text-gray-400 italic text-lg">
      Live Preview coming soon
    </span>
  )}
</div>

          </div>
        </div>
      )}

      {/* Enlarged Image Overlay */}
      {enlargedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setEnlargedImage(null)}
        >
          <img
            src={enlargedImage}
            alt="Enlarged Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
