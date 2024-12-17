const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
console.log("Authorization Token:", process.env.REACT_APP_GITHUB_TOKEN);

export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`GitHub API request failed: ${response.status} - ${errorMessage}`);
  }

  const { items } = await response.json();
  return items;
};
