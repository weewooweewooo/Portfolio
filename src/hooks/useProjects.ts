import { useState, useEffect } from "react";
import { Project } from "@/utils/github";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/weewooweewooo/repos")
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return projects;
}
