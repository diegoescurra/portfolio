import React, { useEffect, useState } from 'react';
import './navbar.module.css'


export const Navbar = () => {

  const [activeSection, setActiveSection] = useState(null);

  
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const { id, offsetTop, clientHeight } = section;
      const offset = offsetTop - 1;

      if (scrollY >= offset && scrollY < offset + clientHeight) {
        setActiveSection(id);
      }
    });
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <header>
      <nav id="navbar" className="navbar">
     
      <a data-scroll="home" href="#home" className={activeSection === "home" ? "active" : ""}>
       
        Home
      </a>
      <a data-scroll="about" href="#about" className={activeSection === "about" ? "active" : ""}>
       
        About
      </a>
     
      <a data-scroll="contact" href="#contact" className={activeSection === "contact" ? "active" : ""}>
        
        Contacto
      </a>
    </nav>
    </header>
  );
};
