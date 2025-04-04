import React from "react";
import Aos from "aos";
// Components:
import SmoothScroll from "./Components/SmoothScroll";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// Sections:
import ServicesSection from "./Components/Sections/ServicesSection/ServicesSection";
import ProjectsSection from "./Components/Sections/ProjectsSection/ProjectsSection";
import AboutSection from "./Components/Sections/AboutSection/AboutSection";
import SkillsSection from "./Components/Sections/SkillsSection/SkillsSection";
import ContactSection from "./Components/Sections/ContactSection/ContactSection";

function App() {

  React.useEffect(() => { // Initialize AOS:
    Aos.init({
      easing: 'ease-in-out-sine',
      offset: 100,
      once: true
    });
  }, []);

  return (
    <div className="App bg-body-color text-white min-h-screen">
      {/* Smooth Scroll */}
      <SmoothScroll />
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      {/* Main */}
      <main>
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;