import CarPage from "../assets/image/carpage.png";
import CosmosWarGamePage from "../assets/image/cosmoswar.png";
import FotoikaPage from "../assets/image/fotoika.png";
import ProxPage from "../assets/image/prox-shop.png";
import ManaorderPage from "../assets/image/manaorder-1.png";
import Planner from "../assets/image/planner.png";

import SVGAdobe from "../assets/svg/adobexd.svg";
import SVGCss3 from "../assets/svg/css3.svg";
import SVGGithub from "../assets/svg/github.svg";
import SVGAHTML5 from "../assets/svg/html5.svg";
import SVGAJs from "../assets/svg/js.svg";
import SVGANode from "../assets/svg/nodejs.svg";
import SVGReact from "../assets/svg/react.svg";
import SVGMongo from "../assets/svg/mongodb.svg";
import SVGReactRouter from "../assets/svg/reactrouter.svg";
import SVGSass from "../assets/svg/sass.svg";
import SVGStoryBook from "../assets/svg/storybook.svg";
import SVGSC from "../assets/svg/sc.svg";
import SVGNest from "../assets/svg/nest.svg";
import SVGRedux from "../assets/svg/redux.svg";
import SVGTJ from "../assets/svg/ts.svg";

export const projectsList = [
  {
    name: "Manaorder",
    tech: ["react", "node", "mongodb"],
    image: ManaorderPage,
    link: {
      git: "https://github.com/KamilBorowski1995/ManaOrder",
      live: "https://kamilborowski1995.github.io/ManaOrder/",
    },
  },

  {
    name: "CosmosWar",
    tech: ["react"],
    image: CosmosWarGamePage,
    link: {
      git: "https://github.com/KamilBorowski1995/cosmos-war",
      live: "https://kamilborowski1995.github.io/cosmos-war/",
    },
  },
  {
    name: "Fotoika.com",
    tech: ["react", "node", "mongodb"],
    image: FotoikaPage,
    link: {
      live: "http://fotoika.com/",
    },
  },
  {
    name: "Prox - Sklep",
    tech: ["react", "node", "mongodb"],
    image: ProxPage,
    link: {},
  },
  {
    name: "Car-sharing",
    tech: ["react"],
    image: CarPage,
    link: {
      git: "https://github.com/KamilBorowski1995/car-sharing",
      live: "https://kamilborowski1995.github.io/car-sharing/",
    },
  },
  {
    name: "Planner Mobile",
    tech: ["react", "node", "mongodb"],
    image: Planner,
    link: {
      git: "https://github.com/KamilBorowski1995/planner",
      live: "https://kamilborowski1995.github.io/planner/",
    },
  },
];

export const coursesEndList = [
  {
    name: "frontend",
    courses: [
      {
        name: "Web developer od podstaw w 15 dni",
        from: "Samuraj Programowania - Bartek Borowczyk",
      },
      {
        name: "Zaawansowany front-end w 15 dni",
        from: "Samuraj Programowania - Bartek Borowczyk",
      },
      {
        name: "Programowanie w JavaScript",
        from: "Samuraj Programowania - Bartek Borowczyk",
      },
      {
        name: "React od podstaw - teoria i praktyka",
        from: "Samuraj Programowania - Bartek Borowczyk",
      },
      {
        name: "(Zaawansowane) Projekty w CSS i JavaScript",
        from: "Samuraj Programowania - Bartek Borowczyk",
      },
      {
        name: "React dla średnio zaawansowanych",
        from: "Mentorzy IT",
      },
      {
        name: "React po polsku",
        from: "Krystian Czekalski",
      },
      {
        name: "JavaScript i front-end (nie tylko) dla back-endowców",
        from: "Mateusz Chrzonstowski",
      },
      {
        name: "React od podstaw",
        from: "hello roman - Adam Romański",
      },
      {
        name: "React w praktyce",
        from: "hello roman - Adam Romański",
      },
      {
        name: "React zaawansowany",
        from: "hello roman - Adam Romański",
      },
    ],
  },
  {
    name: "backend",
    courses: [
      {
        name: "Backend - Node.js, Express i MongoDB",
        from: "Samuraj Programowania - Bartek Borowczyk",
      },
      {
        name: "Wiele filmów na popularnej platformie",
        from: "https://www.youtube.com",
      },
    ],
  },
  {
    name: "UX i UI Design",
    courses: [
      {
        name: "Kurs Adobe XD",
        from: "https://eduweb.pl",
      },
      {
        name: "Projektowanie UI",
        from: "https://eduweb.pl",
      },
    ],
  },
];

export const skillsList = [
  {
    name: "html5",
    path: SVGAHTML5,
    from: "https://simpleicons.org/",
  },
  {
    name: "css3",
    path: SVGCss3,
    from: "https://simpleicons.org/",
  },
  {
    name: "javascript",
    path: SVGAJs,
    from: "https://fontawesome.com/",
  },
  {
    name: "react",
    path: SVGReact,
    from: "https://simpleicons.org/",
  },
  {
    name: "React-Router",
    path: SVGReactRouter,
    from: "https://simpleicons.org/",
  },
  {
    name: "Sass",
    path: SVGSass,
    from: "https://simpleicons.org/",
  },
  {
    name: "Styled-Components",
    path: SVGSC,
    from: "https://simpleicons.org/",
  },
  {
    name: "StoryBook",
    path: SVGStoryBook,
    from: "https://simpleicons.org/",
  },
  {
    name: "node",
    path: SVGANode,
    from: "https://fontawesome.com/",
  },

  {
    name: "mongodb",
    path: SVGMongo,
    from: "https://simpleicons.org/",
  },
  {
    name: "github",
    path: SVGGithub,
    from: "https://simpleicons.org/",
  },

  {
    name: "adobexd",
    path: SVGAdobe,
    from: "https://simpleicons.org/",
  },
];

export const learnSkillsList = [
  {
    name: "Nest.js",
    path: SVGNest,
    from: "https://seeklogo.com",
  },
  {
    name: "Redux",
    path: SVGRedux,
    from: "https://simpleicons.org/",
  },
  {
    name: "TypeScript",
    path: SVGTJ,
    from: "https://fontawesome.com/",
  },
];
