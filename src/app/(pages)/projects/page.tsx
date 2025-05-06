"use client";

import { useProjects } from "@/hooks/useProjects";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = useProjects();

  return (
    <div className="container mx-auto px-4">
      <main>
        <section className="mt-10 max-w-2xl mx-auto px-6">
          <h1 className="text-4xl font-bold flex items-center gap-2">
            Projects <FaGithub />
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Here are some of my projects.
          </p>
        </section>
        <section className="mt-8 max-w-2xl mx-auto px-6">
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 p-4 rounded shadow-md hover:bg-zinc-700 transition-colors"
              >
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <p className="mt-2 text-gray-600">
                  {new Date(project.created_at).getFullYear()}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
