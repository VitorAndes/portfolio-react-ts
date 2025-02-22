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
					className="w-40 md:w-52 rounded-md border border-white shadow-sm shadow-violet-600"
				/>

				<div className="flex flex-col gap-5 ">
					<h1 className="flex flex-col font-Bree-serif font-semibold leading-none gap-1 text-lg">
						Hey ! I'm Vitor Andes{" "}
						<span className="font-Bree-serif font-semibold leading-none  bg-linear-to-r from-white to-violet-600 inline-block text-transparent bg-clip-text">
							a web developer frontend
						</span>
					</h1>
				</div>
			</div>
			<div className="flex flex-col justify-between gap-3">
				<div className="flex flex-col gap-3 max-w-xl text-start">
					<h1 className="font-Bree-serif font-semibold leading-none text-lg">
						About
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
					<h1 className="font-Bree-serif font-semibold leaidng-none text-lg">
						Technologies
					</h1>
					<Technologies />
				</div>
			</div>
		</div>
	);
}
