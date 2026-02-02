import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skills = [
  { name: "ASP .NET", icon: "/icons/asp.png" },
  { name: "C#", icon: "/icons/icons8-c-sharp-logo-2-480.png" },
  { name: "PHP", icon: "/icons/php.png" },
  { name: "Microsoft SQL Server", icon: "/icons/icons8-microsoft-sql-server-480.png" },
  { name: "PostgreSQL", icon: "/icons/icons8-postgresql-480.png" },
  { name: "JavaScript", icon: "/icons/icons8-javascript-480.png" },
  { name: "Bootstrap", icon: "/icons/icons8-bootstrap-logo-480.png" },
  { name: "HTML", icon: "/icons/icons8-html-5-480.png" },
  { name: "CSS", icon: "/icons/icons8-css-logo-480.png" },
  { name: "React", icon: "/icons/react.png" },
];

// 🔹 Additional professional skills (progress bars)
const additionalSkills = [
  { name: "Full Stack Development", level: 90 },
  { name: "Backend Architecture", level: 85 },
  { name: "Frontend Development", level: 82 },
  { name: "API Design & Integration", level: 88 },
  { name: "Database Optimization", level: 87 },
  { name: "Problem Solving", level: 92 },
  { name: "Leadership", level: 85 },
  { name: "Team Collaboration", level: 90 },
  { name: "Communication", level: 82 },
];

export default function Skills() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section id="Skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔹 Tech Stack Slider */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 text-center">
          Tech Stack
        </h2>

        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg mx-2 hover:scale-105 transition-transform"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-4"
              />
              <span className="text-gray-800 font-semibold text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </Slider>

        {/* 🔹 Professional Skills Progress Bars */}
        <div className="mt-24">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 text-center">
            Professional Skills
          </h3>

          <div className="max-w-4xl mx-auto space-y-8">
            {additionalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">
                    {skill.name}
                  </span>
                  <span className="text-gray-600 font-medium">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
