import { Layout } from "../Layout";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Work } from "./Work";
import Certificates from "./Certificates";


export const Home = () => {


  return (
 
    <Layout>
      <Hero />
      <Work />
      <Projects />
      <Certificates />
      <Contact />
    </Layout>
  );
};
