import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import { supabase } from '../../api/api';

import "./saved-article-card.css"

function SavedArticleCard({ title, description, content, image, url, source, publishedAt, userID, savedArticles }) {

  const [indexOfArticle, setIndexofArticle] = useState()
  const [newSavedArticles, setNewSavedArticles] = useState(savedArticles)
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setIndexofArticle(savedArticles.findIndex(article =>
      article.title === title))
  }, [title, savedArticles, setIndexofArticle]);

  const removeElement = () => {
    setNewSavedArticles((prev) => prev.splice(indexOfArticle, 1))

    console.log(newSavedArticles)
    writeNewSavedArticles()
    setVisible((prev) => !prev);
  };

  const writeNewSavedArticles = async () => {
    const { data, error } = await supabase
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
  let timeSincePublication = ""

  //MINUTES
  if (interval > 0 && interval < 1) {
    interval = Math.ceil(interval * 60)
    timeSincePublication = `${interval} minutes`

    // HOUR
    if (interval >= 1 && interval < 2) {
      interval = Math.floor(interval)
      timeSincePublication = `${interval} hour`
    }
  }
  // HOURS
  if (interval >= 2 && interval < 24) {
    interval = Math.floor(interval)
    timeSincePublication = `${interval} hours`
  }

  // DAY  
  if (interval >= 24 && interval < 48) {
    interval = Math.floor(interval / 24)
    timeSincePublication = `${interval} day`
  }

  // DAYS  
  if (interval >= 48) {
    interval = Math.floor(interval / 24)
    timeSincePublication = `${interval} days`
  }







  return (
    <>
      {visible
        ?
        <div className="saved-article-card">

          <div className="saved-article-card__title">
            <a href={url} classname="saved-article-card__title-url" target="_blank">{title}</a>
          </div>

          <div className="saved-article-card__display">
            <div className="saved-article-card__image">
              <img className="image" src={image} alt={description}></img>
            </div>

            <div className="saved-article-card__text">
              <div className="saved-article-card__description">
                {description}
              </div>
              <div className="saved-article-card__content">
                {content} <a href={url} target="_blank" className="saved-article-card__url">Read full article</a>
              </div>
            </div>
          </div>

          <div className="saved-article-card__source">
            Source: {source}
          </div>

          <div className="saved-article-card__time">
            {timeSincePublication} ago
          </div>

          <div className="saved-article-card__buttons">
            <button className="saved-article-delete-button" onClick={removeElement}>Remove saved article</button>
          </div>
        </div>
        : <></>
      }
    </>
  )
}

SavedArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  savedArticles: PropTypes.array.isRequired
}

export default SavedArticleCard