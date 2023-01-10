import "./Article.css";
import { useNavigate } from "react-router-dom";
const Article = ({ title, author, img, alt }) => {

  return (
      <figure>
        <img src={img} alt={alt} />
        <figcaption><h3 className="article-title">{title}</h3></figcaption>
        <h4 className="article-author">{author}</h4>
      </figure>
  );
};

export default Article;
