import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import DateDisplay from './DateDisplay/DateDisplay';
import Navbar from "./NavBar/NavBar"
import ArticleContainer from './ArticleContainer/ArticleContainer';

function App() {

  const [articleCategory, setArticleCategory] = useState("general")
  const handleArticleCategoryChange = (newCategory) => {
    setArticleCategory(newCategory)
  }


  return (
    <BrowserRouter>
      <div className="App">
        <DateDisplay />
        <Navbar onNavBarCategoryChange={handleArticleCategoryChange}/>
        <Routes>
          <Route path = "/" element={<ArticleContainer articleCategory={articleCategory} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
