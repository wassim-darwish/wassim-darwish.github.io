import {
  FreelancerIcon,
  KaskadeIcon,
  NovelGsLogo,
  SpicyfiIcon,
  WealthfaceIcon,
} from "assets";

export interface Responsibility {
  /** Optional bolded lead-in, e.g. "Fullstack Development:" */
  lead?: string;
  text: string;
}

export interface ResponsibilityGroup {
  /** Optional sub-project heading, e.g. "$Kaskade demo app" */
  group?: string;
  items: Responsibility[];
}

export interface ExperienceItem {
  date: string;
  title: string;
  role: string;
  subtitle: string;
  technology: string[];
  description: string;
  responsibilities: ResponsibilityGroup[];
  icon: JSX.Element;
}

const logo = (src: string, alt: string, rounded = true) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    style={{
      width: rounded ? 46 : 40,
      height: rounded ? 46 : 30,
      objectFit: "contain",
      borderRadius: rounded ? "50%" : 0,
    }}
  />
);

export const experiences: ExperienceItem[] = [
  {
    date: "Feb 2023 — Present",
    title: "Wellirs",
    role: "Frontend Team Lead / Senior Frontend Developer",
    subtitle: "Al-Shareqa, United Arab Emirates",
    technology: [
      "React",
      "TypeScript",
      "React Query",
      "Redux",
      "Design Systems",
      "Formik & Yup",
      "Socket.io",
      "Node.js",
      "ASP.NET",
      "MongoDB",
    ],
    description:
      "Leading frontend engineering for oil-industry platforms — from specification and architecture through delivery, review, and performance.",
    responsibilities: [
      {
        group: "Product & Architecture",
        items: [
          {
            lead: "Specification:",
            text: "Defined and documented website specifications including product features, workflows, and technical requirements.",
          },
          {
            lead: "Architecture:",
            text: "Designed site maps, application models, templates, and UI structures aligned with project objectives and UX standards.",
          },
          {
            lead: "Design systems:",
            text: "Built and maintained reusable component libraries to ensure consistency across platforms.",
          },
        ],
      },
      {
        group: "Engineering",
        items: [
          {
            lead: "Interfaces:",
            text: "Developed responsive, high-performance user interfaces using React, tailored for oil industry applications.",
          },
          {
            lead: "Security:",
            text: "Implemented authentication, authorization, and security best practices for application access.",
          },
          {
            lead: "Performance:",
            text: "Championed performance optimization, scalability improvements, and UI/UX consistency across applications.",
          },
          {
            lead: "Debugging:",
            text: "Resolved complex bugs and customer-reported issues with root cause analysis and durable technical fixes.",
          },
        ],
      },
      {
        group: "Leadership",
        items: [
          {
            lead: "Team lead:",
            text: "Led a frontend development team by assigning tasks, reviewing code, and ensuring adherence to best practices.",
          },
          {
            lead: "Mentoring:",
            text: "Conducted code reviews and technical guidance to improve team performance and code quality.",
          },
          {
            lead: "Collaboration:",
            text: "Coordinated cross-functional efforts with backend teams to ensure seamless API integration and end-to-end delivery.",
          },
          {
            lead: "Agile:",
            text: "Facilitated sprint planning, stand-ups, and retrospectives, tracking progress to meet project deadlines.",
          },
        ],
      },
    ],
    icon: logo(NovelGsLogo, "Wellirs"),
  },
  {
    date: "Jun 2022 — Jan 2023",
    title: "Kaskade Finance",
    role: "Fullstack Developer",
    subtitle: "Dubai, United Arab Emirates",
    technology: [
      "React.js",
      "Next.js",
      "NestJS",
      "Node.js",
      "ethers.js",
      "Supabase",
      "PostgreSQL",
      "Edge Functions",
      "DefiLlama API",
      "Discord.js",
    ],
    description:
      "Full-stack delivery for a DeFi staking and rewards platform — wallet-connected frontends, scalable APIs, and cross-chain data infrastructure.",
    responsibilities: [
      {
        group: "Kaskade demo app",
        items: [
          {
            lead: "Fullstack development:",
            text: "Designed and implemented both frontend and backend features using Next.js.",
          },
          {
            lead: "Wallet & on-chain data:",
            text: "Integrated wallet connections and real-time on-chain data into dynamic staking and reward dashboards.",
          },
          {
            lead: "Supabase integration:",
            text: "Used Supabase edge functions for real-time database operations and serverless computing.",
          },
          {
            lead: "DeFi data handling:",
            text: "Integrated the DefiLlama API to fetch and display decentralized finance data across chains.",
          },
          {
            lead: "Performance & delivery:",
            text: "Optimized rendering and caching, and managed continuous deployment on Vercel.",
          },
        ],
      },
      {
        group: "Kaskade Dragon Discord bot",
        items: [
          {
            lead: "Bot development:",
            text: "Designed and built the Dragon Discord bot with Node.js and Discord.js for community engagement and platform notifications.",
          },
          {
            lead: "Wallet verification:",
            text: "Integrated the Kaskade app to verify user wallets directly inside Discord.",
          },
          {
            lead: "API integration:",
            text: "Built and maintained RESTful APIs connecting the bot to external services.",
          },
          {
            lead: "Data migration:",
            text: "Planned and began migrating from MongoDB to Supabase for improved performance and scalability.",
          },
          {
            lead: "Documentation:",
            text: "Created comprehensive documentation for bot features, API endpoints, and migration steps.",
          },
        ],
      },
    ],
    icon: logo(KaskadeIcon, "Kaskade Finance", false),
  },
  {
    date: "Dec 2021 — May 2022",
    title: "SpicyFi GmbH",
    role: "React & Node.js Developer",
    subtitle: "Switzerland",
    technology: [
      "React",
      "Next.js",
      "Redux",
      "ethers.js",
      "web3.js",
      "Solidity",
      "Subgraph",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    description:
      "Built a full React Web3 game platform and its supporting services, from wallet integration to landing pages.",
    responsibilities: [
      {
        group: "CryptoChefs game platform",
        items: [
          {
            lead: "Frontend:",
            text: "Developed the game platform with React and Next.js for a seamless user experience.",
          },
          {
            lead: "On-chain integration:",
            text: "Integrated wallet connection and smart contract interaction via ethers.js/web3.js to handle in-game transactions.",
          },
          {
            lead: "Performance:",
            text: "Delivered a high-performance SPA with React and Redux, improving speed and usability.",
          },
        ],
      },
      {
        group: "Cryptonaire mobile quiz app",
        items: [
          {
            lead: "APIs:",
            text: "Designed and developed RESTful APIs with Node.js and Express.js.",
          },
          {
            lead: "Data & sessions:",
            text: "Managed database interactions, user authentication, and session management.",
          },
          {
            lead: "Real-time:",
            text: "Implemented secure, efficient data handling with real-time features for live gameplay.",
          },
        ],
      },
      {
        group: "Landing pages & platform work",
        items: [
          {
            lead: "Responsive delivery:",
            text: "Built the CryptoChefs and Cryptonaire landing pages in React with responsive design across devices.",
          },
          {
            lead: "Compatibility:",
            text: "Ensured cross-browser compatibility and optimized load times.",
          },
          {
            lead: "Code quality:",
            text: "Conducted code reviews and pair programming, applying React best practices for maintainability.",
          },
        ],
      },
    ],
    icon: logo(SpicyfiIcon, "SpicyFi GmbH"),
  },
  {
    date: "Apr 2020 — Dec 2021",
    title: "Wealthface L.L.C.",
    role: "Mobile Apps & Web Developer",
    subtitle: "Dubai, United Arab Emirates",
    technology: [
      "React Native",
      "React",
      "Redux",
      "Redux Thunk",
      "Axios",
      "React Navigation",
      "Formik & Yup",
      "Socket.io",
      "Node.js",
      "MongoDB",
      "Figma",
    ],
    description:
      "Built and shipped a React Native trading and investment app from concept to deployment, alongside the company's web presence.",
    responsibilities: [
      {
        items: [
          {
            lead: "Trading app:",
            text: "Built and managed a React Native trading & investment app from concept to store deployment.",
          },
          {
            lead: "Data architecture:",
            text: "Designed and implemented data architectures supporting targeted customer analytics.",
          },
          {
            lead: "Mobile:",
            text: "Developed and maintained iOS & Android apps, including push notifications and real-time data synchronization.",
          },
          {
            lead: "Web:",
            text: "Led website development from initial design to completion with clean, scalable code.",
          },
          {
            lead: "Integrations:",
            text: "Integrated RESTful APIs and third-party services into mobile and web platforms.",
          },
          {
            lead: "Quality:",
            text: "Conducted testing, debugging, and optimization for performance, scalability, and security.",
          },
          {
            lead: "Client enablement:",
            text: "Provided client training on managing website and mobile app CMS tools.",
          },
        ],
      },
    ],
    icon: logo(WealthfaceIcon, "Wealthface"),
  },
  {
    date: "2018 — 2020",
    title: "Freelance",
    role: "Android Developer",
    subtitle: "Remote",
    technology: [
      "Java",
      "Android Studio",
      "RESTful APIs",
      "Firebase",
      "SQLite",
    ],
    description:
      "Led development of a native Android e-commerce application end to end.",
    responsibilities: [
      {
        items: [
          {
            lead: "Architecture & design:",
            text: "Defined the app architecture and screen flows in native Java.",
          },
          {
            lead: "Core development:",
            text: "Implemented catalogue, cart, and checkout features against RESTful APIs.",
          },
          {
            lead: "Data management:",
            text: "Used SQLite for local storage and Firebase for real-time updates and push notifications.",
          },
          {
            lead: "Testing:",
            text: "Conducted extensive testing and debugging for a smooth, stable user experience.",
          },
        ],
      },
    ],
    icon: logo(FreelancerIcon, "Freelance", false),
  },
];
