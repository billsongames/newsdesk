import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import DateDisplay from './DateDisplay/DateDisplay';
import Navbar from "./NavBar/NavBar"
import ArticleContainer from './ArticleContainer/ArticleContainer';

function App() {

  const [articleCategory, setArticleCategory] = useState("general")
  const [search, setSearch] = useState("")

  const handleArticleCategoryChange = (newCategory) => {
    setSearch("")
    setArticleCategory(newCategory)
  }

  const handleSearchRequest = (searchQuery) => {
    setArticleCategory("")
    setSearch(searchQuery)
  }


  return (
    <BrowserRouter>
      <div className="App">
        <DateDisplay />
        <Navbar onNavBarCategoryChange={handleArticleCategoryChange} onSearchSubmit={handleSearchRequest} />
        <Routes>
          <Route path = "/" element={<ArticleContainer articleCategory={articleCategory} searchQuery={search}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
