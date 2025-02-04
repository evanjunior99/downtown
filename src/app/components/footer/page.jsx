"use client";
import React from "react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-6 transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"
      }`}
    >
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6" />
        <span className="block text-sm pb-4">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Matius™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  );
};

export default Footer;
