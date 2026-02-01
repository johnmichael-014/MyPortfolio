import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="About"
      className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-blue-300 shadow-xl">
            <img
              src="/Profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            John Michael Macaraig
          </h2>

          <div className="space-y-2 mb-6">
            <p className="flex items-center text-gray-700">
              <FaMapMarkerAlt className="mr-2 text-blue-500" /> San Pablo City, Laguna, Philippines
            </p>
            <p className="flex items-center text-gray-700">
              <FaEnvelope className="mr-2 text-blue-500" /> tenshigaming024@gmail.com
            </p>
            <p className="flex items-center text-gray-700">
              <FaPhone className="mr-2 text-blue-500" /> +63 953 343 5430
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            I’m a passionate Full Stack Software Developer focused on building clean, efficient, and scalable web applications. Skilled in PHP, ASP.Net, and C#, I enjoy turning complex problems into intuitive user experiences. Experienced with front-end technologies like HTML, CSS, JavaScript, and modern frameworks, as well as back-end development, RESTful APIs, and database management. I thrive in collaborative environments, value maintainable code, and constantly explore new tools to stay ahead in tech.
          </p>

          {/* Resume Button */}
          <a
            href="/MyResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
