import JavascriptLogo from "@/assets/Javascript-logo.webp";
import ReactLogo from "@/assets/React-logo.webp";
import TailwindLogo from "@/assets/Tailwind-Logo.webp";
import TypescriptLogo from "@/assets/Typescript-logo.webp";
import NodeLogo from "@/assets/node-logo.webp";

interface TechnologiesType {
	name: string;
	icon: string;
}

export const DataTechnologies: TechnologiesType[] = [
	{
		name: "React",
		icon: ReactLogo,
	},
	{
		name: "Typescript",
		icon: TypescriptLogo,
	},
	{
		name: "Javascript",
		icon: JavascriptLogo,
	},
	{
		name: "NodeJs",
		icon: NodeLogo,
	},
	{
		name: "MySQL",
		icon: "https://images.sftcdn.net/images/t_app-icon-m/p/917c77e8-96d1-11e6-8453-00163ed833e7/3780880766/mysql-com-icon.png",
	},
	{
		name: "Tailwind css",
		icon: TailwindLogo,
	},
];
