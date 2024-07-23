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
      {
        title: "Project 1 melel dfgsdg vsdvrg",
        description:
          "lorem ipsum dolor sit am sdfsd nljsd oijsfghsdfhafdhad aefhadfha esrheadfh adfhadfhstd jsrfrkja fgjsthj sfgbz dfgb fstu sfghv dfh sfgjh dfga dfhsgf hfh sfgj sgfj sfghj syfkj sfghg sfgj sfgj sfgj sfgj sgfj sfgjfoisdj oisjdfosidjf oijdfoisdjf oijsdoifsdf vkrjgh sdhoughwoe sdnowiej ",
        technologies: getTechnologies([
          "HTML",
          "CSS",
          "React",
          "AWS",
          "Serverless",
          "MongoDB",
        ]),
        image: "",
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
  {
    category: "React",
    image: "/images/react-logo.png",
    projects: [
      {
        title: "Project 1",
        description: "Description of project 1",
        technologies: getTechnologies(["HTML", "CSS"]),
        image: "",
        link: "https://github.com/YZvirblis/project1",
      },
    ],
  },
];

export default ProjectsData;
