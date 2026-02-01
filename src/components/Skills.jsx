import React from "react";
import Slider from "react-slick";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Git", icon: <FaGit className="text-red-500" /> },
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
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 text-center">
          Skills
        </h2>

        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg mx-2 transform hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <span className="text-gray-800 font-semibold">{skill.name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
