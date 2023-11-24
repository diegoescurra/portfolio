import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Layout } from "../Layout";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Contact />
    </Layout>
  );
};
