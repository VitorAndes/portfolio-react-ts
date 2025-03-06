import { DataLinks } from "@/data/dataLinks";

export function Contact() {
	// const [isShowToast, setIsShowToast] = useState(false);

	// function copyInviteLink() {
	// 	navigator.clipboard.writeText("vitorandes04@gmail.com");
	// 	showToast();
	// }

	// function showToast() {
	// 	setIsShowToast(true);
	// 	setTimeout(() => setIsShowToast(false), 2100);
	// }

	return (
		<>
			<div className="flex flex-col gap-12 lg:gap-24 flex-1 leading-relaxed">
				<div>
					<h2 className="font-Bree-serif text-2xl mb-4">Redes Sociais</h2>
					<ul className="inline-flex flex-col font-Averia-serif font-light gap-3">
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

			{/* <Toast className={`${isShowToast ? "animate-toast" : "hidden"}`}>
				<h1>Email copiado para a área de transferência!</h1>
			</Toast> */}
		</>
	);
}
