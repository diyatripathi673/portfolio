// import React, { useEffect, useState } from "react";
// // import "./navbar.css";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="logo">Diya</div>

//       <ul className="links">
//         <li>Home</li>
//         <li>About</li>
//         <li>Projects</li>
//         <li>Contact</li>
//       </ul>

//       <button className="btn">Resume</button>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 
  w-11/12 md:w-3/4 lg:w-1/3
  flex justify-center items-center 
  h-12 px-10 
  text-white 
  rounded-full shadow-md 
  border border-white
  bg-white/10 backdrop-blur-md"
    >
      <ul className="flex gap-10 items-center">
        <li className="cursor-pointer hover:text-gray-400">Home</li>
        <li className="cursor-pointer hover:text-gray-400">About</li>
        <li className="cursor-pointer hover:text-gray-400">Services</li>
        <li className="cursor-pointer hover:text-gray-400">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
