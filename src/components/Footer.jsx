import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 max-h-full">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 text-light text-decoration-none"
          >
            <svg className="bi me-2" width={40} height={32}>
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-5">Social Media App</span>
          </a>
          <div className="d-flex mb-3 mb-md-0">
            <a
              href="https://github.com/zubi-afridi"
              target="_blank"
              className="me-3 text-light"
            >
              <FaGithub size="1.5rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/zubair-khan-web-developer"
              target="_blank"
              className="text-light"
            >
              <FaLinkedin size="1.5rem" />
            </a>
          </div>
        </div>
        <div className="text-center pt-3">
          <p className="mb-0">
            © 2024 Social Media App developed by Zubair Khan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
