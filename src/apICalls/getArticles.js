export const getArticles = async () => {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
  );
    const allArticles = await res.json()
  return allArticles.results
};
