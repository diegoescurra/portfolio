import { Cards } from "../shareds/Cards";
import { projects } from "../../data/projects";
import { FolderKanban } from "lucide-react";

export const Projects = () => {
  return (
    <section className="w-full py-20" id="proyectos">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--accent)]">
            <FolderKanban size={16} className="mr-2" /> Proyectos
          </div>
          <h2 className="text-4xl font-bold text-[var(--ink-strong)] mb-4">Casos seleccionados</h2>
          <p>Una muestra de productos que desarrollé para resolver flujos concretos de negocio.</p>
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
