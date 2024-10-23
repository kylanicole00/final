import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(section);
  };

  return (
    <div className="container">
      <Navbar activeSection={activeSection} handleScroll={handleScroll} />
      <section id="Home">
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;