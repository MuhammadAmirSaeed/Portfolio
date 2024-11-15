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
  taurgo,
  //!Project Images
  Admin_DashBoard,
  Amazon_Clone,
  Random_gif,
  BlogWebsite,
  Elite_Education,
  Soft_EnterPrise,
  upwork,
  Rapid

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
    title: "MERN stack Developer",
    icon: mobile,
  },
  {
    title: "Next.js Developer",
    icon: backend,
  },
  {
    title: "React.js Developer",
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
    name: "Online Learning System",
    description:
      "A Learning platform with online Course, Course catalog,  Stripe payment integration for payments ,Vdocipher for encryption and cloud. It allows users to browse and enroll easily. – React JS, Redux, Node, Express, MongoDB, Stripe, JWT, Nodemailer.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },

    ],
    image: Rapid,
    source_code_link: "https://github.com/MuhammadAmirSaeed",
  },

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
    name: "Taurgo ",
    description:
      "This is my Company project. In which we use Material UI for designing and React js  and Redux toolkit for frontend .For our backend we use Node js , Express js ,JWT , MongoDB and NodeMailer. We user PayPal payment integration.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Paypal integration",
        color: "pink-text-gradient",
      },
    ],
    image: taurgo,
    source_code_link: "https://taurgo.co.uk/",
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
      title:"Freelance Web Developer",
      company_name:"Upwork",
      icon:upwork,
      iconBg: "#0fa3b1",
      date:" 2024 - Present",
      points:[
       "New Beginnings on Upwork: Started my freelancing career on Upwork, offering expertise in MERN stack development to clients globally.",
        "Building robust and scalable web applications to streamline project management.",
        "Client-Centric Project Development: Focused on building strong client relationships by delivering high-quality, scalable applications tailored to each client’s unique requirements.",
        "Collaborating with cross-functional teams, including designers and product managers, to deliver high-quality products.",

      ]
    },
    {
      title:"MERN Stack Developer",
      company_name:"Soft Enterprise",
      icon:Soft_EnterPrise,
      iconBg: "#0fa3b1",
      date:"July 2024 - Nov 2024",
      points:[
        "Developing and maintaining a Learning Management System (LMS) and a Customer Relationship Management (CRM) application.",
        "Building robust and scalable web applications to streamline project management.",
        "Enhancing user experiences through responsive design and user-centered development.",
        "Collaborating with cross-functional teams, including designers and product managers, to deliver high-quality products.",
        "Participating in code reviews and providing constructive feedback to ensure code quality."

      ]
    },
    {
      title: "React.js Developer",
      company_name: "EWD Tech",
      icon: EWDTech,
      iconBg: "#383E56",
      date: "Feb 2020 - June 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];


export { services, technologies, projects ,experiences};
