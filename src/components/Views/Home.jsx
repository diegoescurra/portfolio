import { Layout } from "../Layout";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Work } from "./Work";
import { useEffect, useState } from "react";
import Certificates from "./Certificates";
import About from "./About";
import Skills from "./Skills";

export const Home = () => {

  const { scrollX, scrollY } = window;
  const [cursorPos, setCursorPos] = useState({ scrollX, scrollY  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ 
        x: e.clientX, 
        y: e.clientY + scrollY
      });
    };

    document.addEventListener('mousemove', handleMouseMove, {passive: true});

    return () => {
      document.removeEventListener('mousemove', handleMouseMove, {passive: true});
    };
  }, [scrollY]);

  return (
    <Layout>
     <div
        className="light-circle hidden lg:block"

        style={{
          backgroundColor:'transparent',
          top: `${cursorPos.y}px`,
          left: `${cursorPos.x}px`,
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          border: '3px solid #14213D',
          opacity: '.35'
        }}
      />
      <Hero />
      <Work />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};
