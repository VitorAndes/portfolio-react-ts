import { motion } from "motion/react";
import { Technologies } from "./technologies";
export function About() {
	const transition = {
		duration: 2,
		delay: 0.3,
		bounce: 0.25,
	};

	const animate = {
		opacity: 1,
		scale: 1,
	};

	return (
		<div className="flex flex-col md:text-start md:items-start md:flex-row gap-10 md:gap-0">
			<div className="flex flex-row md:flex-col gap-6 px-4">
				<motion.figure
					initial={{ opacity: 0, scale: 0 }}
					animate={animate}
					transition={animate}
				>
					<img
						src="https://github.com/vitorandes.png"
						alt="foto de Vitor Andes"
						draggable="false"
						loading="lazy"
						className="w-40 md:max-w-60 rounded-md border border-white shadow shadow-violet-600"
					/>
				</motion.figure>
				<div className="flex flex-col gap-5">
					<motion.h1
						initial={{ opacity: 0, scale: 0 }}
						animate={animate}
						transition={transition}
						className="font-BreeSerif text-start text-lg md:text-3xl w-56 md:w-96 text-white"
					>
						Hey ! I'm Vitor Andes{" "}
						<span className="font-AveriaSerif bg-gradient-to-r from-white to-violet-600 inline-block text-transparent bg-clip-text ">
							a web developer frontend
						</span>
					</motion.h1>
					<a href="#Contact" className="inline-block w-24">
						<motion.button
							initial={{ opacity: 0, scale: 0 }}
							animate={animate}
							transition={transition}
							className="font-BreeSerif w-full p-1 rounded-md text-white bg-violet-600 hover:bg-white hover:text-violet-600 transition-all "
							type="button"
						>
							Contact
						</motion.button>
					</a>
				</div>
			</div>
			<div className="flex flex-col gap-3 px-4">
				<div className="flex flex-col gap-3 max-w-xl text-start">
					<h1 className="font-BreeSerif text-lg">About</h1>
					<p className="font-AveriaSerif text-zinc-300 tracking-wide leading-6">
						Um desenvolvedor especializado em front-end. Com um histórico sólido
						em{" "}
						<strong className="text-violet-600">
							React, typescript, Javascript e node js
						</strong>
						. Meu objetivo é continuar crescendo na área de desenvolvimento web,
						aplicando sminnhas habilidades para criar soluções inovadoras.{" "}
					</p>
				</div>
				<div className="flex flex-col gap-3 max-w-xl text-start">
					<h1 className="font-BreeSerif text-lg">Technologies</h1>
					<Technologies />
				</div>
			</div>
		</div>
	);
}
