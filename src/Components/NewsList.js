import React, { useState, useEffect } from "react";
import { fetchNews } from "../Api";
import "./NewsList.css";

function NewsList({ category }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNewsData() {
      const newsData = await fetchNews(category);
      setNews(newsData);
    }
    fetchNewsData();
  }, [category]);

  return (
    <div className="news-list">
      <h2 className="category-title">{category} News</h2>
      <div className="article-grid">
        {news.map((article, index) => (
          <a
            key={index}
            className="article-card"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="article-thumbnail">
              <img src={article.urlToImage} alt={article.title} />
            </div>
            <div className="article-details">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
