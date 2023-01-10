import { useEffect, useState } from "react";
import { getArticles } from "../../apICalls/getArticles";
import Article from "../article.component/Article";

import "./Home.css";
const Home = () => {
  const [allArticles, setAllArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticles();
      setAllArticles(articles);
      return await articles;
    };
    fetchArticles();
  }, []);

  const displayArticle = allArticles?.map((article) => {
    const sortedUrl = article.multimedia.sort((a, b) => a.height - b.height);
    return (
      <li key={article.title}>
        <Article
          title={article.title}
          author={article.byline}
          img={sortedUrl[1].url}
          alt={article.multimedia[0].caption}
        />
      </li>
    );
  });

  return (
    <div className="home-container">
      <ul className="articles-container">{displayArticle} </ul>
    </div>
  );
};

export default Home;
