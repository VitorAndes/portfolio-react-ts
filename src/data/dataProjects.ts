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
		image: "https://i.imgur.com/Fc6Hf9Q.png",
		title: "Gerenciador de gastos",
		href: "https://github.com/VitorAndes/planilha-de-gastos",
		url: "https://andesfinance.vercel.app/",
		description: "um app desenvolvido para organizar os gastos",
		technologies: ["react", "typescript", "shadcnUI", "recharts"],
		right: true,
	},
	{
		image: "https://i.imgur.com/KpQySlx.png",
		title: "EsteticaGio",
		href: "https://github.com/VitorAndes/Esteticagio",
		url: "https://esteticagio.vercel.app/",
		description: "uma landing page para uma profissional de estetica ",
		technologies: ["Vue.js", "Less", "Typescript"],
	},
];
