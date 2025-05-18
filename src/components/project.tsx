"use client";

import { motion } from "framer-motion";
import Section from "@/components/sections/sectionComponent";
import skillIcons from "@/utils/skillIcons";
import { FaCode, FaGithub } from "react-icons/fa";
import { useProjects } from "@/hooks/useProjects";

export default function Project() {
  const { projects } = useProjects();
  return (
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
        <h3 className="text-xl opacity-70 mb-8">
          Some things I&apos;ve built.
        </h3>

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
  );
}
