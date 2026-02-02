import React, { useState } from "react";

const certificates = [
  {
    title: "ASP.NET Core MVC",
    description: "Certified in building robust web applications using ASP.NET Core, C#, and SQL Server.",
      url: "/JohnMichaelMacaraig_certficate.pdf",
    issuer: "Zuitt Learning Institute Incorporated",
    date: "July 2025",
    tech: ["ASP.NET", "C#", "MS SQL Server"],
  },
  {
    title: "PHP Laravel Framework",
    description: "Certified in developing web applications using PHP and the Laravel framework, including routing, controllers, and Eloquent ORM.",
      url: "/JohnMichaelMacaraig_certficate.pdf",
    issuer: "Zuitt Learning Institute Incorporated",
    date: "January 2024",
    tech: ["PHP", "Laravel Framework", "MS SQL Server"],
  },
  // Add more certificates here
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="Certificates" className="w-full px-6 py-24 bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
        Certificates
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {certificates.map(({ title, description, url, issuer, date, tech }, idx) => (
          <div
            key={idx}
            className="group cursor-pointer block p-8 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white"
            onClick={() => setSelectedCert({ title, url })}
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition">
              {title}
            </h3>
            <p className="text-gray-500 mb-2 font-medium">{issuer} | {date}</p>
            <p className="text-gray-600 mb-4">{description}</p>
            
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for PDF preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white w-11/12 max-w-4xl p-6 rounded-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4">{selectedCert.title}</h3>

            {/* Embed PDF */}
            <iframe
              src={selectedCert.url}
              title={selectedCert.title}
              className="w-full h-[600px] border rounded-lg"
            ></iframe>

            <p className="mt-4 text-center text-gray-500">
              Click outside the modal or the × button to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
