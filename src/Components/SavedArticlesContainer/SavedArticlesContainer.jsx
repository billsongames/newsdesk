import React, { useEffect, useState } from "react";
import axios from 'axios'

import Sidebar from "../Sidebar/Sidebar"
import ArticleCardMinor from "../ArticleCardMinor/ArticleCardMinor";
import Alert from "../Alert/Alert"

import "./article-container.css"

import { testData } from "../../data/data";
import APITest from "../APITest/APITest";

function ArticleContainer({articleCategory, searchQuery}) {
  const testMode=true

  const [articles,setArticles] = useState([])
  const [reverse, setReverse] = useState(false);
  const reverseOrder = () => {
    setReverse(!reverse);
  };

  const sortedArticles = reverse ? articles.slice().reverse() : articles;

  const [alert,setAlert] = useState({message: ""})

  useEffect(() => {
    if (testMode) {
      setArticles(testData.articles)
    }
  }, [testMode])


 // TOP HEADLINES ENDPOINT

/*   useEffect(() => {
    if (!searchQuery) {
      console.log(`No search query, ${articleCategory} category displayed`)
      axios
      .get(`https://gnews.io/api/v4/top-headlines?category=${articleCategory}&lang=en&country=gb&sortby=publishedAt&apikey=445b4b502608f3804329f4428b41b723`)

      .then(function (response) {
        setArticles(response.data.articles)
        setAlert({
          message: ""
        })

      })
      .catch(function (error) {
        setAlert({
          message: "ERROR RETRIEVING ARTICLES. PLEASE TRY LATER..."
        })
        console.log(error);
      })
    }

// SEARCH QUERY ENDPOINT
    
    else if (!articleCategory) {
      console.log(`Search query = ${searchQuery}, no category displayed`)

      axios
      .get(`https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&country=us&max=10&apikey=445b4b502608f3804329f4428b41b723`)

      .then(function (response) {
        setAlert({
          message: ""
        })
        setArticles(response.data.articles)
        

      })
      .catch(function (error) {
        setAlert({
          message: "ERROR RETRIEVING ARTICLES. PLEASE TRY LATER..."
        })  
        console.log(error);
      })
    }
  
  } ,[articleCategory, searchQuery]) */









  return(
    <div className="article-container">
      <div>
        <Sidebar reverseOrder={reverseOrder} />
      </div>
    
      <div>
        <Alert message={alert.message} />
        {sortedArticles.map((article) => (
          <div key={article.title}>
            <ArticleCardMinor
              title = {article.title}
              description={article.description}
              content={article.content}
              image={article.image}
              url={article.url}
              source={article.source.name}
              time={article.publishedAt}
            />
        </div>
      ))}
      </div>  
  </div>
  )
}

export default ArticleContainer