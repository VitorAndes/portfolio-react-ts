import { CircleUserRound, MonitorIcon, TerminalIcon } from "lucide-react";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Technologies } from "./components/technologies";
import "./index.css";

export default function App() {
	return (
		<div className="flex justify-center h-[950px] max-w-7xl bg-[#242629]/40 rounded-2xl overflow-hidden shadow shadow-violet-300 backdrop-blur-sm">
			<aside
				id="About"
				className=" w-96 p-4 border-violet-600 shadow shadow-violet-300 border-r"
			>
				<About />
			</aside>
			<main className="w-full flex flex-col gap-12 px-12 py-5 overflow-y-scroll overflow-hidden">
				<section className="flex flex-col justify-center gap-3">
					<div className="flex flex-col gap-3 text-start">
						<h1 className="font-Bree-serif flex items-start gap-2 leading-none text-3xl">
							<CircleUserRound className="size-10 text-violet-600" /> Sobre mim
						</h1>
						<p className="font-Averia-serif text-xl text-zinc-300 tracking-wide leading-6 w-[550px] mt-4">
							Um desenvolvedor especializado em front-end. Com um histórico
							sólido em{" "}
							<strong className="font-Bree-serif font-semibold text-violet-600">
								React, typescript, Javascript e node js
							</strong>
							. Meu objetivo é continuar crescendo na área de desenvolvimento
							web, aplicando minhas habilidades para criar soluções inovadoras.{" "}
						</p>
					</div>
				</section>
				<section className="flex flex-col gap-3">
					<h1 className="font-Bree-serif flex items-start gap-2 leading-none text-3xl">
						<TerminalIcon className="text-violet-600 inline size-10" />{" "}
						Tecnologias
					</h1>
					<Technologies />
				</section>
				<section id="Projects" className="flex flex-col gap-3 ">
					<h1 className="font-Bree-serif flex items-start gap-2 leaidng-none text-3xl">
						<MonitorIcon className="text-violet-600 inline size-10" />
						Projetos
					</h1>

					<Projects />
				</section>
			</main>
			{/* <Navigation /> */}
		</div>
	);
}
