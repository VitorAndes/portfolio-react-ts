import { Badge } from "./ui/badge";
import { Link } from "lucide-react";
import { DataProjects } from "@/data/dataProjects";
import { Separator } from "@/components/ui/separator";

export function Projects() {
  return (
    <>
      <h1 className="font-bold text-white">Projects</h1>
      <Separator className="my-2" />

      {DataProjects.map((project, index) => {
        return (
          <div key={index}>
            <div>
              <img
                src={project.image}
                className="w-full h-48 rounded-lg shadow-md hover:shadow-white transition-all duration-500 border border-violet-400"
                alt="Imagem do projeto"
              />

              <a
                href={project.href}
                className="flex items-center gap-2 font-bold text-white text-base mt-4 hover:text-black transition-colors"
              >
                {project.title}
                <Link size={16} />
              </a>
            </div>
            <div className="mt-2 mb-10">
              <p className="text-sm font-thin mb-4">{project.description}</p>
              <div className="flex gap-1">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant={"secondary"}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator className="mb-2" />
          </div>
        );
      })}
    </>
  );
}
