import { Separator } from "@/components/ui/separator";
import { DataLinks } from "../data/dataLinks";
import { Technologies } from "./technologies";

export function About() {
	return (
		<>
			<figure className="flex-1">
				<img
					src="https://github.com/vitorandes.png"
					alt="foto de Vitor Andes"
					className="w-96 rounded-3xl shadow shadow-violet-600"
				/>
			</figure>
			<div className="flex-1">
				<h2 className="text-lg font-bold text-white">About</h2>
				<Separator className="mt-3 mb-8" />
				<p className="text-sm lg:text-base lg:leading-relaxed">
					Me chamo Vitor andes dos santos, um Desenvolvedor especializado em
					front-end. Com um histórico sólido em{" "}
					<strong className="text-violet-500 font-bold">
						React, Typescript, Angular, vue.js e node
					</strong>
					.Meu objetivo é continuar crescendo na área de Desenvolvimento web,
					aplicando minhas habilidades para criar soluções inovadoras.
				</p>
				<div className="flex gap-2 mt-2 mb-8">
					{DataLinks.map((link, index) => {
						const LinkIcon = link.icon;
						return (
							<a
								className="text-white hover:text-violet-600 hover:scale-105 transition-all rounded-md mt-2"
								href={link.href}
								target="_blank"
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								rel="noreferrer"
							>
								<LinkIcon size={24} />
							</a>
						);
					})}
				</div>

				<Technologies />
			</div>
		</>
	);
}
