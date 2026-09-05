import {
  ProjectImg4,
  ProjectImg5,
  ProjectImg6,
  ProjectImg7,
  ProjectImg8,
  ProjectImg9,
} from "assets";

export interface Project {
  title: string;
  company: string;
  category: "Web3" | "Fintech" | "Mobile" | "Platform";
  description: string;
  stack: string[];
  imgUrl: string;
}

export const projectCategories = [
  "All",
  "Web3",
  "Fintech",
  "Mobile",
  "Platform",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects: Project[] = [
  {
    title: "Kaskade Demo App",
    company: "Kaskade Finance",
    category: "Web3",
    description:
      "DeFi staking and rewards dashboard with wallet connection, real-time on-chain data, and cross-chain liquidity insights pulled from DefiLlama.",
    stack: ["Next.js", "ethers.js", "Supabase", "Edge Functions", "Vercel"],
    imgUrl: ProjectImg4,
  },
  {
    title: "Dragon Discord Bot",
    company: "Kaskade Finance",
    category: "Web3",
    description:
      "Community automation bot handling wallet verification, reward notifications, and engagement flows, backed by RESTful services.",
    stack: ["Node.js", "Discord.js", "NestJS", "MongoDB", "Supabase"],
    imgUrl: ProjectImg5,
  },
  {
    title: "CryptoChefs",
    company: "SpicyFi GmbH",
    category: "Web3",
    description:
      "Full React Web3 game platform with wallet integration and smart contract interaction for in-game transactions and asset ownership.",
    stack: ["React", "Next.js", "Redux", "web3.js", "Solidity"],
    imgUrl: ProjectImg6,
  },
  {
    title: "Cryptonaire Quiz App",
    company: "SpicyFi GmbH",
    category: "Mobile",
    description:
      "Live quiz application with real-time gameplay, session management, and secure authentication over a Node.js API layer.",
    stack: ["React Native", "Node.js", "Express.js", "Socket.io", "MongoDB"],
    imgUrl: ProjectImg7,
  },
  {
    title: "Wealthface Trading App",
    company: "Wealthface L.L.C.",
    category: "Fintech",
    description:
      "Trading and investment app built from concept to store deployment, with push notifications, real-time sync, and customer analytics.",
    stack: ["React Native", "Redux", "REST APIs", "Firebase", "Figma"],
    imgUrl: ProjectImg9,
  },
  {
    title: "Oil Industry Platform",
    company: "Wellirs",
    category: "Platform",
    description:
      "Multi-stakeholder operations platform with a shared design system, role-based access control, and performance-tuned data views.",
    stack: ["React", "TypeScript", "React Query", "Design System", "Node.js"],
    imgUrl: ProjectImg8,
  },
];
