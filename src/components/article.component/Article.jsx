import "./Article.css";
import { useNavigate } from "react-router-dom";
const Article = ({ title, author, img, alt }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/article/${title}`)
    }
  return (
    <div className="article-container" onClick={()=> handleClick()}>
      <figure>
        <img src={img} alt={alt} />
        <figcaption><h3 className="article-title">{title}</h3></figcaption>
        <h4 className="article-author">{author}</h4>
      </figure>
     
    </div>
  );
};

export default Article;
