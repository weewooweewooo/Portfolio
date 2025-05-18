import { useState, useEffect } from "react";
import { Project } from "@/utils/github";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const EXCLUDED_PROJECTS = ["Portfolio"];

    async function fetchProjects() {
      try {
        const headers = {
          Accept: "application/vnd.github.v3+json",
          // Add your GitHub personal access token here (For myself only haha)
          Authorization: process.env.GITHUB_REPO_PERSONAL_ACCESS_TOKEN || "",
        };

        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/weewooweewooo/repos",
          { headers }
        );
        const repos = await response.json();

        const filteredRepos = repos.filter(
          (repo: Project) => !EXCLUDED_PROJECTS.includes(repo.name)
        );

        const projectsWithLanguages = await Promise.all(
          filteredRepos.map(async (repo: Project) => {
            const langResponse = await fetch(repo.languages_url, { headers });
            const languagesData = await langResponse.json();

            return {
              ...repo,
              languages: Object.keys(languagesData),
            };
          })
        );

        const sortedProjects = projectsWithLanguages.sort(
          (a, b) =>
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        );

        setProjects(sortedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, loading };
}
