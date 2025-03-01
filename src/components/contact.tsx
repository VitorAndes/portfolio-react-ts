import { DataLinks } from "@/data/dataLinks";
import { Mail } from "lucide-react";
import { useState } from "react";
import { Toast } from "./ui/toast";

export function Contact() {
	const [isShowToast, setIsShowToast] = useState(false);

	function copyInviteLink() {
		navigator.clipboard.writeText("vitorandes04@gmail.com");
		showToast();
	}

	function showToast() {
		setIsShowToast(true);
		setTimeout(() => setIsShowToast(false), 2100);
	}

	return (
		<>
			<div className="flex flex-col gap-12 lg:gap-24 flex-1 leading-relaxed">
				<div>
					<h1 className="font-Bree-serif leading-none text-2xl md:text-4xl mb-4">
						Entre em contato
					</h1>
					<p className="font-Averia-serif text-zinc-300 text-lg font-light">
						Tem alguma grande ideia ou marca para desenvolver e precisa de
						ajuda? entre em contato, adoraria ouvir sobre seu projeto e fornecer
						ajuda.
					</p>
				</div>

				<div>
					<h2 className="font-Bree-serif leading-none text-2xl  mb-4">Email</h2>

					<button
						type="button"
						onClick={copyInviteLink}
						className="font-Averia-serif inline-flex gap-2 items-center text-lg font-light hover:text-violet-600 transition-all cursor-copy"
					>
						<span>
							<Mail />
						</span>
						vitorandes04@gmail.com
					</button>
				</div>
				<div>
					<h2 className="font-Bree-serif text-2xl mb-4">Redes Sociais</h2>
					<ul className="inline-flex flex-col font-Averia-serif font-light   gap-3">
						{DataLinks.map((link) => {
							const LinkIcon = link.icon;
							return (
								<li
									key={link.id}
									className="inline-flex gap-2 items-center text-lg font-light hover:text-violet-600"
								>
									<LinkIcon />
									<a target="_blank" rel="noreferrer" href={link.href}>
										{link.name}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<img
				className="w-72 hidden lg:flex lg:flex-1 rounded-3xl shadow-sm shadow-violet-600"
				draggable="false"
				src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1738010718~exp=1738014318~hmac=b7e53e125127900539629df5826824883392204473370b275042919fc592f04c&w=740"
				alt="sending message"
			/>
			<Toast className={`${isShowToast ? "animate-toast" : "hidden"}`}>
				<h1>Email copiado para a área de transferência!</h1>
			</Toast>
		</>
	);
}
