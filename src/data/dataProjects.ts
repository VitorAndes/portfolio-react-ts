interface ProjectType {
  image: string;
  title: string;
  href: string;
  url: string;
  description: string;
  technologies: string[];
}

export const DataProjects: ProjectType[] = [
  {
    image: "https://i.imgur.com/cjexL9v.png",
    title: "Nlw expert notes",
    href: "https://github.com/VitorAndes/nlw-expert-notes",
    url: "https://nlw-expert-notes-xi.vercel.app/",
    description:
      "Um app para criar e gerenciar notas de forma prática e intuitiva.",
    technologies: ["react", "tailwind", "typescript"],
  },
  {
    image: "https://i.imgur.com/SfZq34S.png",
    title: "Planilha de gastos",
    href: "https://github.com/VitorAndes/planilha-de-gastos",
    url: "https://planilha-de-gastos.vercel.app/",
    description: "um app desenvolvido para organizar os gastos",
    technologies: ["react", "typescript", "shadcnUI", "recharts"],
  },
  {
    image: "https://i.imgur.com/acTTKJp.png",
    title: "Planejador de metas semanais",
    href: "https://github.com/VitorAndes/nlw-pocket-frontend",
    url: "https://planejador-semanal-andes.vercel.app/",
    description:
      "um aplicativo desenvolvido para auxiliar os usuários na definição, acompanhamento e realização de suas metas semanais.",
    technologies: ["react", "typescript", "tailwind", "fastify"],
  },
  {
    image: "https://i.imgur.com/a3cYXNu.png",
    title: "BeautySalon",
    href: "https://github.com/VitorAndes/code-beautysalon",
    url: "https://vitorandes.github.io/code-beautysalon/",
    description: "Uma landing page de salão de beleza",
    technologies: ["html", "css", "javascript"],
  },
];
