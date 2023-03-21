import React from "react";
import PropTypes from "prop-types"

import "./alert.css"

function Alert({message} ){
  if(!message) return null  
  
  return(

    <div className="error-message">
      {message}
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string.isRequired
}

export default Alert