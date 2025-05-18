"use client";

import { useState, useEffect } from "react";
import Intro from "@/components/intro";
import About from "@/components/about";
import Project from "@/components/project";
import Contact from "@/components/contact";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("frontend");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full">
      <Intro mounted={mounted} />

      {/* About Section */}
      <About activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Projects Section */}
      <Project />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
