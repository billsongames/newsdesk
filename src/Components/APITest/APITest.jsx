import React, {useState, useEffect} from 'react';
import { supabase } from '../../api/api';

function APITest() {
  const [userID, setUserID] = useState("Bob");

  useEffect(() => {
    checkIfUserExists()
  }, []);

  const checkIfUserExists = async() => {
    const user='Dennis'
    const { count, error } = await supabase
      .from('users')
      .select('user_id', {count: 'exact', head: true})
      .eq('user_id', user)

      if (error) {
        console.log("error", error)
      } else {
        console.log(count)  
        if (count === 0) {
          writeUserID(user)
        }
      }
  }  

  const getUserID = async() => {
    const { data: userInfo, error } = await supabase
      .from('users')
      .select('user_id')
      .eq('user_id', 'Trevor')

    
      if (error) {
        console.log("error", error)
      } else {
        const userDetails = userInfo.map((user) => user.user_id)
        console.log(`user details => ${userDetails}`)      
        setUserID(userInfo[0].user_id)
      }
  }  

  const writeUserID = async(user) => {
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          user_id: user,
        }])

      if (error) {
        console.log("error", error)
      } else {
        console.log("insert success")   
    }
  }

  const getUserSavedArticles = async() => {
    const {data, error} = await supabase
      .from('users')
      .select('saved_articles')
      .eq('user_id', `${userID}`)

      if (error) {
        console.log("error", error)
      } else {
        console.log(data)   
    }
  }

  const writeUserSavedArticles = async() => {
    const {data, error} = await supabase
      .from('users')
      .select('saved_articles')
      .eq('user_id', 'Trevor')

      if (error) {
        console.log("error", error)
      } else {
        console.log(data)
        const data_info = data
        writenewArray(data_info)
      }
  }

  const writenewArray = async(data_info) => {
    const {data, error} = await supabase
    .from('users')
    .update({
      saved_articles:
      [...data_info[0].saved_articles, {title: 'title_trev3', image_url: 'img_url_trev3', article_url: 'article_url_trev3'}]
    })
      .eq('user_id', 'Trevor')
    }
  

  





  return(
    <>
    <button onClick={getUserID}>get userID</button>
    <button onClick={writeUserID}>write userID</button>
    <button onClick={getUserSavedArticles}>get saved articles</button>
    <button onClick={writeUserSavedArticles}>write saved articles</button>
      UserID = {userID}
    </>
  )
}
export default APITest