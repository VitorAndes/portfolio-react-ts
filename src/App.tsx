import { CircleUserRound, MonitorIcon, TerminalIcon } from "lucide-react";
import { easeInOut, motion } from "motion/react";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Technologies } from "./components/technologies";
import "./index.css";

export default function App() {
	const initial = {
		opacity: 0,
		translateX: -100,
	};

	const animate = { opacity: 1, scale: 1, translateX: 0 };

	return (
		<motion.div
			initial={{ translateY: -200, opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1, translateY: 0 }}
			transition={{ duration: 0.8, delay: 0.1, ease: easeInOut }}
			className="flex flex-col lg:flex-row justify-center lg:h-[950px] max-w-7xl bg-[#242629]/40 rounded-2xl overflow-hidden shadow shadow-violet-300 backdrop-blur-sm m-5"
		>
			<aside
				id="About"
				className=" lg:w-96 py-5 px-6  border-violet-600 shadow shadow-violet-300 border-r"
			>
				<About />
			</aside>

			<main className="w-full flex flex-col mt-5 lg:mt-0 gap-12 px-6 lg:px-12 py-5  overflow-y-scroll overflow-hidden">
				<section className="flex flex-col justify-center gap-3">
					<div className="flex flex-col gap-3 text-start">
						<motion.h1
							initial={initial}
							animate={animate}
							transition={{ ease: easeInOut, delay: 0.5 }}
							className="font-Bree-serif flex items-start gap-2 leading-none text-3xl"
						>
							<CircleUserRound className="size-10 text-violet-600" /> Sobre mim
						</motion.h1>
						<motion.p
							initial={initial}
							animate={animate}
							transition={{ ease: easeInOut, delay: 1 }}
							className="font-Averia-serif text-xl text-zinc-300 tracking-wide leading-6 lg:w-[650px] mt-4"
						>
							Um desenvolvedor especializado em front-end. Com um histórico
							sólido em{" "}
							<strong className="font-Bree-serif font-semibold text-violet-600">
								React, typescript, Javascript e node js
							</strong>
							. Meu objetivo é continuar crescendo na área de desenvolvimento
							web, aplicando minhas habilidades para criar soluções inovadoras.{" "}
						</motion.p>
					</div>
				</section>
				<section className="flex flex-col gap-3">
					<motion.h1
						initial={initial}
						animate={animate}
						transition={{ ease: easeInOut, delay: 1.5 }}
						className="font-Bree-serif flex items-start gap-2 leading-none text-3xl"
					>
						<TerminalIcon className="text-violet-600 inline size-10" />{" "}
						Tecnologias
					</motion.h1>
					<Technologies />
				</section>
				<section id="Projects" className="flex flex-col gap-3 ">
					<motion.h1
						initial={initial}
						animate={animate}
						transition={{ ease: easeInOut, delay: 2.5 }}
						className="font-Bree-serif flex items-start gap-2 leaidng-none text-3xl"
					>
						<MonitorIcon className="text-violet-600 inline size-10" />
						Projetos
					</motion.h1>

					<Projects />
				</section>
			</main>
		</motion.div>
	);
}
