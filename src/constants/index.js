import
{
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
  EWDTech,
  //!Project Images
  Admin_DashBoard,
  Amazon_Clone,
  Random_gif,
  BlogWebsite,
  Elite_Education
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "MERN stack Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];


const projects = [
  {
    name: "Virtual Learning System",
    description:
      "A Learning platform with online Course, Course catalog,  Stripe payment integration for payments ,Vdocipher for encryption and cloud. It allows users to browse and enroll easily. – React JS, Redux, Node, Express, MongoDB, Stripe, JWT, Nodemailer.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "React.js & Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Redux-toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      
    ],
    image: Elite_Education,
    source_code_link: "https://elite-education-fyp.vercel.app/",
  },
  {
    name: "Amazon Clone",
    description:
      "Experience the convenience of online shopping with our Amazon clone. Browse a wide range of products and enjoy seamless transactions for all your shopping needs.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Context api",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: Amazon_Clone,
    source_code_link: "https://github.com/MuhammadAmirSaeed/Amazon-Clone",
  },
  {
    name: "Admin Dashboard",
    description: "This is a  admin dashboard  built using React. It contains a variety of widgets and charts to visualize data and statistics. ",

    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: Admin_DashBoard,
    source_code_link: "https://github.com/MuhammadAmirSaeed/Admin-Dashboard",
  },
  {
    name: "Random Gif",
    description:
      "Discover the joy of spontaneous entertainment with our random GIF generator. Explore a diverse collection of animated moments, guaranteed to add fun and laughter to your day",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Random_gif,
    source_code_link:
      "https://github.com/MuhammadAmirSaeed/Random-Gif-and-custom-hook",
  },
  {
    name: "Blog Website",
    description:
      " A dynamic blog platform empowered by useContext, facilitating seamless content management and personalized user experiences.",

    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Context-api",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: BlogWebsite,
    source_code_link:
      "https://github.com/MuhammadAmirSaeed/Blog-with-Context-api ",
  },
];
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "EWD Tech",
      icon: EWDTech,
      iconBg: "#383E56",
      date: "Feb 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];


export { services, technologies, projects ,experiences};
