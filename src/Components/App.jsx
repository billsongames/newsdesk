import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { supabase } from '../api/api';

import './App.css';

import DateDisplay from './DateDisplay/DateDisplay';
import Navbar from "./NavBar/NavBar"
import ArticleContainer from './ArticleContainer/ArticleContainer';
import Account from "./Account/Account"

function App() {
  
  const [userID, setUserID] = useState()
  const [articleCategory, setArticleCategory] = useState("general")
  const [search, setSearch] = useState("")

  const handleLogin = (response) => {
    setUserID(response.id)
  }

  const handleLogout = () => {
    window.FB.logout()
    setUserID()
  }

  const handleArticleCategoryChange = (newCategory) => {
    setSearch("")
    setArticleCategory(newCategory)
  }

  const handleSearchRequest = (searchQuery) => {
    setArticleCategory("")
    setSearch(searchQuery)
  }

  useEffect(() => {
    async function checkIfUserExists() {
      if (userID) {
        const { count, error } = await supabase
          .from('users')
          .select('user_id', {count: 'exact', head: true})
          .eq('user_id', userID)
  
          if (error) {
            console.log("error", error)
          } else {
          if (count === 0) {
            const { data, error } = await supabase
              .from('users')
              .insert([
                {
                  user_id: userID,
                  saved_articles: []
                }])

              if (error) {
                console.log("error", error)
              } else {
              console.log("insert success")   
              }
            }
          }
      }
    }
    checkIfUserExists()
    
  }, [userID]);


  return (
    <BrowserRouter>
      <div className="App">
        <DateDisplay />
        <Navbar onNavBarCategoryChange={handleArticleCategoryChange} onSearchSubmit={handleSearchRequest} userID={userID} onLogin={handleLogin} onLogout={handleLogout}/>
        <Routes>
          <Route path = "/" element={<ArticleContainer userID={userID} articleCategory={articleCategory} searchQuery={search}/>} />
          <Route path = "/account" element={<Account userID= {userID} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
