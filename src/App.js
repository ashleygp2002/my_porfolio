import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticleBackground from "./components/Title/ParticleBackground";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import WorkPage from "./components/Projects/ProjectSection";
import ContactPage from "./components/Contact/ContactPage";
import Footer from "./components/Footer";
import "./styles.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";


const App = () => {
    return (
        <Router>
            <div className="app-container">
                <ParticleBackground />
                <NavBar />
                
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/work" element={<WorkPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
