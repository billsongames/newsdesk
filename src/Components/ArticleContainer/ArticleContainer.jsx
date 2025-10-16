import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types"
//import { supabase } from '../../api/api';
import axios from 'axios'


//import { DarkModeContext } from "../../context/DarkModeContext";

import Sidebar from "../Sidebar/Sidebar"
import TickerBanner from "../TickerBanner/TickerBanner";
import ArticleCardMinor from "../ArticleCardMinor/ArticleCardMinor";
import Alert from "../Alert/Alert"

import noimage from "../../noimage.png"

import "./article-container.css"
//import {themeColors} from "../../themes/themes"

import { testData } from "../../data/data";
//import APITest from "../APITest/APITest";





function ArticleContainer({ userID, articleCategory, searchQuery }) {

  const REACT_APP_NEWSDATAIO_APIKEY = process.env.REACT_APP_NEWSDATAIO_APIKEY

  //###########################################
  //                                          #
  // CHANGE THIS TO FALSE FOR LIVE ARTICLES   #
  //                                          #
  const testMode = false                     //#
  //                                          #
  //###########################################


  const [articles, setArticles] = useState([])
  //  const [savedArticles, setSavedArticles] = useState([])
  const [alert, setAlert] = useState({ message: "" })
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




  // GET ARTICLES

  useEffect(() => {
    async function getArticles() {

      if (testMode) {
        setArticles(testData.articles)

      } else {

        // TOP HEADLINES ENDPOINT      

        if (!searchQuery) {
          console.log(`No search query, ${articleCategory} category displayed`)
          axios
            .get(`https://newsdata.io/api/1/latest?apikey=${REACT_APP_NEWSDATAIO_APIKEY}&country=gb&category=${articleCategory}`)

            .then(function (response) {
              setArticles(response.data.results)
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

          axios
            .get(`https://newsdata.io/api/1/latest?apikey=${REACT_APP_NEWSDATAIO_APIKEY}&q=${searchQuery}&country=gb`)

            .then(function (response) {
              setAlert({
                message: ""
              })
              setArticles(response.data.results)


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





  return (
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
          <div key={article.article_id}>
            <ArticleCardMinor
              title={article.title}
              description={article.description}
              image={article.image_url? article.image_url : noimage}
              link={article.link}
              source={article.source_name}
              pubDate={article.pubDate}
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
