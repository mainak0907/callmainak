import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cfa,
  tfi,
  hmt,
  eve,
  threejs,
  chatify,
  friends,
  chromextension,
  helpdesk,
  reduximg,
  logger,
  aissueaday,
  resumegpt,
  rtl,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Web Developer",
    icon: web,
  },
  {
    title: "Technical Operations and Management",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Technical Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "NEXT JS Developer and SEO Intern",
    company_name: "HMT Architects",
    icon: hmt,
    iconBg: "#FFF",
    date: "August 2023 - October 2023",
    points: [
      "Coordinated a team of 5 members and made the company's website using NEXT JS, and Tailwind CSS, following the best SEO practices.",
      "With an increase of  42% in website visibility.",
      "https://hmtarchitects.com/",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software and Technology Operations Intern",
    company_name: "Teach For India",
    icon: tfi,
    iconBg: "#000000",
    date: "October 2021 - November 2022",
    points: [
      "Managed 300+ mobile devices using Esper Management Software. Assisted in the city operations of the organization.",
      "Worked closely with the National Technical Team in Mumbai for Ledger Management in Salesforce Cloud. Resolved critical issues in the devices working with the Esper Technical team.",
      "Negotiated with Corporate Telecom companies to establish Internet connections at 6 schools ( where 3 schools are in collaboration with the State Government ), and ensured remote management of the devices at the School.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "EVE Heathcare",
    icon: eve,
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Worked on the Frontend of the Company Website ",
      "Fixed Braking Changes in the Website",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Content Strategy Intern ",
    company_name: "CS For ALL",
    icon: cfa,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and Stragezing Technical Content for the Company ",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing DevOps and Technical Interview Oriented Content Series  ",
    ],
  },
];

const projects = [
  {
    name: "Full-Stack Chat Application ",
    description:
      "Full Stack Chat Application with Group Chat Option built with socket.io, Express JS,Mongo DB, login & signup functionality using JWT and encryption using bcrypt . Deployed on Render.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "JWT and bcrypt",
        color: "pink-text-gradient",
      },
    ],
    image: chatify,
    source_code_link: "https://github.com/mainak0907/FullStack-Chatify",
  },
  {
    name: "Resume GPT",
    description:
      "ChatGPT based Resume Generator , with integrated mailing service of the PDF , used Trigger.dev to manage the background Jobs",
    tags: [
      {
        name: "NEXT JS 13",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Trigger.Dev",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "react-hook-form",
        color: "blue-text-gradient",
      },
    ],
    image: resumegpt,
    source_code_link: "https://github.com/mainak0907/Resume.GPT---Open-AI-based-Resume-Generator",
  },
  {
    name: "F.R.I.E.N.D.S - Google Sol Challenge ",
    description:
      "  We focus on creating a connection between all the necessary departments related to animal welfare starting from Rescue centers, Veterinary Clinics "
    ,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: " Firebase",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap css",
        color: "pink-text-gradient",
      },
      {
        name: " Streamlit ",
        color: "blue-text-gradient",
      },

    ],
    image: friends,
    source_code_link: "https://friendssolchng.firebaseapp.com/",
  },
  {
    name: "Custom Logger for Node JS ",
    description:
      "Winston logger for custom logging in Node JS, which records the logs, and pushes them to MongoDB, where Filtering and Visualization can be applied in MongoDB as well as multi-server log collection using https://betterstack.com/logs."
    ,
    tags: [
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: " winston",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: logger,
    source_code_link: "https://github.com/mainak0907/Custom-Logger-for-NodeJS",
  },
  {
    name: "A-Issue-A-Day ",
    description:
      "A Github good-first-issue finder that sends mail notifications about that issue and repo, so that you keep up your Open Source Journey. "
    ,
    tags: [
      {
        name: " Next JS 14",
        color: "blue-text-gradient",
      },
      {
        name: "Octokit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: " Novu ",
        color: "blue-text-gradient",
      },

    ],
    image: aissueaday,
    source_code_link: "https://github.com/mainak0907/a-Issue-a-Day",
  },
  {
    name: "Chrome Extension Tweet Sentiment Analysis",
    description:
      "The Chrome Extension for Twitter Sentiment Analysis is a tool that allows users to analyze the sentiment of tweets directly from their Twitter feed. This extension utilizes Natural Language Processing (NLP) techniques to determine whether a tweet has a positive, negative, or neutral sentiment.",
    tags: [
      {
        name: " Javascript ",
        color: "blue-text-gradient",
      },
      {
        name: "DOM Manipulation",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
      {
        name: " Machine Learning ",
        color: "blue-text-gradient",
      },

    ],
    image: chromextension,
    source_code_link: "https://github.com/mainak0907/ChromeExtenion-TwitterSentimentAnalysis",
  },
  {
    name: " HelpDesk Website ",
    description:
      "A Helpdesk website with ticketing system , viewing property"
    ,
    tags: [
      {
        name: " Next JS 14",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "json-server",
        color: "green-text-gradient",
      },

    ],
    image: helpdesk,
    source_code_link: "https://github.com/mainak0907/NextJS13_Helpdesk_App",
  },
  {
    name: " Redux State Management Lib - Repo",
    description:
      " A repo which comprehensively covers Core Redux , Redux Toolkit , React-Redux"
    ,
    tags: [
      {
        name: " Redux ",
        color: "blue-text-gradient",
      },
      {
        name: " Redux Toolkit ",
        color: "green-text-gradient",
      },
      {
        name: "React Redux",
        color: "pink-text-gradient",
      },

    ],
    image: reduximg,
    source_code_link: "https://github.com/mainak0907/Redux-State-Management-Lib",
  },
  {
    name: " React Testing Library - Repo ",
    description:
      " Repo which covers Jest and React Testing Library in Depth"
    ,
    tags: [
      {
        name: "Jest",
        color: "blue-text-gradient",
      },
      {
        name: "React Testing Library",
        color: "green-text-gradient",
      },
      {
        name: " React JS",
        color: "pink-text-gradient",
      },
    ],
    image: rtl,
    source_code_link: "https://github.com/mainak0907/React-Testing-Library",
  },
];

export { services, technologies, experiences, projects };
