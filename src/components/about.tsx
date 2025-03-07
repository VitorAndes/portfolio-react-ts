import { Contact } from "./contact";

export function About() {
	return (
		<div className="h-full">
			<div className="flex flex-col gap-6 ">
				<img
					src="https://github.com/vitorandes.png"
					alt="foto de Vitor Andes"
					draggable="false"
					loading="lazy"
					className="w-40 md:w-80 rounded-xl shadow shadow-violet-600"
				/>
				<div className="flex flex-col gap-5 ">
					<h1 className="flex flex-col font-Bree-serif leading-none gap-1 text-xl">
						Olá ! Sou Vitor Andes{" "}
						<span className="font-Bree-serif font-semibold w-[250px] leading-none inline-block relative overflow-hidden text-transparent before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:border-r-4 before:border-violet-600 before:overflow-hidden before:from-violet-300 before:to-violet-600 before:bg-linear-to-r before:bg-clip-text before:animate-load before:content-['um_desenvolvedor_frontend']">
							um_desenvolvedor_frontend
						</span>
					</h1>
				</div>
				<Contact />
			</div>
		</div>
	);
}
