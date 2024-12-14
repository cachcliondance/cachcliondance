import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import CodeOfConduct from "./components/CodeOfConduct";
import Contact from "./components/Contact";
import JoinUs from "./components/JoinUs";
import BookUs from "./components/BookUs";
import Gallery from "./components/Gallery";

const App: React.FC = () => {
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);

  useEffect(() => {
    // Fetch the list of uploaded photos from the backend
    fetch("http://localhost:5002/api/photos")
      .then((response) => response.json())
      .then((data) => setPhotoUrls(data.photos))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/book-us" element={<BookUs />} />
        <Route path="/gallery" element={<Gallery photos={photoUrls} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
