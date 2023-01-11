import { useState, useEffect } from "react";
import { getArticles } from "../../apICalls/getArticles";
import { Route, Routes, useNavigate } from "react-router-dom";
import ArticleDetails from "../articleDetail.component/ArticleDetails";
import Home from "../home.component/Home";
import Navbar from "../navbar.component/Navbar";
import Error from "../error.component/Error";

import "./App.css";

const App = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  
  const navigate = useNavigate()
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const listOfFilters = [];
    const articles = await getArticles();

    if (articles.message) {
      setError(articles.message);
      navigate("*")
    }

    setLoading(true);
    articles.forEach((article) => {
      if (!listOfFilters.includes(article.section)) {
        listOfFilters.push(article.section);
      }
    });
    setFilter(listOfFilters);
    setAllArticles(articles);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              loading={loading}
              filter={filter}
              allArticles={allArticles}
              setAllArticles={setAllArticles}
              fetchArticles={fetchArticles}
            />
          }
        />
        <Route path="/article/:title" element={<ArticleDetails />} />
     
        <Route path="*" element={<Error navigate={navigate} error={error}/>}/>
      </Routes>
    </div>
  );
};

export default App;
