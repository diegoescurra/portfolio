import { Cards } from "../shareds/Cards";
import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section className="w-full bg-[#ecf0f1] p-4">
      <div className="w-full">
        <h3 className="text-shadowc p-4 mb-4 text-2xl lg:text-4xl text-center tracking-widest">Otros Proyectos</h3>
        <div className="grid grid-cols-1 gap-16 justify-center w-full xl:grid-cols-2">
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
