export const  getUserRepos = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  console.log('response', response);
  return await response.json();
}