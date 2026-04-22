import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 
      w-11/12 md:w-3/4 lg:w-1/3
      h-12 px-10 
      flex justify-center items-center
      text-white 
      rounded-full shadow-md 
      border-[1.3px] border-dashed border-gray-500
 hover:border-purple-400 transition
bg-black/40 backdrop-blur-md"
    >
      <ul className="flex gap-10 items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-purple-400" : "hover:text-gray-400"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-purple-400" : "hover:text-gray-400"
            }
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive ? "text-purple-400" : "hover:text-gray-400"
            }
          >
            Experience
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-purple-400" : "hover:text-gray-400"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
