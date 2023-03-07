import React, { useEffect, useState } from "react";
import { supabase } from '../../api/api';

import SavedArticleCard from "../SavedArticleCard/SavedArticleCard";
import Alert from "../Alert/Alert"

import "./saved-article-container.css"

import { testData } from "../../data/data";
import APITest from "../APITest/APITest";

function SavedArticleContainer( {userID} ) {

  const [savedArticles,setSavedArticles] = useState([])
  const [alert,setAlert] = useState({message: ""})
  

  useEffect(() => {
    async function getUserSavedArticles() {
      if (userID) {
        const {data, error} = await supabase
          .from('users')
          .select('saved_articles')
          .eq('user_id', `${userID}`)
    
          if (error) {
            console.log("error", error)
          } else {
            setSavedArticles(data[0].saved_articles)
          }
        }
    }
    getUserSavedArticles()

  }, [userID], savedArticles)

/*   useEffect(() => {
    writeNewSavedArticles(savedArticles)
  }, [writeNewSavedArticles, savedArticles]) */









  return(
    <>
    {savedArticles.length >0
    ?
    <>
    <div className="saved-article-container">

      <div>
        <div>
          {savedArticles.map((article) => (


            <div key={article.title}>
              <SavedArticleCard
                title = {article.title}
                image={article.imagel}
                url={article.url}
                publishedAt={article.publishedAt}
                savedArticles={savedArticles}
                userID={userID}
              />
            </div>
          ))}
        </div> 
        
      </div>
  </div>
  </>
  :
  <>
    No saved articles I'm afraid
  </>
  }
  </>
  )
}

export default SavedArticleContainer