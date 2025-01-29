import { motion } from "motion/react";
export function About() {
	return (
		<>
			<motion.figure
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
			>
				<img
					src="https://github.com/vitorandes.png"
					alt="foto de Vitor Andes"
					draggable="false"
					loading="lazy"
					className="w-64 rounded-full border border-white shadow shadow-violet-600"
				/>
			</motion.figure>
			<motion.h1
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="text-4xl w-96 text-center font-bold text-white -tracking-wider"
			>
				Hey ! I'm Vitor Andes, a{" "}
				<h1 className="bg-gradient-to-r from-zinc-200 via-indigo-400 to-violet-600 inline-block text-transparent bg-clip-text ">
					{" "}
					web developer frontend
				</h1>
			</motion.h1>
		</>
	);
}
