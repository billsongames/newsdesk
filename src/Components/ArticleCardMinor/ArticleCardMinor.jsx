import React from "react";
import PropTypes from "prop-types"

import "./article-card-minor.css"

function ArticleCardMinor(props) {
  const {title, description, content, url, image, source, time} = props

  let interval = (Date.now() - Date.parse(time)) / 1000 / 60 / 60;
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

  // DAY  
  if (interval >= 48) {
    interval=Math.floor(interval/24)
    timeSincePublication=`${interval} days`
  }

  return(
    <div className="article-card-minor">
      
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

    </div>
  )
  
}

export default ArticleCardMinor