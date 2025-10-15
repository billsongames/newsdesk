import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import { supabase } from '../../api/api';

import SavedArticleCard from "../SavedArticleCard/SavedArticleCard";
import Alert from "../Alert/Alert"

import "./saved-article-container.css"

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
            setAlert({message: "Error retrieving saved articles"})
          } else {
            setSavedArticles(data[0].saved_articles)
            setAlert({message: ""})
          }
        }
    }
    getUserSavedArticles()

  }, [userID])




  return(
    <div className="saved-article-container">
      <div>
        <Alert message={alert.message} />
      </div>

      <div>
        <div>
          {savedArticles.map((article) => (


            <div key={article.title}>
              <SavedArticleCard
                title = {article.title}
                description={article.description}    
                image={article.image_url}
                link={article.link}
                source={article.source}
                pubDate={article.pubDate}
                savedArticles={savedArticles}
                userID={userID}
              />
            </div>
          ))}
        </div> 
        
      </div>
  </div>

  )
}

SavedArticleContainer.propTypes = {
  userID: PropTypes.string.isRequired
}

export default SavedArticleContainer