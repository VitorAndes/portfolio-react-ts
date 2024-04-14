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
        description: "Conclusão em 12/2024",
        href: ""
    },
    {
        name: "Nlw Expert trilha de React",
        description: "Código da credencial.",
        href: "https://app.rocketseat.com.br/certificates/ae414fc3-dee2-42a0-8a0c-b1fa70114bd4"
    },
    {
        name: "NLW Unite - React Native",
        description: "Código da credencial.",
        href: "https://app.rocketseat.com.br/certificates/3661401a-43bc-4dd7-8b32-5065203d87e8"
    },
    {
        name: "NLW Unite - Reactjs",
        description: "Código da credencial.",
        href: "https://app.rocketseat.com.br/certificates/0ad79176-9f33-4cef-a40d-93d33d27b1e0"
    },
    {
        name: "Desenvolvimento Frontend com Angular",
        description: "Certificado.",
        href: "https://www.dio.me/certificate/C175A442/share"
    }
]