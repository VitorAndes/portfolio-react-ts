import { DataLinks } from "@/data/dataLinks";
import { Mail } from "lucide-react";

export function Contact() {
	return (
		<>
			<div className="flex flex-col gap-12 lg:gap-24 flex-1 leading-relaxed">
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
									<LinkIcon className="hover:text-violet-600" />
									<a
										target="_blank"
										rel="noreferrer"
										className="hover:text-violet-600"
										href={link.href}
									>
										{link.name}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<img
				className="min-w-20 max-w-3xl rounded-3xl shadow shadow-violet-600"
				draggable="false"
				src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1738010718~exp=1738014318~hmac=b7e53e125127900539629df5826824883392204473370b275042919fc592f04c&w=740"
				alt="sending message"
			/>
		</>
	);
}
