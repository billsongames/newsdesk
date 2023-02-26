import React from "react";
import PropTypes from "prop-types"

function ArticleCardMain(props) {
  const {title, description, content, url, image, source, time} = props

  return(
    <div>
      <div>
        {title}
      </div>

    </div>
  )
  
}

export default ArticleCardMain