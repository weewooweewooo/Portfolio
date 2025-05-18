"use client";

import { motion } from "framer-motion";
import Section from "@/components/sections/sectionComponent";
import aboutConfig from "../config/aboutConfig";
import skillIcons from "@/utils/skillIcons";
import {
  FaBriefcase,
  FaTools,
  FaCode,
  FaDatabase,
  FaServer,
  FaReact,
  FaPlug,
  FaCss3Alt
} from "react-icons/fa";

export default function About({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
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

        {/* Work */}
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

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaTools /> {aboutConfig.techStackTitle}
          </h3>
          <p className="opacity-70 mb-8">{aboutConfig.techStackIntro}</p>

          <div className="space-y-8">
            {/* Frontend */}
            <motion.div
              className="p-6 border border-black/10 dark:border-white/10 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaCode /> Frontend
              </h4>
              <div className="space-y-4">
                {aboutConfig.techStack.frontend.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 font-medium">
                        {skillIcons[skill.name as keyof typeof skillIcons] || (
                          <FaCode />
                        )}
                        <span>{skill.name}</span>
                      </span>
                      <span className="opacity-70">{skill.level}%</span>
                    </div>
                    <motion.div
                      className="h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-teal-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="p-6 border border-black/10 dark:border-white/10 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaServer /> Backend
              </h4>
              <div className="space-y-4">
                {aboutConfig.techStack.backend.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 font-medium">
                        {skillIcons[skill.name as keyof typeof skillIcons] || (
                          <FaCode />
                        )}
                        <span>{skill.name}</span>
                      </span>
                      <span className="opacity-70">{skill.level}%</span>
                    </div>
                    <motion.div
                      className="h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Integrations */}
            <motion.div
              className="p-6 border border-black/10 dark:border-white/10 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaPlug /> Integrations
              </h4>
              <div className="space-y-4">
                {aboutConfig.techStack.integration.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 font-medium">
                        {skillIcons[skill.name as keyof typeof skillIcons] || (
                          <FaCode />
                        )}
                        <span>{skill.name}</span>
                      </span>
                      <span className="opacity-70">{skill.level}%</span>
                    </div>
                    <motion.div
                      className="h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools & APIs */}
            <motion.div
              className="p-6 border border-black/10 dark:border-white/10 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaTools /> Tools & APIs
              </h4>
              <div className="space-y-4">
                {aboutConfig.techStack.tools.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 font-medium">
                        {skillIcons[skill.name as keyof typeof skillIcons] || (
                          <FaCode />
                        )}
                        <span>{skill.name}</span>
                      </span>
                      <span className="opacity-70">{skill.level}%</span>
                    </div>
                    <motion.div
                      className="h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
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
                    {category === "CSS" && <FaCss3Alt />}
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
  );
}
