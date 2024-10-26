import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import CodeOfConduct from "./components/CodeOfConduct";

const App: React.FC = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Banner/>
            </div>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
