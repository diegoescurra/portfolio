import { Layout } from "../Layout";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Work } from "./Work";
import About from "./About";
import ExperienceShowcase from "./ExperienceShowcase";


export const Home = () => {

  return (
    <Layout>
      <Hero />
      <Work />
      <ExperienceShowcase />
      <About />
      <Contact />
    </Layout>
  );
};
