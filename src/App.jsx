import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import TechBanner from "./components/TechBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutMe />
        <TechBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
