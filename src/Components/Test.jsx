import React, {useEffect, useState} from "react";

import { testData } from "../data/data";

import axios from 'axios'



//title
//author
//source/domain
//image
//content
//url
//topics
//categories

function Test() {

  const [articles,setArticles] = useState([])

  const searchString = "Manchester United"

  useEffect(() => {
    axios
      .get(`https://gnews.io/api/v4/top-headlines?q=${searchString}&country=gb&category=sport&sortby=publishedAt&apikey=445b4b502608f3804329f4428b41b723`)

      .then(function (response) {
        setArticles(response.data.articles)

      })
      .catch(function (error) {
        console.log(error);
      })
    
  }, [])
  






  return(
    <div>
    <h2>Articles</h2>

    <div>
      {articles.map((article) => (
        <div key={article.title}>
          <div>
            Title = {article.title}
          </div>

          <div>
            Description = {article.description}
          </div>

          <div>
            Content = {article.content}
          </div>

          <div>
            <a href={article.url}>Full article</a>
          </div>

          <div>
            <img src={article.image} width={200}></img>
          </div>

          <div>
            Source = <a href={article.source.url}>{article.source.name}</a>
          </div>
      </div>
      ))}
    </div>  
  </div>
  )
}

export default Test