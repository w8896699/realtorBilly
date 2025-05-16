import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Billy Li ",
  title: "Find Home with Billy Li",
  description:
    "Explore Victoria's best properties with a local expert. Whether buying or selling, let me navigate your real estate journey.",
  resumeLink: "#",
};

// export const openSource = [
  
// ]
//   githubUserName: "1hanzla100",
// };



export const socialLinks: SocialLinksType = {
  email: "better.call@realtorbilly.ca",
  // github: "https://github.com/1hanzla100",
  // instagram: "https://www.instagram.com/__hanzla100",
  wechat:"wechatID: Victoriaroot",
  xiaohongshu:"https://www.xiaohongshu.com/user/profile/63c5fad500000000260125f3",
  phone:"(778)-251-7935"
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Central Punjab",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2017 - April 2020",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Django Developer",
    company: "Meganos Software",
    companyLogo: "/img/icons/common/meganos.png",
    date: "Aug 2022 - Present",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
  {
    role: "Full Stack Developer",
    company: "Duseca Software",
    companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
    date: "Jan 2022 - Sept 2023",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Full Stack Developer",
    company: "ZRTechnologies",
    companyLogo: "/img/icons/common/zrtech.jpeg",
    date: "Aug 2022 - Jun 2023",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "Backend Developer",
    company: "Bleed-AI",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Sept 2021 - Oct 2021",
    desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: any[] = [
  // {
  //   feedback: "Billy’s commitment to excellent service transformed our house hunt into a pleasant experience. He provided insightful guidance and was incredibly patient with our myriad questions. Highly recommend him for anyone looking for an informed buying experience."
  // },
  {
    feedback: "What stood out most during our interaction with Billy was his meticulous attention to detail. He was always prepared with all the right information, which made the entire selling process a breeze for us."
  },
  {
    feedback: "Billy’s unique rebate offer was a huge relief during the buying process. It showed his commitment to not just service, but also to making real estate more accessible and affordable."
  },
  {
    feedback: "With Billy, we felt secure knowing we were getting more than just a realtor; we were getting a financial advocate who offered rebates that truly benefited us during our purchase."
  },
  {
    feedback: "I found Billy to be not only extremely knowledgeable but also very warm and easy to talk to. He walked us through each step of the buying process with such ease that it removed all our anxieties."
  },
  {
    feedback: "Billy was a fantastic advocate for us during negotiations. His strategic approach ensured we got the best deal possible. His professionalism and integrity were evident throughout our interactions."
  },
  // {
  //   feedback: "Engaging Billy as our realtor was one of our wisest choices. His thorough market analysis helped us understand the landscape, making it easy to make the right decisions quickly."
  // },
  // {
  //   feedback: "Billy impressed us with his proactive updates and his ability to handle every aspect of the sale with professionalism. His understanding of the market dynamics is commendable."
  // },
  //   {
  //   feedback: "Billy not only helped us navigate the complexities of real estate, but he also offered a rebate that significantly eased our financial load. It’s clear he prioritizes his clients’ financial well-being."
  // },
  // {
  //   feedback: "We really appreciated how Billy handled our transaction from start to finish with such dedication. He was always available and ready to go the extra mile to meet our needs."
  // },
  // {
  //   feedback: "Billy's straightforward and honest communication was refreshing. He always had our best interests at heart and guided us through the selling process with great care and expertise."
  // }
  // {
  //   feedback: "We felt very supported by Billy throughout our home buying journey. He was not only knowledgeable but also very empathetic towards our needs as first-time buyers."
  // },
  // {
  //   feedback: "Billy’s adeptness at navigating the real estate market made him an invaluable asset to us during our home search. He made complex processes seem simple, which was a huge relief."
  // },
  // {
  //   feedback: "Billy's approach to real estate is incredibly thorough and client-focused. He was instrumental in helping us find a home that met all our criteria."
  // },
  // {
  //   feedback: "The level of detail and care Billy put into our property sale was impressive. He was always strategic in his planning and it paid off in the end."
  // },
  // {
  //   feedback: "Working with Billy was a pleasure. He provided a seamless and efficient home buying experience and always made sure to address all our concerns with patience and thoroughness."
  // },
  // {
  //   feedback: "Billy was consistently reliable, providing expert advice at every turn. His ability to anticipate our needs and his quick response time made the entire process smoother."
  // },
];

export const review = ["Urehelonn",  "shellyxuehan", "chloeiii", "deathping1994", "ruomin"];

// Backup: YuriRicardo


// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "范闲维多利亚地产",
  description: greetings.description,
  author: "Billy Li",
  image: "https://media.licdn.com/dms/image/D4E03AQFiPhhcSm4NXw/profile-displayphoto-shrink_200_200/0/1718212563226?e=1723680000&v=beta&t=ffT0a2zz-5QxGkhuDenWlVMv0CcjnHsK92kFnt9EL7w",
  url: "https://www.realtorbilly.ca",
  keywords: [
    "Billy",
    "Billy Li",
    "Victoria Realtor",
    "Buy property",
    "Realtor",
    "Billy Portfolio ",
    "rebate",
    "范闲维多利亚地产",
    "维多利亚地产范闲",
    "维多利亚房产",
    "维多利亚买房",
    "维多利亚买房rebate",
    "BC地产范闲",
  ],
};
