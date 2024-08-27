import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Latest from "./Components/Latest/Latest";
import Intouch from "./Components/Intouch/Intouch";
import Footer from "./Components/Footer/Footer";
//import NewPage from "./Components/NewPage/NewPage"; // Import your new page component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Latest />
                <Intouch />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/contact" element={<Intouch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
