import { DataProjects } from "@/data/dataProjects";
import { Link } from "lucide-react";
import { Badge } from "./ui/badge";

export function Projects() {
	return (
		<>
			{DataProjects.map((project) => (
				<div className="p-4" key={project.title}>
					{project.right ? (
						<div className="flex flex-col lg:flex-row justify-between items-center md:items-stretch gap-5">
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
									className="w-full lg:h-96 shadow-sm shadow-violet-600 transition-all duration-500 border border-violet-600 hover:shadow-zinc-200 rounded-tl-[40px] rounded-b-[40px] hover:scale-105 hover:rounded-xl hover:animate-pulse"
									alt="Imagem do projeto"
								/>
							</a>

							<div className="flex-1">
								<a
									href={project.href}
									target="_blank"
									className="text-lg font-Bree-serif inline-flex items-center gap-2  mt-4 md:mt-0 hover:text-violet-600 transition-colors"
									rel="noreferrer"
								>
									{project.title}
									<Link size={16} />
								</a>
								<div className="flex flex-col h-full pb-16 justify-between">
									<p className="font-Averia-serif text-zinc-300 text-base font-light my-4">
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
					) : (
						<div className="flex flex-col-reverse lg:flex-row justify-between items-center md:items-stretch gap-5">
							<div className="flex-1">
								<a
									href={project.href}
									target="_blank"
									className="font-Bree-serif text-lg inline-flex items-center gap-2 text-white mt-4 md:mt-0 hover:text-violet-600 transition-colors"
									rel="noreferrer"
								>
									{project.title}
									<Link size={16} />
								</a>
								<div className="flex flex-col h-full pb-16 justify-between">
									<p className="font-Averia-serif text-zinc-300 text-base font-light my-4">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<Badge key={tech}>{tech}</Badge>
										))}
									</div>
								</div>
							</div>
							<a
								className="w-96	md:w-[700px]"
								href={project.url}
								target="_blank"
								rel="noreferrer"
								draggable="false"
							>
								<img
									src={project.image}
									draggable="false"
									className="w-full lg:h-96 shadow-sm shadow-violet-600 transition-all duration-500 border border-violet-600 hover:shadow-zinc-200 rounded-tr-[40px] rounded-b-[40px] hover:scale-105 hover:rounded-xl hover:animate-pulse"
									alt="Imagem do projeto"
								/>
							</a>
						</div>
					)}
				</div>
			))}
		</>
	);
}
