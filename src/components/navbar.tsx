import { useLocation, NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setScrolled(false);
    if (isHomePage) {
      const handleScroll = () => {
        if (window.scrollY > 90) {
          console.log('scrolled');
          setScrolled(true); // Change navbar style after scrolling 50px
        } else {
          setScrolled(false);
        }
      };

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Clean up event listener on unmount
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]);
  return (
    <nav
      className={`w-full fixed  top-0 z-50 font-sans transition-all duration-1000 ease-in-out ${
        isHomePage && !scrolled ? "bg-transparent text-white" : "bg-white text-black"
      }`}
    >
      {/* Header */}
      <div
        className={`${
          open ? "hidden" : "flex"
        } items-center justify-between md:justify-evenly px-6 py-4  `}
      >
        {/* Logo */}
        <a
          href="#"
          className={`flex md:flex-1  items-center gap-3 border-0 justify-center sm:pl-0 md:mx-0 ${
            isHomePage && !scrolled  ? "text-white" : "text-black"
          }`}
        >
          <span className="text-[2.5rem] font-bold md:text-[3rem]">Analyst</span>
          <img
            src={
              isHomePage && !scrolled
                ? "icons8-statistic-32 (2).webp"
                : "icons8-statistic-32 (3).png"
            }
            className="h-8 md:h-9"
            alt="Logo"
          />
        </a>

        {/* Hamburger Menu */}
        <div className="flex md:hidden items-center">
          <span
            className={`text-[1.5rem] font-light mr-0 ${
              isHomePage && !scrolled ? "text-white" : "text-black"
            }`}
            onClick={toggle}
          >
            Menu
          </span>
          <button
            className="block p-2"
            onClick={toggle}
            aria-label="Toggle Menu"
          >
            <svg
              className={`w-8 h-8 ${isHomePage && !scrolled ? "text-white" : "text-black"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex md:flex-1   justify-center items-center">
          <div
            className={`flex gap-11  mx-10 text-[1.1rem] justify-evenly  ${
              isHomePage && !scrolled ? "text-white" : "text-black"
            }`}
          >
            <div className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `underline ${
                        isHomePage && !scrolled ? "text-purple-300" : "text-purple-600"
                      }`
                    : `${isHomePage && !scrolled ? "hover:text-gray-300" : "hover:text-black"}`
                }
              >
                Home
              </NavLink>
            </div>
            <div  className="">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `underline ${
                        isHomePage && !scrolled ? "text-purple-300" : "text-purple-600"
                      }`
                    : `${isHomePage && !scrolled ? "hover:text-gray-300" : "hover:text-black"}`
                }
              >
                About
              </NavLink>
            </div>
            <div  className="">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? `underline ${
                        isHomePage && !scrolled ? "text-purple-300" : "text-purple-600"
                      }`
                    : `${isHomePage && !scrolled ? "hover:text-gray-300" : "hover:text-black"}`
                }
              >
                Projects
              </NavLink>
            </div>
            <div  className="">
              <NavLink
                to="/certificates"
                className={({ isActive }) =>
                  isActive
                    ? `underline ${
                        isHomePage ? "text-purple-300" : "text-purple-600"
                      }`
                    : `${isHomePage ? "hover:text-gray-300" : "hover:text-black"}`
                }
              >
                Certificates
              </NavLink>
            </div>
          </div>
          
        </div>
        <div className="hidden md:flex md:flex-1 justify-center ">
        <NavLink
            to="/contact"
            className={`ml-6 px-3 py-1.5 border-2 rounded-full text-[1rem] ${
              isHomePage && !scrolled
                ? "border-white text-white hover:bg-gray-300 hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{
          duration: 0.5,
        }}
        className={`${
          open ? "block" : "hidden"
        } fixed inset-0 bg-white text-black`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <a
            href="#"
            className="flex items-center gap-3 border-0 "
          >
            <span className="text-[3rem] font-bold">Analyst</span>
            <img
              src="icons8-statistic-32 (3).png"
              className="h-9"
              alt="Logo"
            />
          </a>
          <button className="p-0" onClick={toggle} aria-label="Close Menu">
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <ul className="flex flex-col items-start pl-10 mt-6 text-[1.2rem] font-light space-y-6">
          <li>
            <NavLink
              to="/"
              onClick={toggle}
              className={({ isActive }) =>
                isActive
                  ? `underline text-purple-600`
                  : "hover:text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={toggle}
              className={({ isActive }) =>
                isActive
                  ? `underline text-purple-600`
                  : "hover:text-black"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={toggle}
              className={({ isActive }) =>
                isActive
                  ? `underline text-purple-600`
                  : "hover:text-black"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/certificates"
              onClick={toggle}
              className={({ isActive }) =>
                isActive
                  ? `underline text-purple-600`
                  : "hover:text-black"
              }
            >
              Certificates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggle}
              className={({ isActive }) =>
                isActive
                  ? `underline text-purple-600`
                  : "hover:text-black"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}
