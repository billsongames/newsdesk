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
            const results=[]
            console.log(data)
            setSavedArticles(data[0].saved_articles.saved_articles)

/*             for (let i=0; i<data[0].saved_articles.saved_articles.length; i++) {

              const title = (data[0].saved_articles.saved_articles[i].title)

              let articleObject = {
                title: title
              }

              results.push(articleObject)
            }
            
            setSavedArticles(results)
            
            
            console.log(results) */
          }
      }
    }
    getUserSavedArticles()

  }, [userID])




  return(
    <div className="saved-article-container">

      <div>
        Saved Articles
      </div>
      <div>

        <div>
          <Alert message={alert.message} />

          {savedArticles.map((article) => (


            <div key={article.title}>
              <SavedArticleCard
                title = {article.title}
                image={article.imagel}
                url={article.article}
                publishedAt={article.publishedAt}
              />
            </div>
          ))}
        </div> 
        
      </div>
  </div>
  )
}

export default SavedArticleContainer