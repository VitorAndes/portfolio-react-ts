import { Separator } from "@/components/ui/separator";
import { DataProjects } from "@/data/dataProjects";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "lucide-react";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

export function Projects() {
	const plugin = useRef(Autoplay({ delay: 2000 }));
	return (
		<>
			<h1 className="font-bold text-xl text-white">Projects</h1>
			<Separator className="my-3" />

			<Carousel
				orientation="horizontal"
				plugins={[plugin.current]}
				className="w-full "
			>
				<CarouselContent>
					{DataProjects.map((project) => (
						<CarouselItem key={project.title}>
							<div key={project.title}>
								<a href={project.url} target="_blank" rel="noreferrer">
									<img
										src={project.image}
										className="w-full h-56 md:h-[600px] rounded-lg shadow-lg hover:shadow-violet-600 transition-all duration-500 border border-violet-600"
										alt="Imagem do projeto"
									/>
								</a>

								<a
									href={project.href}
									target="_blank"
									className="text-lg inline-flex items-center gap-2 text-white font-bold mt-4 hover:text-violet-600 transition-colors"
									rel="noreferrer"
								>
									{project.title}
									<Link size={16} />
								</a>
								<div className="mt-2 mb-11">
									<p className="text-base mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-1">
										{project.technologies.map((tech) => (
											<Badge key={tech} variant={"secondary"}>
												{tech}
											</Badge>
										))}
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</>
	);
}
