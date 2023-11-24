import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Layout } from "../Layout";
import {  Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "../shareds/footer/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Hero } from "./Hero";

export const Home = () => {
  const img = useRef();
  const text = useRef();
  const about = useRef();
  const contact = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(img.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.from(text.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        about.current,
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.3,
          scrollTrigger: { trigger: about.current },
        }
      );
      gsap.fromTo(
        contact.current,
        { opacity: 0, x: -2200 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: 0.3,
          scrollTrigger: { trigger: contact.current },
        }
      );
    });
    return () => ctx.revert();
  }, []);


  return (
    <>
      <Layout >
     
       
          <Hero />
       
        
        <section ref={about} id="about" >
          <Projects />
        </section>
        <section
          ref={contact}
          id="contact"
         
        >
          <Contact />
        </section>
      </Layout>
      <Footer />
    </>
  );
};
