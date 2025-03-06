import { DataProjects } from "@/data/dataProjects";
import { Link } from "lucide-react";
import { Badge } from "./ui/badge";

export function Projects() {
	return (
		<div className="flex flex-col gap-5 mt-4">
			{DataProjects.map((project) => (
				<div key={project.title}>
					<div className="flex flex-col gap-5">
						<a
							className="w-96 md:w-[700px]"
							href={project.url}
							draggable="false"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={project.image}
								draggable="false"
								className="w-full lg:h-96 shadow-sm shadow-violet-600 transition-all duration-500 border border-violet-600 hover:shadow-zinc-200  hover:scale-105 rounded-3xl hover:animate-pulse"
								alt="Imagem do projeto"
							/>
						</a>

						<div className="flex-1">
							<a
								href={project.href}
								target="_blank"
								className="text-2xl font-Bree-serif inline-flex items-center gap-2  mt-4 md:mt-0 hover:text-violet-600 transition-colors"
								rel="noreferrer"
							>
								{project.title}
								<Link size={16} />
							</a>
							<div className="flex flex-col h-full pb-16 justify-between">
								<p className="font-Averia-serif text-zinc-300 text-xl font-light my-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<Badge key={tech}>{tech}</Badge>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
