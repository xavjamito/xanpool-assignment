export type Parameter = {
  username: string;
}

export interface Repo {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}