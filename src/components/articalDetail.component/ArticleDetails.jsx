import { useParams } from "react-router-dom";
import { getArticles } from "../../apICalls/getArticles";
import { useEffect } from "react";
import { useState } from "react";
import "./ArticleDetails.css";
import load from "../../resources/loading.mp4"

const ArticleDetails = () => {
  const articleTitle = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false)

  const { abstract, title, byline, short_url, multimedia, published_date } = article;
  const date = new Date(published_date)


  useEffect(() => {
    
    const fetchArticle = async () => {
      const articles = await getArticles();
      const clickedArticle = articles.find(
        (article) => article.title === articleTitle.title
      );
      setLoading(true)
      setArticle(clickedArticle);
    };
    fetchArticle();
  }, []); 

  return (<>{!loading ?  <video autoPlay loop muted> <source src={load} type="video/mp4"/></video> : <div className="article-container">
  <div className="image-container">
    <img className="detail-image"src={multimedia?.[0]?.url} alt={multimedia?.[0]?.caption} />
  </div>
  <div className="details-container">
    <h2>{title}</h2>
    <p>
      {abstract} <a href={short_url}>read more</a>
    </p>
    <p>published: {date.toLocaleDateString()}</p>
    <h3>{byline}</h3>
  </div>
</div>}</>
   
  );
};

export default ArticleDetails;
