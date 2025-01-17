import { Separator } from "@/components/ui/separator";
import { DataProjects } from "@/data/dataProjects";
import { Link } from "lucide-react";
import { Badge } from "./ui/badge";

export function Projects() {
	return (
		<>
			<h1 className="font-bold text-xl text-white">Projects</h1>
			<Separator className="mt-3 mb-8" />

			<div className="flex flex-wrap gap-8">
				{DataProjects.map((project) => (
					<div className="flex justify-between gap-5" key={project.title}>
						<a
							className="w-[700px]"
							href={project.url}
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={project.image}
								className="w-full h-96 rounded-lg shadow shadow-violet-600 transition-all duration-500 border border-violet-600 hover:shadow-zinc-200"
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
				))}
			</div>
		</>
	);
}
