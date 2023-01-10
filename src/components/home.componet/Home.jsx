import { useEffect, useState } from "react";
import { getArticles } from "../../apICalls/getArticles";
import { useNavigate } from "react-router-dom";
import Article from "../article.component/Article";
import load from "../../resources/loading.mp4"
import Filter from "../filter.componet/Filter";

import "./Home.css";
const Home = () => {
const navigate = useNavigate()
  const [allArticles, setAllArticles] = useState([]);
  const [filter, setFilter] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(()=>{
    if(filtered.length === 0 ){
      setFiltered(allArticles)
    }
  }, [filtered, allArticles])

  const fetchArticles = async () => {
    const listOfFilters = []
    const articles = await getArticles();
    setLoading(true)
    articles.forEach(article => {
      if(!listOfFilters.includes(article.section)){
        listOfFilters.push(article.section)
      }
    } )
    setFilter(listOfFilters)
    setAllArticles(articles);
   
  };
  

  const displayArticle = filtered?.map((article) => {
    const sortedUrl = article.multimedia?.sort((a, b) => a.height - b.height);
    return (
      <li aria-label={article.title}key={article.title} className="article-container" onClick={()=> navigate(`/article/${article.title}`)}>
        {!loading ? <video autoPlay muted loop> <source src={load} type="video/mp4"/></video> : <Article
          title={article.title}
          author={article.byline}
          img={sortedUrl?.[1].url}
          alt={article.multimedia?.[0]?.caption}
        />
    }
      </li>
    );
  });

  return (
    <div className="home-container">
      <Filter filter={filter} allArticles={allArticles} setAllArticles={setAllArticles} setFiltered={setFiltered} fetchArticles={fetchArticles}/>
      <ul  className="articles-container" aria-label="List of articles">{displayArticle} </ul>
    </div>
  );
};

export default Home;
