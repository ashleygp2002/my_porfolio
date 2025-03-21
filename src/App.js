// import React from "react";
// import ParticleBackground from "./components/Title/ParticleBackground";
// import TitleScreen from "./components/Title/TitleScreen";
// import NavBar from "./components/NavBar";
// import AboutSection from "./components/About/AboutSection";
// import ProjectSection from "./components/Projects/ProjectSection";
// import "./styles.css";

// const App = () => {
//     return (
//         <div className="app-container">

//             <ParticleBackground />


//             <NavBar />

//             <div className="title-wrapper">
//                 <TitleScreen />
//             </div>

//             <AboutSection />

//             <ProjectSection />

//             <section id="experience" className="background2">
//                 <h1>Experience</h1>
//             </section>

//             <section id="contact" className="background1">
//                 <h1>Contact</h1>
//             </section>
//         </div>
//     );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticleBackground from "./components/Title/ParticleBackground";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import WorkPage from "./components/Projects/ProjectSection"; 
import "./styles.css";

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <ParticleBackground />
                <NavBar />
                
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/work" element={<WorkPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
