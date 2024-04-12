 interface Project {
  image: string;
  title: string;
  href: string;
  description: string;
  technologies: string[];
}

export const DataProjects: Project[] = [
  {
    image: "https://source.unsplash.com/random",
    title: "My project",
    href: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum inventore, ut s",
    technologies: ["react", `angular`],
  },
  {
    image: "https://source.unsplash.com/random",
    title: "My project",
    href: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum inventore, ut s",
    technologies: ["react", "vue.js"],
  },
  {
    image: "https://source.unsplash.com/random",
    title: "My project",
    href: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum inventore, ut s",
    technologies: ["react", "next.js"],
  },
];
