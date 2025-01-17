import { Github, Linkedin, type LucideIcon, Mail } from "lucide-react";

interface LinksType {
	href: string;
	icon: LucideIcon;
}

export const DataLinks: LinksType[] = [
	{
		href: "https://github.com/vitorandes",
		icon: Github,
	},
	{
		href: "https://www.linkedin.com/in/vitor-andes-dos-santos-3265ba243/",
		icon: Linkedin,
	},
	{
		href: "mailto:vitor.andes.santos04@gmail.com",
		icon: Mail,
	},
];
