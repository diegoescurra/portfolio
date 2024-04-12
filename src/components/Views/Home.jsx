import { Layout } from "../Layout";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Work } from "./Work";
import { useEffect, useState } from "react";
import About from "./About";
import Certificates from "./Certificates";

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
        className="light-circle"
        style={{
          background: `radial-gradient(700px at ${cursorPos.x}px ${cursorPos.y}px, rgba(164, 216, 216, 0.28), transparent 70%)`
        }}
      />
      <Hero />
      {/* <About /> */}
      <Work />
      <Projects />
      <Certificates />
      <Contact />
    </Layout>
  );
};
