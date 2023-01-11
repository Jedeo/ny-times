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

  const { title, byline, abstract,short_url, multimedia, published_date } = article;
  const date = new Date(published_date)


  useEffect(() => {
    const fetchArticle = async () => {
      const articles = await getArticles();
      console.log(articles);
      const clickedArticle = articles.find(
        (article) => {
          return article.title === articleTitle.title || article.title === articleTitle.title + "?"}
      );
      setLoading(true)
      setArticle(clickedArticle);
    };
    fetchArticle();
  }, []); 


  return (<div className="article-details-container">{!loading ?  <video className="loading"autoPlay loop muted > <source src={load} type="video/mp4"/></video> : <div className="article-container">
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
</div>}</div>
   
  );
};

export default ArticleDetails;
