import React, { useEffect, useState } from "react";
import { supabase } from '../../api/api';

import "./saved-article-card.css"

function SavedArticleCard({title, image, url, publishedAt, savedArticles, userID }) {

  const [indexOfArticle, setIndexofArticle] = useState()
  const [newSavedArticles, setNewSavedArticles] = useState(savedArticles)
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setIndexofArticle(savedArticles.findIndex(article => 
      article.title === title)      )
      }, [title, savedArticles, setIndexofArticle]);

  const removeElement = () => {
    setNewSavedArticles((prev) => prev.splice(indexOfArticle, 1))

    console.log(newSavedArticles)
    writeNewSavedArticles()
    setVisible((prev) => !prev);
  };

  const writeNewSavedArticles = async() => {
    const {data, error} = await supabase
    .from('users')
    .update({
      saved_articles: newSavedArticles
    })
      .eq('user_id', userID)

    if (error) {
      console.log("error", error)
    }  
    
  console.log("deleted from table from card")
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
    <>
    {visible
    ? 
    <div className="saved-article-card">
      
      <div className="saved-article-card__title">
      {title}
      </div>

      <div className="saved-article-card__display">
        <div className="saved-article-card__image">
          <img className="image"src={image} alt={title}></img>        
        </div>
      </div>

      <div className="saved-article-card__url">
        <a href={url} target="blank">Full article</a>     
      </div>
      
      <div className="saved-article-card__time">
        {timeSincePublication}
      </div>
      <div>
        <button onClick={removeElement}>Remove</button>
      </div>
    </div>
    : <></>
    }
  </>
  )
}



export default SavedArticleCard