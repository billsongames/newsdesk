import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types"
//import { supabase } from '../../api/api';
import axios from 'axios'


//import { DarkModeContext } from "../../context/DarkModeContext";

import Sidebar from "../Sidebar/Sidebar"
import TickerBanner from "../TickerBanner/TickerBanner";
import ArticleCardMinor from "../ArticleCardMinor/ArticleCardMinor";
import Alert from "../Alert/Alert"

import "./article-container.css"
//import {themeColors} from "../../themes/themes"

import { testData } from "../../data/data";
//import APITest from "../APITest/APITest";





function ArticleContainer( {userID, articleCategory, searchQuery} ) {

//###########################################
//                                          #
// CHANGE THIS TO FALSE FOR LIVE ARTICLES   #
//                                          #
  const testMode=true                     //#
//                                          #
//###########################################   


  const [articles, setArticles] = useState([])
//  const [savedArticles, setSavedArticles] = useState([])
  const [alert, setAlert] = useState({message: ""})
  const [reverse, setReverse] = useState(false);
  const [selected, setSelected] = useState("")
  const [tickerText, setTickerText] = useState({text: ""})
  const [topArticleDate, setTopArticleDate] = useState({date: 0})
  const [firstRun, setFirstRun] = useState(true)
  
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
  

// SET TICKER BANNER


  useEffect(() => {
    if (firstRun) {

      const timer=  setTimeout(() => {

      axios
        .get(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=gb&sortby=publishedAt&apikey=445b4b502608f3804329f4428b41b723`)
  
        .then(function (response) {
          setArticles(response.data.articles)
          setAlert({
            message: ""
          })
          setSelected("");

          function setText() {
            setTopArticleDate({date: response.data.articles[0].publishedAt})
            console.log(topArticleDate)
            let interval = (Date.now() - Date.parse(topArticleDate.date)) / 1000 / 60 / 60;
            console.log(interval)
            if (interval >= 0 && interval < 2) {
            setTickerText({text: response.data.articles[0].title})              
            }
          }
          setText()

        })
        .catch(function (error) {
          setAlert({
            message: "ERROR RETRIEVING ARTICLES. PLEASE TRY LATER..."
          })
          console.log(error);
        })
      }, 4000)
      setFirstRun(false)
      return() => clearTimeout(timer)      
    }
  },[])





  useEffect(() => {
    async function getArticles() {

      if (testMode) {
        setArticles(testData.articles)

    } else {

  // TOP HEADLINES ENDPOINT      

      if (!searchQuery) {
        console.log(`No search query, ${articleCategory} category displayed`)
        axios
        .get(`https://gnews.io/api/v4/top-headlines?category=${articleCategory}&lang=en&country=gb&sortby=publishedAt&apikey=445b4b502608f3804329f4428b41b723`)
  
        .then(function (response) {
          setArticles(response.data.articles)
          setAlert({
            message: ""
          })
          setSelected("");
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
      }
    }
    getArticles()


}, [articleCategory, searchQuery, testMode])





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

      <TickerBanner text={tickerText.text}/>
    
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

ArticleContainer.propTypes = {
  userID: PropTypes.string.isRequired,
  articleCategory: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired
}

export default ArticleContainer
