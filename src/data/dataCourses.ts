interface CoursesType {
  name: string;
  description: string;
  href: string;
  conclusion?: string;
}

export const DataCourses: CoursesType[] = [
  {
    conclusion: "Cursando",
    name: "Análise e desenvolvimento de sistemas",
    description: "Conclução indefinida",
    href: "",
  },
  {
    name: "Nlw Expert trilha de React",
    description: "Código da credencial.",
    href: "https://app.rocketseat.com.br/certificates/ae414fc3-dee2-42a0-8a0c-b1fa70114bd4",
  },
  {
    name: "Dominando a Linguagem de Programação Java",
    description: "Certificado",
    href: "https://www.dio.me/certificate/DCC5AD39/share",
  },
  {
    name: "Trilha Digital | Coders 24 | Front End",
    description: "Código da credencial.",
    href: "ada.tech/certificado?code=dea739e9-1483-aa73-74c3-83bcade5a554",
  },
  {
    name: "Desenvolvimento Frontend com Angular",
    description: "Certificado.",
    href: "https://www.dio.me/certificate/C175A442/share",
  },
];
