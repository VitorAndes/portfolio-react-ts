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
    description: "Um app para criar e gerenciar notas de forma prática e intuitiva.",
    technologies: ["react", "tailwind", "typescript"],
    url: "nlw-expert-notes-xi.vercel.app/"
  },
  {
    image: "https://i.imgur.com/a3cYXNu.png",
    title: "BeautySalon",
    href: "https://github.com/VitorAndes/code-beautysalon",
    description: "Uma landing page de salão de beleza",
    technologies: ["html", "css", "javascript"],
    url: "vitorandes.github.io/code-beautysalon/"
  },
];
