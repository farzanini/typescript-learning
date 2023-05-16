type Programmer = {
  name: string;
  role: string;
  technologies: string[];
};
type Company = {
  name: string;
  programmer: Programmer;
};
const Quera: Company = {
  name: "Quera Collage",
  programmer: {
    name: "farzan",
    role: "frontend developer",
    technologies: ["React", "Typescript"],
  },
};
export { Quera };
