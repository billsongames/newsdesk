import React from "react";

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

export default Account