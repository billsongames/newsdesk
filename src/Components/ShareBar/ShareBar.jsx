import React from "react";

function ShareBar( props ) {
  const {title, image, url, publishedAt} = props

  const saveArticle = () => {

  }
  

  return(
    <div>
      <div>
        share bar
      </div>
      <div>
        <button onClick={saveArticle()}>
          Save article
        </button>
      </div>
    </div>  
  )
}

export default ShareBar