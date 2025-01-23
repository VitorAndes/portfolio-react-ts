import { DataLinks } from "@/data/dataLinks";
import { Mail, Send } from "lucide-react";

export function Contact() {
	return (
		<>
			<div className="flex flex-col gap-24 flex-1 leading-relaxed">
				<div>
					<h1 className="text-4xl font-bold mb-4">Entre em contato</h1>
					<p className="text-lg font-light">
						Tem alguma grande ideia ou marca para desenvolver e precisa de
						ajuda? entre em contato, adoraria ouvir sobre seu projeto e fornecer
						ajuda.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold mb-4">Email</h2>

					<p className="flex gap-2 items-center text-lg font-light">
						<span>
							<Mail />
						</span>
						vitorandes04@gmail.com
					</p>
				</div>
				<div>
					<h2 className="text-2xl font-bold mb-4">Redes Sociais</h2>
					<ul className="flex flex-col gap-3">
						{DataLinks.map((link) => {
							const LinkIcon = link.icon;
							return (
								<li
									key={link.id}
									className="flex gap-2 items-center text-lg font-light"
								>
									<LinkIcon />
									<a href={link.href}>{link.name}</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<form className="flex flex-col gap-8 flex-1" action="">
				<div className="flex flex-col gap-4 w-full">
					<label className="font-bold text-lg" htmlFor="name">
						Nome
					</label>
					<input
						className="p-2 rounded-md outline-none "
						id="Name"
						type="text"
					/>
				</div>
				<div className="flex flex-col gap-4 w-full">
					<label className="font-bold text-lg" htmlFor="Email">
						Email
					</label>
					<input
						className="p-2 rounded-md outline-none"
						id="Email"
						type="email"
					/>
				</div>
				<div className="flex flex-col gap-4 w-full">
					<label className="font-bold text-lg" htmlFor="Message">
						Mensagem
					</label>
					<textarea
						className="p-2 rounded-md outline-none resize-y"
						id="Message"
						rows={8}
					/>
				</div>
				<button
					className="flex items-center justify-center gap-2 font-bold bg-zinc-950 text-white p-4 shadow-sm shadow-violet-600 hover:bg-zinc-900"
					type="submit"
				>
					Enviar
					<Send />
				</button>
			</form>
		</>
	);
}
