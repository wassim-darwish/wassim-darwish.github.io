import {
  FreelancerIcon,
  KaskadeIcon,
  NovelGsLogo,
  SpicyfiIcon,
  WealthfaceIcon,
} from "assets";

export const experiences = [
  {
    date: "Feb 2023 - Current",
    title: "NovelGs",
    subtitle: "Dubai, United Arab Emirates",
    technology:
      "React, React Query, Axios, React Navigation, Formik, Yup, Socket.io, Moment.js, Lodash, MongoDB, NodeJS, ExpressJS, ASP .Net,",
    description:
      "Frontend Team Lead / Senior Frontend Developer,. My responsibilities included:",
    responsibilities: [
      "Defined and documented website specifications including product features, workflows, and technical requirements.",
      "Designed site maps, application models, templates, and UI structures aligned with UX standards.",
      "Developed responsive, high-performance user interfaces using React.",
      "Built and maintained design systems and reusable component libraries.",
      "Implemented authentication, authorization, and security best practices.",
      "Collaborated with product managers, designers, and stakeholders to deliver scalable solutions.",
      "Led the frontend team by assigning tasks, reviewing code, and mentoring developers.",
      "Coordinated cross-functional efforts with backend teams for seamless API integration.",
      "Championed performance optimization and UI/UX consistency across apps.",
      "Facilitated Agile ceremonies and ensured timely project delivery.",
    ],
    icon: (
      <img
        src={NovelGsLogo}
        alt="novel gs"
        style={{ width: 50, height: 50, borderRadius: "50%" }}
      />
    ),
  },
  {
    date: "June 2022 - Jan 2023",
    title: "Kaskade Finance",
    subtitle: "Dubai, United Arab Emirates",
    technology:
      "Blockchain, Ethers, Smart contract, React, NextJS, React Navigation, Moment.js, Lodash, MongoDB, NodeJS, ExpressJS, Supabase, Edge functions, Postgres, Restfull Api, Defi Lama, Discord applications ",
    description: "Fullstack developer. My responsibilities included:",
    responsibilities: [
      "$Kaskade demo app :",
      "Fullstack Development:# Designed and implemented both frontend and backend features using Next.js.",
      "Supabase Integration:# Utilized Supabase edge functions for real-time database operations and serverless computing.",
      "DeFi Data Handling:# Integrated DeFiLlama API to fetch and display decentralized finance data.",
      "Authentication:# Implemented secure user authentication and authorization mechanisms.",
      "Performance Optimization:# Ensured optimal app performance through efficient coding practices and caching strategies.",
      "Deployment:# Managed deployment processes on Vercel, ensuring smooth and continuous delivery.",
      "Testing and Debugging:# Conducted thorough testing and debugging to ensure reliability and functionality across all app features.",
      "$Kaskade Dragon discord bot:",
      "Bot Development:# Designed and developed the Dragon Discord bot using Node.js and Discord.js.",
      "Database Management:# Managed and optimized MongoDB for storing user data and bot configurations.",
      "Wallet Verification Integration:# Integrated the Kaskade demo app for wallet verification functionality within the Discord bot.",
      "API Integration:# Built and maintained RESTful APIs to facilitate communication between the bot and external services.",
      "Migration Planning:# Planned and began the process of migrating from MongoDB to Supabase for improved performance and scalability.",
      "Testing and Debugging:# Conducted thorough testing and debugging to ensure reliability and performance of the bot.",
      "User Authentication:# Implemented secure user authentication and authorization mechanisms.",
      "Documentation:# Created comprehensive documentation for bot features, API endpoints, and migration steps.",
    ],
    icon: (
      <img src={KaskadeIcon} alt="novel gs" style={{ width: 40, height: 30 }} />
    ),
  },
  {
    date: "Aug 2021 - June 2022",
    title: "SpicyFi GmbH",
    subtitle: "Switzerland",
    technology:
      "Blockchain, Ethers, Smart contract, Solidity, Subgraph, React, NextJS, React Navigation, Formik, Yup, Socket.io, Moment.js, Lodash, MongoDB, NodeJS, ExpressJS",
    description: "Fullstack developer. My responsibilities included:",
    responsibilities: [
      "$CryptoChefs Game Application:",
      "Developed the frontend# using React and Next.js for a seamless user experience.",
      "Integrated blockchain functionality with Ethers.js# to handle cryptocurrency transactions and smart contract interactions.",
      "Implemented responsive and dynamic UI components# to enhance user engagement.",
      "$Cryptonaire Mobile Quiz App:",
      "Designed and developed RESTful APIs using Node.js and Express.js# for backend functionality.",
      "Managed database interactions, user authentication, and session management#.",
      "Ensured secure# and efficient data handling and implemented real-time features to enhance user experience.",
      "$CryptochefS & Cryptonaire Landing Pages:",
      "Developed and implemented# the landing page using React for an engaging user experience.",
      "Integrated responsive design principles# to ensure compatibility across various devices.",
      "Ensured cross-browser compatibility# and optimized performance for fast loading times.",
      "Implemented client-side routing# for seamless navigation between sections.",
      "Employed best practices in React# for code maintainability and scalability.",
    ],
    icon: (
      <img
        src={SpicyfiIcon}
        alt="novel gs"
        style={{ width: 50, height: 50, borderRadius: "50%" }}
      />
    ),
  },

  {
    date: "Apr 2019 - Oct 2021",
    title: "Wealthface L.L.C",
    subtitle: "Dubai, United Arab Emirates",
    technology:
      "React Native, React, Redux, Redux Thunk, Axios, React Navigation, Formik, Yup, Socket.io, Moment.js, Lodash, Figma, MongoDB, NodeJS, ExpressJS",
    description: "Mobile apps and web developer. My responsibilities included:",
    responsibilities: [
      "Developed data architecture design.#",
      "Built and managed full trading and investing app.",
      "Worked closely with other team members and clients.#",
      "Developed and maintained mobile applications for iOS and Android platforms.#",
      "Designed and implemented responsive web applications.#",
      "Collaborated with cross-functional teams.#",
      "Tested and debugged mobile and web applications.#",
      "Implemented push notifications and data synchronization.#",
      "Collaborated with product managers and designers to deliver high-quality applications.#",
      "Participated in Agile development methodologies and ceremonies.#",
    ],
    icon: (
      <img
        src={WealthfaceIcon}
        alt="wealthface"
        style={{ width: 50, height: 50, borderRadius: "50%" }}
      />
    ),
  },
  {
    date: "2018 the startup",
    title: "Freelance Experience",
    subtitle: "Android Developer",
    technology: "Java, Android Studio, RESTful APIs, Firebase, SQLite",
    description:
      "As a freelance Android developer, I spearheaded the development of a robust e-commerce mobile application using native Java and Android Studio. My responsibilities included:",
    responsibilities: [
      "Architecture and Design#",
      "Core Development#",
      "API Integration#",
      "Database Management:# Utilized SQLite for local data storage and Firebase for real-time updates and push notifications.",
      "Testing and Debugging:# Conducted extensive testing and debugging to ensure a bug-free and smooth user experience.",
    ],
    icon: (
      <img
        src={FreelancerIcon}
        alt="free lancer"
        style={{ width: 50, height: 50 }}
      />
    ),
  },
];
