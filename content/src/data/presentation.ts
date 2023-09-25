type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "raphael_gorbach@gmx.at",
  title: "Hi, I’m Raphael 👋",
  description:
    "Hey there, I'm an *austrian web developer*. I work with a myriad of different web technologies and paradigms. My goal is to become proficient full stack developer being able to handle everything from the *development* and *deployment* process beginning to finish. Beyond that I also like to mess with data structures, algorithms and networking.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/raphael-gorbach-7b6010290/",
    },
    {
      label: "Github",
      link: "https://github.com/GorbachR",
    },
  ],
};

export default presentation;
