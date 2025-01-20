"use client";

import aboutConfig from "../config/aboutConfig";
import {
  FaBriefcase,
  FaTools,
  FaCode,
  FaDatabase,
  FaServer,
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

const skillIcons: { [key: string]: JSX.Element } = {
  React: <FaReact />,
  "Next.js": <FaReact />,
  "Vue.js": <FaVuejs />,
  Angular: <FaCode />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  TypeScript: <FaJs />,
  "Node.js": <FaNodeJs />,
  Python: <FaPython />,
  Flask: <FaPython />,
  Java: <FaJava />,
  Django: <FaPython />,
  Laravel: <FaCode />,
  MySQL: <FaDatabase />,
  PostgreSQL: <FaDatabase />,
  MongoDB: <FaDatabase />,
  SQLite: <FaDatabase />,
  AWS: <FaAws />,
  "GitHub Actions": <FaGithub />,
  "GitLab CI/CD": <FaGitlab />,
  "React Native": <FaReact />,
  Expo: <FaReact />,
  "Machine Learning": <FaCode />,
  "Artificial Intelligence": <FaCode />,
};

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <main>
        <section className="mt-10 max-w-2xl mx-auto px-6">
          <h1 className="text-4xl font-bold">{aboutConfig.title}</h1>
          <p className="mt-4 text-lg opacity-60">{aboutConfig.intro}</p>
        </section>
        <section className="mt-8 max-w-2xl mx-auto px-6">
          {aboutConfig.description.map((paragraph, index) => (
            <p key={index} className="mt-4 text-lg">
              {paragraph}
            </p>
          ))}
        </section>
        <section className="my-20 max-w-2xl mx-auto px-6 sm:flex sm:gap-16">
          <h2 className="flex items-center gap-2">
            <FaBriefcase /> {aboutConfig.workTitle}
          </h2>
          <div>
            <div className="mb-6">{aboutConfig.workIntro}</div>
            {aboutConfig.works.map((work, index) => (
              <div key={index} className="grid grid-cols-1 group">
                <a className="py-3 flex items-center justify-between group-hover:opacity-60 hover:!opacity-100 transition-opacity">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h3 className="text-xl font-bold">{work.title}</h3>
                      <p className="mt-2 opacity-60">{work.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="mt-2 opacity-60">{work.date}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="my-20 max-w-2xl mx-auto px-6 sm:flex sm:gap-16">
          <h2 className="flex items-center gap-2">
            <FaTools /> {aboutConfig.skillsTitle}
          </h2>
          <div>
            <div className="mb-6">{aboutConfig.skillsIntro}</div>
            <div className="grid grid-cols-1 gap-4 mt-4">
              {Object.entries(aboutConfig.skills).map(
                ([category, skills], index) => (
                  <div key={index}>
                    <h3 className="flex items-center gap-2">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                      {category === "frontend" && <FaCode />}
                      {category === "backend" && <FaServer />}
                      {category === "database" && <FaDatabase />}
                      {category === "devOps" && <FaTools />}
                    </h3>
                    <ul className="flex gap-4 mt-2 flex-wrap">
                      {skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="flex items-center gap-2"
                        >
                          {skillIcons[skill as keyof typeof skillIcons]} {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
        <section className="my-10 max-w-2xl mx-auto px-6 sm:flex sm:gap-8">
          <h2 className="flex items-center gap-2 mb-4">
            <FaBriefcase /> Milestone
          </h2>
          <div>
            {aboutConfig.achievements.map((achievement, index) => (
              <div key={index} className="grid grid-cols-1 group mb-4">
                <a className="py-2 flex items-center justify-between group-hover:opacity-60 hover:!opacity-100 transition-opacity">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                      <p className="mt-1 opacity-60">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
