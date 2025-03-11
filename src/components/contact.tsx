import { DataLinks } from "@/data/dataLinks";
import { motion } from "motion/react";

export function Contact() {
	const transition = { duration: 0.8, delay: 1, ease: [0, 0.71, 0.2, 1.01] };

	const initial = {
		y: -100,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (
		<>
			<div className="flex  gap-12 lg:gap-24 flex-1 leading-relaxed">
				<div>
					<motion.h2
						initial={initial}
						animate={animate}
						transition={transition}
						className="font-Bree-serif text-2xl mb-4"
					>
						Redes Sociais
					</motion.h2>
					<ul className="inline-flex md:flex-col font-Averia-serif font-light gap-5">
						{DataLinks.map((link) => {
							const LinkIcon = link.icon;
							return (
								<motion.li
									initial={initial}
									animate={animate}
									transition={link.transition}
									key={link.id}
									className="inline-flex gap-2 items-center text-lg font-light  hover:text-violet-600 "
								>
									<LinkIcon className="text-violet-600 " />
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
