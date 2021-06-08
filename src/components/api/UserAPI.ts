export const getUserRepos = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  return await response.json();
}

export const getRepoFiles = async (username: string, repoName: string) => {
  const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/contents`);
  return await response.json();
}

export const getReadme = async (url: string) => {
  const response = await fetch(url);
  return await response.text();
}