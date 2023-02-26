import React, { useEffect, useState } from "react";
import axios from 'axios'

import ArticleCardMain from "../ArticleCardMain/ArticleCardMain";
import ArticleCardMinor from "../ArticleCardMinor/ArticleCardMinor";

import { testData } from "../data/data";

function ArticleContainer() {
  const testMode=false

  const [articles,setArticles] = useState([])

  const searchString = "Arsenal"

  useEffect(() => {
    if (testMode === false) {
    axios
      .get(`https://gnews.io/api/v4/top-headlines?q=${searchString}&country=gb&category=sport&sortby=publishedAt&apikey=445b4b502608f3804329f4428b41b723`)

      .then(function (response) {
        setArticles(response.data.articles)

      })
      .catch(function (error) {
        console.log(error);
      })
    } else {
      setArticles(testData.articles)
    }
  }, [testMode])
  






  return(
    <div>
      <h2>Articles</h2>
        <ArticleCardMain title={articles[0].title} />

    </div>
  )    
  
}

export default ArticleContainer