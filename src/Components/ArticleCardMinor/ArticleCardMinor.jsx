import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types"
import { DarkModeContext } from "../../context/DarkModeContext";

import { supabase } from '../../api/api';
import { tester } from "../../api/api";

import { 
  FacebookShareButton, 
  FacebookIcon, 
  TwitterShareButton, 
  TwitterIcon, 
  WhatsappShareButton, WhatsappIcon,
  RedditShareButton, RedditIcon,
  EmailShareButton, 
  EmailIcon } from "react-share";

import "./article-card-minor.css"
import {themeColors} from "../../themes/themes"

function ArticleCardMinor( {title, description, content, image, url, source, publishedAt, userID} ) {

  const darkMode = useContext(DarkModeContext)

  const [lightShareButtonFillColors, setLightShareButtonFillColors] = useState(["#4267B2", "#00ACED", "#25D366","#FF4500", "#7F7F7F"])
//  const [darkShareButtonFillColors, setDarkShareButtonFillColors] = useState(["#121212", "#121212", "#121212","#121212", "#121212"])
//  const [shareButtonFillColors, setShareButtonFillColors] = useState([])

  
  // FB, TWITTER, WHATSAPP, REDDIT, EMAIL



  const articleJSON = {
    "title": `${title}`,
    "description": `${description}`,
    "content": `${content}`,
    "image_url": `${image}`,
    "article_url": `${url}`,
    "source": `${source}`,
    "publishedAt": `${publishedAt}`
  }
  
  const [alert,setAlert] = useState({message: ""})
  const [savedArticles, setSavedArticles] = useState([])
  const [alreadySaved, setAlreadySaved] = useState(0)


  
  
  useEffect(() => {
    const timer = setTimeout(() => {
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
//      console.log("got saved")

      setAlreadySaved(savedArticles.findIndex(article => 
        article.title === title))

    }, 500)
//  console.log("timer off")
    return () => clearTimeout(timer);
  
    

  }, [userID, savedArticles, title])

  const updateSavedArticles = async() => {
    const newArticle=[articleJSON, ...savedArticles]
    const {data, error} = await supabase

      .from('users')
      .update({
        saved_articles: newArticle
      })
      .eq('user_id', userID)

      if (error) {
        console.log("error", error)
      } 
    }


  let interval = (Date.now() - Date.parse(publishedAt)) / 1000 / 60 / 60;
  let timeSincePublication=""

//MINUTES
  if (interval > 0 && interval < 1) {
    interval = Math.ceil(interval * 60)
    timeSincePublication=`${interval} minutes`
  }  

// HOUR
  if (interval >= 1 && interval < 2) {
    interval = Math.floor(interval)
    timeSincePublication=`${interval} hour`
  } 
  
// HOURS
  if (interval >= 2 && interval < 24) {
    interval = Math.floor(interval)
    timeSincePublication=`${interval} hours`
  } 

// DAY  
  if (interval >= 24 && interval <48) {
    interval=Math.floor(interval/24)
    timeSincePublication=`${interval} day`
  }

  // DAYS  
  if (interval >= 48) {
    interval=Math.floor(interval/24)
    timeSincePublication=`${interval} days`
  }


  return(
    
    <div className="article-card-minor">
      
      <div className="article-card-minor__title">
        <a href={url} target="blank">{title}</a>
      </div>

      <div className="article-card-minor__display">
        <div className="article-card-minor__image">
          <img className="image"src={image} alt={description}></img>        
        </div>
        <div className="article-card-minor__text">
          <div className="article-card-minor__description">
            {description}
          </div>
          <div className="article-card-minor__content">
            {content} <a href={url} target="blank" className="article-card-minor__url">Read full article</a> 
          </div>          
        </div>
      </div>

      <div className="article-card-minor__source">
        Source: {source}
      </div>
      
      <div className="article-card-minor__time">
        {timeSincePublication} ago
      </div>

      <div className="article-buttons">
        <div>
          <>
          {userID && alreadySaved >=0
          ?
          <button className="article-saved-button" onClick={updateSavedArticles} disabled>Article saved</button>
          : <></>
          }
          {userID && alreadySaved === -1
          ?
          <button className="article-save-button" onClick={updateSavedArticles}>Save</button>
          : <></>
          }
          </>
        </div>


{/* FB, TWITTER, WHATSAPP, REDDIT, EMAIL */}
        <div className="social-media">

          {userID
          ?
          <>
          <FacebookShareButton
            url={url}
            quote={title}
            hashtag="#news"            
            >
            <FacebookIcon size={30} round bgStyle={{ fill: lightShareButtonFillColors[0], stroke: 'white', strokeWidth: '0' }} />
          </FacebookShareButton>

          <TwitterShareButton
            url={url}
            quote={title}
            hashtag="#news"
            >
            <TwitterIcon size={30} round bgStyle={{ fill: lightShareButtonFillColors[1], stroke: 'white', strokeWidth: '0' }} />
          </TwitterShareButton>

          <WhatsappShareButton
            url={url}
            quote={title}
            >
            <WhatsappIcon size={30} round bgStyle={{ fill: lightShareButtonFillColors[2], stroke: 'white', strokeWidth: '0' }} />
          </WhatsappShareButton>

          <RedditShareButton
            url={url}
            title={title}
            >           
            <RedditIcon size={30} round bgStyle={{ fill: lightShareButtonFillColors[3], stroke: 'white', strokeWidth: '0' }} />
          </RedditShareButton>  

          <EmailShareButton
            subject={"Check this news article out..."}
            body={`An article from NewsDesk:\n \n${title}`}
            url={url}
            separator={"\n\nLINK: "}
            >
            <EmailIcon size={30} round bgStyle={{ fill: lightShareButtonFillColors[4], stroke: 'white', strokeWidth: '0' }} />
          </EmailShareButton>
          </>
          :
          <div>
            <button className="article-save-button-login-prompt" onClick={updateSavedArticles} disabled>Log in to share and save articles</button>
          </div>
          }
      </div>
    </div>
  </div>
  )  
}    

ArticleCardMinor.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired
}
  
export default ArticleCardMinor