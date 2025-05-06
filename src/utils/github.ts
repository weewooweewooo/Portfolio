export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  languages_url: string;
  languages: Array<string>;
  created_at: string;
}
