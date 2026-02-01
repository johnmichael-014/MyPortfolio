import React from "react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 bg-gray-50 min-h-[calc(100vh-112px)] relative overflow-hidden flex items-center">

      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-300 rounded-full opacity-30 animate-bounce-slow"></div>
      <div className="absolute top-1/3 right-20 w-32 h-32 bg-purple-400 rounded-2xl opacity-20 animate-spin-slow"></div>
      <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-pink-300 rounded-full opacity-25 animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-yellow-300 rounded-full opacity-20 animate-spin-slow"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 z-10 relative">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight opacity-0 animate-fade-in-up">
            Hi, I’m <span className="text-blue-600">John Michael Macaraig</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 opacity-0 animate-fade-in-up delay-200">
            I’m a Full Stack Developer specializing in{" "}
            <span className="font-medium text-gray-900">
              PHP, ASP.NET, C#, and modern web technologies
            </span>.
            I build reliable, scalable, and secure web applications for businesses and startups.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start opacity-0 animate-fade-in-up delay-400">
            <a
              href="#Projects"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition transform hover:-translate-y-1 hover:scale-105 duration-300"
            >
              View Projects
            </a>
            {/* <a
              href="/MyResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition transform hover:-translate-y-1 hover:scale-105 duration-300"
            >
              View Resume
            </a> */}
          </div>
        </div>

        {/* Right Portrait */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative opacity-0 animate-fade-in-up delay-600">
          <div className="w-80 h-80 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
            <img
              src="/Profile-Art.png"
              alt="John Michael Macaraig"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Extra subtle floating dots */}
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce-slow opacity-60"></div>
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce-slow opacity-50"></div>
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-bounce-slow opacity-50"></div>

      {/* Tailwind animations */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 6s infinite ease-in-out;
          }

          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }

          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s forwards;
          }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
        `}
      </style>
    </section>
  );
};

export default Hero;
