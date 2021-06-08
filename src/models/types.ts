export type Parameter = {
  username: string;
  repoName: string;
}

export type Repo = {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}

export type RepoFile = {
  name: string;
  size: string;
  type: string;
  download_url: string;
  html_url: string;
}