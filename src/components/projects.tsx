import { DataProjects } from "@/data/dataProjects";
import { Link } from "lucide-react";
import { easeInOut, motion } from "motion/react";

export function Projects() {
	const initial = {
		opacity: 0,
		translateX: -100,
	};

	const animate = { opacity: 1, scale: 1, translateX: 0 };
	return (
		<div className="flex flex-col gap-5 mt-4">
			{DataProjects.map((project) => (
				<div key={project.title}>
					<div className="flex flex-col gap-5">
						<motion.a
							initial={initial}
							animate={animate}
							transition={{ ease: easeInOut, delay: 3 }}
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
						</motion.a>

						<div className="flex-1">
							<motion.a
								initial={initial}
								animate={animate}
								transition={{ ease: easeInOut, delay: 3.2 }}
								href={project.href}
								target="_blank"
								className="text-2xl font-Bree-serif inline-flex items-center gap-2  mt-4 md:mt-0 hover:text-violet-600 transition-colors"
								rel="noreferrer"
							>
								{project.title}
								<Link size={16} />
							</motion.a>
							<div className="flex flex-col h-full pb-16 justify-between">
								<motion.p
									initial={initial}
									animate={animate}
									transition={{ ease: easeInOut, delay: 3.4 }}
									className="font-Averia-serif text-zinc-300 text-xl font-light my-4"
								>
									{project.description}
								</motion.p>
								<motion.div
									initial={initial}
									animate={animate}
									transition={{ ease: easeInOut, delay: 3.5 }}
									className="flex flex-wrap gap-2"
								>
									{project.technologies.map((tech) => (
										<motion.div
											className="bg-[#16161A] px-5 h-9 font-Bree-serif rounded-md flex items-center hover:bg-violet-600 transition-all shadow shadow-violet-600"
											key={tech}
										>
											{tech}
										</motion.div>
									))}
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
