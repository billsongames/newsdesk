import React from "react";

function SavedArticleCard(props) {
  const {title, image, url, publishedAt} = props
  return(
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
        <a href={url} target="blank">Full article</a>     
      </div>


      
      <div className="article-card-minor__time">
        Time = {publishedAt}
      </div>

    </div>
  )
}

export default SavedArticleCard