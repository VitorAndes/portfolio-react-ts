 interface ProjectType {
  image: string;
  title: string;
  href: string;
  description: string;
  technologies: string[];
}

export const DataProjects: ProjectType[] = [
  {
    image: "https://i.pinimg.com/236x/e0/ab/b0/e0abb0f9ec876bf6f81fdd9a68526fac.jpg",
    title: "My project",
    href: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum inventore, ut s",
    technologies: ["react", `angular`],
  },
  {
    image: "https://i.pinimg.com/236x/a3/36/a6/a336a6e0082d4344bb58fa43d017a6f7.jpg",
    title: "My project",
    href: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum inventore, ut s",
    technologies: ["react", "vue.js"],
  },
  {
    image: "https://i.pinimg.com/564x/7f/bd/e6/7fbde618feffc862db5d75381ef49b88.jpg",
    title: "My project",
    href: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum inventore, ut s",
    technologies: ["react", "next.js"],
  },
];
