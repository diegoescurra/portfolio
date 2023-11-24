import { Cards } from "../shareds/Cards";
import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section className="w-full" id="about">
      <div className="w-full">
        <h2 className="text-arsenic p-4 mb-4 text-5xl text-center">Proyectos</h2>

        <div className="grid grid-cols-1 gap-4 justify-center w-full lg:grid-cols-2">
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
