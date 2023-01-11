import "./Article.css";
const Article = ({ title, author, img, alt }) => {

  return (
      <figure>
        <h4 className="article-author">{author}</h4>
        <img className="article-image"src={img} alt={alt} />
        <figcaption><h3 className="article-title">{title}</h3></figcaption>
        
      </figure>
  );
};

export default Article;
