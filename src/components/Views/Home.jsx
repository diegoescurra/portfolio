import { Layout } from "../Layout";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Work } from "./Work";
import About from "./About";
import ExperienceShowcase from "./ExperienceShowcase";
import { Chat } from "../shareds/Chat";


export const Home = () => {

  return (
    <Layout>
      <Hero />
      <Work />
      <ExperienceShowcase />
      <About />
      <Chat />
      <Contact />
    </Layout>
  );
};
