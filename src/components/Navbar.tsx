"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./ui/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { getToken, removeToken, setAuth } from "@/util/cookies";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
      const [auth, setIsAuth] = useState(false);
  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []); 

  const navList = [
    { name: "Home", href: "/home" },
    { name: "Service", href: "/mediServices" },
    { name: "Product", href: "/featureProducts" },
    { name: "Prescription", href: "/article" },
    { name: "Contact", href: "/dashboard" },
    
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
      name: "My Orders",
      href: "#",
    },

    {
      name: "Account",
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
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
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
                    className="transition-colors duration-200 hover:bg-purple-100 hover:text-purple-600"
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
                    className="transition-colors duration-200 hover:text-purple-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <div className="hidden space-x-3 md:flex">
            {!auth && (
              <Link
                href="/login"
                className="px-4 py-2 text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
              >
                Login
              </Link>
            )}
            {!auth && (
              <Link
                href="/register"
                className="px-4 py-2 text-purple-600 transition border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white"
              >
                Register
              </Link>
            )}

            {auth && (
              <Link
                href="/"
                onClick={() => {setIsAuth(false); 
                   setAuth(false);
                    removeToken();  }}
                className="px-4 py-2 text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
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
            className="px-6 py-4 space-y-4 bg-white shadow-lg md:hidden"
          >
            <ul className="flex flex-col space-y-3 text-[17px] font-medium text-gray-800">
              {!auth &&
                navList.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)} // ✅ Close menu on click
                      className="block transition-colors hover:text-purple-600"
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
                      className="block transition-colors hover:text-purple-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
            <div className="flex flex-col pt-4 space-y-3">
              {!auth && (
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-center text-white transition bg-purple-600 rounded-md hover:bg-purple-700"
                >
                  Login
                </Link>
              )}
              {!auth && (
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-center text-purple-600 transition border border-purple-600 rounded-md hover:bg-purple-600 hover:text-white"
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
                    setAuth(false);
                    removeToken();  
                  }} // ✅ Close menu on click
                  className="px-4 py-2 text-center text-white transition bg-purple-600 rounded-md hover:bg-purple-700"
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
