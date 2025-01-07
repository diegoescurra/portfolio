import {
  NodeJSIcon,
  JavaScriptIcon,
  ReactJsIcon,
  MySQLIcon,
  PostgreSQLIcon,
  JQueryIcon,
  JavaIcon,
  SpringIcon,
} from "../Icons";
import { ExternalLink, Github } from "lucide-react";

export const Cards = (props) => {
  const iconComponents = {
    NodeJSIcon,
    JavaScriptIcon,
    JQueryIcon,
    ReactJsIcon,
    MySQLIcon,
    JavaIcon,
    SpringIcon,
    PostgreSQLIcon,
  };

  return (
    <article className={`group bg-white rounded-xl overflow-hidden shadow-lg  ${props.gif && 'hover:shadow-xl transition-all duration-300 hover:-translate-y-2'}`}>
      <div className="overflow-hidden relative">
        <a href={props.href} target="_blank" rel="noreferrer">
          <img
            className="w-full aspect-video default-image"
            src={props.img}
            alt={props.title}
          />
          {props.gif && (
            <img
              className="w-full aspect-video hover-image"
              src={props.gif}
              alt={props.title}
            />
          )}
        </a>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 flex gap-3">
           {
            props.github && (
              <a
              href={props.github}
              className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              target="_blank" rel="noreferrer"
            >
              <Github size={20} className="text-gray-900" />
            </a>
            )
           }
           {
            props.href && (
              <a
              href={props.href}
              className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              target="_blank" rel="noreferrer"
            >
              <ExternalLink size={20} className="text-gray-900" />
            </a>
            )
           }
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{props.title}</div>
        <div className="flex justify-center md:justify-start py-2">
          {props.icon.map((iconName, index) => {
            const IconComponent = iconComponents[iconName];
            return (
              <div key={index} className="w-8 h-8 rounded-full mr-2">
                {" "}
                {IconComponent ? <IconComponent /> : null}{" "}
              </div>
            );
          })}
        </div>
        <p className="text-gray-700 text-base h-20">{props.description}</p>
      </div>
    </article>
  );
};
