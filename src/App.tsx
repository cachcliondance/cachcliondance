import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import MilestonePage from "./components/MilestonePage";
import Footer from "./components/Footer";

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Banner/>
              <Footer />
            </div>
          }
        />
        <Route path="/month/:month" element={<MilestonePage />} />
      </Routes>
    </Router>
  );
};

export default App;
