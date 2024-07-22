import { Category, Skill } from "../types";
import skills from "./skills";

const getTechnologies = (techNames: string[]): Skill[] => {
  return skills.filter((skill) => techNames.includes(skill.name));
};

const ProjectsData: Category[] = [
  {
    category: "Javascript",
    image: "/images/js-logo.png",
    projects: [
      {
        title: "Project 1",
        description: "Description of project 1",
        technologies: getTechnologies(["HTML", "CSS"]),
        image: "/images/js-logo.png",
        link: "https://github.com/YZvirblis/project1",
      },
    ],
  },
  {
    category: "React",
    image: "/images/react-logo.png",
    projects: [
      {
        title: "Project 1",
        description: "Description of project 1",
        technologies: getTechnologies(["HTML", "CSS"]),
        image: "/images/js-logo.png",
        link: "https://github.com/YZvirblis/project1",
      },
    ],
  },
];

export default ProjectsData;
