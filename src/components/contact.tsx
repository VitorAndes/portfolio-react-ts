import { DataLinks } from "@/data/dataLinks";
import { motion } from "motion/react";

export function Contact() {
	const transition = { duration: 0.8, delay: 1, ease: [0, 0.71, 0.2, 1.01] };

	const initial = {
		y: -100,
		opacity: 0,
		scale: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
		scale: 1,
	};

	return (
		<>
			<div className="flex flex-col gap-12 lg:gap-24 flex-1 leading-relaxed">
				<div>
					<motion.h2
						initial={initial}
						animate={animate}
						transition={transition}
						className="font-Bree-serif text-2xl mb-4"
					>
						Redes Sociais
					</motion.h2>
					<ul className="inline-flex flex-col font-Averia-serif font-light gap-3">
						{DataLinks.map((link) => {
							const LinkIcon = link.icon;
							return (
								<motion.li
									initial={initial}
									animate={animate}
									transition={link.transition}
									key={link.id}
									className="inline-flex gap-2 items-center text-lg font-light transition-all hover:text-violet-600 hover:scale-105 hover:-translate-y-1 active:translate-y-0"
								>
									<LinkIcon className="text-violet-600" />
									<a target="_blank" rel="noreferrer" href={link.href}>
										{link.name}
									</a>
								</motion.li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}
