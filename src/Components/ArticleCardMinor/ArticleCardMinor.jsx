import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import { supabase } from '../../api/api';
import { tester } from "../../api/api";

import "./article-card-minor.css"

function ArticleCardMinor( {title, description, content, image, url, source, publishedAt, userID} ) {

  const articleJSON = {"title": `${title}`, "image_url": `${image}`, "article_url": `${url}`, "publishedAt": `${publishedAt}`}
  const [alert,setAlert] = useState({message: ""})
  const [savedArticles, setSavedArticles] = useState([])
  
  useEffect(() => {
    setTimeout(() => {
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

    }, 1000)

  }, [userID])


  const updateSavedArticles = async() => {

    const newArticle=[...savedArticles, articleJSON]

    const {data, error} = await supabase

      .from('users')
      .update({
        saved_articles: newArticle
      })
      .eq('user_id', userID)

      if (error) {
        console.log("error", error)
      } 
    }



  let interval = (Date.now() - Date.parse(publishedAt)) / 1000 / 60 / 60;
  let timeSincePublication=""

//MINUTES
  if (interval > 0 && interval < 1) {
    interval = Math.ceil(interval * 60)
    timeSincePublication=`${interval} minutes`

// HOUR
  if (interval >= 1 && interval < 2) {
    interval = Math.floor(interval)
    timeSincePublication=`${interval} hour`
  } 
  } 
// HOURS
  if (interval >= 2 && interval < 24) {
    interval = Math.floor(interval)
    timeSincePublication=`${interval} hours`
  } 

// DAY  
  if (interval >= 24 && interval <48) {
    interval=Math.floor(interval/24)
    timeSincePublication=`${interval} day`
  }

  // DAYS  
  if (interval >= 48) {
    interval=Math.floor(interval/24)
    timeSincePublication=`${interval} days`
  }

  return(
    <div className="article-card-minor">
      Saved articles: {savedArticles.length} UserID = {userID}
      
      <div className="article-card-minor__title">
        {title}
      </div>

      <div className="article-card-minor__display">
        <div className="article-card-minor__image">
          <img className="image"src={image} alt={description}></img>        
        </div>
        <div className="article-card-minor__text">
          <div className="article-card-minor__description">
            {description}
          </div>
          <div className="article-card-minor__content">
            {content}
          </div>  
          
        </div>

      </div>

      <div className="article-card-minor__url">
        <a href={url} target="blank">Full article</a>     
      </div>

      <div className="article-card-minor__source">
        Source: {source}
      </div>
      
      <div className="article-card-minor__time">
        {timeSincePublication}
      </div>
      <div>
        <>
        {userID
        ?
        <button onClick={updateSavedArticles}>Save</button>
        : <></>
        }
        </>
      </div>  
    </div>
  )
  }
  


export default ArticleCardMinor