import React, { useState } from "react";

import SavedArticleContainer from "../SavedArticleContainer/SavedArticleContainer";

function Account({userID}) {
  return(
    <div>
      <div>
        <h2>Saved articles</h2>
      </div>

      <div>
        <SavedArticleContainer userID={userID} />
      </div>



    </div>
  )
}

export default Account