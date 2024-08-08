import estilos from "./card.module.css";
import {
  NodeJSIcon,
  JavaScriptIcon,
  ReactJsIcon,
  MySQLIcon,
  PostgreSQLIcon,
  JQueryIcon,
  GithubIcon,
} from "../Icons";

export const Cards = (props) => {
  const iconComponents = {
    NodeJSIcon,
    JavaScriptIcon,
    JQueryIcon,
    ReactJsIcon,
    MySQLIcon,
    PostgreSQLIcon,
  };

  return (
    <article className="max-w-sm rounded overflow-hidden shadow-white shadow">
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
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <div className="flex justify-center md:justify-start py-2">
          {props.icon.map((iconName, index) => {
            const IconComponent = iconComponents[iconName];
            return (
              <div key={index} className="w-7 h-7 rounded-full mr-2">
                {" "}
                {IconComponent ? <IconComponent /> : null}{" "}
              </div>
            );
          })}
        </div>
        <p className="text-gray-400 text-base h-20">{props.description}</p>
      </div>
      <div className="flex items-center gap-4 justify-center lg:justify-normal w-full px-5 py-3">
        {props.href && (
          <a
            target="_blank"
            href={props.href}
            rel="noreferrer"
            className="lg:flex lg:justify-start bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 "
          >
            {props.buttontxt}
          </a>
        )}
        {props.github && (
          <a
            target="_blank"
            href={props.href2}
            rel="noreferrer"
            className="lg:flex lg:justify-end lg:w-full "
          >
            <GithubIcon className={"w-9 lg:w-10 h-9 lg:h-10 hover:scale-105 duration-300"} />
          </a>
        )}
      </div>
    </article>
  );
};
