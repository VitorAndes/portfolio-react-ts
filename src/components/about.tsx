import { motion } from "motion/react";
export function About() {
	const transition = {
		duration: 4,
		delay: 0.5,
		bounce: 0.25,
	};

	const animate = {
		opacity: 1,
	};

	return (
		<>
			<motion.figure
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
			>
				<img
					src="https://github.com/vitorandes.png"
					alt="foto de Vitor Andes"
					draggable="false"
					loading="lazy"
					className="max-w-64 rounded-full border border-white shadow shadow-violet-600"
				/>
			</motion.figure>
			<motion.h1
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="md:text-4xl w-52 md:w-96 text-center font-bold text-white -tracking-wider"
			>
				Hey ! I'm Vitor Andes, a{" "}
				<motion.h1
					animate={animate}
					transition={transition}
					className="bg-gradient-to-r from-zinc-200 via-indigo-400 to-violet-600 inline-block text-transparent bg-clip-text "
				>
					web developer frontend
				</motion.h1>
			</motion.h1>
		</>
	);
}
