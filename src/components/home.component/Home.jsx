import { useEffect, useState } from "react";
import Article from "../article.component/Article";
import load from "../../resources/loading.mp4";
import Filter from "../filter.component/Filter";

import "./Home.css";
const Home = ({
  filter,
  loading,
  allArticles,
  setAllArticles,
  fetchArticles,
}) => {
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    if (filtered.length === 0) {
      setFiltered(allArticles);
    }
  }, [filtered, allArticles]);

  const displayArticle = filtered?.map((article) => {
    const sortedUrl = article.multimedia?.sort((a, b) => a.height - b.height);
    return (
      <li
        aria-label={article.title}
        key={article.title}
        className="article-container"
      >
        <Article
          title={article.title}
          author={article.byline}
          img={sortedUrl?.[1].url}
          alt={article.multimedia?.[0]?.caption}
        />
      </li>
    );
  });

  return (
    <div className="article-details-container">
      {!loading ? (
        <video className="loading" autoPlay muted loop>
          <source src={load} type="video/mp4" />
        </video>
      ) : (
        <div className="home-container">
          <Filter
            filter={filter}
            allArticles={allArticles}
            setAllArticles={setAllArticles}
            setFiltered={setFiltered}
            fetchArticles={fetchArticles}
          />
          <ul className="articles-container" aria-label="List of articles">
            {displayArticle}{" "}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
