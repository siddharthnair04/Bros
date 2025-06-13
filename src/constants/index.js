import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  linkedin,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
} from "../assets";

import timhortons from "../assets/timhortons.svg";
import wildandthemoon from "../assets/wildandthemoon.svg";
import punjabgrill from "../assets/punjabgrill.svg";
import aj from "../assets/aj.svg";
import dayls from "../assets/dayls.svg";
import orshana from "../assets/oshana.svg";
import zoya from "../assets/zoya.svg";
import m from "../assets/m.svg";
import simplyfy from "../assets/simplyfy.svg";
import apt from "../assets/apt.svg";
import timeless from "../assets/timeless.svg";
import missan from "../assets/missan.svg";
import govt from "../assets/govt.svg";
import jwelex from "../assets/jwelex.svg";
import petrepblic from "../assets/petreblic.svg";
import genesis from "../assets/genesis.svg";
import mnv from "../assets/mnv.svg";
import blackfox from "../assets/blackfox.svg";
import bankai from "../assets/bankai.svg";
import something from "../assets/something.svg";
import bpi from "../assets/bpi.svg";
import hyundai from "../assets/hyundai.svg";
import tata from "../assets/tata.svg";
import mignas from "../assets/mignas.svg";
import rewind from "../assets/rewind.svg";
import eos from "../assets/eos.svg";
import alkabban from "../assets/alkabban.svg";




export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Works",
    url: "#services",
  },
  {
    id: "2",
    title: "Services",
    url: "#benefits",
  },
  {
    id: "3",
    title: "Contact",
    url: "#footer",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

//export const companyLogos = [timhortons, wildandthemoon, punjabgrill, aj, zaza, genesis, hyundai, tata, mignas, rewind, eos, alkabban,dayls, orshana, zoya, m, simplyfy, apt, timeless, missan, govt, jwelex, petrepblic,mnv, blackfox, bankai, something, bpi];

export const brainwaveServices = [
  "Creating Moments",
  "Spark Emotion",
  "Turn Followers into Believers",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Content Creation",
    text: "Engaging, high-quality content that captivates audiences and strengthens brand identity.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Social Media",
    text: "Data-driven strategies to grow your online presence and drive meaningful engagement.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "SEO",
    text: "Optimized strategies that improve search rankings and drive organic traffic to your brand.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Website Development",
    text: "Stunning, high-performance websites that enhance user experience and convert visitors into customers.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Photography & Videography",
    text: "Professional storytelling through visually compelling images and videos that leave a lasting impact.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/brosagencyy/profilecard/?igsh=MXRubmU1a3FuYzB1dw==",
  },
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/company/brosagency1/",
  },
];
