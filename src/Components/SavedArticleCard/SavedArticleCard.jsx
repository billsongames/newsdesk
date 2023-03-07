import React, { useEffect, useState } from "react";
import { supabase } from '../../api/api';

import ShareBar from "../ShareBar/ShareBar";

function SavedArticleCard(props) {
  const {title, image, url, publishedAt, savedArticles, userID } = props

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








  return(
    <>
    {visible
    ? 
    <div className="article-card-minor">
      
      <div className="article-card-minor__title">
        Title = {title}
      </div>

      <div className="article-card-minor__display">
        <div className="article-card-minor__image">
          <img className="image"src={image} alt={title}></img>        
        </div>
      </div>

      <div className="article-card-minor__url">
        <a href={url} target="blank">Full article = {url}</a>     
      </div>
      
      <div className="article-card-minor__time">
        Time = {publishedAt}
      </div>
      <div>
        {indexOfArticle}
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