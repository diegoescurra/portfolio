import { Layout } from "../Layout";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Work } from "./Work";
import Certificates from "./Certificates";
import About from "./About";


export const Home = () => {

  return (
    <Layout>
      <Hero />
      <About />
      <Work />
      {/* <Projects /> */}
      <Certificates />
      <Contact />
    </Layout>
  );
};
