import React, { useState, useEffect, useCallback } from "react";
import { Hero } from "./components/Sections/Hero";
import { GlobalStyles } from "./components/GlobalStyles";
import { Brands } from "./components/Sections/Brands";
import { Services } from "./components/Sections/Services";
import { Portfolio } from "./components/Sections/Portfolio";
import { Contact } from "./components/Sections/Contact";
import { AvailabilityMarquee, Marquee } from "./components/Sections/Marquee";
import { Footer } from "./components/Sections/Footer";
import { Header } from "./components/Sections/Header";
import { AboutUs } from "./components/Sections/About";
import { FeaturedGallery } from "./components/Sections/Gallery";
import { Testimonials } from "./components/Sections/Testimonials";

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY <= 50 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-purple-500 selection:text-white font-sans overflow-x-hidden relative">
      <GlobalStyles />
      <Header />
      <Hero scrollToSection={scrollToSection} />
      <Brands />
      <Services />
      <FeaturedGallery />
      <AvailabilityMarquee />
      <AboutUs scrollToSection={scrollToSection} />
      <Testimonials />
      <Contact />
      <Marquee />
      <Footer />
    </div>
  );
};

export default App;
