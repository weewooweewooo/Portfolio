"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Section from "@/components/sections/sectionComponent";

export default function Intro({ mounted }: { mounted: boolean }) {
  return (
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
  );
}
