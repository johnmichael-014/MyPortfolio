import React from "react";

const certificates = [

  {
    title: "ASP.NET  Web Development by Zuitt",
    description: "Certified in building robust web applications using ASP.NET Core, C#, and SQL Server.",
    url: "#",
    issuer: "Zuitt",
    date: "Mar 2022",
    tech: ["ASP.NET", "C#", "SQL Server"],
  },
  {
    title: "PostgreSQL by Zuitt",
    description: "Demonstrated expertise in designing, querying, and managing PostgreSQL databases effectively.",
    url: "#",
    issuer: "Zuitt",
    date: "Nov 2023",
    tech: ["PostgreSQL"],
  },
  // Add more certificates here
];

const Certificates = () => {
  return (
    <section id="Certificates" className="max-w-6xl mx-auto px-6 py-24 bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
        Certificates
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {certificates.map(({ title, description, url, issuer, date, tech }, idx) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white"
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
