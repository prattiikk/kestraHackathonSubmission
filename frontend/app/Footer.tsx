"use client";

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-2xl font-bold flex items-center gap-2">
            <Image src="/icon.svg" alt="Vault" width={40} height={40} />
            Vault
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap space-x-4 mt-4 md:mt-0">
            <a href="#features" className="text-gray-300 hover:text-white">
              Features
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white">
              Pricing
            </a>
            <a href="#support" className="text-gray-300 hover:text-white">
              Support
            </a>
            <a href="#blog" className="text-gray-300 hover:text-white">
              Blog
            </a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Description */}
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            Transforming how businesses interact with customers through
            WhatsApp. Your bot, your way.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
