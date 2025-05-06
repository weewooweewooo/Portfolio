"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import Section from "@/components/sections/sectionComponent";
import aboutConfig from "../config/aboutConfig";
import skillIcons from "@/utils/skillIcons";
import { useProjects } from "@/hooks/useProjects";
import {
  FaBriefcase,
  FaTools,
  FaCode,
  FaDatabase,
  FaServer,
  FaReact,
  FaGithub,
} from "react-icons/fa";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("frontend");
  const { projects, loading } = useProjects();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full">
      <Section id="home" className="flex items-center justify-center relative">
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.7,
            x: [0, 30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ top: "20%", left: "5%" }}
        />

        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.7,
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ bottom: "5%", right: "10%" }}
        />

        <motion.main
          className="flex flex-col gap-6 items-center sm:items-start z-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold flex flex-wrap justify-center sm:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span>Hi, I&apos;m&nbsp;</span>
            {mounted && (
              <TypeAnimation
                sequence={[
                  "Sean Lee",
                  10000,
                  "a Developer",
                  2000,
                  "a Designer",
                  2000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                className="relative typewriter-text"
              />
            )}
          </motion.h1>

          <motion.p
            className="mt-2 text-base sm:text-lg opacity-60 min-h-[1.5em] text-center sm:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {mounted && (
              <TypeAnimation
                sequence={[
                  "You only live once, make it count.",
                  10000,
                  "Building digital experiences that inspire.",
                  2000,
                  "Turning ideas into reality through code.",
                  2000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                className="typewriter-text"
              />
            )}
          </motion.p>
        </motion.main>

        <motion.div
          className="fixed bottom-4 left-4 hidden sm:flex items-center text-sm opacity-0"
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="mr-2 h-2 w-2 rounded-full bg-green-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <code>ready</code>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section
        id="about"
        className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 items-center justify-center"
      >
        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {aboutConfig.title}
          </h2>
          <h3 className="text-xl opacity-70 mb-8">{aboutConfig.intro}</h3>

          <div className="space-y-6">
            {aboutConfig.description.map((paragraph, i) => (
              <p key={i} className="text-base opacity-80">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaBriefcase /> {aboutConfig.workTitle}
            </h3>
            <p className="opacity-70 mb-8">{aboutConfig.workIntro}</p>

            <div className="grid gap-6 sm:grid-cols-2">
              {aboutConfig.works.map((work, i) => (
                <motion.div
                  key={i}
                  className="p-6 border border-black/10 dark:border-white/10 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-bold">{work.title}</h4>
                  <p className="opacity-70 mt-1">{work.description}</p>
                  <p className="text-sm opacity-50 mt-4 flex items-center gap-1">
                    <FaCode className="opacity-70" /> {work.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaTools /> {aboutConfig.skillsTitle}
            </h3>
            <p className="opacity-70 mb-8">{aboutConfig.skillsIntro}</p>

            {/* Tabs navigation */}
            <div className="border-b border-black/10 dark:border-white/10 mb-6">
              <div className="flex overflow-x-auto gap-2 pb-1">
                {Object.keys(aboutConfig.skills).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`px-4 py-2 rounded-t-lg transition-colors ${
                      activeTab === category
                        ? "bg-black/10 dark:bg-white/10 font-medium"
                        : "hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {category === "frontend" && <FaCode />}
                      {category === "backend" && <FaServer />}
                      {category === "database" && <FaDatabase />}
                      {category === "devOps" && <FaTools />}
                      {category === "mobile" && <FaReact />}
                      {category === "AI" && <FaCode />}
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 border border-black/10 dark:border-white/10 rounded-lg"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {(
                  aboutConfig.skills[
                    activeTab as keyof typeof aboutConfig.skills
                  ] as string[]
                ).map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 p-4 bg-black/[0.02] dark:bg-white/[0.02] rounded-lg hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors"
                    whileHover={{ scale: 1.03 }}
                  >
                    <span className="text-xl text-black/70 dark:text-white/70">
                      {skillIcons[skill as keyof typeof skillIcons]}
                    </span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaBriefcase /> Milestones
            </h3>
            <p className="opacity-70 mb-10">
              Notable accomplishments throughout my journey.
            </p>

            <div className="space-y-10">
              {aboutConfig.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  className="p-8 border border-black/10 dark:border-white/10 rounded-lg hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 text-blue-500 dark:text-blue-400">
                    {achievement.title}
                  </h4>
                  <p className="text-base opacity-80 leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        className="bg-black/5 dark:bg-white/5 px-4 sm:px-8 md:px-16 lg:px-24 py-16 items-center justify-center"
      >
        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Projects</h2>
          <h3 className="text-xl opacity-70 mb-8">Some things I&apos;ve built.</h3>

          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="bg-background border border-black/10 dark:border-white/10 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="opacity-30">
                    <FaGithub size={48} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="opacity-70 mt-2 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.languages.length > 0 ? (
                      <>
                        {project.languages.slice(0, 4).map((lang, index) => (
                          <span
                            key={index}
                            className="flex items-center gap-1 text-xs bg-black/5 dark:bg-white/10 px-2 py-1 rounded-full whitespace-nowrap"
                          >
                            {skillIcons[lang as keyof typeof skillIcons] ? (
                              <span className="text-xs opacity-70">
                                {skillIcons[lang as keyof typeof skillIcons]}
                              </span>
                            ) : (
                              <FaCode className="text-xs opacity-70" />
                            )}
                            {lang}
                          </span>
                        ))}
                        {project.languages.length > 4 && (
                          <span className="text-xs bg-black/5 dark:bg-white/10 px-2 py-1 rounded-full">
                            +{project.languages.length - 4} more
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="text-xs bg-black/5 dark:bg-white/10 px-2 py-1 rounded-full flex items-center">
                        <FaCode className="mr-1 opacity-70" /> Code
                      </span>
                    )}
                  </div>

                  <motion.a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>View on GitHub</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 items-center justify-center"
      >
        <motion.div
          className="w-full max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="opacity-70 mb-8">
            I&apos;m currently looking for new opportunities. If you have a project
            in mind or just want to chat, feel free to reach out!
          </p>

          <motion.a
            href="mailto:zylee333@gmail.com"
            className="inline-block px-6 py-3 border-2 border-black/10 dark:border-white/20 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
          </motion.a>

          <div className="mt-12 flex justify-center gap-6">
            <motion.a
              href="https://github.com/weewooweewooo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <FaGithub size={24} />
            </motion.a>
            {/* Add other social links here */}
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
