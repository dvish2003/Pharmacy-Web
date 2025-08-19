"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./ui/Logo";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navList = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#" },
    { name: "Service", href: "#" },
    { name: "Prescription", href: "#" },
    { name: "Contact", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-transparent shadow-md text-gray-800 backdrop-blur-2xl"
          : "bg-transparent  text-gray-800 backdrop-blur-2xl"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <ul className="flex space-x-8 text-[17px] font-medium">
            {navList.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-purple-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-3">
            <Link
              href="#"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Login
            </Link>
            <Link
              href="#"
              className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
            >
              Register
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4"
          >
            <ul className="flex flex-col space-y-3 text-[17px] font-medium text-gray-800">
              {navList.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)} // ✅ Close menu on click
                    className="block hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="bg-purple-600 rounded-md px-4 py-2 text-white text-center hover:bg-purple-700 transition"
              >
                Login
              </Link>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="border border-purple-600 rounded-md px-4 py-2 text-purple-600 text-center hover:bg-purple-600 hover:text-white transition"
              >
                Register
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
