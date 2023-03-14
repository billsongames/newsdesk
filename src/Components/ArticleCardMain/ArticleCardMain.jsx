import React from "react";
import PropTypes from "prop-types"

function ArticleCardMain(props) {
  const {title, description, content, url, image, source, publishedAt} = props

  return(
    <div>
      <div>
        {title}
      </div>

    </div>
  )
  
}

ArticleCardMain.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired
}

export default ArticleCardMain