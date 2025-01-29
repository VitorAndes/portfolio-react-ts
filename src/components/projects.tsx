import { DataProjects } from "@/data/dataProjects";
import { Link } from "lucide-react";
import { Badge } from "./ui/badge";

export function Projects() {
	return (
		<>
			<div className="flex flex-col justify-center items-center gap-32 p-12">
				{DataProjects.map((project) => (
					<div className="max-w-7xl" key={project.title}>
						{project.right ? (
							<div className="flex justify-between gap-5">
								<a
									className="w-[700px]"
									href={project.url}
									draggable="false"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={project.image}
										draggable="false"
										className="w-full h-96 shadow shadow-violet-600 transition-all duration-500 border border-violet-600 hover:shadow-zinc-200 rounded-tl-[40px] rounded-b-[40px]"
										alt="Imagem do projeto"
									/>
								</a>

								<div className="flex-1">
									<a
										href={project.href}
										target="_blank"
										className="text-lg inline-flex items-center gap-2 text-white font-bold mt-4 hover:text-violet-600 transition-colors"
										rel="noreferrer"
									>
										{project.title}
										<Link size={16} />
									</a>
									<div className="flex flex-col h-full pb-16 justify-between">
										<p className="text-base font-light my-4">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-1">
											{project.technologies.map((tech) => (
												<Badge key={tech} variant={"secondary"}>
													{tech}
												</Badge>
											))}
										</div>
									</div>
								</div>
							</div>
						) : (
							<div className="flex justify-between gap-5">
								<div className="flex-1">
									<a
										href={project.href}
										target="_blank"
										className="text-lg inline-flex items-center gap-2 text-white font-bold mt-4 hover:text-violet-600 transition-colors"
										rel="noreferrer"
									>
										{project.title}
										<Link size={16} />
									</a>
									<div className="flex flex-col h-full pb-16 justify-between">
										<p className="text-base font-light my-4">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-1">
											{project.technologies.map((tech) => (
												<Badge key={tech} variant={"secondary"}>
													{tech}
												</Badge>
											))}
										</div>
									</div>
								</div>
								<a
									className="w-[700px]"
									href={project.url}
									target="_blank"
									rel="noreferrer"
									draggable="false"
								>
									<img
										src={project.image}
										draggable="false"
										className="w-full h-96 shadow shadow-violet-600 transition-all duration-500 border border-violet-600 hover:shadow-zinc-200 rounded-tr-[40px] rounded-b-[40px]"
										alt="Imagem do projeto"
									/>
								</a>
							</div>
						)}
					</div>
				))}
			</div>
		</>
	);
}
