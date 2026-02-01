import React from 'react';

const Contact = () => {
  return (
    <section id="Contact" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">Get in Touch</h2>
      <p className="text-gray-700 mb-8 text-center">
        I’m always open to discussing new projects, opportunities, or collaborations.  
        Feel free to reach out via email or connect with me on LinkedIn.
      </p>
      <ul className="space-y-4 text-gray-700 text-center">
        <li>
          Email:{" "}
          <a
            href="mailto:tenshigaming024@gmail.com"
            className="text-blue-600 hover:underline"
          >
            tenshigaming024@gmail.com
          </a>
        </li>
       <li>
  LinkedIn:{" "}
  <a
    href="https://www.linkedin.com/in/jmichael-macaraig"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    linkedin.com/in/jmichael-macaraig
  </a>
</li>
      </ul>
    </section>
  );
};

export default Contact;
