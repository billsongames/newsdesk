import React, { useState } from "react";

import SavedArticleContainer from "../SavedArticleContainer/SavedArticleContainer";

function Account({userID}) {
  return(
    <div>
      <div>
        Account page
      </div>

      <div>
        <SavedArticleContainer userID={userID} />
      </div>



    </div>
  )
}

export default Account