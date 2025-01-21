export type ProjectType = {
	image: string;
	title: string;
	href: string;
	url: string;
	description: string;
	technologies: string[];
	right?: boolean;
};

export const DataProjects: ProjectType[] = [
	{
		image: "https://i.imgur.com/8OD1QFx.png",
		title: "Gerenciador de gastos",
		href: "https://github.com/VitorAndes/planilha-de-gastos",
		url: "https://andesfinance.vercel.app/",
		description: "um app desenvolvido para organizar os gastos",
		technologies: ["react", "typescript", "shadcnUI", "recharts"],
		right: true,
	},
	{
		image: "https://i.imgur.com/cjexL9v.png",
		title: "Nlw expert notes",
		href: "https://github.com/VitorAndes/nlw-expert-notes",
		url: "https://nlw-expert-notes-xi.vercel.app/",
		description:
			"Um app para criar e gerenciar notas de forma prática e intuitiva.",
		technologies: ["react", "tailwind", "typescript"],
	},
	{
		image: "https://i.imgur.com/5v6FdXK.png",
		title: "Planejador de metas semanais",
		href: "https://github.com/VitorAndes/nlw-pocket-frontend",
		url: "https://planejador-semanal-andes.vercel.app/",
		description:
			"um aplicativo desenvolvido para auxiliar os usuários na definição, acompanhamento e realização de suas metas semanais.",
		technologies: ["react", "typescript", "tailwind", "fastify"],
		right: true,
	},
	{
		image: "https://i.imgur.com/KpQySlx.png",
		title: "EsteticaGio",
		href: "https://github.com/VitorAndes/code-beautysalon",
		url: "https://vitorandes.github.io/code-beautysalon/",
		description: "uma landing page para uma profissional de estetica ",
		technologies: ["Vue.js", "Less", "Typescript"],
	},
];
