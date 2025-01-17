interface CoursesType {
	name: string;
	description: string;
	href: string;
	conclusion?: string;
	time: string;
}

export const DataCourses: CoursesType[] = [
	{
		conclusion: "Cursando",
		name: "Análise e desenvolvimento de sistemas",
		description: "Conclusão indefinida",
		href: "",
		time: "Agosto 2022 ~",
	},
	{
		conclusion: "Concluido",
		name: "Dominando a Linguagem de Programação Java",
		description: "Certificado",
		href: "https://www.dio.me/certificate/DCC5AD39/share",
		time: "21 de Outubro de 2023",
	},
	{
		conclusion: "Concluido",
		name: "Desenvolvimento Frontend com Angular",
		description: "Certificado.",
		href: "https://www.dio.me/certificate/C175A442/share",
		time: "30 de Novembro de 2023",
	},
	{
		conclusion: "Concluido",
		name: "Nlw Expert trilha de React",
		description: "Código da credencial.",
		href: "https://app.rocketseat.com.br/certificates/ae414fc3-dee2-42a0-8a0c-b1fa70114bd4",
		time: "10 de Fevereiro de 2024",
	},

	{
		conclusion: "Concluido",
		name: "Trilha Digital | Coders 24 | Front End",
		description: "Código da credencial.",
		href: "https://ada.tech/certificado?code=dea739e9-1483-aa73-74c3-83bcade5a554",
		time: "Junho de 2024",
	},
];
