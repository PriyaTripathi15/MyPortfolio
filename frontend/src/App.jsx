import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ScrollIcons from "./components/ScrollToDown";
function App() {
  return (
    <>
   
      <div className="font-sans text-gray-800">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Certifications />
                <Contact />
                <ScrollIcons />
              </>
            }
          />
        </Routes>
      
      </div>
      </>
    
  );
}

export default App;