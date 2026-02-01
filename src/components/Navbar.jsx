import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaBars, FaTimes,FaEnvelope  } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "#Hero" },
    { name: "About", id: "#About" },
    { name: "Projects", id: "#Projects" },
    { name: "Skills", id: "#Skills" },
    { name: "Certificates", id: "#Certificates" },
    { name: "Contact", id: "#Contact" },
  ];

  const handleNavClick = (id) => {
    setOpen(false);
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">JM</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="relative group text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-6 text-lg text-gray-300 hover:text-white transition-colors duration-300">
        
          <a href="https://linkedin.com/in/jmichael-macaraig" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://facebook.com/jhymmm24" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tenshigaming024@gmail.com" target="_blank" rel="noreferrer" aria-label="Gmail"> <FaEnvelope /></a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-black text-gray-200 flex flex-col items-center space-y-4 py-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <button onClick={() => handleNavClick(item.id)} className="hover:text-blue-500 text-lg transition">{item.name}</button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
