import { motion } from "framer-motion";
import { useState, useEffect, RefObject } from "react";

interface HeaderProps {
  hero: RefObject<HTMLDivElement>;
  about: RefObject<HTMLDivElement>;
  course: RefObject<HTMLDivElement>;
  project: RefObject<HTMLDivElement>;
  certificate: RefObject<HTMLDivElement>;
  skills: RefObject<HTMLDivElement>;
  activeBtn: string;
}

export default function Navbar({
  hero,
  about,
  course,
  certificate,
  project,
  skills,
  activeBtn,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setScrolled(true); // Change navbar style after scrolling 50px
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 font-sans transition-all duration-1000 ease-in-out ${
        !scrolled ? "bg-transparent text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`max-w-screen-lg mx-auto px-6 py-4 flex items-center justify-between`}
      >
        {/* Logo */}
        <motion.a
          initial={{ x: -500, opacity: 0.5, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="kpLogo.jpg" className="h-8 rounded-full" alt="Flowbite Logo" />
          <span className="self-center text-1xl text-black font-semibold whitespace-nowrap dark:text-white">
            Kranthi
          </span>
        </motion.a>

        {/* Menu Toggle Button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="hidden w-full md:block md:w-auto mr-11"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* Menu Items */}
            <li>
              <button
                className={`block py-2 px-3 ${
                  activeBtn === "hero" ? "bg-blue-700" : "hover:bg-gray-100"
                } rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`}
                onClick={() => {
                  hero.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </button>
            </li>
            {/* Other links (About, Projects, Certificates, etc.) */}
            {/* Add similar code for "about", "course", "project", "certificate", and "skills" */}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}
