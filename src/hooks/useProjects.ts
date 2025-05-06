import { useState, useEffect } from "react";
import { Project } from "@/utils/github";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const headers = {
          Accept: "application/vnd.github.v3+json",
          // Add your GitHub personal access token here
          Authorization: process.env.GITHUB_REPO_PERSONAL_ACCESS_TOKEN || "",
        };

        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/weewooweewooo/repos",
          { headers }
        );
        const repos = await response.json();

        const projectsWithLanguages = await Promise.all(
          repos.map(async (repo: Project) => {
            const langResponse = await fetch(repo.languages_url, { headers });
            const languagesData = await langResponse.json();

            return {
              ...repo,
              languages: Object.keys(languagesData),
            };
          })
        );

        setProjects(projectsWithLanguages);
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
