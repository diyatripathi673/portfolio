import React from "react";
// import Background from "./components/background/Background";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Cursor from "./components/Cursor";
const App = () => {
  return (
    <>
      <Cursor />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
