import { Cards } from "../shareds/Cards";
import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section className="w-full" >
      <div className="w-full px-4 py-16 max-w-screen-xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[var(--ink-strong)] mb-4">Casos seleccionados</h2>
        <p>Una muestra de productos que desarrollo para resolver flujos concretos de negocio.</p>
      </div>
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
