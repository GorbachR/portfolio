export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "FreeCodeCamp",
    techs: ["HTML, CSS, JavaScript"],
    link: "https://codepen.io/collection/zxmYZg",
  },
  {
    title: "Leetcode",
    techs: ["Java", "TypeScript", "Go"],
    link: "https://github.com/GorbachR/leetcode",
  },
  {
    title: "FrontEndMentor",
    techs: ["HTML", "CSS", "TypeScript", "Go"],
    link: "https://github.com/GorbachR/leetcode",
    isComingSoon: true
  },
];

export default projects;
