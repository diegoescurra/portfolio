import { Cards } from "../shareds/Cards";
import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section className="w-full bg-indigo-50">
      <div className="w-full px-4 py-10 max-w-screen-xl mx-auto">
        <h3 className="text-2xl font-semibold text-center text-black md:text-2xl lg:text-4xl mb-4">Otros Proyectos</h3>
        <div className="grid grid-cols-1 gap-8 justify-center w-full md:grid-cols-2 xl:grid-cols-3">
          {projects.map((card) => (
            <div className="flex justify-center" key={card.id}>
              <Cards {...card} />
            </div>
          ))}
        </div>
        </div>
    </section>
  );
};
