import React from "react";
import { motion } from "framer-motion";

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
      border border-white
      bg-white/10 backdrop-blur-md"
    >
      <ul className="flex gap-10 items-center">
        <li className="cursor-pointer hover:text-gray-400">Home</li>
        <li className="cursor-pointer hover:text-gray-400">Projects</li>
        <li className="cursor-pointer hover:text-gray-400">Contact</li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
