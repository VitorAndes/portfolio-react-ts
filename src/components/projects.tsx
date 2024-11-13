import { Separator } from "@/components/ui/separator";
import { DataProjects } from "@/data/dataProjects";
import { Link } from "lucide-react";
import { Badge } from "./ui/badge";

export function Projects() {
  return (
    <>
      <h1 className="font-bold text-xl text-white">Projects</h1>
      <Separator className="my-3" />

      {DataProjects.map((project, index) => {
        return (
          <div key={index}>
            <a href={project.url} target="_blank">
              <img
                src={project.image}
                className="w-full h-full rounded-lg shadow-md hover:shadow-white transition-all duration-500 border border-slate-400"
                alt="Imagem do projeto"
              />
            </a>

            <a
              href={project.href}
              target="_blank"
              className="text-lg inline-flex items-center gap-2 text-white font-bold mt-4 hover:text-violet-600 transition-colors"
            >
              {project.title}
              <Link size={16} />
            </a>
            <div className="mt-2 mb-11">
              <p className="text-base mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant={"secondary"}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
