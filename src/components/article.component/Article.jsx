import "./Article.css";
import { useNavigate } from "react-router-dom";
const Article = ({ title, author, img, alt }) => {
  const navigate = useNavigate();
  return (
      <figure>
        <h4 className="article-author">{author}</h4>
        <img  onClick={() => navigate(`/article/${title}`)}className="article-image"src={img} alt={alt} />
        <figcaption><h3 className="article-title">{title}</h3></figcaption>
        
      </figure>
  );
};

export default Article;
