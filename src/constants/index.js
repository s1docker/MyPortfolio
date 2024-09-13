import {
  airbnb,
  backend,
  creator,
  css,
  docker,
  figma,
  gemini,
  git,
  html,
  javascript,
  js,
  mobile,
  mongodb,
  mongoose,
  node1,
  nodejs,
  react,
  reactjs,
  redux,
  simon,
  tailwind,
  threejs,
  typescript,
  weather,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Collaborative Facilitator",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "Three JS",
    icon: threejs,
  }
];

const experiences = [
  {
    title: "JavaScript",
    icon: js,
    iconBg: "#383E56",
    points: [
      "I excel at creating interactive and dynamic web applications, using advanced JavaScript features to enhance functionality.",
      "My experience spans both client-side and server-side development, allowing me to deliver a seamless and engaging user experience.",
      " enjoy integrating JavaScript with various libraries and frameworks, such as three.js, to build efficient and powerful solutions—just like the dynamic elements in this portfolio.",
    ],
  },
  {
    title: "ReactJs",

    icon: react,
    iconBg: "#E6DEDD",
    points: [
      "I build responsive and user-friendly interfaces with React, leveraging its component-based architecture and state management capabilities. This very portfolio website is crafted with React, showcasing my skills and projects.",
      "I optimize React applications for performance, ensuring a smooth user experience with efficient code and best practices.",
      "For dynamic 3D elements, I integrate three.js with external support, adding an extra layer of interactivity and depth to my projects.",
    ],
  },
  {
    title: "NodeJS",
    icon: node1,
    iconBg: "#fff",
    points: [
      "I develop robust server-side applications with Node.js and Express, including creating RESTful APIs and real-time services.",
      "Handling asynchronous tasks is second nature to me, ensuring that applications remain responsive and reliable.",
      "I connect Node.js with various databases and services to deliver well-rounded backend solutions.",
    ],
  },
  {
    title: "MongoDB",
    icon: mongoose,
    iconBg: "#E6DEDD",
    points: [
      "I design and manage NoSQL databases with MongoDB, focusing on flexible schema design and efficient data modeling.",
      "Performing CRUD operations and running complex queries is part of my skill set, ensuring that data is well-organized and accessible.",
      "I utilize MongoDB features like replication and sharding to build scalable and high-availability systems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Airbnb-Clone",
    description:
      "Web application that allows users to browse listings, manage bookings, and view locations on a map, with features for user authentication, CRUD operations, and responsive design.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/s1docker/Project1",
    live_link: "https://project1-v3en.onrender.com/listings",
  },
  {
    name: "Gemini-Clone",
    description:
      "Web application replicating the Gemini platform with React and CSS, featuring chat functionality and full responsiveness for small devices, with real-time data integration via the Gemini API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gemini,
    source_code_link: "https://github.com/s1docker/Gemini-Clone",
    live_link: "https://gemini-clone2.netlify.app",
  },
  {
    name: "Simon Says",
    description:
      "Interactive Simon Says game built with JavaScript, CSS, and HTML, featuring color sequence challenges and user interaction.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: simon,
    source_code_link: "https://github.com/s1docker/P2.Simon",
    live_link: "https://simonsays2.netlify.app/",
  },
  {
    name: "Weather App",
    description:
      "Weather app built with React and Tailwind, utilizing a weather API with geocoding for location-based forecasts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/s1docker/weather-App",
    live_link: "https://weather-app117.netlify.app/",
  },
];

export { experiences, projects, services, technologies, testimonials };

