import { Github, Instagram, Linkedin, type LucideIcon } from "lucide-react";

interface LinksType {
	id: number;
	name: string;
	href: string;
	icon: LucideIcon;
	transition: {
		duration: number;
		delay: number;
		ease: number[];
	};
}

export const DataLinks: LinksType[] = [
	{
		id: 1,
		name: "Github",
		href: "https://github.com/vitorandes",
		icon: Github,
		transition: {
			duration: 0.8,
			delay: 1.5,
			ease: [0, 0.71, 0.2, 1.01],
		},
	},
	{
		id: 2,
		name: "Linkedin",
		href: "https://www.linkedin.com/in/vitor-andes-dos-santos-3265ba243/",
		icon: Linkedin,
		transition: {
			duration: 0.8,
			delay: 1.7,
			ease: [0, 0.71, 0.2, 1.01],
		},
	},
	{
		id: 3,
		name: "Instagram",
		href: "https://www.instagram.com/vtr_andes/",
		icon: Instagram,
		transition: {
			duration: 0.8,
			delay: 1.9,
			ease: [0, 0.71, 0.2, 1.01],
		},
	},
];
