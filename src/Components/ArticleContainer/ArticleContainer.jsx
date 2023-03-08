import React, { useEffect, useState } from "react";
import { supabase } from '../../api/api';
import axios from 'axios'

import Sidebar from "../Sidebar/Sidebar"
import ArticleCardMinor from "../ArticleCardMinor/ArticleCardMinor";
import Alert from "../Alert/Alert"

import "./article-container.css"

import { testData } from "../../data/data";
import APITest from "../APITest/APITest";

function ArticleContainer({userID, articleCategory, searchQuery}) {

  const testMode=true

  const [articles, setArticles] = useState([])
  const [savedArticles, setSavedArticles] = useState([])
  const [alert, setAlert] = useState({message: ""})
  const [reverse, setReverse] = useState(false);
  const [selected, setSelected] = useState("")
  const reverseOrder = () => {
    setReverse(!reverse);
  };
  const handleSelectChange = (selected) => {
    setSelected(selected);
    console.log(selected, "<selected");
  };
  let sortedArticles = articles;
  if (reverse) {
    sortedArticles = articles.slice().reverse();
  }
  let filteredArticles = sortedArticles;
  if (selected) {
    filteredArticles = sortedArticles.filter((article) => {
      return article.source.name === selected;
    });
  }



  
/*   useEffect(() => {
    async function getUserSavedArticles() {
      if (userID) {
        const {data, error} = await supabase
          .from('users')
          .select('saved_articles')
          .eq('user_id', `${userID}`)
    
          if (error) {
            console.log("error", error)
            setAlert({message: "Error retrieving saved articles"})
          } else {
            setSavedArticles(data[0].saved_articles)
            setAlert({message: ""})
          }
        }
    }
    getUserSavedArticles()

  }, [userID]) */

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
        <Sidebar 
          reverseOrder={reverseOrder} 
          articles={articles}
          selected={selected}
          setSelected={handleSelectChange}
        />
      </div>
    
      <div>
        <Alert message={alert.message} />
        {filteredArticles.map((article) => (
          <div key={article.title}>
            <ArticleCardMinor
              title = {article.title}
              description={article.description}
              content={article.content}
              image={article.image}
              url={article.url}
              source={article.source.name}
              publishedAt={article.publishedAt}
              userID={userID}
/*               savedArticles={savedArticles} */
            />
        </div>
      ))}
      </div>  
  </div>
  )
}

export default ArticleContainer
