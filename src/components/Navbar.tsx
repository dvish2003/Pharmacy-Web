"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./ui/Logo";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [auth, setIsAuth] = useState(false);

  const navList = [
    { name: "Home", href: "/home" },
    { name: "Service", href: "/mediServices" },
    { name: "Product", href: "/featureProducts" },
    { name: "Prescription", href: "/article" },
    { name: "Contact", href: "/contact" },
  ];

  const dashBoardNavList = [
    {
      name: "Dashboard",
      href: "#",
    },
    {
      name: "Products",
      href: "#",
    },
    {
      name: "Cart",
      href: "#",
    },
    {
      name: "Orders",
      href: "#",
    },

    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Settings",
      href: "#",
    },
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
            {!auth &&
              navList.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-purple-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            {auth &&
              dashBoardNavList.map((item) => (
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
            {!auth && (
              <Link
                href="/login"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Login
              </Link>
            )}
            {!auth && (
              <Link
                href="/register"
                className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
              >
                Register
              </Link>
            )}

            {auth && (
              <Link
                href="/"
                onClick={() => setIsAuth(false)} // ✅ Log out and close menu
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Log Out
              </Link>
            )}
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
              {!auth &&
                navList.map((item) => (
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
              {auth &&
                dashBoardNavList.map((item) => (
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
              {!auth && (
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="bg-purple-600 rounded-md px-4 py-2 text-white text-center hover:bg-purple-700 transition"
                >
                  Login
                </Link>
              )}
              {!auth && (
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="border border-purple-600 rounded-md px-4 py-2 text-purple-600 text-center hover:bg-purple-600 hover:text-white transition"
                >
                  Register
                </Link>
              )}
              {auth && (
                <Link
                  href="/"
                  onClick={() => {
                    setIsOpen(false);
                    setIsAuth(false);
                  }} // ✅ Close menu on click
                  className="bg-purple-600 rounded-md px-4 py-2 text-white text-center hover:bg-purple-700 transition"
                >
                  Log Out
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
