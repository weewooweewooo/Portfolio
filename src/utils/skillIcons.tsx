import React from 'react';
import {
  FaReact, FaNode, FaAngular, FaVuejs, FaPython, FaJava, FaPhp, FaLaravel,
  FaAws, FaDocker, FaGithub, FaGitlab, FaNpm, FaHtml5, FaCss3Alt,
  FaSass, FaJs, FaBootstrap, FaWordpress, FaDatabase, FaServer, FaTools,
  FaJira, FaFigma, FaStripe, FaLinux, FaWindows, FaAppStoreIos, FaAndroid, FaCode
} from 'react-icons/fa';

import {
  SiTypescript, SiNextdotjs, SiNuxtdotjs, SiExpress, SiDjango, SiFlask, 
  SiSpring, SiDotnet, SiRubyonrails, SiPostgresql, SiMysql, SiMongodb,
  SiRedis, SiSqlite, SiGraphql, SiFirebase, SiSupabase, SiTailwindcss,
  SiMui, SiChakraui, SiStyledcomponents, SiReactrouter, SiRedux,
  SiJest, SiMocha, SiCypress, SiWebpack, SiVite, SiElectron,
  SiFlutter, SiSwift, SiKotlin, SiTensorflow, SiPytorch, SiScikitlearn,
  SiOpenai, SiBlender, SiUnity, SiUnrealengine, SiJupyter, SiVercel,
  SiNetlify, SiHeroku, SiDigitalocean, SiAmazonec2, SiGooglecloud,
  SiNginx, SiApache, SiCplusplus, SiR,
  SiGo, SiRust, SiIntellijidea, SiTrello
} from 'react-icons/si';

import { VscAzure } from "react-icons/vsc";

import { TbBrandThreejs, TbBrandWebflow, TbBrandCSharp, TbBrandReactNative } from 'react-icons/tb';
import { BiLogoVisualStudio } from "react-icons/bi";

// Type definition for the skill icons mapping
type SkillIconsType = {
  [key: string]: React.ReactNode;
};

// Export the skill icons mapping
const skillIcons: SkillIconsType = {
  // Frontend
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-500" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  React: <FaReact className="text-blue-400" />,
  "Next.js": <SiNextdotjs />,
  "Vue.js": <FaVuejs className="text-green-500" />,
  "Nuxt.js": <SiNuxtdotjs className="text-green-600" />,
  Angular: <FaAngular className="text-red-500" />,
  Bootstrap: <FaBootstrap className="text-purple-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  Sass: <FaSass className="text-pink-500" />,
  "Material UI": <SiMui className="text-blue-500" />,
  "Chakra UI": <SiChakraui className="text-teal-500" />,
  "Styled Components": <SiStyledcomponents className="text-pink-500" />,
  "React Router": <SiReactrouter className="text-red-500" />,
  Redux: <SiRedux className="text-purple-600" />,
  "Three.js": <TbBrandThreejs />,
  Webflow: <TbBrandWebflow />,
  
  // Backend
  "Node.js": <FaNode className="text-green-600" />,
  Express: <SiExpress />,
  Python: <FaPython className="text-blue-500" />,
  Django: <SiDjango className="text-green-700" />,
  Flask: <SiFlask />,
  Java: <FaJava className="text-red-600" />,
  Spring: <SiSpring className="text-green-500" />,
  ".NET": <SiDotnet className="text-purple-600" />,
  PHP: <FaPhp className="text-purple-500" />,
  Laravel: <FaLaravel className="text-red-500" />,
  "Ruby on Rails": <SiRubyonrails className="text-red-600" />,
  GraphQL: <SiGraphql className="text-pink-600" />,
  
  // Database
  PostgreSQL: <SiPostgresql className="text-blue-600" />,
  MySQL: <SiMysql className="text-blue-800" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Redis: <SiRedis className="text-red-500" />,
  SQLite: <SiSqlite className="text-blue-400" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  Supabase: <SiSupabase className="text-green-600" />,
  
  // DevOps & Tools
  Git: <FaGithub />,
  "GitHub Actions": <FaGithub />,
  "GitLab CI/CD": <FaGitlab className="text-orange-600" />,
  Docker: <FaDocker className="text-blue-500" />,
  AWS: <FaAws className="text-yellow-600" />,
  Vercel: <SiVercel />,
  Netlify: <SiNetlify className="text-teal-500" />,
  Heroku: <SiHeroku className="text-purple-500" />,
  "Digital Ocean": <SiDigitalocean className="text-blue-500" />,
  "Amazon EC2": <SiAmazonec2 className="text-yellow-600" />,
  "Google Cloud": <SiGooglecloud className="text-red-500" />,
  Azure: <VscAzure className="text-blue-500" />,
  Nginx: <SiNginx className="text-green-500" />,
  Apache: <SiApache className="text-red-600" />,
  NPM: <FaNpm className="text-red-500" />,
  Webpack: <SiWebpack className="text-blue-500" />,
  Vite: <SiVite className="text-purple-500" />,
  Jest: <SiJest className="text-red-600" />,
  Mocha: <SiMocha className="text-brown-500" />,
  Cypress: <SiCypress />,
  Linux: <FaLinux />,
  Windows: <FaWindows className="text-blue-500" />,
  
  // Mobile
  "React Native": <TbBrandReactNative className="text-blue-500" />,
  Expo: <FaReact className="text-blue-400" />,
  Flutter: <SiFlutter className="text-blue-500" />,
  iOS: <FaAppStoreIos className="text-gray-500" />,
  Swift: <SiSwift className="text-orange-500" />,
  Android: <FaAndroid className="text-green-500" />,
  Kotlin: <SiKotlin className="text-orange-600" />,
  Electron: <SiElectron className="text-blue-400" />,
  
  // AI/ML
  TensorFlow: <SiTensorflow className="text-orange-500" />,
  PyTorch: <SiPytorch className="text-red-500" />,
  "scikit-learn": <SiScikitlearn className="text-orange-600" />,
  "Machine Learning": <SiPytorch className="text-red-500" />,
  "Artificial Intelligence": <SiOpenai />,
  "Deep Learning": <SiTensorflow className="text-orange-500" />,
  "Computer Vision": <SiPytorch className="text-red-500" />,
  "Natural Language Processing": <SiOpenai />,
  
  // Languages
  C: <SiCplusplus />,
  "C++": <SiCplusplus className="text-blue-500" />,
  "C#": <TbBrandCSharp className="text-purple-600" />,
  R: <SiR className="text-blue-600" />,
  Go: <SiGo className="text-blue-400" />,
  Rust: <SiRust className="text-orange-600" />,
  
  // Design & 3D
  Figma: <FaFigma className="text-purple-500" />,
  Blender: <SiBlender className="text-orange-500" />,
  Unity: <SiUnity />,
  "Unreal Engine": <SiUnrealengine />,
  
  // Other
  Jira: <FaJira className="text-blue-500" />,
  Trello: <SiTrello className="text-blue-500" />,
  Stripe: <FaStripe className="text-purple-500" />,
  WordPress: <FaWordpress className="text-blue-500" />,
  Jupyter: <SiJupyter className="text-orange-500" />,
  "VS Code": <BiLogoVisualStudio className="text-blue-500" />,
  "IntelliJ IDEA": <SiIntellijidea className="text-red-500" />,
  
  // Fallbacks for categories
  Frontend: <FaCode className="text-blue-500" />,
  Backend: <FaServer className="text-green-600" />,
  Database: <FaDatabase className="text-orange-600" />,
  DevOps: <FaTools className="text-gray-500" />,
  Mobile: <FaAppStoreIos />,
  AI: <SiOpenai />,
};

export default skillIcons;