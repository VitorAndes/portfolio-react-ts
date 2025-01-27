import { Github, Instagram, Linkedin, type LucideIcon } from "lucide-react";

interface LinksType {
	id: number;
	name: string;
	href: string;
	icon: LucideIcon;
}

export const DataLinks: LinksType[] = [
	{
		id: 1,
		name: "Github",
		href: "https://github.com/vitorandes",
		icon: Github,
	},
	{
		id: 2,
		name: "Linkedin",
		href: "https://www.linkedin.com/in/vitor-andes-dos-santos-3265ba243/",
		icon: Linkedin,
	},
	{
		id: 3,
		name: "Instagram",
		href: "https://www.instagram.com/vtr_andes/",
		icon: Instagram,
	},
];
