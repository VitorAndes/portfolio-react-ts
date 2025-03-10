import JavascriptLogo from "@/assets/Javascript-logo.webp";
import ReactLogo from "@/assets/React-logo.webp";
import TailwindLogo from "@/assets/Tailwind-Logo.webp";
import TypescriptLogo from "@/assets/Typescript-logo.webp";
import NodeLogo from "@/assets/node-logo.webp";

interface TechnologiesType {
	name: string;
	icon: string;
	transition: {
		duration: number;
		delay: number;
		ease: number[];
	};
}

export const DataTechnologies: TechnologiesType[] = [
	{
		name: "React",
		icon: ReactLogo,
		transition: {
			duration: 0.8,
			delay: 2,
			ease: [0, 0.71, 0.2, 1.01],
		},
	},
	{
		name: "Typescript",
		icon: TypescriptLogo,
		transition: {
			duration: 0.8,
			delay: 2.2,
			ease: [0, 0.71, 0.2, 1.01],
		},
	},
	{
		name: "Javascript",
		icon: JavascriptLogo,
		transition: {
			duration: 0.8,
			delay: 2.4,
			ease: [0, 0.71, 0.2, 1.01],
		},
	},
	{
		name: "NodeJs",
		icon: NodeLogo,
		transition: {
			duration: 0.8,
			delay: 2.6,
			ease: [0, 0.71, 0.2, 1.01],
		},
	},
	{
		name: "MySQL",
		icon: "https://images.sftcdn.net/images/t_app-icon-m/p/917c77e8-96d1-11e6-8453-00163ed833e7/3780880766/mysql-com-icon.png",
		transition: {
			duration: 0.8,
			delay: 2.8,
			ease: [0, 0.71, 0.2, 1.01],
		},
	},
	{
		name: "Tailwind css",
		icon: TailwindLogo,
		transition: {
			duration: 0.8,
			delay: 3,
			ease: [0, 0.71, 0.2, 1.01],
		},
	},
];
