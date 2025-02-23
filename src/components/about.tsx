import { CircleUserRound, Laptop } from "lucide-react";
import { Technologies } from "./technologies";
export function About() {
	return (
		<div className="flex flex-col md:flex-row justify-center h-full gap-12 ">
			<div className="flex flex-col gap-6 ">
				<img
					src="https://github.com/vitorandes.png"
					alt="foto de Vitor Andes"
					draggable="false"
					loading="lazy"
					className="w-40 md:w-52 rounded-xl shadow-xs shadow-violet-300"
				/>

				<div className="flex flex-col gap-5 ">
					<h1 className="flex flex-col font-Bree-serif leading-none gap-1 text-xl ">
						Olá ! Sou Vitor Andes{" "}
						<span className="font-Bree-serif font-semibold w-[250px] leading-none inline-block relative overflow-hidden text-transparent before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:border-r-4 before:border-violet-600 before:overflow-hidden before:from-violet-300 before:to-violet-600 before:bg-linear-to-r before:bg-clip-text before:animate-load before:content-['um_desenvolvedor_frontend']">
							um_desenvolvedor_frontend
						</span>
					</h1>
				</div>
			</div>
			<div className="flex flex-col justify-between gap-3">
				<div className="flex flex-col gap-3 max-w-xl text-start">
					<h1 className="font-Bree-serif flex items-center gap-2 leading-none text-lg">
						<CircleUserRound className="size-5 text-violet-600" /> Sobre mim
					</h1>
					<p className="font-Averia-serif text-zinc-300 tracking-wide leading-5 w-96">
						Um desenvolvedor especializado em front-end. Com um histórico sólido
						em{" "}
						<strong className="font-Bree-serif font-semibold text-violet-600">
							React, typescript, Javascript e node js
						</strong>
						. Meu objetivo é continuar crescendo na área de desenvolvimento web,
						aplicando minhas habilidades para criar soluções inovadoras.{" "}
					</p>
				</div>
				<div className="flex flex-col gap-3 max-w-xl text-start">
					<h1 className="font-Bree-serif flex items-center gap-2 leaidng-none text-lg">
						<Laptop className="text-violet-600 inline size-5" /> Tecnologias
					</h1>
					<Technologies />
				</div>
			</div>
		</div>
	);
}
