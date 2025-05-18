"use client";

import { motion } from "framer-motion";
import Section from "@/components/sections/sectionComponent";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function Contact() {
  return (
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
          I&apos;m currently looking for new opportunities. If you have a
          project in mind or just want to chat, feel free to reach out!
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
            className="opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2"
          >
            <FaGithub size={24} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/lee-zheng-yang-453516314/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2"
          >
            <FaLinkedin size={24} />
          </motion.a>

          <motion.a
            href="/assets/Lee Zheng Yang.pdf"
            download="Lee_Zheng_Yang.pdf"
            whileHover={{ scale: 1.1 }}
            className="opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2"
          >
            <FaFileDownload size={24} />
          </motion.a>
        </div>
      </motion.div>
    </Section>
  );
}
