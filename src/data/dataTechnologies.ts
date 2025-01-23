import JavascriptLogo from "@/assets/Javascript-logo.png";
import NodeLogo from "@/assets/Node-logo.png";
import ReactLogo from "@/assets/React-logo.png";
import TypescriptLogo from "@/assets/Typescript-logo.png";

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
	// {
	// 	name: "MySQL",
	// 	icon: "https://images.sftcdn.net/images/t_app-icon-m/p/917c77e8-96d1-11e6-8453-00163ed833e7/3780880766/mysql-com-icon.png",
	// },
	// {
	// 	name: "Java",
	// 	icon: "https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp&w=256",
	// },
];
