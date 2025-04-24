import { motion } from "motion/react";
import { Contact } from "./contact";

export function About() {
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
		<div className="flex flex-col justify-between h-full ">
			<div className="flex flex-col gap-6 ">
				<div>
					<motion.img
						initial={initial}
						animate={animate}
						transition={{
							duration: 0.8,
							delay: 0.5,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						src="https://github.com/vitorandes.png"
						alt="foto de Vitor Andes"
						draggable="false"
						loading="lazy"
						className="w-60 md:w-80 mb-5 rounded-xl shadow-xs shadow-violet-600"
					/>

					<motion.h1
						initial={initial}
						animate={animate}
						transition={{
							duration: 0.8,
							delay: 0.6,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className="flex flex-col font-Bree-serif leading-none gap-1 text-2xl lg:text-xl"
					>
						Olá ! Sou Vitor Andes{" "}
						<span className="font-Bree-serif font-semibold w-[300px] md:w-[250px] leading-none inline-block relative overflow-hidden text-transparent before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:border-r-4 before:border-violet-600 before:overflow-hidden before:from-violet-300 before:to-violet-600 before:bg-linear-to-r before:bg-clip-text before:animate-load before:content-['um_desenvolvedor_frontend']">
							um_desenvolvedor_frontend
						</span>
					</motion.h1>
				</div>

				<Contact />
			</div>
		</div>
	);
}
