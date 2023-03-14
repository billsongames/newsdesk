import React from "react";
import PropTypes from "prop-types"

import "./account.css"



import SavedArticleContainer from "../SavedArticleContainer/SavedArticleContainer";

function Account({userID}) {

  return(
    <div className="account">
      <h2>Saved articles</h2>

      <div>
        <SavedArticleContainer userID={userID} />
      </div>



    </div>
  )
}

Account.propTypes = {
  userID: PropTypes.string.isRequired
}

export default Account